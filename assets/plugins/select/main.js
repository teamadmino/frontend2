!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.@angular/material","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],t):"object"==typeof exports?exports.select=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):e.select=t(e["adm.@angular/common"],e["adm.@angular/forms"],e["adm.@angular/material"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/platform-browser"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,(function(e,t,n,o,r,l,i){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,(function(t){return e[t]}).bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/plugins/select",n(n.s=0)}({0:function(e,t,n){e.exports=n("zUnb")},"0S4P":function(t,n){t.exports=e},"3xDq":function(e,n){e.exports=t},EdK2:function(e,t){e.exports=n},aP7H:function(e,t){e.exports=o},cfyg:function(e,t){e.exports=r},"vG+p":function(e,t){e.exports=l},vOrQ:function(e,t){e.exports=i},zUnb:function(e,t,n){"use strict";n.r(t),n.d(t,"SelectModule",(function(){return s}));var o=n("aP7H"),r=n("cfyg"),l=n("vG+p"),i=n("vOrQ"),a=n("0S4P"),u=n("EdK2"),c=n("3xDq");function p(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-option",5),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275property"]("value",n.value),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.label," ")}}function f(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-form-field",1),i["\u0275\u0275elementStart"](1,"mat-label"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementStart"](3,"mat-select",2,3),i["\u0275\u0275template"](5,p,2,2,"mat-option",4),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("appearance",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.appearance)("ngStyle",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.innerStyle),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.label),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("multiple",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.multiple)("disableOptionCentering",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.disableOptionCentering)("formControl",n.context.control),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.options)}}function g(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-option",5),i["\u0275\u0275text"](1),i["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;i["\u0275\u0275property"]("value",n),i["\u0275\u0275advance"](1),i["\u0275\u0275textInterpolate1"](" ",n.label," ")}}function m(e,t){if(1&e&&(i["\u0275\u0275elementStart"](0,"mat-form-field",1),i["\u0275\u0275elementStart"](1,"mat-label"),i["\u0275\u0275text"](2),i["\u0275\u0275elementEnd"](),i["\u0275\u0275element"](3,"input",6,7),i["\u0275\u0275elementStart"](7,"mat-autocomplete",8,9),i["\u0275\u0275template"](9,g,2,2,"mat-option",4),i["\u0275\u0275pipe"](10,"async"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"]()),2&e){var n=i["\u0275\u0275reference"](8),o=i["\u0275\u0275nextContext"]();i["\u0275\u0275property"]("appearance",null==o.context.pluginConfig.config?null:o.context.pluginConfig.config.appearance)("ngStyle",null==o.context.pluginConfig.config?null:o.context.pluginConfig.config.innerStyle),i["\u0275\u0275advance"](2),i["\u0275\u0275textInterpolate"](null==o.context.pluginConfig.config?null:o.context.pluginConfig.config.label),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("formControl",o.context.control)("matAutocomplete",n),i["\u0275\u0275advance"](4),i["\u0275\u0275property"]("displayWith",o.displayFn),i["\u0275\u0275advance"](2),i["\u0275\u0275property"]("ngForOf",i["\u0275\u0275pipeBind1"](10,7,o.filteredOptions))}}var d=function(){function e(e,t){this.sanitizer=e,this.context=t}return e.prototype.ngOnInit=function(){var e=this;this.filteredOptions=this.context.control.valueChanges.pipe(Object(o.startWith)(""),Object(o.map)((function(t){return e._filter(t)})))},e.prototype.displayFn=function(e){return e&&e.label},e.prototype._filter=function(e){if(null==e)return this.context.pluginConfig.config.options;var t=e;return this.context.pluginConfig.config.options.filter((function(e){return e.label.toString().toLowerCase().includes(t.toString().toLowerCase())}))},e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](l.DomSanitizer),i["\u0275\u0275directiveInject"](r.PLUGIN_CONTEXT))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["app-select"]],decls:2,vars:2,consts:[[3,"appearance","ngStyle",4,"ngIf"],[3,"appearance","ngStyle"],[3,"multiple","disableOptionCentering","formControl"],["focusRef",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matInput","",3,"formControl","matAutocomplete"],["inputRef","","focusRef","","triggerUtca","matAutocompleteTrigger"],["autoActiveFirstOption","",3,"displayWith"],["autoRef","matAutocomplete"]],template:function(e,t){1&e&&(i["\u0275\u0275template"](0,f,6,7,"mat-form-field",0),i["\u0275\u0275template"](1,m,11,9,"mat-form-field",0)),2&e&&(i["\u0275\u0275property"]("ngIf",!(null!=t.context.pluginConfig.config&&t.context.pluginConfig.config.autoselect)),i["\u0275\u0275advance"](1),i["\u0275\u0275property"]("ngIf",null==t.context.pluginConfig.config?null:t.context.pluginConfig.config.autoselect))},directives:[a.NgIf,u.MatFormField,a.NgStyle,u.MatLabel,u.MatSelect,c.NgControlStatus,c.FormControlDirective,a.NgForOf,u.MatOption,u.MatInput,c.DefaultValueAccessor,u.MatAutocompleteTrigger,u.MatAutocomplete],pipes:[a.AsyncPipe],styles:["mat-form-field[_ngcontent-%COMP%]{width:100%}"]}),e}(),s=function(){function e(){}return e.entry=d,e.\u0275mod=i["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=i["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.CommonModule,u.MatFormFieldModule,u.MatSelectModule,c.ReactiveFormsModule,u.MatInputModule,u.MatAutocompleteModule]]}),e}();t.default=s}})}));