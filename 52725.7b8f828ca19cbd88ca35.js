"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[52725],{52725:(j,g,o)=>{o.r(g),o.d(g,{ExampleTuiRatingModule:()=>Y});var u=o(23738),R=o(12021),c=o(78697),S=o(90987),T=o(31748),e=o(74788),f=o(88331),P=o(37159),A=o(57068),d=o(59837),y=o(76189);let x=(()=>{class n{constructor(){this.rateControl=new u.NI(2),this.rateValue=2}enableOrDisable(){this.rateControl.disabled?this.rateControl.enable():this.rateControl.disable()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-rating-example-1"]],decls:24,vars:9,consts:[[1,"example"],[1,"rating",3,"ngModel","ngModelChange"],[1,"rating",3,"readOnly","ngModel","ngModelChange"],[1,"rating",3,"disabled","ngModel","ngModelChange"],[1,"rating",3,"formControl"],["tuiButton","","type","button","size","xs",1,"example",3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2"),e._uU(2,"Template Driven"),e.qZA(),e.TgZ(3,"p"),e.TgZ(4,"b"),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"tui-rating",1),e.NdJ("ngModelChange",function(i){return a.rateValue=i}),e.qZA(),e.TgZ(7,"p"),e.TgZ(8,"b"),e._uU(9,"Read only"),e.qZA(),e.qZA(),e.TgZ(10,"tui-rating",2),e.NdJ("ngModelChange",function(i){return a.rateValue=i}),e.qZA(),e.TgZ(11,"p"),e.TgZ(12,"b"),e._uU(13,"Disabled"),e.qZA(),e.qZA(),e.TgZ(14,"tui-rating",3),e.NdJ("ngModelChange",function(i){return a.rateValue=i}),e.qZA(),e.qZA(),e.TgZ(15,"div",0),e.TgZ(16,"h2"),e._uU(17,"Reactive Forms / Disabled"),e.qZA(),e.TgZ(18,"p"),e.TgZ(19,"b"),e._uU(20),e.qZA(),e.qZA(),e._UZ(21,"tui-rating",4),e.qZA(),e.TgZ(22,"button",5),e.NdJ("click",function(){return a.enableOrDisable()}),e._uU(23),e.qZA()),2&t&&(e.xp6(5),e.hij("value = ",a.rateValue,""),e.xp6(1),e.Q6J("ngModel",a.rateValue),e.xp6(4),e.Q6J("readOnly",!0)("ngModel",a.rateValue),e.xp6(4),e.Q6J("disabled",!0)("ngModel",a.rateValue),e.xp6(6),e.hij("value = ",null==a.rateControl?null:a.rateControl.value,""),e.xp6(1),e.Q6J("formControl",a.rateControl),e.xp6(2),e.hij(" ",null!=a.rateControl&&a.rateControl.disabled?"enable":"disable"," form control\n"))},directives:[d.x,u.JJ,u.On,u.oH,y.v],styles:[".example[_ngcontent-%COMP%]{margin-bottom:.5rem}.rating[_ngcontent-%COMP%]{color:var(--tui-accent)}"],changeDetection:0}),n})(),h=(()=>{class n{constructor(){this.firstRate=5,this.secondRate=3,this.thirdRate=4}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["tui-rating-example-2"]],decls:18,vars:7,consts:[[1,"example"],[1,"yellow",3,"ngModel","ngModelChange"],[1,"pink",3,"max","ngModel","ngModelChange"],["iconNormal","tuiIconHeart","iconFilled","tuiIconHeartFilledLarge",1,"red",3,"ngModel","ngModelChange"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h2"),e._uU(2,"Custom colors"),e.qZA(),e.TgZ(3,"p"),e.TgZ(4,"b"),e._uU(5),e.qZA(),e.qZA(),e.TgZ(6,"tui-rating",1),e.NdJ("ngModelChange",function(i){return a.firstRate=i}),e.qZA(),e.TgZ(7,"p"),e.TgZ(8,"b"),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"tui-rating",2),e.NdJ("ngModelChange",function(i){return a.secondRate=i}),e.qZA(),e.qZA(),e.TgZ(11,"div",0),e.TgZ(12,"h2"),e._uU(13,"Custom icons"),e.qZA(),e.TgZ(14,"p"),e.TgZ(15,"b"),e._uU(16),e.qZA(),e.qZA(),e.TgZ(17,"tui-rating",3),e.NdJ("ngModelChange",function(i){return a.thirdRate=i}),e.qZA(),e.qZA()),2&t&&(e.xp6(5),e.hij("Yellow / value = ",a.firstRate,""),e.xp6(1),e.Q6J("ngModel",a.firstRate),e.xp6(3),e.hij("10 stars / value = ",a.secondRate,""),e.xp6(1),e.Q6J("max",10)("ngModel",a.secondRate),e.xp6(6),e.hij("Controlled / value = ",a.thirdRate,""),e.xp6(1),e.Q6J("ngModel",a.thirdRate))},directives:[d.x,u.JJ,u.On],styles:[".example[_ngcontent-%COMP%]{margin-bottom:.5rem}.yellow[_ngcontent-%COMP%]{color:#faaf00}.pink[_ngcontent-%COMP%]{color:pink}.red[_ngcontent-%COMP%]{color:var(--tui-negative)}.label[_ngcontent-%COMP%]{color:#000;font-weight:bold;cursor:pointer;margin-bottom:.5rem}"],changeDetection:0}),n})();var D=o(31823),I=o(44051),Z=o(17023),F=o(76349);function G(n,l){if(1&n&&(e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"tui-doc-example",3),e._UZ(3,"tui-rating-example-1"),e.qZA(),e.TgZ(4,"tui-doc-example",4),e._UZ(5,"tui-rating-example-2"),e.qZA()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("content",t.example1),e.xp6(2),e.Q6J("content",t.example2)}}function $(n,l){if(1&n&&(e.TgZ(0,"tui-rating",13,14),e.TgZ(2,"p",15),e._uU(3),e.qZA(),e.qZA()),2&n){const t=e.MAs(1),a=e.oxw(2);e.Udp("color",a.color),e.Q6J("min",a.min)("max",a.max)("readOnly",a.readOnly)("iconNormal",a.iconNormal)("iconFilled",a.iconFilled)("formControl",a.control),e.xp6(3),e.hij("Current rating - ",t.value,"")}}function J(n,l){1&n&&e.SDv(0,16)}function L(n,l){1&n&&(e.tHW(0,17),e._UZ(1,"code"),e.N_p())}function V(n,l){1&n&&e.SDv(0,18)}function v(n,l){1&n&&e.SDv(0,19)}function U(n,l){1&n&&e.SDv(0,20)}function b(n,l){1&n&&e.SDv(0,21)}function X(n,l){1&n&&e.SDv(0,22)}function Q(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tui-doc-demo",5),e.YNc(1,$,4,9,"ng-template"),e.qZA(),e.TgZ(2,"tui-doc-documentation"),e.YNc(3,J,1,0,"ng-template",6),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().readOnly=_}),e.YNc(4,L,2,0,"ng-template",7),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().disabled=_}),e.YNc(5,V,1,0,"ng-template",8),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().min=_}),e.YNc(6,v,1,0,"ng-template",9),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().max=_}),e.YNc(7,U,1,0,"ng-template",10),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().color=_}),e.YNc(8,b,1,0,"ng-template",11),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().iconNormal=_}),e.YNc(9,X,1,0,"ng-template",12),e.NdJ("documentationPropertyValueChange",function(_){return e.CHM(t),e.oxw().iconFilled=_}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("control",t.control),e.xp6(3),e.Q6J("documentationPropertyValue",t.readOnly),e.xp6(1),e.Q6J("documentationPropertyValue",t.disabled),e.xp6(1),e.Q6J("documentationPropertyValue",t.min),e.xp6(1),e.Q6J("documentationPropertyValue",t.max),e.xp6(1),e.Q6J("documentationPropertyValues",t.colorVariants)("documentationPropertyValue",t.color),e.xp6(1),e.Q6J("documentationPropertyValues",t.iconNormalVariants)("documentationPropertyValue",t.iconNormal),e.xp6(1),e.Q6J("documentationPropertyValues",t.iconFilledVariants)("documentationPropertyValue",t.iconFilled)}}function z(n,l){if(1&n&&(e.TgZ(0,"ol",23),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,24),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",25),e.qZA(),e.TgZ(6,"li"),e.TgZ(7,"p"),e.SDv(8,26),e.qZA(),e._UZ(9,"tui-doc-code",27),e.qZA(),e.TgZ(10,"li"),e.TgZ(11,"p"),e.tHW(12,28),e._UZ(13,"code"),e.N_p(),e.qZA(),e._UZ(14,"tui-doc-code",25),e.qZA(),e.qZA()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("code",t.exampleModule),e.xp6(4),e.Q6J("code",t.exampleHtml),e.xp6(5),e.Q6J("code",t.exampleOptions)}}let H=(()=>{class n{constructor(t){this.options=t,this.exampleModule=o.e(75184).then(o.t.bind(o,75184,17)),this.exampleHtml=o.e(33311).then(o.t.bind(o,33311,17)),this.exampleOptions=o.e(39277).then(o.t.bind(o,39277,17)),this.example1={TypeScript:o.e(81568).then(o.t.bind(o,81568,17)),HTML:o.e(42102).then(o.t.bind(o,42102,17)),LESS:o.e(76205).then(o.t.bind(o,76205,17))},this.example2={TypeScript:o.e(64768).then(o.t.bind(o,64768,17)),HTML:o.e(44045).then(o.t.bind(o,44045,17)),LESS:o.e(74281).then(o.t.bind(o,74281,17))},this.control=new u.NI(5),this.colorVariants=["var(--tui-accent)","#faaf00","pink"],this.color=this.colorVariants[0],this.iconNormalVariants=[this.options.iconNormal,"tuiIconStarLarge","tuiIconStar"],this.iconNormal=this.iconNormalVariants[0],this.iconFilledVariants=[this.options.iconFilled,"tuiIconStarFilledLarge","tuiIconStarFilled"],this.iconFilled=this.iconFilledVariants[0],this.readOnly=!1,this.min=0,this.max=10}get disabled(){return this.control.disabled}set disabled(t){t?this.control.disable():this.control.enable()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.TUI_RATING_OPTIONS))},n.\u0275cmp=e.Xpm({type:n,selectors:[["example-rating"]],decls:4,vars:0,consts:function(){let l,t,a,_,i,m,p,s,C,M,N,E,O;return l=$localize`:␟15d37675411aa790a541bc61db9206703bdcf9dc␟8038373266670764377:A rating indicates user interest in content`,t=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟788b57cb07c04232d638748cd49226ff9e13f8ca␟5793544987096948211:Customization`,_=$localize`:␟88dd77c990e5f7fb83a3e3e006bb58f82260ca7e␟2592823355336045770: Component is read only `,i=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,m=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,p=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,s=$localize`:␟86fac287d5fc170cd2f42cec4d6514a242bfdb90␟5719264831238487534: Custom color `,C=$localize`:␟f6d7f954fa44bede7c614f7ee9c87868e9da5e54␟8116633360965675389: Custom empty icon `,M=$localize`:␟325712b725a5750b694f3d2be18cd129875d2de2␟5007412935023596511: Custom filled icon `,N=$localize`:␟bc0e5cc1e22dbad6a53070d2b82c6cbf15e736c7␟2577187969089396534: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiRatingModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,E=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,O=$localize`:␟212b1c22741729bf15053b24e6148ccd3c5971b6␟8830208626285764001: Optionally use the ${"\ufffd#13\ufffd"}:START_TAG_CODE:TUI_RATING_OPTIONS${"\ufffd/#13\ufffd"}:CLOSE_TAG_CODE: injection token to override the default options for the component. `,[["header","Rating","package","KIT","type","components"],["pageTab",""],l,["id","base","heading",t,3,"content"],["id","colors","heading",a,3,"content"],[3,"control"],["documentationPropertyMode","input","documentationPropertyType","boolean","documentationPropertyName","readOnly",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyType","number","documentationPropertyMode","input","documentationPropertyName","min",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyType","number","documentationPropertyMode","input","documentationPropertyName","max",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","style.color",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","iconNormal",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyType","string","documentationPropertyName","iconFilled",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[3,"min","max","readOnly","iconNormal","iconFilled","formControl"],["rating",""],[1,"label"],_,i,m,p,s,C,M,[1,"b-demo-steps"],N,["filename","myComponent.module.ts",3,"code"],E,["filename","myComponent.template.html",3,"code"],O]},template:function(t,a){1&t&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,G,6,2,"ng-template",1),e.YNc(2,Q,10,11,"ng-template",1),e.YNc(3,z,15,3,"ng-template",1),e.qZA())},directives:[f.q,P.n,A.f,x,h,D.F,I.z,Z.B,d.x,u.JJ,u.oH,F.c],styles:[".label[_ngcontent-%COMP%]{cursor:pointer;margin-bottom:.5rem}"],changeDetection:0}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[u.u5,T.TuiRatingModule,S.TuiButtonModule,c.fV,u.UX,R.Bz.forChild((0,c.Ve)(H))]]}),n})()}}]);