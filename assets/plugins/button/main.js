!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("adm.@angular/common"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/material","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],n):"object"==typeof exports?exports.button=n(require("adm.@angular/common"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):t.button=n(t["adm.@angular/common"],t["adm.@angular/material"],t["adm.rxjs/operators"],t["adm.shared"],t["adm.@angular/platform-browser"],t["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(t,n,e,o,i,a){return function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,(function(n){return t[n]}).bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/assets/plugins/button",e(e.s=0)}({0:function(t,n,e){t.exports=e("P+m1")},"0S4P":function(n,e){n.exports=t},MdUB:function(t,e){t.exports=n},"P+m1":function(t,n,e){"use strict";e.r(n),e.d(n,"ButtonModule",function(){return p});var o=e("aP7H"),i=e("cfyg"),a=e("vG+p"),r=e("vOrQ"),l=e("0S4P"),c=e("MdUB");function u(t,n){if(1&t&&(r["\u0275\u0275elementStart"](0,"button",5),r["\u0275\u0275element"](1,"span",6),r["\u0275\u0275elementEnd"]()),2&t){var e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("type","button")("ngStyle",null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.innerStyle)("color",null!=e.context.pluginConfig.config&&e.context.pluginConfig.config.color?null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.color:"primary")("disabled",e.context.pluginConfig.disabled),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("innerHTML",e.sanitizedLabel,r["\u0275\u0275sanitizeHtml"])}}function d(t,n){if(1&t&&(r["\u0275\u0275elementStart"](0,"button",7),r["\u0275\u0275element"](1,"span",6),r["\u0275\u0275elementEnd"]()),2&t){var e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("type","button")("ngStyle",null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.innerStyle)("color",null!=e.context.pluginConfig.config&&e.context.pluginConfig.config.color?null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.color:"primary")("disabled",e.context.pluginConfig.disabled),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("innerHTML",e.sanitizedLabel,r["\u0275\u0275sanitizeHtml"])}}function f(t,n){if(1&t&&(r["\u0275\u0275elementStart"](0,"button",8),r["\u0275\u0275element"](1,"span",6),r["\u0275\u0275elementEnd"]()),2&t){var e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("type","button")("ngStyle",null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.innerStyle)("color",null!=e.context.pluginConfig.config&&e.context.pluginConfig.config.color?null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.color:"primary")("disabled",e.context.pluginConfig.disabled),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("innerHTML",e.sanitizedLabel,r["\u0275\u0275sanitizeHtml"])}}function s(t,n){if(1&t&&(r["\u0275\u0275elementStart"](0,"button",9),r["\u0275\u0275element"](1,"span",6),r["\u0275\u0275elementEnd"]()),2&t){var e=r["\u0275\u0275nextContext"]();r["\u0275\u0275property"]("type","button")("ngStyle",null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.innerStyle)("color",null!=e.context.pluginConfig.config&&e.context.pluginConfig.config.color?null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.color:"primary")("disabled",e.context.pluginConfig.disabled),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("innerHTML",e.sanitizedLabel,r["\u0275\u0275sanitizeHtml"])}}var g=function(){function t(t,n){this.sanitizer=t,this.context=n}return t.prototype.ngOnInit=function(){var t,n,e,i,a=this;this.context.update$.pipe(Object(o.takeUntil)(this.context.destroy$)).subscribe(function(t){a.updateConfig(t)}),this.sanitizedLabel=this.sanitizer.bypassSecurityTrustHtml(null===(t=this.context.pluginConfig.config)||void 0===t?void 0:t.label),this.appearance=(null===(n=this.context.pluginConfig.config)||void 0===n?void 0:n.appearance)?null===(e=this.context.pluginConfig.config)||void 0===e?void 0:e.appearance:"raised",this.click=null===(i=this.context.interactions)||void 0===i?void 0:i.click},t.prototype.updateConfig=function(t){var n,e,o;this.sanitizedLabel=this.sanitizer.bypassSecurityTrustHtml(null===(n=t.newConfig.config)||void 0===n?void 0:n.label),this.appearance=(null===(e=t.newConfig.config)||void 0===e?void 0:e.appearance)?null===(o=t.newConfig.config)||void 0===o?void 0:o.appearance:"raised",t.commands.simulateClick&&this.click.fire().subscribe()},t.prototype.getClasses=function(){},t.\u0275fac=function(n){return new(n||t)(r["\u0275\u0275directiveInject"](a.DomSanitizer),r["\u0275\u0275directiveInject"](i.PLUGIN_CONTEXT))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["app-button"]],decls:5,vars:4,consts:[[3,"ngSwitch"],["mat-stroked-button","","class","mat-focus-indicator adm-button","data-focus-target","",3,"type","ngStyle","color","disabled",4,"ngSwitchCase"],["mat-raised-button","","class","mat-focus-indicator adm-button","data-focus-target","",3,"type","ngStyle","color","disabled",4,"ngSwitchCase"],["mat-flat-button","","class","mat-focus-indicator adm-button","data-focus-target","",3,"type","ngStyle","color","disabled",4,"ngSwitchCase"],["mat-button","","class","mat-focus-indicator adm-button","data-focus-target","",3,"type","ngStyle","color","disabled",4,"ngSwitchDefault"],["mat-stroked-button","","data-focus-target","",1,"mat-focus-indicator","adm-button",3,"type","ngStyle","color","disabled"],[3,"innerHTML"],["mat-raised-button","","data-focus-target","",1,"mat-focus-indicator","adm-button",3,"type","ngStyle","color","disabled"],["mat-flat-button","","data-focus-target","",1,"mat-focus-indicator","adm-button",3,"type","ngStyle","color","disabled"],["mat-button","","data-focus-target","",1,"mat-focus-indicator","adm-button",3,"type","ngStyle","color","disabled"]],template:function(t,n){1&t&&(r["\u0275\u0275elementContainerStart"](0,0),r["\u0275\u0275template"](1,u,2,5,"button",1),r["\u0275\u0275template"](2,d,2,5,"button",2),r["\u0275\u0275template"](3,f,2,5,"button",3),r["\u0275\u0275template"](4,s,2,5,"button",4),r["\u0275\u0275elementContainerEnd"]()),2&t&&(r["\u0275\u0275property"]("ngSwitch",n.appearance),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","stroked"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","raised"),r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("ngSwitchCase","flat"))},directives:[l.NgSwitch,l.NgSwitchCase,l.NgSwitchDefault,c.MatButton,l.NgStyle],styles:[""]}),t}(),p=function(){function t(){}return t.entry=g,t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(n){return new(n||t)},imports:[[l.CommonModule,c.MatButtonModule]]}),t}();n.default=p},aP7H:function(t,n){t.exports=e},cfyg:function(t,n){t.exports=o},"vG+p":function(t,n){t.exports=i},vOrQ:function(t,n){t.exports=a}})});