(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{eg8U:function(e,t,r){"use strict";r.r(t),r.d(t,"ExampleFormatModule",(function(){return K}));var n=r("An66"),o=r("3kIJ"),a=r("1VvW"),m=r("SVIu"),l=r("Qq0t"),i=r("dvRg"),p=r("kZht"),c=r("OZlg"),s=r("e0eB"),u=r("iyc4"),d=r("l4xa"),f=r("YjIA"),S=r("xCPM");let h=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(11)})}get px(){const{value:e}=this.parametersForm.value;return Object(d.bd)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-input-number",2),p["\u0275\u0275text"](4," value "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,S.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var b=r("GdrL"),g=r("71sB");let C=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({sourceString:new o.FormControl("Friend!"),minResultLength:new o.FormControl(21),padString:new o.FormControl("Hey, ")})}get paddedStart(){const{sourceString:e,minResultLength:t,padString:r}=this.parametersForm.value;return Object(d.Yc)(e||"",t||0,r||" ")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-input",2),p["\u0275\u0275text"](4," sourceString "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-input-number",3),p["\u0275\u0275text"](6," minResultLength "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-input",4),p["\u0275\u0275text"](8," padString "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,g.a,o.NgControlStatus,o.FormControlName,f.a,S.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var v=r("T8fS"),x=r("TjIJ"),y=r("jTus"),F=r("fP8s"),E=r("OWJi");function w(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",e.items)}}let _=(()=>{class e{constructor(){this.items=["USD","RUB","643","KZT","051","KRW","CHF","EUR","GBP"],this.parametersForm=new o.FormGroup({currency:new o.FormControl(null)})}get currency(){const{currency:e}=this.parametersForm.value;return Object(v.h)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-select",2),p["\u0275\u0275text"](4," currency "),p["\u0275\u0275template"](5,w,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,x.a,y.a,o.NgControlStatus,o.FormControlName,F.a,E.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),N=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("roman sEdOv")})}get capitalized(){const{value:e}=this.parametersForm.value;return Object(l.gc)(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-input",2),p["\u0275\u0275text"](4," value "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,g.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),G=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl("+79991234567"),countryCode:new o.FormControl("+7"),phoneMask:new o.FormControl("### ###-##-##")})}get formattedPhone(){const{value:e,countryCode:t,phoneMask:r}=this.parametersForm.value;return Object(l.kc)(e,t,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-input",2),p["\u0275\u0275text"](4," value "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-input",3),p["\u0275\u0275text"](6," countryCode "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-input",4),p["\u0275\u0275text"](8," phoneMask "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,g.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})(),L=(()=>{class e{constructor(){this.parametersForm=new o.FormGroup({value:new o.FormControl(123456.789),decimalLimit:new o.FormControl(2),decimalSeparator:new o.FormControl("."),thousandSeparator:new o.FormControl(" ")})}get formattedNumber(){const{value:e,decimalLimit:t,decimalSeparator:r,thousandSeparator:n}=this.parametersForm.value;return Object(l.jc)(e,t,r,n)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-format-example-6"]],decls:11,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","decimalLimit",1,"tui-space_top-2"],["formControlName","decimalSeparator",1,"tui-space_top-2"],["formControlName","thousandSeparator",1,"tui-space_top-2"]],template:function(e,t){1&e&&(p["\u0275\u0275text"](0),p["\u0275\u0275elementStart"](1,"form",0),p["\u0275\u0275elementStart"](2,"div",1),p["\u0275\u0275elementStart"](3,"tui-input",2),p["\u0275\u0275text"](4," value "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-input",3),p["\u0275\u0275text"](6," decimalLimit "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](7,"tui-input",4),p["\u0275\u0275text"](8," decimalSeparator "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"tui-input",5),p["\u0275\u0275text"](10," thousandSeparator "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e&&(p["\u0275\u0275textInterpolate1"]("'",t.formattedNumber,"' = formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator); "),p["\u0275\u0275advance"](1),p["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,b.a,g.a,o.NgControlStatus,o.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:.75rem;width:13.75rem}"],changeDetection:0}),e})();var M=r("u8jZ");const k=["header",$localize`:␟8b68cb0e9623325effd2712982bfc6c2ddc96d58␟5358165867706649494:Format utils`],O=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var T;T=$localize`:␟1da832a39ea4c0c3bd7976d78c971ebce6435c13␟1341457636714080363:A set of format utils`;const z=["description",$localize`:␟8603e981f7ca02a7bf59688e4767351180b4250d␟5245623836371299072:Adds 'px' to a number`],j=["description",$localize`:␟7d1831d06991cb25671ca5b74e6c0327bbf87280␟1473019084371139706:Adds a fillter to a string`],D=["description",$localize`:␟f58552f0761b83792b2492e1439aa12357c39d15␟7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217`],A=["description",$localize`:␟ff19b55733851de9847ac9886b9640b108dadb82␟6708488179256599720:Capitalizes every word in a string`],P=["description",$localize`:␟b945a41118e9fa647ee7e77517ecf6f5b69643d2␟1504114262974304913:Formats a phone number with separators`],I=["description",$localize`:␟1980b95105c67951c5039793433db28092117edb␟7477502181232818354:Formats a number with separators`];function R(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18n"](1,T),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](2,"tui-doc-example",3),p["\u0275\u0275i18nAttributes"](3,z),p["\u0275\u0275element"](4,"tui-format-example-1"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](5,"tui-doc-example",4),p["\u0275\u0275i18nAttributes"](6,j),p["\u0275\u0275element"](7,"tui-format-example-2"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"tui-doc-example",5),p["\u0275\u0275i18nAttributes"](9,D),p["\u0275\u0275element"](10,"tui-format-example-3"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](11,"tui-doc-example",6),p["\u0275\u0275i18nAttributes"](12,A),p["\u0275\u0275element"](13,"tui-format-example-4"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](14,"tui-doc-example",7),p["\u0275\u0275i18nAttributes"](15,P),p["\u0275\u0275element"](16,"tui-format-example-5"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](17,"tui-doc-example",8),p["\u0275\u0275i18nAttributes"](18,I),p["\u0275\u0275element"](19,"tui-format-example-6"),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](2),p["\u0275\u0275property"]("content",e.example1),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example2),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example3),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example4),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example5),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",e.example6)}}var $;function H(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",9),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18n"](3,$),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](4,"tui-doc-code",10),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){const e=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",e.importComponentExample)}}$=$localize`:␟331439c9b8ee5b975fc037bbc742a75012cb302f␟5059560669993049040:Import into component and use:`;let J=(()=>{class e{constructor(){this.importComponentExample=r.e(1906).then(r.bind(null,"88jr")),this.example1={TypeScript:r.e(1890).then(r.bind(null,"F7su")),HTML:r.e(1888).then(r.bind(null,"n5GG")),LESS:r.e(1889).then(r.bind(null,"r0Wc"))},this.example2={TypeScript:r.e(1893).then(r.bind(null,"u0us")),HTML:r.e(1891).then(r.bind(null,"fhKb")),LESS:r.e(1892).then(r.bind(null,"z1t4"))},this.example3={TypeScript:r.e(1896).then(r.bind(null,"91R7")),HTML:r.e(1894).then(r.bind(null,"XeLl")),LESS:r.e(1895).then(r.bind(null,"vL0A"))},this.example4={TypeScript:r.e(1899).then(r.bind(null,"kCOC")),HTML:r.e(1897).then(r.bind(null,"yh7s")),LESS:r.e(1898).then(r.bind(null,"QNjp"))},this.example5={TypeScript:r.e(1902).then(r.bind(null,"0pln")),HTML:r.e(1900).then(r.bind(null,"pAMD")),LESS:r.e(1901).then(r.bind(null,"2zq3"))},this.example6={TypeScript:r.e(1905).then(r.bind(null,"9jfg")),HTML:r.e(1903).then(r.bind(null,"chQc")),LESS:r.e(1904).then(r.bind(null,"4dgp"))}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=p["\u0275\u0275defineComponent"]({type:e,selectors:[["example-format"]],decls:5,vars:0,consts:[["package","CDK / CORE","path","cdk/utils/format",6,"header"],["pageTab",""],[6,"pageTab"],["id","px","heading","px",3,"content",6,"description"],["id","padStart","heading","padStart",3,"content",6,"description"],["id","getCurrencySymbol","heading","getCurrencySymbol",3,"content",6,"description"],["id","capitalize","heading","capitalize",3,"content",6,"description"],["id","formatPhone","heading","formatPhone",3,"content",6,"description"],["id","formatNumber","heading","formatNumber",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,k),p["\u0275\u0275template"](2,R,20,6,"ng-template",1),p["\u0275\u0275template"](3,H,5,1,"ng-template",2),p["\u0275\u0275i18nAttributes"](4,O),p["\u0275\u0275elementEnd"]())},directives:[c.a,s.a,u.a,h,C,_,N,G,L,M.a],encapsulation:2,changeDetection:0}),e})(),K=(()=>{class e{}return e.\u0275mod=p["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[n.c,i.fb,o.FormsModule,o.ReactiveFormsModule,i.cb,i.Gb,l.gb,i.K,m.m,a.f.forChild(Object(m.u)(J))]]}),e})()}}]);