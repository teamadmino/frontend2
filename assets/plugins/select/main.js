!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.@angular/material","adm.rxjs/operators","adm.shared","adm.@angular/platform-browser","adm.@angular/core"],e):"object"==typeof exports?exports.select=e(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.@angular/material"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/platform-browser"),require("adm.@angular/core")):t.select=e(t["adm.@angular/common"],t["adm.@angular/forms"],t["adm.@angular/material"],t["adm.rxjs/operators"],t["adm.shared"],t["adm.@angular/platform-browser"],t["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(t,e,n,o,i,l,r){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,(function(e){return t[e]}).bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/assets/plugins/select",n(n.s=0)}({0:function(t,e,n){t.exports=n("P+m1")},"0S4P":function(e,n){e.exports=t},"3xDq":function(t,n){t.exports=e},EdK2:function(t,e){t.exports=n},"P+m1":function(t,e,n){"use strict";n.r(e),n.d(e,"SelectModule",function(){return h});var o=n("vOrQ"),i=n("aP7H"),l=n("cfyg"),r=n("vG+p"),a=n("0S4P"),u=n("EdK2"),c=n("3xDq"),f=["selectRef"];function g(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-option",7),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;o["\u0275\u0275property"]("value",n.value),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",n.label," ")}}function p(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-select",4,5),o["\u0275\u0275template"](2,g,2,2,"mat-option",6),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("multiple",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.multiple)("disableOptionCentering",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.disableOptionCentering)("formControl",n.context.control),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngForOf",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.options)}}function m(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"option",7),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;o["\u0275\u0275property"]("value",n.value),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",n.label," ")}}function s(t,e){if(1&t){var n=o["\u0275\u0275getCurrentView"]();o["\u0275\u0275elementStart"](0,"select",8,9),o["\u0275\u0275listener"]("change",function(t){return o["\u0275\u0275restoreView"](n),o["\u0275\u0275nextContext"](2).selectChange(t)}),o["\u0275\u0275template"](3,m,2,2,"option",6),o["\u0275\u0275elementEnd"]()}if(2&t){var i=o["\u0275\u0275nextContext"](2);o["\u0275\u0275property"]("multiple",null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.multiple),o["\u0275\u0275advance"](3),o["\u0275\u0275property"]("ngForOf",null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.options)}}var d=function(t,e,n,o){return{"full-width":t,"auto-size":e,"remove-bottom-margin":n,mini:o}};function x(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-form-field",1),o["\u0275\u0275elementStart"](1,"mat-label"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275template"](3,p,3,4,"mat-select",2),o["\u0275\u0275template"](4,s,4,2,"select",3),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("appearance",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.appearance)("ngStyle",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.innerStyle)("ngClass",o["\u0275\u0275pureFunction4"](7,d,!(null!=n.context.pluginConfig.config&&n.context.pluginConfig.config.autoSize),null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.autoSize,null==n.context.pluginConfig||null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.removeBottomMargin,null==n.context.pluginConfig?null:n.context.pluginConfig.config.miniSelect))("color",null!=n.context.pluginConfig.config&&n.context.pluginConfig.config.color?null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.color:""),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.label),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",!(null!=n.context.pluginConfig.config&&n.context.pluginConfig.config.useNative)),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==n.context.pluginConfig.config?null:n.context.pluginConfig.config.useNative)}}function C(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-option",7),o["\u0275\u0275text"](1),o["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit;o["\u0275\u0275property"]("value",n),o["\u0275\u0275advance"](1),o["\u0275\u0275textInterpolate1"](" ",n.label," ")}}function v(t,e){if(1&t&&(o["\u0275\u0275elementStart"](0,"mat-form-field",1),o["\u0275\u0275elementStart"](1,"mat-label"),o["\u0275\u0275text"](2),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](3,"input",10,11),o["\u0275\u0275elementStart"](7,"mat-autocomplete",12,13),o["\u0275\u0275template"](9,C,2,2,"mat-option",6),o["\u0275\u0275pipe"](10,"async"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"]()),2&t){var n=o["\u0275\u0275reference"](8),i=o["\u0275\u0275nextContext"]();o["\u0275\u0275property"]("appearance",null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.appearance)("ngStyle",null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.innerStyle)("ngClass",o["\u0275\u0275pureFunction4"](11,d,!(null!=i.context.pluginConfig.config&&i.context.pluginConfig.config.autoSize),null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.autoSize,null==i.context.pluginConfig?null:i.context.pluginConfig.config.removeBottomMargin,null==i.context.pluginConfig?null:i.context.pluginConfig.config.miniSelect))("color",null!=i.context.pluginConfig.config&&i.context.pluginConfig.config.color?null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.color:""),o["\u0275\u0275advance"](2),o["\u0275\u0275textInterpolate"](null==i.context.pluginConfig.config?null:i.context.pluginConfig.config.label),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("formControl",i.context.control)("matAutocomplete",n),o["\u0275\u0275advance"](4),o["\u0275\u0275property"]("displayWith",i.displayFn),o["\u0275\u0275advance"](2),o["\u0275\u0275property"]("ngForOf",o["\u0275\u0275pipeBind1"](10,9,i.filteredOptions))}}var y=function(){function t(t,e){this.sanitizer=t,this.context=e}return t.prototype.setNativeValue=function(){this.nativeSelect&&(this.nativeSelect.nativeElement.value=this.context.control.value)},t.prototype.ngOnInit=function(){var t=this;this.context.update$.pipe(Object(i.takeUntil)(this.context.destroy$)).subscribe(function(e){t.context.cd.detectChanges(),t.nativeSelect&&(t.nativeSelect.nativeElement.value=t.context.control.value)}),this.context.control.valueChanges.pipe(Object(i.takeUntil)(this.context.destroy$)).subscribe(function(e){t.context.contentSizeChanged$.next()}),this.filteredOptions=this.context.control.valueChanges.pipe(Object(i.startWith)(""),Object(i.map)(function(e){return t._filter(e)}))},t.prototype.selectChange=function(t){this.context.control.setValue(t.currentTarget.value)},t.prototype.displayFn=function(t){return t&&t.label},t.prototype._filter=function(t){if(null==t)return this.context.pluginConfig.config.options;var e=t;return this.context.pluginConfig.config.options.filter(function(t){return t.label.toString().toLowerCase().includes(e.toString().toLowerCase())})},t.prototype.ngAfterViewInit=function(){var t=this;this.setNativeValue(),this.timeout=setTimeout(function(){t.context.contentSizeChanged$.next()})},t.prototype.ngOnDestroy=function(){clearTimeout(this.timeout)},t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275directiveInject"](r.DomSanitizer),o["\u0275\u0275directiveInject"](l.PLUGIN_CONTEXT))},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["app-select"]],viewQuery:function(t,e){var n;1&t&&o["\u0275\u0275viewQuery"](f,!0,o.ElementRef),2&t&&o["\u0275\u0275queryRefresh"](n=o["\u0275\u0275loadQuery"]())&&(e.nativeSelect=n.first)},decls:2,vars:2,consts:[[3,"appearance","ngStyle","ngClass","color",4,"ngIf"],[3,"appearance","ngStyle","ngClass","color"],[3,"multiple","disableOptionCentering","formControl",4,"ngIf"],["matNativeControl","",3,"multiple","change",4,"ngIf"],[3,"multiple","disableOptionCentering","formControl"],["focusRef",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["matNativeControl","",3,"multiple","change"],["focusRef","","selectRef",""],["matInput","",3,"formControl","matAutocomplete"],["inputRef","","focusRef","","triggerUtca","matAutocompleteTrigger"],["autoActiveFirstOption","",3,"displayWith"],["autoRef","matAutocomplete"]],template:function(t,e){1&t&&(o["\u0275\u0275template"](0,x,5,12,"mat-form-field",0),o["\u0275\u0275template"](1,v,11,16,"mat-form-field",0)),2&t&&(o["\u0275\u0275property"]("ngIf",!(null!=e.context.pluginConfig.config&&e.context.pluginConfig.config.autoselect)),o["\u0275\u0275advance"](1),o["\u0275\u0275property"]("ngIf",null==e.context.pluginConfig.config?null:e.context.pluginConfig.config.autoselect))},directives:[a.NgIf,u.MatFormField,a.NgStyle,a.NgClass,u.MatLabel,u.MatSelect,c.NgControlStatus,c.FormControlDirective,a.NgForOf,u.MatOption,u.MatInput,c.NgSelectOption,c["\u0275angular_packages_forms_forms_x"],c.DefaultValueAccessor,u.MatAutocompleteTrigger,u.MatAutocomplete],pipes:[a.AsyncPipe],styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]  mat-form-field.auto-size, [_nghost-%COMP%]  mat-form-field.auto-size .mat-form-field-infix, [_nghost-%COMP%]  mat-form-field.auto-size mat-select, [_nghost-%COMP%]  mat-form-field.auto-size select{width:auto}[_nghost-%COMP%]  mat-form-field.auto-size .mat-select-value{max-width:100%;width:auto}[_nghost-%COMP%]  mat-form-field.mini .mat-form-field-wrapper{padding-bottom:0!important}[_nghost-%COMP%]  mat-form-field.mini .mat-form-field-infix{border-top:none;padding:0}[_nghost-%COMP%]  mat-form-field.mini .mat-form-field-underline{display:none}"]}),t}(),h=function(){function t(){}return t.entry=y,t.\u0275mod=o["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=o["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},imports:[[a.CommonModule,u.MatFormFieldModule,u.MatSelectModule,c.ReactiveFormsModule,u.MatInputModule,u.MatAutocompleteModule]]}),t}();e.default=h},aP7H:function(t,e){t.exports=o},cfyg:function(t,e){t.exports=i},"vG+p":function(t,e){t.exports=l},vOrQ:function(t,e){t.exports=r}})});