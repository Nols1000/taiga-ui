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
    TuiDestroyService,
    tuiIsNumber,
    tuiIsString,
    TuiResizeService,
} from '@taiga-ui/cdk';
import {Observable, Subject} from 'rxjs';
import {mergeAll, switchMap, takeUntil} from 'rxjs/operators';

import {TuiHighlightComponent} from './highlight.component';

type TuiArrayOrValue<T> = T | readonly T[];

interface TuiHighlightOccurrence {
    index: number;
    length: number;
}

function tuiToArray<T>(value: T | readonly T[]): readonly T[] {
    return Array.isArray(value) ? value : [value];
}

@Directive({
    selector: '[tuiHighlight]',
    providers: [TuiDestroyService, TuiResizeService],
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

    @Input()
    tuiHighlight: TuiArrayOrValue<RegExp | string> = '';

    /**
     * @deprecated Use --tui-highlight-color instead. Remove in 4.0.
     */
    @Input()
    @HostBinding('style.--tui-highlight-color')
    tuiHighlightColor?: string;

    @Input()
    tuiHighlightMultiOccurrences = false;

    @Input()
    tuiHighlightCaseSensitive = false;

    constructor(
        @Inject(DOCUMENT) private readonly doc: Document,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiResizeService) resize$: Observable<unknown>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ViewContainerRef) private readonly vcr: ViewContainerRef,
        @Inject(ComponentFactoryResolver) cfr: ComponentFactoryResolver,
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

        for (const range of this.getRanges()) {
            this.addHighlight$.next(
                this.createHighlight(hostRect, range.getBoundingClientRect()),
            );

            if (!this.tuiHighlightMultiOccurrences) {
                return;
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

    private *getOccurrences(source: string | null): Generator<TuiHighlightOccurrence> {
        if (!source || !this.tuiHighlight) {
            return;
        }

        for (const item of tuiToArray(this.tuiHighlight)) {
            if (tuiIsString(item)) {
                const itemValue = this.tuiHighlightCaseSensitive
                    ? item
                    : item.toLowerCase();
                const sourceValue = this.tuiHighlightCaseSensitive
                    ? source
                    : source.toLowerCase();

                for (
                    let index = sourceValue.indexOf(itemValue);
                    index >= 0;
                    index = sourceValue.indexOf(itemValue, index + 1)
                ) {
                    yield {
                        index,
                        length: itemValue.length,
                    };
                }
            } else {
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
    }

    private *getRanges(): Generator<Range> {
        for (const node of this.getNodes()) {
            for (const {index, length} of this.getOccurrences(node.nodeValue)) {
                const range = this.doc.createRange();

                range.setStart(node, index);
                range.setEnd(node, index + length);

                yield range;
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
