(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{fHYk:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TuiFileLike} from '@taiga-ui/kit';\nimport {Subject} from 'rxjs';\n\n@Component({\n    selector: 'tui-input-files-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiInputFilesExample1 {\n    readonly control = new FormControl();\n    readonly rejectedFiles$ = new Subject<TuiFileLike | null>();\n\n    onReject(file: TuiFileLike) {\n        this.rejectedFiles$.next(file);\n    }\n\n    removeFile() {\n        this.control.setValue(null);\n    }\n\n    clearRejected() {\n        this.rejectedFiles$.next(null);\n    }\n}\n"}}]);