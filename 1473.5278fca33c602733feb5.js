(window.webpackJsonp=window.webpackJsonp||[]).push([[1473],{zIec:function(e,n,t){"use strict";t.r(n),n.default="import {Component} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {EMPTY_ARRAY, TuiHandler} from '@taiga-ui/cdk';\n\ninterface TreeNode {\n    readonly text: string;\n    readonly icon?: string;\n    readonly children?: readonly TreeNode[];\n}\n\n@Component({\n    selector: 'tui-tree-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiTreeExample3 {\n    readonly data: TreeNode = {\n        text: 'Topmost',\n        children: [\n            {\n                text: 'Top level 1',\n                icon: 'tuiIconHeart',\n                children: [\n                    {\n                        text: 'Another item',\n                        children: [\n                            {text: 'Next level 1', icon: 'tuiIconHeart'},\n                            {text: 'Next level 2', icon: 'tuiIconHeart'},\n                            {text: 'Next level 3'},\n                        ],\n                    },\n                ],\n            },\n            {text: 'Top level 2'},\n            {\n                text: 'Top level 3',\n                children: [{text: 'Test 1'}, {text: 'Test 2', icon: 'tuiIconHeart'}],\n            },\n        ],\n    };\n\n    readonly handler: TuiHandler<TreeNode, readonly TreeNode[]> = item =>\n        item.children || EMPTY_ARRAY;\n}\n"}}]);