"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[9657],{9657:(Z,R,o)=>{o.r(R),o.d(R,{ExampleTuiRequiredSetterModule:()=>Q});var c=o(12057),s=o(23738),S=o(12021),r=o(78697),D=o(90987),p=o(31748),e=o(74788),C=o(88331),m=o(37159),O=o(64762),g=o(36692);function f(t,n){1&t&&(e.TgZ(0,"span"),e._uU(1,"\u2665"),e.qZA())}class i{constructor(){this.items=[]}set quantity(n){this.items=new Array(n).fill(Math.floor(Math.random()*Math.floor(100)))}}i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["example-tui-required-setter-demo"]],inputs:{quantity:"quantity"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,E){1&n&&e.YNc(0,f,2,0,"span",0),2&n&&e.Q6J("ngForOf",E.items)},directives:[c.sg],encapsulation:2,changeDetection:0}),(0,O.gn)([(0,g.tuiRequiredSetter)(t=>Number.isInteger(t)&&t>=5,"Should be integer number more than min value")],i.prototype,"quantity",null);var M=o(65009),A=o(10383),N=o(76189),U=o(44051),$=o(17023),I=o(76349);function x(t,n){if(1&t){const E=e.EpF();e.TgZ(0,"p"),e.SDv(1,2),e.qZA(),e.TgZ(2,"p"),e.tHW(3,3),e._UZ(4,"code"),e._UZ(5,"code"),e.N_p(),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"p"),e.SDv(8,4),e.qZA(),e._UZ(9,"example-tui-required-setter-demo",5),e.TgZ(10,"tui-input-count",6),e.NdJ("ngModelChange",function(a){return e.CHM(E),e.oxw().quantity=a}),e._uU(11," quantity "),e.qZA(),e.TgZ(12,"button",7),e.NdJ("click",function(){return e.CHM(E),e.oxw().setUndefined()}),e._uU(13," Set undefined "),e.qZA(),e.qZA()}if(2&t){const E=e.oxw();e.xp6(9),e.Q6J("quantity",E.quantity),e.xp6(1),e.Q6J("ngModel",E.quantity)}}function y(t,n){1&t&&e.SDv(0,11)}function h(t,n){1&t&&e.SDv(0,12)}function v(t,n){1&t&&(e.TgZ(0,"p"),e.tHW(1,8),e._UZ(2,"code"),e._UZ(3,"code"),e.N_p(),e.qZA(),e.TgZ(4,"tui-doc-documentation"),e.YNc(5,y,1,0,"ng-template",9),e.YNc(6,h,1,0,"ng-template",10),e.qZA())}function L(t,n){if(1&t&&(e.TgZ(0,"ol",13),e.TgZ(1,"li"),e.TgZ(2,"p"),e.tHW(3,14),e._UZ(4,"code"),e.N_p(),e.qZA(),e._UZ(5,"tui-doc-code",15),e.qZA(),e.qZA()),2&t){const E=e.oxw();e.xp6(5),e.Q6J("code",E.exampleDecorator)}}let P=(()=>{class t{constructor(){this.exampleDecorator=o.e(92029).then(o.t.bind(o,92029,17))}setUndefined(){this.quantity=void 0}}return t.\u0275fac=function(E){return new(E||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["example-tui-required-setter"]],decls:4,vars:0,consts:function(){let n,E,u,a,T,l,d,F;return n=$localize`:␟d72935e6ff64a11259561cf6e2fd9e2038d79f56␟2367293663967371431:RequiredSetter`,E=$localize`:␟95c1055c7445d625ddf1b130f7f49ba1f5734478␟2999749383994622770:Decorator setter @Input`,u=$localize`:␟ad9e2bc19537c8a04f714a5a8819e12a35a46703␟1741815834115405259: Decorator stops ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:undefined${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: values if they were passed into setter input. If it gets ${"[\ufffd#4\ufffd|\ufffd#5\ufffd]"}:START_TAG_CODE:undefined${"[\ufffd/#4\ufffd|\ufffd/#5\ufffd]"}:CLOSE_TAG_CODE: , setter will not be called and it will show an error message about the problem in console in dev mode. `,u=e.Zx4(u),a=$localize`:␟bbd1f9f56a2c3fe7bb73c5fd19c82bb37d867b3f␟1191829810746348448:See console. Min value is 5`,T=$localize`:␟a9bcea955a7d713b61905813ac19969c8b949d5a␟3681048247412483149: You can also pass contract function of type ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:TuiBooleanHandler<T>${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: with the component instance as ${"[\ufffd#2\ufffd|\ufffd#3\ufffd]"}:START_TAG_CODE:this${"[\ufffd/#2\ufffd|\ufffd/#3\ufffd]"}:CLOSE_TAG_CODE: . If check is unsuccessful, it shows an error message about the problem in console in dev mode. `,T=e.Zx4(T),l=$localize`:␟fe033ba03534400a884724a2300c90e5a77f568a␟1057939464540239635: Optional argument, contract function `,d=$localize`:␟ebcfa697b45b5a9b73277d1ce04941b18254fb2f␟6460611501050052701: Arguments for console.error if check is unsuccessful `,F=$localize`:␟aa0c59f743ad0b0bf2fe9edaa3942733037f813b␟5881789180302744425: Add ${"\ufffd#4\ufffd"}:START_TAG_CODE:@tuiRequiredSetter${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: to setter input of your component `,[["header",n,"package","CDK","path","cdk/decorators/required-setter.ts"],["pageTab",""],E,u,a,[3,"quantity"],[1,"tui-space_top-4",3,"ngModel","ngModelChange"],["tuiButton","","type","button",1,"tui-space_top-4","tui-space_bottom-8",3,"click"],T,["documentationPropertyName","assertion","documentationPropertyType","TuiBooleanHandler<T>"],["documentationPropertyName","args","documentationPropertyType","any"],l,d,[1,"b-demo-steps"],F,["filename","myComponent.component.ts",3,"code"]]},template:function(E,u){1&E&&(e.TgZ(0,"tui-doc-page",0),e.YNc(1,x,14,2,"ng-template",1),e.YNc(2,v,7,0,"ng-template",1),e.YNc(3,L,6,1,"ng-template",1),e.qZA())},directives:[C.q,m.n,i,M.E,A.a,s.JJ,s.On,N.v,U.z,$.B,I.c],encapsulation:2,changeDetection:0}),t})(),Q=(()=>{class t{}return t.\u0275fac=function(E){return new(E||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.ez,s.u5,p.TuiInputCountModule,D.TuiButtonModule,r.fV,S.Bz.forChild((0,r.Ve)(P))]]}),t})()}}]);