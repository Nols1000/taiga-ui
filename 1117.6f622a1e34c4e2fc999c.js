(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{COnf:function(n,t,o){"use strict";o.r(t),t.default='<tui-notification class="tui-space_bottom-3">\n    Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n</tui-notification>\n<button\n    tuiButton\n    (click)="show(actions)"\n>\n    Taiga\n</button>\n<ng-template\n    #actions\n    let-content="content"\n>\n    <a\n        tuiButton\n        shape="rounded"\n        size="s"\n        download\n        [href]="content"\n    >\n        Download\n    </a>\n</ng-template>\n'}}]);