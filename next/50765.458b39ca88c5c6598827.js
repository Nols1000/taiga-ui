(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[50765],{50765:(e,t,o)=>{o.r(t),o.d(t,{ExampleTuiInputCardGroupedModule:()=>oe});var n=o(12057),r=o(23738),a=o(33982),c=o(63881),i=o(52404),u=o(64862),d=o(26485),s=o(89570),l=o(75695),p=o(74788),m=o(4797),g=o(98204),h=o(57750),f=o(43560),b=o(93525),x=o(33772),y=o(72602),Z=o(36951),C=o(7114);const T=function(){return[]};let v=(()=>{class e{constructor(){this.control=new r.NI(null,[c.tuiCardNumberValidator,c.tuiCardExpireValidator])}get card(){const e=this.control.value?this.control.value.card:"";if(e.length<7)return null;switch(e.charAt(0)){case"0":case"1":case"2":return"https://ng-web-apis.github.io/dist/assets/images/common.svg";case"3":case"4":case"5":return"https://ng-web-apis.github.io/dist/assets/images/geolocation.svg";case"6":case"7":return"https://ng-web-apis.github.io/dist/assets/images/intersection-observer.svg";default:return"https://ng-web-apis.github.io/dist/assets/images/payment-request.svg"}}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-card-grouped-example-1"]],decls:4,vars:9,consts:[[3,"cardSrc","formControl"],[3,"error","formControl"]],template:function(e,t){1&e&&(p._UZ(0,"tui-input-card-grouped",0),p._UZ(1,"tui-error",1),p.ALo(2,"async"),p.ALo(3,"tuiFieldError")),2&e&&(p.Q6J("cardSrc",t.card)("formControl",t.control),p.xp6(1),p.Q6J("error",p.lcZ(2,4,p.lcZ(3,6,p.DdM(8,T))))("formControl",t.control))},directives:[y.c,r.JJ,r.oH,Z.v],pipes:[n.Ov,C.A],encapsulation:2,changeDetection:0}),e})();var _=o(52219),P=o(20933),w=o(35065),A=o(34880),M=o(68661),J=o(88135);function N(e,t){if(1&e&&(p.TgZ(0,"button",9),p._UZ(1,"tui-thumbnail-card",10),p.TgZ(2,"label",11),p._uU(3),p.qZA(),p.TgZ(4,"span"),p._uU(5),p.qZA(),p.qZA()),2&e){const e=t.$implicit;p.Q6J("value",e),p.xp6(1),p.Q6J("cardNumber",e.card.slice(-4)),p.xp6(1),p.Q6J("tuiLabel",e.bank),p.xp6(1),p.hij(" ",e.name," "),p.xp6(2),p.Oqu(e.card.slice(-5))}}function U(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-data-list",4),p.NdJ("keydown.escape",(function(){p.CHM(e);const t=p.oxw(),o=p.MAs(2);return t.onEsc(o)})),p.TgZ(1,"button",5),p.NdJ("click",(function(){p.CHM(e);const t=p.oxw(),o=p.MAs(2);return t.onClick(o)})),p._UZ(2,"tui-svg",6),p.TgZ(3,"span",7),p._uU(4,"New card"),p.qZA(),p.qZA(),p.YNc(5,N,6,5,"button",8),p.qZA()}if(2&e){const e=p.oxw();p.xp6(5),p.Q6J("ngForOf",e.items)}}let V=(()=>{class e{constructor(){this.items=[{card:"4321***1234",expire:"12/21",name:"Salary",bank:"Tinkoff"},{card:"8765***5678",expire:"03/42",cvc:"***",name:"Tips",bank:"Bank of America"},{card:"4200***9000",name:"Dogecoins",bank:"Crypto"}],this.card=new r.cw({meta:new r.NI(this.items[0])})}onClick(e){var t;null===(t=this.card.get("meta"))||void 0===t||t.setValue(null),this.onEsc(e)}onEsc(e){var t;null===(t=e.nativeFocusableElement)||void 0===t||t.focus(),e.open=!1}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-card-grouped-example-2"]],decls:4,vars:1,consts:[[3,"formGroup"],["formControlName","meta"],["component",""],["size","l",3,"keydown.escape",4,"tuiDataList"],["size","l",3,"keydown.escape"],["tuiOption","",3,"click"],["src","tuiIconPlus",1,"new"],[1,"label"],["tuiOption","",3,"value",4,"ngFor","ngForOf"],["tuiOption","",3,"value"],["size","s",1,"card",3,"cardNumber"],[1,"label",3,"tuiLabel"]],template:function(e,t){1&e&&(p.TgZ(0,"form",0),p.TgZ(1,"tui-input-card-grouped",1,2),p.YNc(3,U,6,1,"tui-data-list",3),p.qZA(),p.qZA()),2&e&&p.Q6J("formGroup",t.card)},directives:[r._Y,r.JL,r.sg,y.c,r.JJ,r.u,_.g,P.q,w.v,A.P,n.sg,M._,J.A],styles:[".new[_ngcontent-%COMP%]{width:2rem;height:1.5rem;border-radius:4px;background:var(--tui-secondary);color:var(--tui-link)}.card[_ngcontent-%COMP%]{background:var(--tui-support-01)}button[_ngcontent-%COMP%]:nth-child(4)   .card[_ngcontent-%COMP%]{background:var(--tui-support-05)}.label[_ngcontent-%COMP%]{margin:0 auto 0 .75rem}"],changeDetection:0}),e})();function S(e,t){1&e&&p._UZ(0,"img",4)}const q=function(){return[]};let O=(()=>{class e{constructor(){this.control=new r.NI(null,[c.tuiCardNumberValidator,c.tuiCardExpireValidator])}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-card-grouped-example-3"]],decls:6,vars:9,consts:[[3,"cardSrc","formControl"],["polymorpheus",""],["template","polymorpheus"],[3,"error","formControl"],["alt","custom-icon","height","32","src","https://ng-web-apis.github.io/dist/assets/images/web-api.svg","width","32"]],template:function(e,t){if(1&e&&(p._UZ(0,"tui-input-card-grouped",0),p.YNc(1,S,1,0,"ng-template",1,2,p.W1O),p._UZ(3,"tui-error",3),p.ALo(4,"async"),p.ALo(5,"tuiFieldError")),2&e){const e=p.MAs(2);p.Q6J("cardSrc",e)("formControl",t.control),p.xp6(3),p.Q6J("error",p.lcZ(4,4,p.lcZ(5,6,p.DdM(8,q))))("formControl",t.control)}},directives:[y.c,r.JJ,r.oH,s.GL,Z.v],pipes:[n.Ov,C.A],encapsulation:2,changeDetection:0}),e})(),L=(()=>{class e{constructor(){this.control=new r.NI({card:"",expire:"",cvc:"***"})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-card-grouped-example-4"]],decls:1,vars:1,consts:[[3,"formControl"]],template:function(e,t){1&e&&p._UZ(0,"tui-input-card-grouped",0),2&e&&p.Q6J("formControl",t.control)},directives:[y.c,r.JJ,r.oH],encapsulation:2,changeDetection:0}),e})();var E=o(25917);let k=(()=>{class e{constructor(){this.control=new r.NI({card:"558620******2158",expire:"12/25"})}}return e.ɵfac=function(t){return new(t||e)},e.ɵcmp=p.Xpm({type:e,selectors:[["tui-input-card-grouped-example-5"]],features:[p._Bn([{provide:c.TUI_INPUT_CARD_GROUPED_TEXTS,useValue:(0,E.of)({cardNumberText:"Number",expiryText:"mm/yy",cvcText:"Code"})}])],decls:1,vars:1,consts:[[3,"formControl"]],template:function(e,t){1&e&&p._UZ(0,"tui-input-card-grouped",0),2&e&&p.Q6J("formControl",t.control)},directives:[y.c,r.JJ,r.oH],encapsulation:2,changeDetection:0}),e})();var Q=o(10977),H=o(61544),I=o(60404),D=o(54218),Y=o(83074);function F(e,t){if(1&e&&(p.TgZ(0,"p"),p.TgZ(1,"code"),p._uU(2,"InputCardGrouped"),p.qZA(),p._uU(3," is used to input a card as a separated control "),p.qZA(),p.TgZ(4,"tui-doc-example",2),p._UZ(5,"tui-input-card-grouped-example-1"),p.qZA(),p.TgZ(6,"tui-doc-example",3),p._UZ(7,"tui-input-card-grouped-example-2"),p.qZA(),p.TgZ(8,"tui-doc-example",4),p._UZ(9,"tui-input-card-grouped-example-3"),p.qZA(),p.TgZ(10,"tui-doc-example",5),p._UZ(11,"tui-input-card-grouped-example-4"),p.qZA(),p.TgZ(12,"tui-doc-example",6),p._UZ(13,"tui-input-card-grouped-example-5"),p.qZA()),2&e){const e=p.oxw();p.xp6(4),p.Q6J("content",e.example1),p.xp6(2),p.Q6J("content",e.example2),p.xp6(2),p.Q6J("content",e.example3),p.xp6(2),p.Q6J("content",e.example4),p.xp6(2),p.Q6J("content",e.example5)}}function G(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-input-card-grouped",17),p.NdJ("binChange",(function(t){return p.CHM(e),p.oxw(),p.MAs(17).emitEvent(t)})),p.qZA()}if(2&e){const e=p.oxw(2);p.Q6J("autocompleteEnabled",e.autocompleteEnabled)("cardSrc",e.cardSrc)("codeLength",e.codeLength)("exampleText",e.exampleText)("focusable",e.focusable)("formControl",e.control)("pseudoActive",e.pseudoPressed)("pseudoFocus",e.pseudoFocused)("pseudoHover",e.pseudoHovered)("pseudoInvalid",e.pseudoInvalid)("readOnly",e.readOnly)}}function B(e,t){1&e&&p._UZ(0,"tui-thumbnail-card",18)}function z(e,t){1&e&&(p._uU(0," Disabled state (use "),p.TgZ(1,"code"),p._uU(2,"formControl.disable()"),p.qZA(),p._uU(3," ) "))}function X(e,t){1&e&&p._uU(0," Browser autocomplete of card ")}function W(e,t){1&e&&p._uU(0," SVG card icon ")}function j(e,t){1&e&&p._uU(0," An example of input ")}function R(e,t){1&e&&p._uU(0," Code length ")}function $(e,t){1&e&&p._uU(0," BIN value (card first 6 symbols) ")}function K(e,t){if(1&e){const e=p.EpF();p.TgZ(0,"tui-doc-demo",7),p.YNc(1,G,1,11,"ng-template"),p.qZA(),p.TgZ(2,"div",8),p.TgZ(3,"p"),p._uU(4," Add "),p.TgZ(5,"code"),p._uU(6,"tuiCreateLuhnValidator(customMessage?)"),p.qZA(),p._uU(7," to control validators to validate it with Luhn algorithm "),p.qZA(),p.qZA(),p.YNc(8,B,1,0,"ng-template",null,9,p.W1O),p.TgZ(10,"tui-doc-documentation"),p.YNc(11,z,4,0,"ng-template",10),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().disabled=t})),p.YNc(12,X,1,0,"ng-template",11),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().autocompleteEnabled=t})),p.YNc(13,W,1,0,"ng-template",12),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().cardSrcSelected=t})),p.YNc(14,j,1,0,"ng-template",13),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().exampleText=t})),p.YNc(15,R,1,0,"ng-template",14),p.NdJ("documentationPropertyValueChange",(function(t){return p.CHM(e),p.oxw().codeLength=t})),p.YNc(16,$,1,0,"ng-template",15,16,p.W1O),p.qZA(),p._UZ(18,"inherited-documentation")}if(2&e){const e=p.MAs(9),t=p.oxw();p.Q6J("control",t.control),p.xp6(11),p.Q6J("documentationPropertyValue",t.disabled),p.xp6(1),p.Q6J("documentationPropertyValue",t.autocompleteEnabled),p.xp6(1),p.Q6J("documentationPropertyValues",t.getContentVariants(e))("documentationPropertyValue",t.cardSrcSelected),p.xp6(1),p.Q6J("documentationPropertyValue",t.exampleText),p.xp6(1),p.Q6J("documentationPropertyValues",t.codeLengthVariants)("documentationPropertyValue",t.codeLength)}}function ee(e,t){if(1&e&&(p.TgZ(0,"ol",19),p.TgZ(1,"li"),p.TgZ(2,"p"),p._uU(3," Import "),p.TgZ(4,"code"),p._uU(5,"TuiInputCardGroupedModule"),p.qZA(),p._uU(6," into a module where you want to use our component "),p.qZA(),p._UZ(7,"tui-doc-code",20),p.qZA(),p.TgZ(8,"li"),p.TgZ(9,"p"),p._uU(10,"Add to the template:"),p.qZA(),p._UZ(11,"tui-doc-code",21),p.qZA(),p.qZA()),2&e){const e=p.oxw();p.xp6(7),p.Q6J("code",e.exampleModule),p.xp6(4),p.Q6J("code",e.exampleHtml)}}let te=(()=>{class e extends h.O{constructor(){super(...arguments),this.exampleModule=o.e(92593).then(o.t.bind(o,92593,17)),this.exampleHtml=o.e(29352).then(o.t.bind(o,29352,17)),this.example1={TypeScript:o.e(41940).then(o.t.bind(o,41940,17)),HTML:o.e(49991).then(o.t.bind(o,49991,17))},this.example2={TypeScript:o.e(29798).then(o.t.bind(o,29798,17)),HTML:o.e(1393).then(o.t.bind(o,1393,17)),LESS:o.e(5750).then(o.t.bind(o,5750,17))},this.example3={TypeScript:o.e(1843).then(o.t.bind(o,1843,17)),HTML:o.e(14228).then(o.t.bind(o,14228,17))},this.example4={TypeScript:o.e(21727).then(o.t.bind(o,21727,17)),HTML:o.e(33573).then(o.t.bind(o,33573,17))},this.example5={TypeScript:o.e(53565).then(o.t.bind(o,53565,17)),HTML:o.e(63731).then(o.t.bind(o,63731,17))},this.cards={common:"https://ng-web-apis.github.io/dist/assets/images/common.svg",universal:"https://ng-web-apis.github.io/dist/assets/images/universal.svg",mutation:"https://ng-web-apis.github.io/dist/assets/images/mutation-observer.svg"},this.cardSrcVariants=Object.keys(this.cards),this.cardSrcSelected="",this.autocompleteEnabled=!1,this.exampleText="0000 0000 0000 0000",this.codeLengthVariants=[3,4],this.codeLength=this.codeLengthVariants[0],this.pseudoInvalid=null,this.readOnly=!1,this.control=new r.NI}get cardSrc(){return(0,m.tuiIsString)(this.cardSrcSelected)?this.cards[this.cardSrcSelected]:this.cardSrcSelected}get disabled(){return this.control.disabled}set disabled(e){e?this.control.disable():this.control.enable()}getContentVariants(e){return[...this.cardSrcVariants,e]}}return e.ɵfac=function(){let t;return function(o){return(t||(t=p.n5z(e)))(o||e)}}(),e.ɵcmp=p.Xpm({type:e,selectors:[["example-input-card-grouped"]],features:[p._Bn([{provide:g.x,useExisting:(0,p.Gpc)((()=>e))}]),p.qOj],decls:4,vars:0,consts:[["header","InputCardGrouped","package","ADDON-COMMERCE","type","components"],["pageTab",""],["id","validation","heading","With validation",3,"content"],["id","select","heading","With saved cards",3,"content"],["id","card-src","heading","With custom card template",3,"content"],["id","form-state","heading","Custom form state",3,"content"],["id","custom-labels","heading","Custom labels",3,"content"],[3,"control"],[1,"b-full-width","tui-space_bottom-6"],["template",""],["documentationPropertyName","disabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","autocompleteEnabled","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","cardSrc","documentationPropertyType","PolymorpheusContent",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","exampleText","documentationPropertyType","string",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","input","documentationPropertyName","codeLength","documentationPropertyType","3 | 4",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyMode","output","documentationPropertyName","binChange","documentationPropertyType","string | null"],["documentationPropertyBinChange","documentationProperty"],[3,"autocompleteEnabled","cardSrc","codeLength","exampleText","focusable","formControl","pseudoActive","pseudoFocus","pseudoHover","pseudoInvalid","readOnly","binChange"],["cardNumber","1234","paymentSystem","maestro","size","s",1,"card"],[1,"b-demo-steps"],["filename","my.module.ts",3,"code"],["filename","my.component.html",3,"code"]],template:function(e,t){1&e&&(p.TgZ(0,"tui-doc-page",0),p.YNc(1,F,14,5,"ng-template",1),p.YNc(2,K,19,8,"ng-template",1),p.YNc(3,ee,12,2,"ng-template",1),p.qZA())},directives:[f.q,b.n,x.f,v,V,O,L,k,Q.F,H.z,I.B,D.w,y.c,r.JJ,r.oH,M._,Y.c],styles:[".form[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.control[_ngcontent-%COMP%]{flex:1;margin-bottom:.25rem}.control[_ngcontent-%COMP%]:not(:last-child){margin-right:1.25rem}.error[_ngcontent-%COMP%]{min-width:100%}.title[_ngcontent-%COMP%]{font:var(--tui-font-heading-5)}.card[_ngcontent-%COMP%]{background:#87ceeb}"],changeDetection:0}),e})(),oe=(()=>{class e{}return e.ɵfac=function(t){return new(t||e)},e.ɵmod=p.oAB({type:e}),e.ɵinj=p.cJS({imports:[[c.TuiInputCardGroupedModule,u.TuiLinkModule,u.TuiErrorModule,d.TuiFieldErrorPipeModule,u.TuiDataListModule,c.TuiThumbnailCardModule,u.TuiLabelModule,u.TuiSvgModule,n.ez,r.UX,i.fV,l.f,a.Bz.forChild((0,i.Ve)(te)),s.wq]]}),e})()}}]);