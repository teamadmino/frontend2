!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.shared"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.@angular/material","adm.shared","adm.@angular/core"],n):"object"==typeof exports?exports.textarea=n(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.shared"),require("adm.@angular/core")):e.textarea=n(e["adm.@angular/common"],e["adm.@angular/forms"],e["adm.@angular/material"],e["adm.shared"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,n,t,o,r){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,(function(n){return e[n]}).bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/assets/plugins/textarea",t(t.s=0)}({0:function(e,n,t){e.exports=t("P+m1")},"0S4P":function(n,t){n.exports=e},"3xDq":function(e,t){e.exports=n},EdK2:function(e,n){e.exports=t},"P+m1":function(e,n,t){"use strict";t.r(n),t.d(n,"TextareaModule",function(){return f});var o=t("0S4P"),r=t("cfyg"),a=t("vOrQ"),l=t("EdK2"),i=t("3xDq"),u=function(){function e(e){this.context=e}return e.prototype.ngOnInit=function(){},e.\u0275fac=function(n){return new(n||e)(a["\u0275\u0275directiveInject"](r.PLUGIN_CONTEXT))},e.\u0275cmp=a["\u0275\u0275defineComponent"]({type:e,selectors:[["app-textarea"]],decls:4,vars:8,consts:[[3,"appearance"],["matInput","","data-focus-target","",3,"formControl","placeholder","readonly","maxlength","rows","ngStyle"]],template:function(e,n){1&e&&(a["\u0275\u0275elementStart"](0,"mat-form-field",0),a["\u0275\u0275elementStart"](1,"mat-label"),a["\u0275\u0275text"](2),a["\u0275\u0275elementEnd"](),a["\u0275\u0275element"](3,"textarea",1),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275property"]("appearance",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.appearance),a["\u0275\u0275advance"](2),a["\u0275\u0275textInterpolate"](null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.label),a["\u0275\u0275advance"](1),a["\u0275\u0275property"]("formControl",n.context.control)("placeholder",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.placeholder)("readonly",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.readonly)("maxlength",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.maxLength)("rows",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.rows)("ngStyle",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.innerStyle))},directives:[l.MatFormField,l.MatLabel,l.MatInput,i.DefaultValueAccessor,i.NgControlStatus,i.FormControlDirective,i.MaxLengthValidator,o.NgStyle],styles:["[_nghost-%COMP%]  mat-form-field{width:100%;height:100%;position:relative}[_nghost-%COMP%]  textarea{height:100%;resize:none}[_nghost-%COMP%]  .mat-form-field-wrapper, [_nghost-%COMP%]  .mat-form-field-wrapper .mat-form-field-flex, [_nghost-%COMP%]  .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-infix{height:100%}"]}),e}(),f=function(){function e(){}return e.entry=u,e.\u0275mod=a["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=a["\u0275\u0275defineInjector"]({factory:function(n){return new(n||e)},imports:[[o.CommonModule,l.MatFormFieldModule,i.ReactiveFormsModule,l.MatInputModule]]}),e}();n.default=f},cfyg:function(e,n){e.exports=o},vOrQ:function(e,n){e.exports=r}})});