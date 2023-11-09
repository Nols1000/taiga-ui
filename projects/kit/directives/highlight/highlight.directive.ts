import {DOCUMENT} from '@angular/common';
import {
    ComponentFactory,
    ComponentFactoryResolver,
    Directive,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    OnChanges,
    Self,
    ViewContainerRef,
} from '@angular/core';
import {
    svgNodeFilter,
    TuiArrayOrValue,
    TuiDestroyService,
    tuiIsNumber,
    TuiResizeService,
    tuiToArray,
} from '@taiga-ui/cdk';
import {TuiToRegexpPipe} from '@taiga-ui/kit/pipes';
import {Observable, Subject} from 'rxjs';
import {mergeAll, switchMap, takeUntil} from 'rxjs/operators';

import {TuiHighlightComponent} from './highlight.component';

interface TuiHighlightOccurrence {
    index: number;
    length: number;
}

@Directive({
    selector: '[tuiHighlight]',
    providers: [TuiDestroyService, TuiResizeService, TuiToRegexpPipe],
    host: {
        '[style.position]': '"relative"',
        '[style.zIndex]': '0',
    },
})
export class TuiHighlightDirective implements OnChanges {
    private readonly treeWalker = this.doc.createTreeWalker(
        this.el.nativeElement,
        NodeFilter.SHOW_TEXT,
        svgNodeFilter,
    );

    private readonly clearHighlights$ = new Subject<void>();

    private readonly addHighlight$ = new Subject<Observable<never>>();

    private readonly cf: ComponentFactory<TuiHighlightComponent>;

    private patterns: readonly RegExp[] = [];

    /**
     * @deprecated Use --tui-highlight-color instead. Remove in 4.0.
     */
    @Input()
    @HostBinding('style.--tui-highlight-color')
    tuiHighlightColor?: string;

    @Input()
    tuiHighlightMultiOccurrences = false;

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiResizeService) resize$: Observable<unknown>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ViewContainerRef) private readonly vcr: ViewContainerRef,
        @Inject(ComponentFactoryResolver) cfr: ComponentFactoryResolver,
        @Inject(TuiToRegexpPipe) private readonly toRegexpPipe: TuiToRegexpPipe,
    ) {
        resize$.subscribe(() => {
            this.updateHighlights();
        });

        this.clearHighlights$
            .pipe(
                switchMap(() => this.addHighlight$.pipe(mergeAll())),
                takeUntil(destroy$),
            )
            .subscribe();

        this.cf = cfr.resolveComponentFactory(TuiHighlightComponent);
    }

    get tuiHighlight(): TuiArrayOrValue<RegExp | string> {
        return this.patterns;
    }

    @Input()
    set tuiHighlight(value: TuiArrayOrValue<RegExp | string>) {
        this.patterns = tuiToArray(value).map(item => {
            if (item instanceof RegExp) {
                // Only global regexp's can be used in String.prototype.mathAll method
                if (!item.global) {
                    return new RegExp(item.source, `${item.flags}g`);
                }

                return item;
            }

            return this.toRegexpPipe.transform(item, 'gi');
        });
    }

    get match(): boolean {
        const [occurrence] = this.getOccurrences(this.el.nativeElement.textContent);

        return Boolean(occurrence);
    }

    ngOnChanges(): void {
        this.updateHighlights();
    }

    private updateHighlights(): void {
        this.clearHighlights$.next();

        if (!this.match) {
            return;
        }

        const hostRect = this.el.nativeElement.getBoundingClientRect();

        for (const node of this.getNodes()) {
            for (const occurrence of this.getOccurrences(node.nodeValue)) {
                const range = this.createRange(node, occurrence);

                this.addHighlight$.next(
                    this.createHighlight(hostRect, range.getBoundingClientRect()),
                );

                if (!this.tuiHighlightMultiOccurrences) {
                    return;
                }
            }
        }
    }

    private createHighlight(
        hostRect: DOMRect,
        {left, top, width, height}: DOMRect,
    ): Observable<never> {
        return new Observable<never>(() => {
            const ref = this.vcr.createComponent(this.cf);
            const {instance} = ref;

            instance.left = left - hostRect.left;
            instance.top = top - hostRect.top;
            instance.width = width;
            instance.height = height;

            this.el.nativeElement.appendChild(ref.location.nativeElement);

            ref.changeDetectorRef.detectChanges();

            return () => ref.destroy();
        });
    }

    private createRange(node: Node, {index, length}: TuiHighlightOccurrence): Range {
        const range = this.doc.createRange();

        range.setStart(node, index);
        range.setEnd(node, index + length);

        return range;
    }

    private *getOccurrences(source: string | null): Generator<TuiHighlightOccurrence> {
        if (!source || !this.patterns.length) {
            return;
        }

        for (const item of this.patterns) {
            for (const match of source.matchAll(item)) {
                if (tuiIsNumber(match.index) && match.length) {
                    yield {
                        index: match.index,
                        length: match[0].length,
                    };
                }
            }
        }
    }

    private *getNodes(): Generator<Node> {
        this.treeWalker.currentNode = this.el.nativeElement;

        do {
            yield this.treeWalker.currentNode;
        } while (this.treeWalker.nextNode());
    }
}
