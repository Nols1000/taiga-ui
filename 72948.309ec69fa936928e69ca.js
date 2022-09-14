"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[72948],{72948:(U,c,e)=>{e.r(c),e.d(c,{ExampleTuiValidatorModule:()=>P});var m=e(12057),l=e(23738),E=e(12021),p=e(78697),r=e(36692),g=e(90987),u=e(31748),t=e(74788),C=e(88331),O=e(37159),M=e(57068),D=e(77027),f=e(41360),A=e(50170),S=e(1414),I=e(52219),R=e(50020),V=e(21082),F=e(78750),L=e(45303);function _(o,a){if(1&o&&t._UZ(0,"tui-data-list-wrapper",6),2&o){const n=t.oxw();t.Q6J("items",n.items)}}function N(o,a){if(1&o&&(t.TgZ(0,"tui-input",7),t._uU(1," Contact "),t.qZA()),2&o){const n=t.oxw();t.Q6J("tuiValidator",n.validator)}}function v(o,a){1&o&&(t.TgZ(0,"tui-input-phone",8),t._uU(1,"Contact"),t.qZA())}const x=function(){return{standalone:!0}};let h=(()=>{class o{constructor(){this.items=["Email","Phone"],this.type=this.items[0],this.group=new l.cw({name:new l.NI("",l.kI.required),contact:new l.NI("",l.kI.required)}),this.validator=l.kI.email}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["tui-validator-example-1"]],decls:9,vars:6,consts:[[1,"b-form",3,"formGroup"],["formControlName","name"],[1,"tui-space_vertical-3",3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(n,i){if(1&n&&(t.TgZ(0,"form",0),t.TgZ(1,"tui-input",1),t._uU(2,"Name"),t.qZA(),t.TgZ(3,"tui-select",2),t.NdJ("ngModelChange",function(T){return i.type=T}),t._uU(4," Connection "),t.YNc(5,_,1,1,"tui-data-list-wrapper",3),t.qZA(),t.YNc(6,N,2,1,"tui-input",4),t.YNc(7,v,2,0,"ng-template",null,5,t.W1O),t.qZA()),2&n){const d=t.MAs(8);t.Q6J("formGroup",i.group),t.xp6(3),t.Q6J("ngModelOptions",t.DdM(5,x))("ngModel",i.type),t.xp6(3),t.Q6J("ngIf",i.type===i.items[0])("ngIfElse",d)}},directives:[l._Y,l.JL,l.sg,D.K,f.w,l.JJ,l.u,A.u,S.O,l.On,I.g,m.O5,R.e,V.W,F.y,L.X],encapsulation:2,changeDetection:0}),o})();var $=e(76349);function Z(o,a){if(1&o&&(t.TgZ(0,"p"),t.tHW(1,3),t._UZ(2,"code"),t.N_p(),t.qZA(),t.TgZ(3,"tui-doc-example",4),t._UZ(4,"tui-validator-example-1"),t.qZA()),2&o){const n=t.oxw();t.xp6(3),t.Q6J("content",n.example1)}}function y(o,a){if(1&o&&(t.TgZ(0,"ol",5),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,6),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",7),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,8),t.qZA(),t._UZ(9,"tui-doc-code",9),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(5),t.Q6J("code",n.exampleModule),t.xp6(4),t.Q6J("code",n.exampleHtml)}}let J=(()=>{class o{constructor(){this.exampleModule=e.e(67869).then(e.t.bind(e,48045,17)),this.exampleHtml=e.e(44998).then(e.t.bind(e,44998,17)),this.example1={TypeScript:e.e(77427).then(e.t.bind(e,77427,17)),HTML:e.e(65672).then(e.t.bind(e,65672,17))}}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["example-tui-validator"]],decls:3,vars:0,consts:function(){let a,n,i,d,T;return a=$localize`:␟e9989acc7c8ce4e53c98e725c4ccddb26500a12c␟676188202391799015:Validator`,n=$localize`:␟31386b4456fc6b3d900fca512c4eb3cfd8f4cb03␟3877732538093888358:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiValidator${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: allows set validators for form control on the fly `,i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,d=$localize`:␟882bd28a9551de615e0f39bd9b0d55c6c1b1d514␟2747244216500749928: Import an Angular module for forms and ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiValidatorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: in the same module where you want to use our directive: `,T=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header",a,"package","CDK","type","directives"],["pageTab",""],["pageTab","Setup"],n,["id","base","heading",i,3,"content"],[1,"b-demo-steps"],d,["filename","myComponent.module.ts",3,"code"],T,["filename","myComponent.template.html",3,"code"]]},template:function(n,i){1&n&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,Z,5,1,"ng-template",1),t.YNc(2,y,10,2,"ng-template",2),t.qZA())},directives:[C.q,O.n,M.f,h,$.c],encapsulation:2,changeDetection:0}),o})(),P=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.ez,l.u5,l.UX,u.TuiInputModule,u.TuiSelectModule,r.TuiValidatorModule,u.TuiInputPhoneModule,g.TuiDataListModule,u.TuiDataListWrapperModule,p.fV,E.Bz.forChild((0,p.Ve)(J))]]}),o})()}}]);