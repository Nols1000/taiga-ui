(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{GNRe:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiColorPickerModule",(function(){return Z}));var o=n("An66"),l=n("3kIJ"),r=n("1VvW"),c=n("SVIu"),a=n("vgRF"),i=n("l4xa"),d=n("Qq0t"),u=n("kZht"),p=n("OZlg"),m=n("e0eB"),s=n("iyc4"),f=n("kT+k"),b=n("2wTY");let g=(()=>{class e{constructor(){this.color="#ffdd2d",this.palette=a.s}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-1"]],decls:6,vars:6,consts:[[1,"b-form",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","m",1,"b-form","tui-space_vertical-2",3,"colors","ngModel","ngModelChange"],["tuiTextfieldSize","s",1,"b-form",3,"colors","ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-input-color",0),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](1," Background color\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-input-color",1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](3," Background color\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"tui-input-color",2),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.color=e})),u["\u0275\u0275text"](5," Background color\n"),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("colors",t.palette)("ngModel",t.color))},directives:[f.a,l.NgControlStatus,l.NgModel,b.b],encapsulation:2,changeDetection:0}),e})();var h=n("ENSU"),S=n("q7Lq"),C=n("SUM+"),x=n("zV1d"),y=n("RZBz"),k=n("4hRd");function E(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-color-selector",4),u["\u0275\u0275listener"]("colorChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().color=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("tuiActiveZoneParent",e)("color",n.color)}}let v=(()=>{class e{constructor(e){this.sanitizer=e,this.color="#ffdd2d"}get background(){return this.sanitizer.bypassSecurityTrustStyle(this.color)}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](h.DomSanitizer))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-color-picker-example-2"]],decls:6,vars:6,consts:[["tuiDropdownAlign","left",3,"content","tuiDropdownMaxHeight"],["tuiButton","","type","button","appearance","","automation-id","color-picker__button"],[1,"invert"],["picker",""],[3,"tuiActiveZoneParent","color","colorChange"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-hosted-dropdown",0),u["\u0275\u0275elementStart"](1,"button",1),u["\u0275\u0275elementStart"](2,"span",2),u["\u0275\u0275text"](3,"Color me Kubrick"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,E,1,2,"ng-template",null,3,u["\u0275\u0275templateRefExtractor"])),2&e){const e=u["\u0275\u0275reference"](5);u["\u0275\u0275property"]("content",e)("tuiDropdownMaxHeight",999),u["\u0275\u0275advance"](1),u["\u0275\u0275styleProp"]("background",t.background,u["\u0275\u0275defaultStyleSanitizer"])("color",t.background)}},directives:[S.a,C.a,x.a,y.a,k.a],styles:[".invert[_ngcontent-%COMP%]{color:inherit;filter:invert(1)}"],changeDetection:0}),e})();var M,w=n("EPR0"),z=n("zihb"),T=n("yHor"),P=n("zGJC"),A=n("u8jZ");M=$localize`:␟1be000e44871cc249cdcae83c6a510c1d9abb286␟5718365072316771675: ColorPicker allows to pick a color and its transparency. InputColor and ColorSelector are made with ColorPicker `;const D=["heading",$localize`:␟076f197d00bec1e1eadd0578f26163a0094bb3c6␟1095933938236110379:InputColor`],R=["heading",$localize`:␟c58615eb54ebf60ebca6fd2305cf40aaae4abb01␟4818970173940003343:ColorSelector in dropdown`];function $(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,M),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](3,D),u["\u0275\u0275element"](4,"tui-color-picker-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](6,R),u["\u0275\u0275element"](7,"tui-color-picker-example-2"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2)}}var B,H,N;function _(e,t){1&e&&u["\u0275\u0275i18n"](0,B)}function I(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275element"](1,"tui-color-picker"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-documentation"),u["\u0275\u0275template"](3,_,1,0,"ng-template",4),u["\u0275\u0275elementEnd"]())}function O(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",5),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,H),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,N),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}B=$localize`:␟a4186ff325aca7ae0746ccba7533a67b83b1a7cf␟2059122116780340968: RGBA color tuple `,H=$localize`:␟709fb65f50c77159dca5239e1a3405f04b9b28f0␟5208450876663294588: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiColorPickerModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,N=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let G=(()=>{class e{constructor(){this.exampleModule=n.e(562).then(n.bind(null,"R7JH")),this.exampleHtml=n.e(563).then(n.bind(null,"2eBw")),this.example1={TypeScript:n.e(558).then(n.bind(null,"8uGN")),HTML:n.e(557).then(n.bind(null,"cuvc"))},this.example2={TypeScript:n.e(561).then(n.bind(null,"Epew")),HTML:n.e(559).then(n.bind(null,"42mR")),LESS:n.e(560).then(n.bind(null,"6l/K"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-color-picker"]],decls:4,vars:0,consts:[["header","ColorPicker","package","ADDON-editor","type","components"],["pageTab",""],["id","input",3,"content",6,"heading"],["id","dropdown",3,"content",6,"heading"],["documentationPropertyName","color","documentationPropertyMode","input-output","documentationPropertyType","[number, number, number, number]"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,$,8,2,"ng-template",1),u["\u0275\u0275template"](2,I,4,0,"ng-template",1),u["\u0275\u0275template"](3,O,10,2,"ng-template"),u["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,s.a,g,v,w.a,z.a,T.a,P.a,A.a],encapsulation:2,changeDetection:0}),e})(),Z=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,d.bb,d.zb,a.i,i.bb,d.mb,a.p,d.bc,c.m,r.f.forChild(Object(c.u)(G)),l.FormsModule,a.h]]}),e})()}}]);