"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[2015],{2015:n=>{n.exports='<tui-hosted-dropdown\n    #dropdown\n    tuiDropdownAlign="left"\n    class="t-wrapper"\n    [content]="youtubeDropdown"\n>\n    <button\n        tuiIconButton\n        type="button"\n        size="s"\n        appearance="icon"\n        automation-id="embed-tool__button"\n        icon="tuiIconCodeLarge"\n        class="tool-button"\n        [pseudoActive]="dropdown.open"\n        [focusable]="dropdown.open"\n    ></button>\n    <ng-template\n        #youtubeDropdown\n        let-activeZone\n    >\n        <div\n            class="embed-tool-content"\n            [tuiActiveZoneParent]="activeZone"\n        >\n            <label class="t-label">\n                <div class="t-label-properties">Embed URL</div>\n                <div class="t-url">\n                    <tui-input-inline\n                        tuiAutoFocus\n                        class="t-input"\n                        [class.t-input_filled]="url"\n                        [(ngModel)]="url"\n                        (keydown.enter)="embedSource(url)"\n                    >\n                        {{ placeholder }}\n                    </tui-input-inline>\n                </div>\n            </label>\n        </div>\n    </ng-template>\n</tui-hosted-dropdown>\n'}}]);