function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fca22df7ada52013d316b11a5c9f83d4067c3e02e\u241f8106985547566766097:Show in tempaltes with ",":START_TAG_CODE:tui-svg",":CLOSE_TAG_CODE::"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fbd11807f05ce2bcd4615680b06fe9d49bc1554d2\u241f4256452360263475197: Inject ",":START_TAG_CODE:TuiSvgService",":CLOSE_TAG_CODE: into your component and define an icon: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f0519aa79d6fa579bae49528cdf54b666a19f8811\u241f2571249863407404772: Method to define an icon. ",":START_PARAGRAPH:",':START_TAG_STRONG:Warning, name of the icon must not start with "',":START_TAG_CODE:<",':CLOSE_TAG_CODE:"',":CLOSE_TAG_STRONG:",":CLOSE_PARAGRAPH: Name should be unique. "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f0177f70879776d7232e5921a63783eb53b680df5\u241f1328817645420946514:",":START_TAG_STRONG:Singleton",":CLOSE_TAG_STRONG: you do not need to provide it, just inject into your component and use it "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f62442c600050ca0d3f65a2e8d29ff33d06792537\u241f3658315716341587729:Service to define SVG to reuse it later"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{"5UM4":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiSvgModule",(function(){return G}));var a,i,c,r,o,l=n("2kYt"),u=n("sEIs"),m=n("SVIu"),d=n("Qq0t"),p=n("4C5Q"),s=n("EM62"),f=n("OZlg"),S=n("e0eB"),g=n("yHor"),T=n("zGJC"),_=n("u8jZ"),v=n("ONKv");function O(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"p"),s["\u0275\u0275i18n"](1,a),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,i),s["\u0275\u0275element"](4,"strong"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"]())}function b(e,t){1&e&&(s["\u0275\u0275i18nStart"](0,c),s["\u0275\u0275elementStart"](1,"p"),s["\u0275\u0275elementStart"](2,"strong"),s["\u0275\u0275element"](3,"code"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275i18nEnd"]())}function E(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-documentation",2),s["\u0275\u0275template"](1,b,4,0,"ng-template",3),s["\u0275\u0275elementEnd"]()),2&e&&s["\u0275\u0275property"]("isAPI",!0)}function j(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"ol",4),s["\u0275\u0275elementStart"](1,"li"),s["\u0275\u0275elementStart"](2,"p"),s["\u0275\u0275i18nStart"](3,r),s["\u0275\u0275element"](4,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](5,"tui-doc-code",5),s["\u0275\u0275elementStart"](6,"p"),s["\u0275\u0275i18nStart"](7,o),s["\u0275\u0275element"](8,"code"),s["\u0275\u0275i18nEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"p"),s["\u0275\u0275element"](10,"tui-svg",6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){var n=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("code",n.injectService)}}a=$localize(_templateObject()),i=$localize(_templateObject2(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),c=$localize(_templateObject3(),"\ufffd#1\ufffd","\ufffd#2\ufffd","\ufffd#3\ufffd","\ufffd/#3\ufffd","\ufffd/#2\ufffd","\ufffd/#1\ufffd"),r=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),o=$localize(_templateObject5(),"\ufffd#8\ufffd","\ufffd/#8\ufffd");var C,h,A=((h=function e(t){_classCallCheck(this,e),this.injectService="import {TuiSvgService, tuiIconTrashLarge} from '@taiga-ui/core';\n...\nconstructor(@Inject(TuiSvgService) tuiSvgService: TuiSvgService) {\n    tuiSvgService.define({tuiIconTrashLarge}); \n} \n...\n",t.define({tuiIconTrashLarge:p.tuiIconTrashLarge})}).\u0275fac=function(e){return new(e||h)(s["\u0275\u0275directiveInject"](d.TuiSvgService))},h.\u0275cmp=s["\u0275\u0275defineComponent"]({type:h,selectors:[["example-tui-svg"]],decls:4,vars:0,consts:[["header","SvgService","package","CORE","path","core/services/svg.service.ts"],["pageTab",""],[3,"isAPI"],["documentationPropertyName","define","documentationPropertyType","Record<string, string>"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"],["src","tuiIconTrashLarge"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tui-doc-page",0),s["\u0275\u0275template"](1,O,5,0,"ng-template",1),s["\u0275\u0275template"](2,E,2,1,"ng-template",1),s["\u0275\u0275template"](3,j,11,1,"ng-template",1),s["\u0275\u0275elementEnd"]())},directives:[f.a,S.a,g.a,T.a,_.a,v.a],encapsulation:2,changeDetection:0}),h),G=((C=function e(){_classCallCheck(this,e)}).\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(e){return new(e||C)},imports:[[l.c,d.TuiSvgModule,m.h,u.f.forChild(Object(m.o)(A))]]}),C)}}]);