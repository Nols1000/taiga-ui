(window.webpackJsonp=window.webpackJsonp||[]).push([[489],{"8m5U":function(n,t,e){"use strict";e.r(t),t.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\n\n@Component({\n    selector: `tui-calendar-month-example-2`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiMonthExample2 {\n    value: TuiMonthRange | null = null;\n\n    max = new TuiMonth(2021, 7);\n    min = new TuiMonth(2019, 7);\n\n    onMonthClick(month: TuiMonth): void {\n        if (this.value === null || !this.value.isSingleMonth) {\n            this.value = new TuiMonthRange(month, month);\n\n            return;\n        }\n\n        this.value = TuiMonthRange.sort(this.value.from, month);\n    }\n}\n"}}]);