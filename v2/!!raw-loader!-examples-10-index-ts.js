(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["!!raw-loader!-examples-10-index-ts"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/10/index.ts":
/*!************************************************************************************************************************************!*\
  !*** /home/runner/work/taiga-ui/taiga-ui/node_modules/raw-loader/dist/cjs.js!./src/modules/components/select/examples/10/index.ts ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiStringHandler} from '@taiga-ui/cdk';\nimport {tuiItemsHandlersProvider} from '@taiga-ui/kit';\n\ninterface Employee {\n    readonly id: number;\n    readonly name: string;\n    readonly dept: {\n        readonly id: number;\n        readonly title: string;\n    };\n}\n\nconst STRINGIFY_EMPLOYEE: TuiStringHandler<Employee> = (item: Employee) =>\n    `${item.name} (${item.dept.title})`;\n\n@Component({\n    selector: `tui-select-example-10`,\n    templateUrl: `./index.html`,\n    changeDetection,\n    encapsulation,\n    providers: [tuiItemsHandlersProvider({stringify: STRINGIFY_EMPLOYEE})],\n})\nexport class TuiSelectExample10 {\n    readonly testValue = new FormControl(null);\n\n    readonly items: readonly Employee[] = [\n        {id: 42, name: `John Cleese`, dept: {id: 566, title: `Financial`}},\n        {id: 237, name: `Eric Idle`, dept: {id: 560, title: `Staffing`}},\n        {id: 666, name: `Michael Palin`, dept: {id: 566, title: `Financial`}},\n        {id: 123, name: `Terry Gilliam`, dept: {id: 500, title: `Administrative`}},\n        {id: 777, name: `Terry Jones`, dept: {id: 566, title: `Financial`}},\n        {id: 999, name: `Graham Chapman`, dept: {id: 560, title: `Staffing`}},\n    ];\n}\n");

/***/ })

}]);
//# sourceMappingURL=!!raw-loader!-examples-10-index-ts.js.map