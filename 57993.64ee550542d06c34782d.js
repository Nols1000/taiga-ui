"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[57993],{57993:e=>{e.exports="import {Component, Injector} from '@angular/core';\nimport {FormControl} from '@angular/forms';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\nimport {TUI_EDITOR_EXTENSIONS, TuiEditorTool} from '@taiga-ui/addon-editor';\nimport {TuiDestroyService} from '@taiga-ui/cdk';\n\n@Component({\n    selector: 'tui-editor-preview-images-example-1',\n    templateUrl: './index.html',\n    providers: [\n        TuiDestroyService,\n        {\n            provide: TUI_EDITOR_EXTENSIONS,\n            deps: [Injector],\n            useFactory: (injector: Injector) => [\n                import('@taiga-ui/addon-editor/extensions/starter-kit').then(\n                    ({StarterKit}) => StarterKit,\n                ),\n                import('@taiga-ui/addon-editor/extensions/image-editor').then(\n                    ({createImageEditorExtension}) =>\n                        createImageEditorExtension(injector),\n                ),\n            ],\n        },\n    ],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiEditorPreviewImagesExample1 {\n    readonly builtInTools = [TuiEditorTool.Undo, TuiEditorTool.Img];\n\n    control = new FormControl('');\n\n    constructor() {\n        this.control.patchValue(\n            '<p>Small image</p><img data-type=\"image-editor\" src=\"assets/images/lumberjack.png\" width=\"300\"><p>Big image</p><img data-type=\"image-editor\" src=\"assets/images/big-wallpaper.jpg\" width=\"500\">',\n        );\n    }\n}\n"}}]);