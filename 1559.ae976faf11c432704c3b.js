(window.webpackJsonp=window.webpackJsonp||[]).push([[1559],{srmO:function(e,n,t){"use strict";t.r(n),n.default="import {Component, ElementRef, QueryList, ViewChildren} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_QUERY, setNativeFocused, TuiBooleanHandler, tuiPure} from '@taiga-ui/cdk';\nimport {TuiOptionComponent} from '@taiga-ui/core';\nimport {getWordRange} from '@taiga-ui/kit';\n\nimport {default as avatar} from '!!file-loader!../../../../../assets/images/avatar.jpg';\n\nexport interface User {\n    readonly name: string;\n    readonly avatar: string;\n    readonly login: string;\n}\n\n@Component({\n    selector: `tui-dropdown-selection-example-2`,\n    templateUrl: `./index.html`,\n    styleUrls: [`./index.less`],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownSelectionExample2 {\n    @ViewChildren(TuiOptionComponent, {read: ElementRef})\n    private readonly options: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;\n\n    value = `Type @ to see a dropdown`;\n\n    readonly items = [\n        {\n            name: `Alexander Inkin`,\n            avatar,\n            login: `a.inkin`,\n        },\n        {\n            name: `Roman Sedov`,\n            avatar: ``,\n            login: `r.sedov`,\n        },\n    ];\n\n    get focused(): true | null {\n        return !!this.options.length || null;\n    }\n\n    predicate: TuiBooleanHandler<Range> = range =>\n        getWordRange(range).toString().startsWith(`@`);\n\n    onArrow(event: Event, which: 'first' | 'last'): void {\n        const item = this.options[which];\n\n        if (!item) {\n            return;\n        }\n\n        event.preventDefault();\n        setNativeFocused(item.nativeElement);\n    }\n\n    filterItems(textarea: HTMLTextAreaElement): readonly User[] {\n        const search = this.getCurrentSearch(textarea).replace(`@`, ``);\n\n        return this.getFilteredItems(this.items, search);\n    }\n\n    onClick(login: string, textarea: HTMLTextAreaElement): void {\n        const search = this.getCurrentSearch(textarea);\n        const value = this.value.replace(search, login);\n        const caret = value.indexOf(login) + login.length;\n\n        this.value = value;\n        setNativeFocused(textarea);\n        textarea.value = value;\n        textarea.setSelectionRange(caret, caret);\n    }\n\n    @tuiPure\n    private getFilteredItems(items: readonly User[], search: string): readonly User[] {\n        return items.filter(\n            ({name, login}) => login.startsWith(search) || name.startsWith(search),\n        );\n    }\n\n    private getCurrentSearch(textarea: HTMLTextAreaElement): string {\n        return textarea.value.slice(textarea.value.indexOf(`@`), textarea.selectionStart);\n    }\n}\n"}}]);