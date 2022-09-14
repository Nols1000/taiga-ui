"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25035],{25035:(H,r,i)=>{i.r(r),i.d(r,{ExampleTuiPdfViewerModule:()=>Q});var a=i(12057),h=i(12021),T=i(78697),l=i(90987),m=i(31748),t=i(74788),v=i(88331),P=i(37159),g=i(79121),Z=i(57068),x=i(91211),d=i(76189);function V(e,o){1&e&&(t.TgZ(0,"a",3),t._uU(1," Download "),t.qZA()),2&e&&t.Q6J("href",o.content,t.LSH)}let C=(()=>{class e{constructor(n,s){this.sanitizer=n,this.pdfService=s}show(n){this.pdfService.open(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf"),{label:"Taiga UI",actions:n}).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.H7),t.Y36(m.TuiPdfViewerService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-pdf-viewer-example-1"]],decls:6,vars:0,consts:[[1,"tui-space_bottom-3"],["tuiButton","",3,"click"],["actions",""],["tuiButton","","shape","rounded","size","s","download","",3,"href"]],template:function(n,s){if(1&n){const c=t.EpF();t.TgZ(0,"tui-notification",0),t._uU(1," Note that you need to bypass sanitizer in order to use the URL so make sure you trust it\n"),t.qZA(),t.TgZ(2,"button",1),t.NdJ("click",function(){t.CHM(c);const f=t.MAs(5);return s.show(f)}),t._uU(3," Taiga\n"),t.qZA(),t.YNc(4,V,2,1,"ng-template",null,2,t.W1O)}},directives:[g.L,d.v],encapsulation:2,changeDetection:0}),e})();var u=i(89570),y=i(43190);function E(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(){const p=t.CHM(n).$implicit,f=t.oxw();return p.onClick(f.context)}),t._uU(1),t.qZA()}if(2&e){const n=o.$implicit;t.xp6(1),t.hij(" ",n.text," ")}}let A=(()=>{class e{constructor(n){this.context=n}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.yf))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:1,vars:1,consts:[["tuiButton","","size","s","shape","rounded","class","tui-space_left-3",3,"click",4,"ngFor","ngForOf"],["tuiButton","","size","s","shape","rounded",1,"tui-space_left-3",3,"click"]],template:function(n,s){1&n&&t.YNc(0,E,2,1,"button",0),2&n&&t.Q6J("ngForOf",s.context.data)},directives:[a.sg,d.v],encapsulation:2}),e})();var U=i(46797),M=i(96736),S=i(23184);function w(e,o){1&e&&t._UZ(0,"iframe",2),2&e&&t.Q6J("src",o.ngIf,t.uOi)}function J(e,o){1&e&&t._UZ(0,"tui-loader",3)}let F=(()=>{class e{constructor(n){this.sanitizer=n,this.src$=(0,U.H)(3e3).pipe((0,M.h)(this.sanitizer.bypassSecurityTrustResourceUrl("/assets/media/taiga.pdf")))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(x.H7))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ng-component"]],decls:4,vars:4,consts:[[3,"src",4,"ngIf","ngIfElse"],["loading",""],[3,"src"],["size","xl"]],template:function(n,s){if(1&n&&(t.YNc(0,w,1,1,"iframe",0),t.ALo(1,"async"),t.YNc(2,J,1,0,"ng-template",null,1,t.W1O)),2&n){const c=t.MAs(3);t.Q6J("ngIf",t.lcZ(1,2,s.src$))("ngIfElse",c)}},directives:[a.O5,S.k],pipes:[a.Ov],styles:["[_nghost-%COMP%]{display:flex;height:100%}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:1}"]}),e})(),N=(()=>{class e{constructor(n,s){this.alertService=n,this.pdfService=s}show(){const n={label:"Taiga UI",actions:new u.Al(A),data:[{text:"Sign",onClick:s=>s.completeWith("Document signed")},{text:"Deny",onClick:s=>s.completeWith("Document denied")}]};this.pdfService.open(new u.Al(F),n).pipe((0,y.w)(s=>this.alertService.open(s))).subscribe()}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(l.TuiAlertService),t.Y36(m.TuiPdfViewerService))},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-pdf-viewer-example-2"]],decls:2,vars:0,consts:[["tuiButton","",3,"click"]],template:function(n,s){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.show()}),t._uU(1," Taiga\n"),t.qZA())},directives:[d.v],encapsulation:2,changeDetection:0}),e})();var Y=i(52504);function I(e,o){1&e&&t._UZ(0,"iframe",2)}let O=(()=>{class e{constructor(){this.open=!1}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["tui-pdf-viewer-example-3"]],decls:3,vars:1,consts:[["tuiButton","",3,"click"],[3,"tuiPdfViewer","tuiPdfViewerChange"],["src","assets/media/taiga.pdf",1,"iframe"]],template:function(n,s){1&n&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return s.open=!0}),t._uU(1," Taiga\n"),t.qZA(),t.YNc(2,I,1,0,"ng-template",1),t.NdJ("tuiPdfViewerChange",function(p){return s.open=p})),2&n&&(t.xp6(2),t.Q6J("tuiPdfViewer",s.open))},directives:[d.v,Y.E],styles:[".iframe[_ngcontent-%COMP%]{width:100%;height:100%}"],changeDetection:0}),e})();var z=i(76349);function B(e,o){if(1&e&&(t.TgZ(0,"p"),t._uU(1,"Custom dialog to preview PDF"),t.qZA(),t.TgZ(2,"tui-notification",3),t._uU(3," Keep in mind mobile devices do not support displaying PDFs in iframe, so you need to rely on "),t.TgZ(4,"code"),t._uU(5,"TUI_IS_MOBILE"),t.qZA(),t._uU(6," token to provide suitable alternative behavior "),t.qZA(),t.TgZ(7,"tui-doc-example",4),t._UZ(8,"tui-pdf-viewer-example-1"),t.qZA(),t.TgZ(9,"tui-doc-example",5),t._UZ(10,"tui-pdf-viewer-example-2"),t.qZA(),t.TgZ(11,"tui-doc-example",6),t._UZ(12,"tui-pdf-viewer-example-3"),t.qZA()),2&e){const n=t.oxw();t.xp6(7),t.Q6J("content",n.example1),t.xp6(2),t.Q6J("content",n.example2),t.xp6(2),t.Q6J("content",n.example3)}}function D(e,o){if(1&e&&(t.TgZ(0,"ol",7),t.TgZ(1,"li"),t._uU(2," Import "),t.TgZ(3,"code"),t._uU(4,"TuiPdfViewerModule"),t.qZA(),t._uU(5," to your main app module: "),t._UZ(6,"tui-doc-code",8),t.qZA(),t.TgZ(7,"li"),t._uU(8," Show preview with a service: "),t._UZ(9,"tui-doc-code",9),t.qZA(),t.qZA()),2&e){const n=t.oxw();t.xp6(6),t.Q6J("code",n.exampleModule),t.xp6(3),t.Q6J("code",n.exampleService)}}let L=(()=>{class e{constructor(){this.exampleService=i.e(4914).then(i.t.bind(i,4914,17)),this.exampleModule=i.e(16272).then(i.t.bind(i,16272,17)),this.example1={TypeScript:i.e(56782).then(i.t.bind(i,56782,17)),HTML:i.e(57953).then(i.t.bind(i,57953,17))},this.example2={TypeScript:i.e(67871).then(i.t.bind(i,67871,17)),HTML:i.e(63178).then(i.t.bind(i,63178,17)),"actions-content.component.ts":i.e(19387).then(i.t.bind(i,19387,17)),"pdf-content.component.ts":i.e(28770).then(i.t.bind(i,28770,17))},this.example3={TypeScript:i.e(51079).then(i.t.bind(i,51079,17)),HTML:i.e(44676).then(i.t.bind(i,44676,17)),LESS:i.e(50396).then(i.t.bind(i,50396,17))}}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["example-tui-pdf-viewer"]],decls:3,vars:0,consts:[["header","PdfViewer","package","KIT"],["pageTab",""],["pageTab","Setup"],["status","warning"],["id","base","heading","Basic",3,"content"],["id","component","heading","Component",3,"content"],["id","directive","heading","Directive",3,"content"],[1,"b-demo-steps"],["filename","app.module.ts",3,"code"],["filename","myComponent.component.ts",3,"code"]],template:function(n,s){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,B,13,3,"ng-template",1),t.YNc(2,D,10,2,"ng-template",2),t.qZA())},directives:[v.q,P.n,g.L,Z.f,C,N,O,z.c],encapsulation:2,changeDetection:0}),e})(),Q=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[a.ez,m.TuiPdfViewerModule,l.TuiLoaderModule,l.TuiButtonModule,l.TuiNotificationModule,T.fV,h.Bz.forChild((0,T.Ve)(L))]]}),e})()}}]);