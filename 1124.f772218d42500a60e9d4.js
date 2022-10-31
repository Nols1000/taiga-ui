(window.webpackJsonp=window.webpackJsonp||[]).push([[1124],{WFEy:function(e,n,i){"use strict";i.r(n),n.default="import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {PreviewDialogService} from '@taiga-ui/addon-preview';\nimport {clamp, TuiSwipe} from '@taiga-ui/cdk';\nimport {TuiAlertService, TuiDialogContext} from '@taiga-ui/core';\nimport {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';\n\n@Component({\n    selector: `tui-preview-example-1`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPreviewExample1 {\n    @ViewChild(`preview`)\n    readonly preview?: TemplateRef<TuiDialogContext<void>>;\n\n    @ViewChild(`contentSample`)\n    readonly contentSample?: TemplateRef<Record<string, unknown>>;\n\n    index = 0;\n    length = 2;\n\n    constructor(\n        @Inject(PreviewDialogService)\n        private readonly previewService: PreviewDialogService,\n        @Inject(TuiAlertService)\n        private readonly alertService: TuiAlertService,\n    ) {}\n\n    get title(): string {\n        return this.index === 0 ? `Transaction cert.jpg` : `My face.jpg`;\n    }\n\n    get previewContent(): PolymorpheusContent {\n        return this.index === 0 && this.contentSample\n            ? this.contentSample\n            : `http://marsibarsi.me/images/1x1small.jpg`;\n    }\n\n    show(): void {\n        this.previewService.open(this.preview || ``).subscribe({\n            complete: () => console.info(`complete`),\n        });\n    }\n\n    download(): void {\n        this.alertService.open(`Downloading...`).subscribe();\n    }\n\n    delete(): void {\n        this.alertService.open(`Deleting...`).subscribe();\n    }\n\n    onSwipe(swipe: TuiSwipe): void {\n        if (swipe.direction === `left`) {\n            this.index = clamp(this.index + 1, 0, this.length - 1);\n        }\n\n        if (swipe.direction === `right`) {\n            this.index = clamp(this.index - 1, 0, this.length - 1);\n        }\n    }\n}\n"}}]);