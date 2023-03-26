(window.webpackJsonp=window.webpackJsonp||[]).push([[1455],{tJWD:function(e,t,n){"use strict";n.r(t),t.default="import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'tui-tooltip-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTooltipExample1 {\n    loader = true;\n\n    text = '';\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(2000)\n            .pipe(watch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.loader = !this.loader;\n                this.text = this.text ? '' : 'Error 502: Bad Gateway';\n            });\n    }\n}\n"}}]);