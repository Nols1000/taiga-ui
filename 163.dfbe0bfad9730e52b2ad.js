(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{fugw:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownSelectionModule",(function(){return ue}));var o=n("An66"),i=n("3kIJ"),r=n("1VvW"),a=n("SVIu"),d=n("Qq0t"),l=n("dvRg"),c=n("cWK9"),u=n("kZht"),p=n("OZlg"),m=n("e0eB"),s=n("iyc4"),w=n("bPri");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-1"]],decls:3,vars:0,consts:[["tuiDropdownSelection","","tuiDropdownSelectionPosition","selection","tuiDropdownContent","\xa0\xa0Dropdown text\xa0\xa0"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0,"Dropdown will be shown text selection:\n"),u["\u0275\u0275elementStart"](1,"p",0),u["\u0275\u0275text"](2," Select a text to see dropdown\n"),u["\u0275\u0275elementEnd"]())},directives:[w.a],encapsulation:2,changeDetection:0}),e})();var y=n("D57K"),h=n("l4xa"),g=n("+SFL"),D=n("oEBb"),S=n("cTzE"),b=n("cVyY"),x=n("xcN3"),P=n("cweO");function C(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"button",6),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit,o=u["\u0275\u0275nextContext"](3),i=u["\u0275\u0275reference"](1);return o.onClick(n.login,i.nativeFocusableElement)})),u["\u0275\u0275text"](1),u["\u0275\u0275element"](2,"tui-avatar",7),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.name," "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("rounded",!0)("avatarUrl",e.avatar)("text",e.name)}}function T(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-data-list",4),u["\u0275\u0275listener"]("keydown.escape",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"](2),u["\u0275\u0275reference"](1).nativeFocusableElement.focus()})),u["\u0275\u0275template"](1,C,3,4,"button",5),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"](2),t=u["\u0275\u0275reference"](1);u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.filterItems(t.nativeFocusableElement))}}function V(e,t){if(1&e&&u["\u0275\u0275template"](0,T,2,1,"tui-data-list",3),2&e){u["\u0275\u0275nextContext"]();const e=u["\u0275\u0275reference"](1);u["\u0275\u0275property"]("ngIf",e.nativeFocusableElement)}}let v=(()=>{class e{constructor(){this.options=h.y,this.value="Type @ to see a dropdown",this.items=[{name:"Alexander Inkin",avatar:g.a,login:"a.inkin"},{name:"Roman Sedov",avatar:"",login:"r.sedov"}],this.predicate=e=>Object(l.Ub)(e).toString().startsWith("@")}get focused(){return!!this.options.length||null}onArrow(e,t){const n=this.options[t];n&&(e.preventDefault(),Object(h.ed)(n.nativeElement))}filterItems(e){const t=this.getCurrentSearch(e).replace("@","");return this.getFilteredItems(this.items,t)}onClick(e,t){const n=this.getCurrentSearch(t),o=this.value.replace(n,e),i=o.indexOf(e)+e.length;this.value=o,Object(h.ed)(t),t.value=o,t.setSelectionRange(i,i)}getFilteredItems(e,t){return e.filter(({name:e,login:n})=>n.startsWith(t)||e.startsWith(t))}getCurrentSearch(e){return e.value.slice(e.value.indexOf("@"),e.selectionStart)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-dropdown-selection-example-2"]],viewQuery:function(e,t){var n;1&e&&u["\u0275\u0275viewQuery"](d.Lb,!0,u.ElementRef),2&e&&u["\u0275\u0275queryRefresh"](n=u["\u0275\u0275loadQuery"]())&&(t.options=n)},decls:5,vars:4,consts:[["tuiDropdownSelectionPosition","word",3,"tuiDropdownContent","tuiDropdownSelection","pseudoFocused","ngModel","ngModelChange","keydown.arrowUp","keydown.arrowDown"],["textarea",""],["dropdown",""],["class","menu",3,"keydown.escape",4,"ngIf"],[1,"menu",3,"keydown.escape"],["tuiOption","",3,"click",4,"ngFor","ngForOf"],["tuiOption","",3,"click"],["size","s",3,"rounded","avatarUrl","text"]],template:function(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tui-text-area",0,1),u["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e}))("keydown.arrowUp",(function(e){return t.onArrow(e,"last")}))("keydown.arrowDown",(function(e){return t.onArrow(e,"first")})),u["\u0275\u0275text"](2," Type a message\n"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](3,V,1,1,"ng-template",null,2,u["\u0275\u0275templateRefExtractor"])),2&e){const e=u["\u0275\u0275reference"](4);u["\u0275\u0275property"]("tuiDropdownContent",e)("tuiDropdownSelection",t.predicate)("pseudoFocused",t.focused)("ngModel",t.value)}},directives:[D.a,S.a,w.a,i.NgControlStatus,i.NgModel,o.t,b.a,o.s,x.a,P.a],styles:[".menu[_ngcontent-%COMP%]{width:12.5rem}"],changeDetection:0}),Object(y.b)([h.ud],e.prototype,"getFilteredItems",null),e})();var E,A=n("EPR0"),M=n("yHor"),O=n("zGJC"),$=n("zV1d"),_=n("u8jZ");E=$localize`:␟432c55cd71cfc37ae765480b4e27ffbef9174a01␟2979268708696318460:${"\ufffd#2\ufffd"}:START_TAG_CODE:tuiDropdownSelection${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: shows dropdown with custom template on selected text `;const L=["heading",$localize`:␟86bd4c895bf70b35a58305b7d107a2f1b67b141c␟1238358838717941284:Sample`];function R(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18nStart"](1,E),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"tui-doc-example",2),u["\u0275\u0275i18nAttributes"](4,L),u["\u0275\u0275element"](5,"tui-dropdown-selection-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-example",3),u["\u0275\u0275element"](7,"tui-dropdown-selection-example-2"),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",e.example2)}}var H,G,z,N,k,W,F,I,j,U,B,J,Q,Z;function K(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"div",16),u["\u0275\u0275i18nStart"](1,G),u["\u0275\u0275element"](2,"p"),u["\u0275\u0275element"](3,"button",17),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"]())}function Y(e,t){1&e&&u["\u0275\u0275i18n"](0,z)}function q(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,N),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function X(e,t){1&e&&u["\u0275\u0275i18n"](0,k)}function ee(e,t){1&e&&u["\u0275\u0275i18n"](0,W)}function te(e,t){1&e&&u["\u0275\u0275i18n"](0,F)}function ne(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,I),u["\u0275\u0275element"](1,"code"),u["\u0275\u0275i18nEnd"]())}function oe(e,t){1&e&&u["\u0275\u0275i18n"](0,j)}function ie(e,t){1&e&&(u["\u0275\u0275i18nStart"](0,U),u["\u0275\u0275element"](1,"strong"),u["\u0275\u0275element"](2,"code"),u["\u0275\u0275i18nEnd"]())}function re(e,t){1&e&&u["\u0275\u0275i18n"](0,B)}function ae(e,t){1&e&&u["\u0275\u0275i18n"](0,J)}function de(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tui-doc-demo"),u["\u0275\u0275elementStart"](1,"p",4),u["\u0275\u0275i18nStart"](2,H),u["\u0275\u0275element"](3,"strong"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](4,K,4,0,"ng-template",null,5,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"tui-doc-documentation"),u["\u0275\u0275template"](7,Y,1,0,"ng-template",6),u["\u0275\u0275template"](8,q,2,0,"ng-template",7),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownAlign=t})),u["\u0275\u0275template"](9,X,1,0,"ng-template",8),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownDirection=t})),u["\u0275\u0275template"](10,ee,1,0,"ng-template",9),u["\u0275\u0275template"](11,te,1,0,"ng-template",10),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=t})),u["\u0275\u0275template"](12,ne,2,0,"ng-template",11),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownMinHeight=t})),u["\u0275\u0275template"](13,oe,1,0,"ng-template",12),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=t})),u["\u0275\u0275template"](14,ie,3,0,"ng-template",13),u["\u0275\u0275template"](15,re,1,0,"ng-template",14),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().position=t})),u["\u0275\u0275template"](16,ae,1,0,"ng-template",15),u["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().tuiDropdownSided=t})),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275reference"](5),t=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("tuiDropdownSelectionPosition",t.position)("tuiDropdownContent",e)("tuiDropdownMinHeight",t.tuiDropdownMinHeight)("tuiDropdownMaxHeight",t.tuiDropdownMaxHeight)("tuiDropdownAlign",t.tuiDropdownAlign)("tuiDropdownDirection",t.tuiDropdownDirection)("tuiDropdownLimitWidth",t.tuiDropdownLimitWidth)("tuiDropdownSided",t.tuiDropdownSided),u["\u0275\u0275advance"](7),u["\u0275\u0275property"]("documentationPropertyValues",t.alignVariants)("documentationPropertyValue",t.tuiDropdownAlign),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValues",t.dropdownDirectionVariants)("documentationPropertyValue",t.tuiDropdownDirection),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",t.tuiDropdownLimitWidthVariants)("documentationPropertyValue",t.tuiDropdownLimitWidth),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMinHeight),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownMaxHeight),u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("documentationPropertyValues",t.positionVariants)("documentationPropertyValue",t.position),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("documentationPropertyValue",t.tuiDropdownSided)}}function le(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",18),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18nStart"](3,Q),u["\u0275\u0275element"](4,"code"),u["\u0275\u0275i18nEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](5,"tui-doc-code",19),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"li"),u["\u0275\u0275elementStart"](7,"p"),u["\u0275\u0275i18n"](8,Z),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](9,"tui-doc-code",20),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("code",e.exampleModule),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",e.exampleHtml)}}H=$localize`:␟2a35c99c7df15ae5710562ef89d46774fd4550ea␟2266199980508326983: Select a text to ${"\ufffd#3\ufffd"}:START_TAG_STRONG:see a dropdown${"\ufffd/#3\ufffd"}:CLOSE_TAG_STRONG:`,G=$localize`:␟57dfffe78ad66f88475054d12e085cc38d437029␟3745698783499999973: Here you can have any content ${"\ufffd#2\ufffd"}:START_PARAGRAPH:You can select a text inside a dropdown and it will not close a dropdown${"\ufffd/#2\ufffd"}:CLOSE_PARAGRAPH:${"\ufffd#3\ufffd"}:START_TAG_BUTTON: Button ${"\ufffd/#3\ufffd"}:CLOSE_TAG_BUTTON:`,z=$localize`:␟ee84d3c7de163b96c6606f2d0af612463026e07d␟741899295101860675: Content `,N=$localize`:␟4e5cb2c74dfb392802e7e005883b9be2c781fd4a␟905186926226823365: Align of dropdown (does not work together with ${"\ufffd#1\ufffd"}:START_TAG_CODE:limitWidth === 'fixed'${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE: ) `,k=$localize`:␟bfe17793e6e84334e10951e36a771ad1ac58ef05␟8707958835080744644: Set a vertical direction of dropdown `,W=$localize`:␟1a7f7dfc794f8e7c30e09adad92f0525112970a5␟7162739121343086934: Set dropdown host manually. For example, it will be a target if someone blurs dropdown with Tab/Shift+Tab. Element with a directive is used by default. `,F=$localize`:␟da2ca1c17abdc5578724541ebd2b9c6d044d248e␟1790691801673246110: Limit dropdown width `,I=$localize`:␟e848cc13a18e3647fb148f5d1c19ae5f888e1557␟5799599437390794628: Minimum height to calculate that dropdown fits to setted ${"\ufffd#1\ufffd"}:START_TAG_CODE:tuiDropdownDirection${"\ufffd/#1\ufffd"}:CLOSE_TAG_CODE:`,j=$localize`:␟b16442aff8c447ade67e3d9a81f268796ea113fa␟34813109637476177: Maximum height of dropdown `,U=$localize`:␟5c15cd8f1ed7cb2bd17b60a6af84c911cd1699cc␟1070006108743271766:${"\ufffd#1\ufffd"}:START_TAG_STRONG:Directive selector${"\ufffd/#1\ufffd"}:CLOSE_TAG_STRONG: . Optional: you can also set a handler that gets ${"\ufffd#2\ufffd"}:START_TAG_CODE:Range${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: and returns show/close dropdown `,B=$localize`:␟7b2fe7a08c93ab872d983500d94a057f31327d32␟1537393581077902015: Position of dropdown near text selection `,J=$localize`:␟8ce8395bd49b9bbee585ad617dad9e48eb6a8c49␟3925785757038900199: Dropdown is sided by host `,Q=$localize`:␟8a62be1bbab6430a7d42c204d2b6d6ba8d65fffe␟1816878685679044442: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiDropdownModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,Z=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let ce=(()=>{class e{constructor(){this.exampleModule=n.e(1560).then(n.bind(null,"gY2s")),this.exampleHtml=n.e(1561).then(n.bind(null,"kupC")),this.example1={TypeScript:n.e(1556).then(n.bind(null,"SSZV")),HTML:n.e(1555).then(n.bind(null,"U0Wy"))},this.example2={TypeScript:n.e(1559).then(n.bind(null,"srmO")),HTML:n.e(1557).then(n.bind(null,"gbLi")),LESS:n.e(1558).then(n.bind(null,"EvhV"))},this.positionVariants=["selection","word","tag"],this.open=!1,this.position=this.positionVariants[0],this.tuiDropdownMinHeight=d.c,this.tuiDropdownMaxHeight=d.b,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-dropdown-selection"]],decls:4,vars:0,consts:[["header","DropdownSelection","package","KIT","type","directives"],["pageTab",""],["id","selection",3,"content",6,"heading"],["id","textarea","heading","textarea",3,"content"],["tuiDropdownSelection","",3,"tuiDropdownSelectionPosition","tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided"],["dropdownContent",""],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidthT",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSelection","documentationPropertyMode","input","documentationPropertyType","TuiBooleanHandler<Range>"],["documentationPropertyName","tuiDropdownSelectionPosition","documentationPropertyMode","input","documentationPropertyType","'selection' | 'word' | 'tag'",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275template"](1,R,8,2,"ng-template",1),u["\u0275\u0275template"](2,de,17,19,"ng-template",1),u["\u0275\u0275template"](3,le,10,2,"ng-template",1),u["\u0275\u0275elementEnd"]())},directives:[p.a,m.a,s.a,f,v,A.a,w.a,M.a,O.a,$.a,_.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:20rem;padding:.5rem 1.25rem}"],changeDetection:0}),e})(),ue=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,c.c,l.N,d.bb,l.Nb,l.z,d.gb,a.m,r.f.forChild(Object(a.u)(ce))]]}),e})()}}]);