(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{daXr:function(n,t,o){"use strict";o.r(t),t.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiMonth, TuiMonthRange} from '@taiga-ui/cdk';\nimport {TuiBooleanHandlerWithContext, TuiMonthContext} from '@taiga-ui/kit';\n\n@Component({\n    selector: 'tui-input-month-range-example-3',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputMonthRangeExample3 {\n    readonly testForm = new FormGroup({\n        testValue: new FormControl(null),\n    });\n\n    readonly disabledItemHandler: TuiBooleanHandlerWithContext<\n        TuiMonth,\n        TuiMonthContext\n    > = (item: TuiMonth, context?: TuiMonthContext) => {\n        return (\n            !!context &&\n            !!context.value &&\n            context.value instanceof TuiMonthRange &&\n            !!context.value.isSingleMonth &&\n            item.month < context.value.from.month + 2\n        );\n    };\n}\n"}}]);