(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{X4lf:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiRingChartModule",(function(){return R}));var a=n("An66"),i=n("1VvW"),o=n("UTYu"),r=n("T8fS"),c=n("SVIu"),l=n("cWK9"),u=n("l4xa"),d=n("Qq0t"),m=n("kZht"),p=n("OZlg"),s=n("e0eB"),h=n("iyc4"),v=n("pdBE");let y=(()=>{class e{constructor(){this.value=[40,30,20,10]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-ring-chart-example-1"]],decls:5,vars:4,consts:[[1,"wrapper"],["size","s",1,"tui-space_right-4",3,"value"],["size","m",1,"tui-space_right-4",3,"value"],["size","l",1,"tui-space_right-4",3,"value"],["size","xl",1,"tui-space_right-4",3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",0),m["\u0275\u0275element"](1,"tui-ring-chart",1),m["\u0275\u0275element"](2,"tui-ring-chart",2),m["\u0275\u0275element"](3,"tui-ring-chart",3),m["\u0275\u0275element"](4,"tui-ring-chart",4),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.value))},directives:[v.a],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;align-items:center}"],changeDetection:0}),e})();var f=n("0/K7");let x=(()=>{class e{constructor(){this.labels=["Food","Cafe","Open Source","Taxi","other"],this.value=[13769,12367,10172,3018,2592],this.total=Object(u.hd)(...this.value),this.index=NaN}get sum(){return isNaN(this.index)?this.total:this.value[this.index]}get label(){return isNaN(this.index)?"Total":this.labels[this.index]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-ring-chart-example-2"]],decls:4,vars:4,consts:[[3,"value","activeItemIndex","activeItemIndexChange"],[3,"value"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-ring-chart",0),m["\u0275\u0275listener"]("activeItemIndexChange",(function(e){return t.index=e})),m["\u0275\u0275element"](1,"tui-money",1),m["\u0275\u0275elementStart"](2,"div"),m["\u0275\u0275text"](3),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e&&(m["\u0275\u0275property"]("value",t.value)("activeItemIndex",t.index),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",t.sum),m["\u0275\u0275advance"](2),m["\u0275\u0275textInterpolate"](t.label))},directives:[v.a,f.a],styles:["[_nghost-%COMP%]{--tui-chart-0:#c779d0;--tui-chart-1:#feac5e;--tui-chart-2:#ff5f6d;--tui-chart-3:#4bc0c8;--tui-chart-4:#9795cd}"],changeDetection:0}),e})();var g=n("EPR0"),b=n("yHor"),V=n("zGJC"),C=n("u8jZ");const P=["header",$localize`:␟00214e46cd923ee161d8a9dc643a348f16675b61␟8113053841165912126:RingChart`],I=["heading",$localize`:␟10d6f83eef18aa9fca4e651a15e9af7b5b9bdbfd␟5960739619447908905:sizes`],S=["heading",$localize`:␟20fea4a90c025dc5f782601c437174dcdc02db7e␟1028344547250868618:With labels`];function z(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-example",2),m["\u0275\u0275i18nAttributes"](1,I),m["\u0275\u0275element"](2,"tui-ring-chart-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](4,S),m["\u0275\u0275element"](5,"tui-ring-chart-example-2"),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("content",e.example1),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("content",e.example2)}}var T,E,w,N,O,M;function $(e,t){1&e&&m["\u0275\u0275i18n"](0,T)}function j(e,t){1&e&&m["\u0275\u0275i18n"](0,E)}function A(e,t){1&e&&m["\u0275\u0275i18n"](0,w)}function _(e,t){1&e&&m["\u0275\u0275i18n"](0,N)}function H(e,t){if(1&e){const e=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"tui-ring-chart",4),m["\u0275\u0275listener"]("activeItemIndexChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-documentation"),m["\u0275\u0275template"](3,$,1,0,"ng-template",5),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().activeItemIndex=t})),m["\u0275\u0275template"](4,j,1,0,"ng-template",6),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().content=t})),m["\u0275\u0275template"](5,A,1,0,"ng-template",7),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().size=t})),m["\u0275\u0275template"](6,_,1,0,"ng-template",8),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(t){return m["\u0275\u0275restoreView"](e),m["\u0275\u0275nextContext"]().value=t})),m["\u0275\u0275elementEnd"]()}if(2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("value",e.value)("content",e.content)("size",e.size)("activeItemIndex",e.activeItemIndex),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",e.activeItemIndexVariants)("documentationPropertyValue",e.activeItemIndex),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.contentVariants)("documentationPropertyValue",e.content),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.sizeVariants)("documentationPropertyValue",e.size),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",e.valueVariants)("documentationPropertyValue",e.value)}}function D(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",9),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,O),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",10),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,M),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",11),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){const e=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",e.exampleModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",e.exampleHtml)}}T=$localize`:␟3723984460cea02b3cfdfdd74bf637291ba195b1␟2888725611708468887: Active fragment `,E=$localize`:␟f0b2b4e3939da146ce1b2b5a2daf71ddc931065f␟2699976675109824074: Content in the middle of ring. It gets index of active segment and total sum in context `,w=$localize`:␟179c074c54faa08ac2cd371aae91270430094cb4␟5919257397270847364: Size `,N=$localize`:␟616f8c85cb0c4ed37b94e8ba9c52e117da1a90c3␟206010917694362071: Value `,O=$localize`:␟76dcbcd752be692265a3b79e5ef1a60d9fdecc08␟3397391964644299834: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiRingChartModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,M=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let L=(()=>{class e{constructor(){this.exampleModule=n.e(413).then(n.bind(null,"PVDZ")),this.exampleHtml=n.e(414).then(n.bind(null,"CWL9")),this.example1={TypeScript:n.e(409).then(n.bind(null,"H3dm")),HTML:n.e(407).then(n.bind(null,"Ljvp")),LESS:n.e(408).then(n.bind(null,"HIHM"))},this.example2={TypeScript:n.e(412).then(n.bind(null,"TPmB")),HTML:n.e(410).then(n.bind(null,"qc0w")),LESS:n.e(411).then(n.bind(null,"rYAZ"))},this.valueVariants=[[40,30,20,10],[13769,10172,3018,2592]],this.value=this.valueVariants[0],this.activeItemIndexVariants=[NaN,0,1,2],this.activeItemIndex=this.activeItemIndexVariants[0],this.sizeVariants=["s","m","l","xl"],this.size=this.sizeVariants[1],this.contentVariants=["",({$implicit:e,value:t})=>isNaN(e)?"":Object(u.dd)(100*t[e]/Object(u.hd)(...t),2)+" %",({$implicit:e,value:t})=>isNaN(e)?Object(d.jc)(Object(u.hd)(...t))+"\nTotal":`${Object(d.jc)(t[e])}\nSegment \u2116${e+1}`],this.content=this.contentVariants[0]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-ring-chart"]],decls:5,vars:0,consts:[["package","ADDON-CHARTS","type","components",6,"header"],["pageTab",""],["id","sizes",3,"content",6,"heading"],["id","labels",3,"content",6,"heading"],[1,"chart",3,"value","content","size","activeItemIndex","activeItemIndexChange"],["documentationPropertyName","activeItemIndex","documentationPropertyMode","input-output","documentationPropertyType","number",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","content","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent<TuiRingChartContext>",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","size","documentationPropertyMode","input","documentationPropertyType","TuiSizeS | TuiSizeXL",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","value","documentationPropertyMode","input","documentationPropertyType","readonly number[]",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275i18nAttributes"](1,P),m["\u0275\u0275template"](2,z,6,2,"ng-template",1),m["\u0275\u0275template"](3,H,7,12,"ng-template",1),m["\u0275\u0275template"](4,D,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[p.a,s.a,h.a,y,x,g.a,v.a,b.a,V.a,C.a],styles:[".chart[_ngcontent-%COMP%]{margin:0 auto}"],changeDetection:0}),e})(),R=(()=>{class e{}return e.\u0275mod=m["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,i.f,o.m,r.g,l.c,c.m,i.f.forChild(Object(c.u)(L))]]}),e})()}}]);