(window.webpackJsonp=window.webpackJsonp||[]).push([[671],{Y1hp:function(n,o,t){"use strict";t.r(o),o.default='<tui-loader [showLoader]="!!(fileIoService.loading$ | async)">\n    <tui-editor\n        new\n        class="editor"\n        [formControl]="control"\n        [tools]="builtInTools"\n        (fileAttached)="attach($event)"\n    ></tui-editor>\n</tui-loader>\n\n<h4>HTML:</h4>\n<tui-editor-socket [content]="control.value || \'\'"></tui-editor-socket>\n\n<h4>Text:</h4>\n<p>{{ control.value }}</p>\n'}}]);