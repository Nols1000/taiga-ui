"use strict";(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[43296],{43296:(Dt,p,o)=>{o.r(p),o.d(p,{ExampleTuiInputSliderModule:()=>It});var T=o(12057),u=o(23738),g=o(12021),S=o(78697),_=o(90987),d=o(31748),Z=o(75695),t=o(74788),b=o(82880),J=o(98204),V=o(88331),G=o(37159),X=o(66596),H=o(57068),c=o(44056),m=o(84848);let z=(()=>{class n{constructor(){this.min=5,this.max=20,this.sliderStep=1,this.steps=(this.max-this.min)/this.sliderStep,this.quantum=.01,this.hint=`Dragging slider change input by ${this.sliderStep}.\nBut you can type decimal number which is multiple of ${this.quantum}.`,this.control=new u.NI(6.5)}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-input-slider-example-1"]],decls:2,vars:6,consts:[[1,"control",3,"min","max","steps","quantum","formControl","tuiHintContent"]],template:function(e,i){1&e&&(t.TgZ(0,"tui-input-slider",0),t._uU(1," Select interest rate\n"),t.qZA()),2&e&&t.Q6J("min",i.min)("max",i.max)("steps",i.steps)("quantum",i.quantum)("formControl",i.control)("tuiHintContent",i.hint)},directives:[c.h,u.JJ,u.oH,m.b],styles:[".control[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.control[_ngcontent-%COMP%]{width:100%}}"],changeDetection:0}),n})();var Q=o(79121),Y=o(76189);let W=(()=>{class n{constructor(){this.control=new u.NI(40),this.segments=5,this.max=100,this.min=0}increase(){var e,i;this.control.patchValue(Math.min((null!==(i=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==i?i:0)+20,this.max))}decrease(){var e,i;this.control.patchValue(Math.max((null!==(i=null===(e=this.control)||void 0===e?void 0:e.value)&&void 0!==i?i:0)-20,this.min))}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-input-slider-example-2"]],decls:16,vars:4,consts:[[1,"wrapper"],[3,"min","max","segments","formControl"],[1,"slider-ticks-labels"],["tuiIconButton","","type","button","size","xs","icon","tuiIconDislikeLarge","appearance","icon",3,"click"],["tuiIconButton","","type","button","size","xs","icon","tuiIconLikeLarge","appearance","icon",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-input-slider",1),t._uU(2," Rate your mind "),t.qZA(),t.TgZ(3,"div",2),t.TgZ(4,"span"),t.TgZ(5,"button",3),t.NdJ("click",function(){return i.decrease()}),t.qZA(),t.qZA(),t.TgZ(6,"span"),t._uU(7,"20%"),t.qZA(),t.TgZ(8,"span"),t._uU(9,"40%"),t.qZA(),t.TgZ(10,"span"),t._uU(11,"60%"),t.qZA(),t.TgZ(12,"span"),t._uU(13,"80%"),t.qZA(),t.TgZ(14,"span"),t.TgZ(15,"button",4),t.NdJ("click",function(){return i.increase()}),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("min",i.min)("max",i.max)("segments",5)("formControl",i.control))},directives:[c.h,u.JJ,u.oH,Y.v],styles:[".wrapper[_ngcontent-%COMP%]{width:70%}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),n})();function B(n,l){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=l.$implicit;t.xp6(1),t.Oqu(e)}}let k=(()=>{class n{constructor(){this.control=new u.NI(1e4),this.max=1e6,this.min=0,this.totalSteps=100,this.ticksLabels=["0","10K","100K","500k","1000K"],this.keySteps=[[0,this.min],[25,1e4],[50,1e5],[75,5e5],[100,this.max]]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-input-slider-example-3"]],decls:9,vars:8,consts:[[1,"wrapper"],[3,"min","max","steps","keySteps","formControl","segments"],[1,"slider-ticks-labels"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"tui-input-slider",1),t._uU(2," Not linear growing slider "),t.qZA(),t.TgZ(3,"div",2),t.YNc(4,B,2,1,"span",3),t.qZA(),t.TgZ(5,"p"),t._uU(6," Control value: "),t.TgZ(7,"code"),t._uU(8),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(1),t.Q6J("min",i.min)("max",i.max)("steps",i.totalSteps)("keySteps",i.keySteps)("formControl",i.control)("segments",i.ticksLabels.length-1),t.xp6(3),t.Q6J("ngForOf",i.ticksLabels),t.xp6(4),t.Oqu(i.control.value))},directives:[c.h,u.JJ,u.oH,T.sg],styles:[".wrapper[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.wrapper[_ngcontent-%COMP%]{width:100%}}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.5rem .5rem 0;font:var(--tui-font-text-s);color:var(--tui-text-02)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),n})();var C=o(6707),K=o(34880);function j(n,l){1&n&&t._UZ(0,"tui-svg",3)}function q(n,l){1&n&&t._UZ(0,"tui-svg",4)}let w=(()=>{class n{constructor(){this.userAnswer=2}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-input-slider-example-4"]],decls:6,vars:4,consts:[["tuiHintContent","Select the answer to see how the right custom content changes",1,"control",3,"min","max","tuiTextfieldCustomContent","ngModel","ngModelChange"],["right",""],["wrong",""],["src","tuiIconCheckCircleLarge",1,"success"],["src","tuiIconCloseCircleLarge",1,"error"]],template:function(e,i){if(1&e&&(t.TgZ(0,"tui-input-slider",0),t.NdJ("ngModelChange",function(s){return i.userAnswer=s}),t._uU(1," 2+2=?\n"),t.qZA(),t.YNc(2,j,1,0,"ng-template",null,1,t.W1O),t.YNc(4,q,1,0,"ng-template",null,2,t.W1O)),2&e){const a=t.MAs(3),s=t.MAs(5);t.Q6J("min",0)("max",10)("tuiTextfieldCustomContent",4===i.userAnswer?a:s)("ngModel",i.userAnswer)}},directives:[c.h,m.b,C.B,u.JJ,u.On,K.P],styles:[".control[_ngcontent-%COMP%]{width:50%}@media screen and (max-width: 47.9625em){.control[_ngcontent-%COMP%]{width:100%}}.success[_ngcontent-%COMP%]{color:var(--tui-success-fill)}.error[_ngcontent-%COMP%]{color:var(--tui-error-fill)}"],changeDetection:0}),n})();var E=o(10200),M=o(68874);let tt=(()=>{class n{constructor(){this.max=100,this.min=0,this.smallControl=new u.NI(this.min),this.bigControl=new u.NI(this.max),this.customLabel=({$implicit:e})=>{switch(e){case this.max:return"Digits can't describe my love!";case this.min:return"Just a label for min value";case(this.max-this.min)/2:return"Middle";default:return e}}}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["tui-input-slider-example-5"]],decls:9,vars:10,consts:[[1,"control"],["tuiTextfieldSize","m",3,"min","max","segments","valueContent","tuiTextfieldLabelOutside","formControl"],[1,"slider-ticks-labels"],[1,"control",3,"min","max","valueContent","formControl"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"tui-input-slider",1),t.TgZ(2,"div",2),t._UZ(3,"span"),t.TgZ(4,"span"),t._uU(5,"Custom label"),t.qZA(),t._UZ(6,"span"),t.qZA(),t.qZA(),t.TgZ(7,"tui-input-slider",3),t._uU(8," How much do you love Taiga UI?\n"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("min",i.min)("max",i.max)("segments",2)("valueContent",i.customLabel)("tuiTextfieldLabelOutside",!0)("formControl",i.smallControl),t.xp6(6),t.Q6J("min",i.min)("max",i.max)("valueContent",i.customLabel)("formControl",i.bigControl))},directives:[c.h,E.s,M.x,u.JJ,u.oH],styles:["[_nghost-%COMP%]{display:flex;flex-wrap:wrap;grid-column-gap:3rem;column-gap:3rem;grid-row-gap:1rem;row-gap:1rem}.control[_ngcontent-%COMP%]{flex:1;min-width:17rem}.slider-ticks-labels[_ngcontent-%COMP%]{display:flex;margin:.25rem .5rem 0;font:var(--tui-font-text-s)}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{position:relative;flex:2;text-align:center}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-.5rem;flex:1;text-align:left}.slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-.5rem;flex:1;text-align:right}tui-input-slider[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:calc(var(--tui-radius-m) / 2 + .5rem)}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%], tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%]{margin-left:1rem;margin-right:1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:first-child{left:-1rem}tui-input-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child, tui-range[_ngcontent-%COMP%] + .slider-ticks-labels[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]:last-child{right:-1rem}"],changeDetection:0}),n})();var et=o(31823),nt=o(44051),ot=o(17023),it=o(54218),lt=o(64374),at=o(3729),st=o(76349);function ut(n,l){1&n&&(t.TgZ(0,"p"),t._uU(1," Look into this example to understand difference between input-props "),t.TgZ(2,"code"),t._uU(3,"[steps]"),t.qZA(),t._uU(4," and "),t.TgZ(5,"code"),t._uU(6,"[quantum]"),t.qZA(),t._uU(7," . "),t.qZA())}function rt(n,l){1&n&&(t.TgZ(0,"p"),t._uU(1," Pass "),t.TgZ(2,"a",16),t._uU(3," PolymorpheusContent "),t.qZA(),t._uU(4," into property "),t.TgZ(5,"code"),t._uU(6,"[valueContent]"),t.qZA(),t._uU(7," to create custom label for selected value. "),t.qZA())}function _t(n,l){if(1&n&&(t.TgZ(0,"p"),t.SDv(1,2),t.qZA(),t.TgZ(2,"p"),t.tHW(3,3),t._UZ(4,"a",4),t.N_p(),t.qZA(),t.TgZ(5,"tui-doc-example",5),t.YNc(6,ut,8,0,"ng-template",null,6,t.W1O),t._UZ(8,"tui-input-slider-example-1"),t.qZA(),t.TgZ(9,"tui-doc-example",7),t.TgZ(10,"tui-notification",8),t.tHW(11,9),t._UZ(12,"code"),t.N_p(),t.qZA(),t._UZ(13,"tui-input-slider-example-2"),t.qZA(),t.TgZ(14,"tui-doc-example",10),t.TgZ(15,"dl",11),t.tHW(16,12),t.TgZ(17,"dt"),t._UZ(18,"strong"),t.qZA(),t._UZ(19,"dd"),t.N_p(),t.qZA(),t._UZ(20,"tui-input-slider-example-3"),t.qZA(),t.TgZ(21,"tui-doc-example",13),t._UZ(22,"tui-input-slider-example-4"),t.qZA(),t.TgZ(23,"tui-doc-example",14),t.YNc(24,rt,8,0,"ng-template",null,15,t.W1O),t._UZ(26,"tui-input-slider-example-5"),t.qZA()),2&n){const e=t.MAs(7),i=t.MAs(25),a=t.oxw();t.xp6(5),t.Q6J("content",a.example1)("description",e),t.xp6(4),t.Q6J("content",a.example2),t.xp6(5),t.Q6J("content",a.example3),t.xp6(7),t.Q6J("content",a.example4),t.xp6(2),t.Q6J("content",a.example5)("description",i)}}function ct(n,l){if(1&n&&(t.TgZ(0,"tui-input-slider",28),t._uU(1," Range "),t.qZA()),2&n){const e=t.oxw(2);t.Q6J("formControl",e.control)("min",e.min)("max",e.max)("quantum",e.quantum)("steps",e.steps)("segments",e.segments)("keySteps",e.keySteps)("valueContent",e.valueContent)("prefix",e.prefix)("postfix",e.postfix)("focusable",e.focusable)("readOnly",e.readOnly)("pseudoInvalid",e.pseudoInvalid)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoActive",e.pseudoPressed)("tuiTextfieldCleaner",e.cleaner)("tuiTextfieldCustomContent",e.customContentSelected)("tuiTextfieldIconLeft",e.iconLeft)("tuiTextfieldLabelOutside",e.labelOutside)("tuiTextfieldSize",e.size)("tuiHintContent",e.hintContent)("tuiHintDirection",e.hintDirection)("tuiHintAppearance",e.hintAppearance)}}function dt(n,l){1&n&&(t.tHW(0,29),t._UZ(1,"code"),t.N_p())}function mt(n,l){1&n&&t.SDv(0,30)}function pt(n,l){1&n&&t.SDv(0,31)}function Tt(n,l){1&n&&t.SDv(0,32)}function gt(n,l){1&n&&(t.tHW(0,33),t.TgZ(1,"p"),t._UZ(2,"strong"),t._UZ(3,"code"),t.qZA(),t.N_p())}function St(n,l){1&n&&(t.tHW(0,34),t._UZ(1,"code"),t.N_p())}function Ct(n,l){1&n&&t.SDv(0,35)}function Et(n,l){1&n&&t.SDv(0,36)}function Mt(n,l){1&n&&t.SDv(0,37)}function Ot(n,l){1&n&&t.SDv(0,38)}function Pt(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"tui-doc-demo",17),t.YNc(1,ct,2,24,"ng-template"),t.qZA(),t.TgZ(2,"tui-doc-documentation"),t.YNc(3,dt,2,0,"ng-template",18),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().disabled=a}),t.YNc(4,mt,1,0,"ng-template",19),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().min=a}),t.YNc(5,pt,1,0,"ng-template",20),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().max=a}),t.YNc(6,Tt,1,0,"ng-template",21),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().quantum=a}),t.YNc(7,gt,4,0,"ng-template",22),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().steps=a}),t.YNc(8,St,2,0,"ng-template",23),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().segments=a}),t.YNc(9,Ct,1,0,"ng-template",24),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().keySteps=a}),t.YNc(10,Et,1,0,"ng-template",25),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().valueContent=a}),t.YNc(11,Mt,1,0,"ng-template",26),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().prefix=a}),t.YNc(12,Ot,1,0,"ng-template",27),t.NdJ("documentationPropertyValueChange",function(a){return t.CHM(e),t.oxw().postfix=a}),t.qZA(),t._UZ(13,"inherited-documentation")}if(2&n){const e=t.oxw();t.Q6J("control",e.control),t.xp6(3),t.Q6J("documentationPropertyValue",e.disabled),t.xp6(1),t.Q6J("documentationPropertyValues",e.minVariants)("documentationPropertyValue",e.min),t.xp6(1),t.Q6J("documentationPropertyValues",e.maxVariants)("documentationPropertyValue",e.max),t.xp6(1),t.Q6J("documentationPropertyValues",e.quantumVariants)("documentationPropertyValue",e.quantum),t.xp6(1),t.Q6J("documentationPropertyValue",e.steps),t.xp6(1),t.Q6J("documentationPropertyValue",e.segments),t.xp6(1),t.Q6J("documentationPropertyValues",e.keyStepsVariants)("documentationPropertyValue",e.keySteps),t.xp6(1),t.Q6J("documentationPropertyValues",e.valueContentVariants)("documentationPropertyValue",e.valueContent),t.xp6(1),t.Q6J("documentationPropertyValue",e.prefix),t.xp6(1),t.Q6J("documentationPropertyValue",e.postfix)}}function Nt(n,l){if(1&n&&(t.TgZ(0,"ol",39),t.TgZ(1,"li"),t.TgZ(2,"p"),t.tHW(3,40),t._UZ(4,"code"),t.N_p(),t.qZA(),t._UZ(5,"tui-doc-code",41),t.qZA(),t.TgZ(6,"li"),t.TgZ(7,"p"),t.SDv(8,42),t.qZA(),t._UZ(9,"tui-doc-code",43),t.qZA(),t.qZA()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("code",e.exampleModule),t.xp6(4),t.Q6J("code",e.exampleHtml)}}let ft=(()=>{class n extends b.b{constructor(){super(...arguments),this.exampleModule=o.e(97832).then(o.t.bind(o,97832,17)),this.exampleHtml=o.e(66365).then(o.t.bind(o,66365,17)),this.example1={HTML:o.e(24331).then(o.t.bind(o,24331,17)),TypeScript:o.e(60989).then(o.t.bind(o,60989,17)),LESS:o.e(48482).then(o.t.bind(o,48482,17))},this.example2={HTML:o.e(42677).then(o.t.bind(o,42677,17)),LESS:o.e(29928).then(o.t.bind(o,28947,17)),TypeScript:o.e(1114).then(o.t.bind(o,1114,17))},this.example3={HTML:o.e(70093).then(o.t.bind(o,70093,17)),TypeScript:o.e(32174).then(o.t.bind(o,32174,17)),LESS:o.e(33438).then(o.t.bind(o,33438,17))},this.example4={HTML:o.e(53041).then(o.t.bind(o,53041,17)),TypeScript:o.e(8569).then(o.t.bind(o,8569,17)),LESS:o.e(80184).then(o.t.bind(o,80184,17))},this.example5={HTML:o.e(34856).then(o.t.bind(o,34856,17)),TypeScript:o.e(59388).then(o.t.bind(o,59388,17)),LESS:o.e(13568).then(o.t.bind(o,13568,17))},this.control=new u.NI(0),this.minVariants=[0,1,5,7.77,-10],this.min=this.minVariants[0],this.maxVariants=[10,100,1e4],this.max=this.maxVariants[0],this.segments=1,this.steps=0,this.quantumVariants=[1,.01,.001,1e-4,10,20,100],this.quantum=this.quantumVariants[0],this.sizeVariants=["m","l"],this.size=this.sizeVariants[1],this.prefix="",this.postfix="",this.valueContentVariants=["","TOP SECRET",({$implicit:e})=>e===this.max?"MAX":e,({$implicit:e})=>e===this.min?"MIN":e,({$implicit:e})=>5===e?"FIVE":e],this.valueContent=this.valueContentVariants[0],this.keyStepsVariants=[[[0,0],[50,1e3],[100,1e4]]],this.keySteps=null,this.autocompleteVariants=["off","transaction-amount"],this.autocomplete="",this.customContentVariants=["tuiIconVisaMono","tuiIconMastercardMono"],this.customContentSelected=null}}return n.\u0275fac=function(){let l;return function(i){return(l||(l=t.n5z(n)))(i||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["example-tui-input-slider"]],features:[t._Bn([{provide:J.x,useExisting:(0,t.Gpc)(()=>n)}]),t.qOj],decls:4,vars:0,consts:function(){let l,e,i,a,s,O,P,N,f,I,D,F,x,h,R,L,y,U,A,$,v;return l=$localize`:␟da84b6ac893fbeaa337a2ee175f98e44ea263e53␟4701019213831986187:Component to input a limited range`,e=$localize`:␟0e557432cc61605fc75bbddcf8b886ac4208be05␟6882510303030671599: Number formatting can be customized by using ${"\ufffd#4\ufffd"}:START_LINK: TUI_NUMBER_FORMAT ${"\ufffd/#4\ufffd"}:CLOSE_LINK:`,i=$localize`:␟380ab580741bec31346978e7cab8062d6970408d␟8643289769990675407:Basic`,a=$localize`:␟414bc269fadd0a392ae0e0c30dddc639ecf38308␟4430738955357466377:With slider segments + ticks labels`,s=$localize`:␟792f0f73e29c38e731983b9276ab0ffd1de01441␟6496774841790769025: Use mixin ${"\ufffd#12\ufffd"}:START_TAG_CODE:tui-slider-ticks-labels${"\ufffd/#12\ufffd"}:CLOSE_TAG_CODE: to arrange ticks' labels (it places them strictly below ticks). `,O=$localize`:␟1c2f048f4281e4ee3db216fc44e19c2c36fb4478␟8285530445387044058:KeySteps`,P=$localize`:␟1d46e08d2d025f9bef376d0b06ec92af3afa4c8a␟626346517069880366:${"\ufffd#17\ufffd"}:START_TAG_DT:${"\ufffd#18\ufffd"}:START_TAG_STRONG:Key steps${"\ufffd/#18\ufffd"}:CLOSE_TAG_STRONG:${"\ufffd/#17\ufffd"}:CLOSE_TAG_DT:${"\ufffd#19\ufffd"}:START_TAG_DD:anchor points of non-uniform format between value and position${"\ufffd/#19\ufffd"}:CLOSE_TAG_DD:`,N=$localize`:␟818721a28fa595e0323921b4c1236d050863888a␟1981532857133559654:With right label`,f=$localize`:␟b3392662fa9d7ced0969f5600ace480d8814f9b2␟1831689276170871729:With min and max labels`,I=$localize`:␟f9ccccc44cf2f4f7863a34de68d251cc17ca4072␟616675194705061558: Disabled state (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:formControl.disable()${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,D=$localize`:␟a11028ca3c10ed474edf5dbfa2754e26d3d18cd2␟5313959728516521310: Min value `,F=$localize`:␟e19aee5686b43d533c4778f15c66a64584c493d3␟7525448588827957289: Max value `,x=$localize`:␟f26a39c14b6a1067d75ea1628e8b28ef256949db␟1397462847420435865: Minimum indivisible value `,h=$localize`:␟ec72eae05a138e9b2354cf744ac484f3337a97fc␟4237291911130958356: Number of actual discrete slider steps ${"\ufffd#1\ufffd"}:START_PARAGRAPH: If property is not set (i.e. equals to default value ${"\ufffd#2\ufffd"}:START_TAG_STRONG:0${"\ufffd/#2\ufffd"}:CLOSE_TAG_STRONG: ), number of steps equals ${"\ufffd#3\ufffd"}:START_TAG_CODE:(max - min) / quantum${"\ufffd/#3\ufffd"}:CLOSE_TAG_CODE:${"\ufffd/#1\ufffd"}:CLOSE_PARAGRAPH:`,R=$localize`:␟82c284d033b06d2b8d3981aee455bfaacb6161a0␟6136081272055532664: A number of visual segments (use ${"\ufffd#1\ufffd"}:START_TAG_CODE:1${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: for no ticks) `,L=$localize`:␟1182f923918428fd2bd242abbe914d25c5bcc8b2␟718529244239473960: Key steps to bind slider position and value `,y=$localize`:␟28b10912f5003a70ad541588744588b529765487␟2065100572177810620: A template for custom view of selected value. `,U=$localize`:␟658adf15e902084053811153efcee4ab1a098c01␟889438292388771446: A prefix symbol, like currency `,A=$localize`:␟6cd740eb34e19b39e7b5823575a0a337c2347ba3␟8021237919117600846: A postfix symbol, like currency `,$=$localize`:␟5c5b855d47959ade58e22dd4b99dd7ce3a6b66f9␟4365654195713409511: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiInputSliderModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,v=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`,[["header","InputSlider","package","KIT","type","components"],["pageTab",""],l,e,["tuiLink","","routerLink","/utils/tokens","fragment","number-format"],["id","base","heading",i,3,"content","description"],["stepQuantumDescription",""],["id","slider-segments","heading",a,3,"content"],[1,"tui-space_bottom-8"],s,["id","key-steps","heading",O,3,"content"],[1,"tui-space_bottom-8","tui-space_top-0"],P,["id","right-label","heading",N,3,"content"],["id","min-max-labels","heading",f,3,"content","description"],["valueContentDescription",""],["tuiLink","","href","https://github.com/tinkoff/ng-polymorpheus"],[3,"control"],["documentationPropertyName","","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","min","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","max","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","quantum","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","steps","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","segments","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","keySteps","documentationPropertyMode","input","documentationPropertyType","TuiKeySteps",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","valueContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","prefix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","postfix","documentationPropertyMode","input","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],[3,"formControl","min","max","quantum","steps","segments","keySteps","valueContent","prefix","postfix","focusable","readOnly","pseudoInvalid","pseudoFocus","pseudoHover","pseudoActive","tuiTextfieldCleaner","tuiTextfieldCustomContent","tuiTextfieldIconLeft","tuiTextfieldLabelOutside","tuiTextfieldSize","tuiHintContent","tuiHintDirection","tuiHintAppearance"],I,D,F,x,h,R,L,y,U,A,[1,"b-demo-steps"],$,["filename","myComponent.module.ts",3,"code"],v,["filename","myComponent.template.html",3,"code"]]},template:function(e,i){1&e&&(t.TgZ(0,"tui-doc-page",0),t.YNc(1,_t,27,7,"ng-template",1),t.YNc(2,Pt,14,16,"ng-template",1),t.YNc(3,Nt,10,2,"ng-template",1),t.qZA())},directives:[V.q,G.n,X.V,g.yS,H.f,z,Q.L,W,k,w,tt,et.F,nt.z,ot.B,it.w,c.h,u.JJ,u.oH,lt.b,C.B,at.aR,M.x,E.s,m.b,st.c],encapsulation:2,changeDetection:0}),n})(),It=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[d.TuiInputRangeModule,d.TuiInputSliderModule,Z.f,u.UX,u.u5,T.ez,d.TuiRadioListModule,_.TuiButtonModule,_.TuiHintModule,S.fV,_.TuiLinkModule,_.TuiSvgModule,_.TuiNotificationModule,_.TuiTextfieldControllerModule,g.Bz.forChild((0,S.Ve)(ft))]]}),n})()}}]);