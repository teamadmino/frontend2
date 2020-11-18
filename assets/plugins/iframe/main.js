!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("adm.@angular/common"),require("adm.@angular/material"),require("adm.@angular/forms"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/material","adm.@angular/forms","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],r):"object"==typeof exports?exports.iframe=r(require("adm.@angular/common"),require("adm.@angular/material"),require("adm.@angular/forms"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):e.iframe=r(e["adm.@angular/common"],e["adm.@angular/material"],e["adm.@angular/forms"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/platform-browser"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,(function(e,r,t,n,o,a,i){return function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,(function(r){return e[r]}).bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="/assets/plugins/iframe",t(t.s=0)}({0:function(e,r,t){e.exports=t("zUnb")},"0S4P":function(r,t){r.exports=e},"3SZY":function(e,t){e.exports=r},"3xDq":function(e,r){e.exports=t},aP7H:function(e,r){e.exports=n},cfyg:function(e,r){e.exports=o},"vG+p":function(e,r){e.exports=a},vOrQ:function(e,r){e.exports=i},zUnb:function(e,r,t){"use strict";t.r(r),t.d(r,"IframeModule",(function(){return d}));var n=t("0S4P"),o=t("vOrQ"),a=t("cfyg"),i=t("vG+p"),u=t("aP7H"),f=["iframeRef"],s=function(){function e(e,r){this.sanitizer=e,this.context=r,this.safeUrl=""}return e.prototype.ngOnInit=function(){var e=this;this.safeUrl=this.getSafeUrl(this.context.pluginConfig.value),this.context.update$.pipe(Object(u.takeUntil)(this.context.destroy$)).subscribe((function(r){e.safeUrl=e.getSafeUrl(e.context.pluginConfig.value)}))},e.prototype.getSafeUrl=function(e){return this.sanitizer.bypassSecurityTrustResourceUrl(e)},e.prototype.iframeLoaded=function(){},e.\u0275fac=function(r){return new(r||e)(o["\u0275\u0275directiveInject"](i.DomSanitizer),o["\u0275\u0275directiveInject"](a.PLUGIN_CONTEXT))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-iframe"]],viewQuery:function(e,r){var t;1&e&&o["\u0275\u0275staticViewQuery"](f,!0),2&e&&o["\u0275\u0275queryRefresh"](t=o["\u0275\u0275loadQuery"]())&&(r.iframeRef=t.first)},decls:2,vars:1,consts:[["frameBorder","0","tabindex","-1",3,"src","load"],["iframeRef",""]],template:function(e,r){1&e&&(o["\u0275\u0275elementStart"](0,"iframe",0,1),o["\u0275\u0275listener"]("load",(function(){return r.iframeLoaded()})),o["\u0275\u0275elementEnd"]()),2&e&&o["\u0275\u0275property"]("src",r.safeUrl,o["\u0275\u0275sanitizeResourceUrl"])},styles:["[_nghost-%COMP%], iframe[_ngcontent-%COMP%]{width:100%;height:100%}iframe[_ngcontent-%COMP%]{color:#0f0}"],changeDetection:0}),e}(),c=t("3xDq"),l=t("3SZY"),d=function(){function e(){}return e.entry=s,e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(r){return new(r||e)},imports:[[n.CommonModule,c.ReactiveFormsModule,l.MatInputModule,l.MatIconModule]]}),e}();r.default=d}})}));