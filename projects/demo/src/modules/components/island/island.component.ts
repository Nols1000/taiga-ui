import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core';

const content = `<div class="tui-island__content">
    <figure class="tui-island__figure">
        <div class="some-figure"></div>
    </figure>
    <div>
        <h3 class="tui-island__title">Some heading</h3>
        <p class="tui-island__paragraph">Some information</p>
        <p class="tui-island__paragraph tui-island__paragraph_button">
            <button
                appearance="secondary"
                tuiButton
                type="button"
                [size]="size"
            >
                Button
            </button>
        </p>
    </div>
</div>`;

@Component({
    selector: 'example-island',
    templateUrl: './island.template.html',
    styleUrls: ['./island.style.less'],
    changeDetection,
})
export class ExampleTuiIslandComponent {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    hoverable = false;

    readonly textAlignVariants = ['left', 'right', 'center'] as const;

    textAlign: 'center' | 'left' | 'right' = this.textAlignVariants[0];

    readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    size: TuiSizeL | TuiSizeS = this.sizeVariants[0];

    readonly content = content;
}
