(window.webpackJsonp=window.webpackJsonp||[]).push([[1788],{vpXM:function(n,e,t){"use strict";t.r(e),e.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\ninterface User {\n    readonly name: string;\n    readonly surname: string;\n}\n\n@Component({\n    selector: `tui-stringify-content-example1`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n})\nexport class TuiStringifyContentExample1 {\n    value = null;\n\n    readonly items = [\n        {\n            name: `John`,\n            surname: `Cleese`,\n        },\n        {\n            name: `Eric`,\n            surname: `Idle`,\n        },\n    ];\n\n    readonly stringify = ({name, surname}: User): string => `${name} ${surname}`;\n}\n"}}]);