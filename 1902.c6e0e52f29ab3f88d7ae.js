(window.webpackJsonp=window.webpackJsonp||[]).push([[1902],{"0pln":function(n,o,e){"use strict";e.r(o),o.default="import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {formatPhone} from '@taiga-ui/core';\n\n@Component({\n    selector: `tui-format-example-5`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl(`+79991234567`),\n        countryCode: new FormControl(`+7`),\n        phoneMask: new FormControl(`### ###-##-##`),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n"}}]);