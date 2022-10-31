(window.webpackJsonp=window.webpackJsonp||[]).push([[313],{"1sdP":function(o,n,t){"use strict";t.r(n),n.default="```ts\nimport {NgModule} from '@angular/core';\nimport {FormsModule, ReactiveFormsModule} from '@angular/forms';\nimport {BrowserModule} from '@angular/platform-browser';\nimport {BrowserAnimationsModule} from '@angular/platform-browser/animations';\nimport {RouterModule} from '@angular/router';\nimport * as ADDON_CHARTS from '@taiga-ui/addon-charts';\nimport * as ADDON_COMMERCE from '@taiga-ui/addon-commerce';\nimport * as ADDON_EDITOR from '@taiga-ui/addon-editor';\nimport * as ADDON_MOBILE from '@taiga-ui/addon-mobile';\nimport * as ADDON_TABLE from '@taiga-ui/addon-table';\nimport * as CDK from '@taiga-ui/cdk';\nimport * as CORE from '@taiga-ui/core';\nimport * as KIT from '@taiga-ui/kit';\nimport {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';\nimport {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';\n\nimport {AppComponent} from './app.component';\n\nconst {TUI_ICONS_PATH, iconsPathFactory} = CORE;\nconst {TUI_SANITIZER} = CDK;\n\n@NgModule({\n  imports: [\n    BrowserModule,\n    BrowserAnimationsModule,\n    FormsModule,\n    ReactiveFormsModule,\n    PolymorpheusModule,\n    RouterModule.forRoot([]),\n    ...tuiPropagateModules(CORE),\n    ...tuiPropagateModules(KIT),\n    ...tuiPropagateModules(CDK),\n    ...tuiPropagateModules(ADDON_EDITOR),\n    ...tuiPropagateModules(ADDON_MOBILE),\n    ...tuiPropagateModules(ADDON_COMMERCE),\n    ...tuiPropagateModules(ADDON_CHARTS),\n    ...tuiPropagateModules(ADDON_TABLE),\n  ],\n  declarations: [AppComponent],\n  bootstrap: [AppComponent],\n  providers: [\n    // A workaround because StackBlitz does not support assets\n    {\n      provide: TUI_ICONS_PATH,\n      useValue: iconsPathFactory('https://taiga-ui.dev/assets/taiga-ui/icons'),\n    },\n    /**\n     * If you use unsafe icons or have kind of WYSISYG editor in your app\n     *\n     * Take a look at: https://github.com/tinkoff/ng-dompurify\n     *\n     * This library implements DOMPurify as Angular Sanitizer or Pipe.\n     * It delegates sanitizing to DOMPurify and supports the same configuration.\n     */\n    {\n      provide: TUI_SANITIZER,\n      useClass: NgDompurifySanitizer,\n    },\n  ],\n})\nexport class AppModule {}\n\n/**\n * Don't use this approach,\n * it's a workaround for stackblitz\n */\nfunction tuiPropagateModules<T>(entryPoint: T) {\n  const modules = [];\n\n  for (const name in entryPoint) {\n    if (name.endsWith('Module')) {\n      modules.push(entryPoint[name]);\n    }\n  }\n\n  return modules;\n}\n```\n"}}]);