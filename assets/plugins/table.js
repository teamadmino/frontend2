(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("ng.animations"), require("ng.common"), require("ng.core"), require("ng.platform-browser"), require("core.lodash"), require("core.rxjs"), require("core.rxjs.operators"), require("core.shared"), require("core.tslib"));
	else if(typeof define === 'function' && define.amd)
		define(["ng.animations", "ng.common", "ng.core", "ng.platform-browser", "core.lodash", "core.rxjs", "core.rxjs.operators", "core.shared", "core.tslib"], factory);
	else if(typeof exports === 'object')
		exports["table"] = factory(require("ng.animations"), require("ng.common"), require("ng.core"), require("ng.platform-browser"), require("core.lodash"), require("core.rxjs"), require("core.rxjs.operators"), require("core.shared"), require("core.tslib"));
	else
		root["table"] = factory(root["ng.animations"], root["ng.common"], root["ng.core"], root["ng.platform-browser"], root["core.lodash"], root["core.rxjs"], root["core.rxjs.operators"], root["core.shared"], root["core.tslib"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__angular_animations__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE_shared__, __WEBPACK_EXTERNAL_MODULE_tslib__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: TableModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_table_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table/table.module */ "./src/table/table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return _table_table_module__WEBPACK_IMPORTED_MODULE_0__["TableModule"]; });



/* harmony default export */ __webpack_exports__["default"] = (_table_table_module__WEBPACK_IMPORTED_MODULE_0__["TableModule"]);


/***/ }),

/***/ "./src/table/admino-table2/admino-table2.animation.ts":
/*!************************************************************!*\
  !*** ./src/table/admino-table2/admino-table2.animation.ts ***!
  \************************************************************/
/*! exports provided: adminoTableAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminoTableAnimation", function() { return adminoTableAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "@angular/animations");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_animations__WEBPACK_IMPORTED_MODULE_0__);

var inEasing = " ease-in";
var outEasing = " ease-out";
var inOutEasing = " cubic-bezier(.75,-0.5,0,1.75)";
var elastic = " cubic-bezier(.42,1.4,.58,1.01)";
var adminoTableAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])("adminoTableRowAnimation", [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])("* => true", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(".cell-content", [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.2s", Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))])]),
]);


/***/ }),

/***/ "./src/table/admino-table2/admino-table2.buffer.ts":
/*!*********************************************************!*\
  !*** ./src/table/admino-table2/admino-table2.buffer.ts ***!
  \*********************************************************/
/*! exports provided: AdminoTableBufferData, AdminoTableBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminoTableBufferData", function() { return AdminoTableBufferData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminoTableBuffer", function() { return AdminoTableBuffer; });
var AdminoTableBufferData = /** @class */ (function () {
    function AdminoTableBufferData() {
    }
    return AdminoTableBufferData;
}());

var AdminoTableBuffer = /** @class */ (function () {
    function AdminoTableBuffer() {
        this.container = [];
        this.maxBufferSize = 10000;
        // // get element at index 11 (you want the 11th item in the array)
        // eleventh = container[(index + 11) % maxlen];
        // // get element at index 11 (you want the 11th item in the array)
        // thirtyfifth = container[(index + 35) % maxlen];
        // // print out all 100 elements that we have left in the array, note
        // // that it doesn't matter if we address past 100 - circular buffer
        // // so we'll simply get back to the beginning if we do that.
        // for(i = 0; i < 200; i++) {
        // document.write(container[(index + i) % maxlen] + "<br>\n");
        // // private cache: Map<any, EmbeddedViewRef<any>> = new Map<any, EmbeddedViewRef<any>>();
        // private collectionCache = [];
        // fillSpaces(start, end) {
        //     let a = 0;
        //     for (let i = start; i < end; i++) {
        //         const el = this.collectionCache[i];
        //         if (!el) {
        //             this.collectionCache[i] = {};
        //         }
        //         a++;
        //     }
        // }
        // clearData() {
        //     Object.keys(this.collectionCache).forEach((key) => {
        //         delete this.collectionCache[key];
        //     });
        // }
        // patchData(data) {
        //     Object.keys(data).forEach((key) => {
        //         if (!this.collectionCache[key]) {
        //             this.collectionCache[key] = {};
        //         }
        //         Object.assign(this.collectionCache[key], data[key]);
        //     });
        //     // console.log(this.cache);
        // }
    }
    AdminoTableBuffer.prototype.set = function (index, data) {
        var bufferindex = index % this.maxBufferSize;
        var bufferdata = this.container[bufferindex];
        if (bufferdata) {
            bufferdata.index = index;
            bufferdata.data = data;
            bufferdata.bufferindex = bufferindex;
        }
        else {
            this.container[bufferindex] = { index: index, data: data, bufferindex: bufferindex };
        }
    };
    AdminoTableBuffer.prototype.get = function (index) {
        var bufferdata = this.container[index % this.maxBufferSize];
        if (bufferdata) {
            if (bufferdata.index !== index) {
                if (bufferdata.data) {
                    delete bufferdata.data;
                    bufferdata.index = index;
                }
            }
            // // console.log(bufferdata.index, index);
        }
        return bufferdata;
    };
    AdminoTableBuffer.prototype.clear = function (startIndex, endIndex) {
        var start = startIndex <= endIndex ? startIndex : endIndex;
        var end = startIndex <= endIndex ? endIndex : startIndex;
        for (var index = start; index <= end; index++) {
            var bufferdata = this.container[index % this.maxBufferSize];
            if (bufferdata) {
                // bufferdata.index = index;
                // if (bufferdata.data) {
                //     // for (const key of Object.keys(bufferdata.data)) {
                //     delete bufferdata.data;
                //     // }
                // }
                console.log("delete,", bufferdata.data);
                for (var _i = 0, _a = Object.keys(bufferdata); _i < _a.length; _i++) {
                    var key = _a[_i];
                    delete bufferdata[key];
                }
                // delete bufferdata.data;
            }
        }
    };
    AdminoTableBuffer.prototype.clearAll = function () {
        this.container.forEach(function (bdata) {
            var bufferdata = bdata;
            if (bufferdata) {
                bufferdata.index = -1;
                for (var _i = 0, _a = Object.keys(bufferdata); _i < _a.length; _i++) {
                    var key = _a[_i];
                    delete bufferdata[key];
                }
            }
        });
    };
    return AdminoTableBuffer;
}());



/***/ }),

/***/ "./src/table/admino-table2/admino-table2.component.ts":
/*!************************************************************!*\
  !*** ./src/table/admino-table2/admino-table2.component.ts ***!
  \************************************************************/
/*! exports provided: AdminoTable2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminoTable2Component", function() { return AdminoTable2Component; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admino_table2_datasource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admino-table2.datasource */ "./src/table/admino-table2/admino-table2.datasource.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _admino_table2_animation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admino-table2.animation */ "./src/table/admino-table2/admino-table2.animation.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_8__);












var _c0 = ["tableRef"];
var _c1 = ["scrollerRef"];
var _c2 = ["fakeContentRef"];
var _c3 = ["scrollerContentRef"];
var _c4 = ["bodyRef"];
var _c5 = ["headerRef"];
var _c6 = ["mainRef"];
function AdminoTable2Component_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminoTable2Component_div_2_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); var i_r12 = ctx.index; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r13.setSelectedHeader(i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r11 = ctx.$implicit;
    var i_r12 = ctx.index;
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r10.getHeaderContainerStyle(column_r11, i_r12));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", column_r11.description, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"])("ngStyle", ctx_r10.getHeaderStyle(column_r11, i_r12));
} }
var _c7 = function (a0) { return { height: a0 }; };
function AdminoTable2Component_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AdminoTable2Component_div_2_div_2_Template, 2, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](2, _c7, ctx_r1.headerHeight + "px"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.dataSource.columns);
} }
function AdminoTable2Component_div_16_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 29);
} if (rf & 2) {
    var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r20.oddRowStyle);
} }
function AdminoTable2Component_div_16_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 30);
} if (rf & 2) {
    var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    var column_r18 = ctx_r23.$implicit;
    var i_r19 = ctx_r23.index;
    var vrow_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r22.getBarStyle(column_r18, vrow_r15.data && vrow_r15.data.data, i_r19));
} }
var _c8 = function (a0, a1, a2, a3) { return { columnselected: a0, columnnavigation: a1, first: a2, last: a3 }; };
function AdminoTable2Component_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminoTable2Component_div_16_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); var i_r19 = ctx.index; var vrow_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r25.setSelected(vrow_r15.data, i_r19, "cellClick"); })("dblclick", function AdminoTable2Component_div_16_div_1_Template_div_dblclick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); var i_r19 = ctx.index; var vrow_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r28.setSelected(vrow_r15.data, i_r19, "cellDoubleClick"); })("contextmenu", function AdminoTable2Component_div_16_div_1_Template_div_contextmenu_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r27); var i_r19 = ctx.index; var vrow_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r30.onContextMenu($event, vrow_r15, i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminoTable2Component_div_16_div_1_div_1_Template, 1, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 26, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AdminoTable2Component_div_16_div_1_div_4_Template, 1, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var column_r18 = ctx.$implicit;
    var i_r19 = ctx.index;
    var vrow_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction4"](6, _c8, ctx_r17.dataSource.cursorAbsPos === vrow_r15.absoluteId && i_r19 === ctx_r17.dataSource.state.selectedColumnIndex, ctx_r17.activeRow === vrow_r15.absoluteId && i_r19 === ctx_r17.dataSource.state.navigationColumnIndex, i_r19 === 0, i_r19 === ctx_r17.dataSource.columns.length - 1))("ngStyle", ctx_r17.getContainerStyle(column_r18, vrow_r15.data && vrow_r15.data.data, i_r19, vrow_r15));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", vrow_r15.absoluteId % 2 === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx_r17.getStyle(column_r18, vrow_r15.data && vrow_r15.data.data, i_r19))("innerHtml", ctx_r17.format(ctx_r17.getCellContent(vrow_r15, column_r18), column_r18.format), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", vrow_r15.data && vrow_r15.data.data && vrow_r15.data.data.styles && vrow_r15.data.data.styles[column_r18.id] && vrow_r15.data.data.styles[column_r18.id].barStyle);
} }
var _c9 = function (a0, a1, a2) { return { rowselected: a0, evenrow: a1, lastrow: a2 }; };
function AdminoTable2Component_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AdminoTable2Component_div_16_div_1_Template, 5, 11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vrow_r15 = ctx.$implicit;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction3"](5, _c9, vrow_r15.absoluteId === ctx_r7.dataSource.cursorAbsPos, vrow_r15.absoluteId % 2 === 0, vrow_r15.absoluteId === ctx_r7.dataSource.totalsize - 1))("ngStyle", ctx_r7.getRowStyle(vrow_r15))("@adminoTableRowAnimation", vrow_r15.data && vrow_r15.data.data !== undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.dataSource.columns)("ngForTrackBy", ctx_r7.trackByFnCell);
} }
function AdminoTable2Component_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "notfittingRowHeight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "datasource abs position");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "not fitting rowheight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "rowStart - rowEnd");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "totalsize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "visibleRowCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "scrollPosCoeff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "smallPage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "scrollPosCoeffNormal");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "scrollTop");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "maxScrollPos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "fakeScrollerHeight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "cursorpos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](76, "activeRow");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "largePage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](84, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87, "largePageSize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](92, "largePageCoeff");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "lastLargePage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "adjustedTotalsize");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](107, "rowCountOnLastLargePage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](108, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](110, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "rowHeight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](114, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](116, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "numOfRowSlots");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](120, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](122, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "viewportHeight");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](128, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.notfittingRowHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.dataSource.cursorAbsPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.notfittingRowHeight);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r8.rowStart, " - ", ctx_r8.rowEnd, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](29, 24, ctx_r8.totalsize));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.visibleRowCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.scrollPosCoeff);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.smallPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.scrollPosCoeffNormal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.scrollPos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](60, 26, ctx_r8.maxScrollPos));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](66, 28, ctx_r8.fakeScrollerHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.dataSource.state.cursorpos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.activeRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](84, 30, ctx_r8.largePage));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.largePageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.largePageCoeff);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.lastLargePage);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.adjustedTotalsize);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](110, 32, ctx_r8.rowCountOnLastLargePage));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](116, 34, ctx_r8.rowHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](122, 36, ctx_r8.viewportSize / ctx_r8.rowHeight));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](128, 38, ctx_r8.viewportSize));
} }
var _c10 = function (a0) { return { hidetable: a0 }; };
var _c11 = function (a0) { return { "d-none": a0 }; };
var _c12 = function (a0, a1) { return { show: a0, bottom: a1 }; };
var AdminoTable2Component = /** @class */ (function () {
    function AdminoTable2Component(cd, formatService, sanitizer // private tooltip: AdminoTooltipService, // private ts: AdminoThemeService
    ) {
        this.cd = cd;
        this.formatService = formatService;
        this.sanitizer = sanitizer;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellDoubleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.headerCellClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.cellContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this._autoRefresh = 0;
        this.columnWidths = [];
        this.colPositions = [];
        this.stickyBreakpoints = [];
        this.cumulatedColumnWidth = 0;
        this.vrows = [];
        this.oddRowStyle = {};
        this.headerHeight = 50;
        this.rowHeight = 50;
        this.hideHeader = false;
        this.debug = false;
        this.selectedRowStyle = {};
        this.selectedCellStyle = {};
        this.rowMenu = {};
        this.inactiveSelectedRowStyle = {};
        this.inactiveSelectedCellStyle = {};
        this.navigationCellStyle = {};
        this.inactiveNavigationCellStyle = {};
        this.viewportSize = 0;
        this.browserMaxSize = 0;
        // largePagination
        this.largePage = 0;
        this.calculatedLargePageSize = 30000;
        this.largePageSize = 0;
        this.lastLargePage = 0;
        this.rowCountOnLastLargePage = 0;
        this.notfittingRowHeight = 0;
        // smallPagination
        this.smallPage = 0;
        this.visibleRowCount = 0;
        this.scrollPos = 0;
        this.maxScrollPos = 0;
        this.prevScrollPos = 0;
        this.scrollPosCoeff = 0;
        this.scrollPosCoeffNormal = 0;
        this.scrollBarWidth = 0;
        this.largePageCoeff = 0;
        //
        this.totalsize = -1;
        this.adjustedTotalsize = 0;
        this.scrollPercent = 1;
        this.fakeScrollerHeight = 0;
        this.manualScroll = false;
        this.rowStart = 0;
        this.rowEnd = 0;
        this.prevRowStart = -1;
        this.prevRowEnd = -1;
        this.asd = 100;
        this.leavespace = 2;
        this.activeRow = 0;
        this.activeRowPos = 0;
        this.keyOverrides = [];
        this.isFocused = false;
    }
    Object.defineProperty(AdminoTable2Component.prototype, "columns", {
        get: function () {
            return this._columns;
        },
        set: function (v) {
            this._columns = v;
            this.updateColumns();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdminoTable2Component.prototype, "indexes", {
        get: function () {
            return this._indexes;
        },
        set: function (v) {
            this._indexes = v;
            this.dataSource.indexes = this.indexes;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AdminoTable2Component.prototype, "autoRefresh", {
        get: function () {
            return this._autoRefresh;
        },
        set: function (v) {
            this._autoRefresh = v;
            this.dataSource.autoRefresh = this.autoRefresh;
            this.dataSource.setAutoRefresh();
        },
        enumerable: false,
        configurable: true
    });
    // @HostListener('window:resize', ['$event'])
    AdminoTable2Component.prototype.resize = function (event) {
        // this.updateSize();
        this.scrollEvent();
        this.reinit();
    };
    AdminoTable2Component.prototype.mouseUp = function (event) {
        this.manualScroll = false;
    };
    AdminoTable2Component.prototype.onKeydownHandler = function (event) {
        if (this.keyOverrides.find(function (override) {
            return override.key === "any" || (override.key === event.key && override.trigger === "keydown");
        })) {
            console.log("OVERRIDE");
            return;
        }
        var cursorpos = this.dataSource.state.cursorpos;
        var leavespace = 2;
        switch (event.key) {
            case "ArrowDown":
                this.goDownBy(1);
                event.preventDefault();
                break;
            case "ArrowUp":
                this.goUpBy(1);
                event.preventDefault();
                break;
            case "Home":
                this.gotoPos(0);
                this.setActiveRow(0);
                // this.dataSource.state.keys = { '#position': 'first' };
                // this.dataSource.state.cursorpos = 0;
                // this.dataSource.loadData().then(() => {
                //   this.gotoPos(this.dataSource.viewpos);
                // });
                event.preventDefault();
                break;
            case "End":
                this.gotoPos(this.adjustedTotalsize);
                this.setActiveRow(this.totalsize - 1);
                // this.dataSource.state.keys = { '#position': 'last' };
                // this.dataSource.loadData().then(() => {
                //   this.gotoPos(this.dataSource.viewpos);
                // });
                event.preventDefault();
                break;
            case "PageUp":
                if (this.activeRow > this.rowStart && this.activeRow < this.rowEnd) {
                    this.goUpBy(this.activeRow - this.rowStart);
                }
                else {
                    this.goUpBy(this.visibleRowCount - 2);
                }
                event.preventDefault();
                break;
            case "PageDown":
                if (this.activeRow > this.rowStart && this.activeRow < this.rowEnd) {
                    this.goDownBy(this.rowEnd - this.activeRow);
                }
                else {
                    this.goDownBy(this.visibleRowCount - 2);
                }
                event.preventDefault();
                break;
            case "Enter":
                this.setSelected(this.dataSource.buffer.get(this.activeRow), this.dataSource.state.navigationColumnIndex, "cellDoubleClick");
                event.preventDefault();
                break;
            case " ":
                this.setSelected(this.dataSource.buffer.get(this.activeRow), this.dataSource.state.navigationColumnIndex, "cellClick");
                event.preventDefault();
                break;
            case "ArrowRight":
                if (this.dataSource.state.navigationColumnIndex < this.dataSource.columns.length - 1) {
                    this.dataSource.state.navigationColumnIndex++;
                    this.handleCellChange();
                }
                event.preventDefault();
                break;
            case "ArrowLeft":
                console.log(this.dataSource.state.navigationColumnIndex);
                if (this.dataSource.state.navigationColumnIndex > 0) {
                    this.dataSource.state.navigationColumnIndex--;
                    this.handleCellChange();
                }
                event.preventDefault();
                break;
            default:
                break;
        }
    };
    AdminoTable2Component.prototype.goDownBy = function (num) {
        if (this.totalsize <= 1) {
            return;
        }
        if (this.activeRow < this.rowStart) {
            this.gotoPos(this.activeRow);
        }
        else if (this.activeRow > this.rowEnd && this.rowEnd !== this.totalsize - 1) {
            this.gotoPos(this.activeRow - this.visibleRowCount + 2, true);
        }
        else {
            if (this.activeRow + num < this.totalsize) {
                this.activeRow += num;
            }
            else {
                this.activeRow = this.totalsize - 1;
            }
            if (this.activeRow > this.rowEnd - 1) {
                this.gotoPos(this.activeRow - this.visibleRowCount + 2, true);
            }
        }
        this.dataSource.state.navigationRowIndex = this.activeRow;
    };
    AdminoTable2Component.prototype.goUpBy = function (num) {
        console.log("up");
        if (this.activeRow < this.rowStart) {
            this.gotoPos(this.activeRow);
        }
        else if (this.activeRow > this.rowEnd && this.rowEnd !== this.totalsize - 1) {
            console.log(this.activeRow, this.totalsize, this.rowEnd);
            this.gotoPos(this.activeRow - this.visibleRowCount + 2, true);
        }
        else {
            if (this.activeRow - num >= 0) {
                this.activeRow -= num;
            }
            else {
                this.activeRow = 0;
            }
            if (this.activeRow <= this.rowStart) {
                if (this.activeRow === this.rowStart && this.rowEnd === this.totalsize - 1) {
                    this.setToExactRow(1);
                }
                else if (this.rowEnd === this.totalsize - 1) {
                    this.setToExactRow(-1);
                }
                else {
                    this.setToExactRow(1);
                }
            }
            if (this.activeRow < this.rowStart) {
                this.gotoPos(this.activeRow);
            }
        }
        this.dataSource.state.navigationRowIndex = this.activeRow;
    };
    AdminoTable2Component.prototype.setToExactRow = function (dir) {
        var remainder = this.tableRef.nativeElement.scrollTop % this.rowHeight;
        if (remainder !== 0) {
            if (dir < 0) {
                this.tableRef.nativeElement.scrollTop -= remainder - this.rowHeight;
            }
            else {
                this.tableRef.nativeElement.scrollTop -= remainder;
            }
        }
    };
    // setToExactRowFromBottom(dir) {
    //   const remainder = this.tableRef.nativeElement.scrollTop % this.rowHeight;
    //   if (remainder !== 0) {
    //     if (dir < 0) {
    //       this.tableRef.nativeElement.scrollTop -= remainder - this.rowHeight;
    //     } else {
    //       this.tableRef.nativeElement.scrollTop -= remainder;
    //     }
    //   }
    // }
    AdminoTable2Component.prototype.relativeScroll = function (px) {
        this.tableRef.nativeElement.scrollTop += px;
        // this.setToExactRow(px);
    };
    AdminoTable2Component.prototype.getKeyAtCursor = function (cursorpos) {
        if (this.dataSource.data && this.dataSource.data.data[cursorpos]) {
            return this.dataSource.data.data[cursorpos];
        }
    };
    AdminoTable2Component.prototype.setKeys = function (data) {
        this.dataSource.setKeys(data);
        this.valueChange.next(this.dataSource.state);
    };
    AdminoTable2Component.prototype.ngOnInit = function () {
        this.browserMaxSize = this.calcMaxBrowserScrollSize();
        this.scrollBarWidth = 7;
        // this.getScrollbarWidth();
    };
    AdminoTable2Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        // setTimeout((params) => {
        //   this.gotoPos(29);
        //   this.setActiveRow(37)
        // }, 1000)
        this.dataSource.loadDataStart.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (value) {
            _this.valueChange.next(value);
        });
        this.dataSource
            .connect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(function (data) {
            if (data) {
                if (_this.totalsize !== _this.dataSource.totalsize) {
                    _this.totalsize = _this.dataSource.totalsize;
                    _this.updateSize();
                    _this.pageChange();
                    _this.cd.detectChanges();
                    _this.calculateWidths();
                }
                _this.updateRows();
                _this.refreshVrows();
                _this.cd.detectChanges();
            }
            _this.valueChange.next(_this.dataSource.state);
        });
        this.reinit();
        this.timeoutHelper = setTimeout(function (params) {
            _this.reinit();
            _this.updateDataSource(true);
        });
    };
    AdminoTable2Component.prototype.reinit = function () {
        this.updateSize();
        this.updateRows();
        this.pageChange();
        this.cd.detectChanges();
        this.calculateWidths();
        this.prevRowStart = this.rowStart;
        this.prevRowEnd = this.rowEnd;
    };
    AdminoTable2Component.prototype.onContextMenu = function (e, vrow, i) {
        var _a, _b;
        this.setSelected(vrow.data, i);
        this.cellContextMenu.next({
            keys: (_b = (_a = vrow.data) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.origData,
            rowAbsoluteIndex: vrow.absoluteId,
            column: i,
            mouseX: e.pageX,
            mouseY: e.pageY,
        });
    };
    AdminoTable2Component.prototype.setSelectedHeader = function (columnIndex) {
        this.dataSource.state.selectedHeaderColumnIndex = columnIndex;
        this.headerCellClick.next();
    };
    AdminoTable2Component.prototype.setActiveRow = function (index, posInView) {
        if (posInView === void 0) { posInView = null; }
        this.activeRow = index;
        this.activeRowPos = 0;
        this.dataSource.state.navigationRowIndex = this.activeRow;
    };
    AdminoTable2Component.prototype.setSelected = function (bufferdata, columnIndex, fireEvent) {
        if (columnIndex === void 0) { columnIndex = null; }
        if (fireEvent === void 0) { fireEvent = null; }
        if (bufferdata && bufferdata.data && bufferdata.data.processedData) {
            this.dataSource.cursorAbsPos = bufferdata.index;
            this.activeRow = bufferdata.index;
            this.dataSource.state.navigationRowIndex = this.activeRow;
            this.setPrevValues();
            this.setKeys(bufferdata.data.origData);
            // this.dataSource.state.keys = bufferdata.index - this.rowStart;
            if (columnIndex !== null) {
                this.dataSource.state.selectedColumnIndex = columnIndex;
                this.dataSource.state.navigationColumnIndex = columnIndex;
            }
            if (fireEvent === "cellClick") {
                this.cellClick.next();
            }
            else if (fireEvent === "cellDoubleClick") {
                this.cellDoubleClick.next();
            }
        }
        this.handleCellChange();
        this.cd.detectChanges();
    };
    AdminoTable2Component.prototype.setPrevValues = function () {
        this.dataSource.state.prevKeys = this.dataSource.state.keys;
        this.dataSource.state.prevSelectedColumnIndex = this.dataSource.state.selectedColumnIndex;
    };
    AdminoTable2Component.prototype.handleCellChange = function () {
        var col = this.dataSource.state.navigationColumnIndex;
        var getpos = this.columnWidths.reduce(function (prev, curr, i) { return (i < col ? prev + curr : prev); }, 0);
        var getw = this.columnWidths[col];
        var getwpos = getpos + getw;
        var vpw = this.tableRef.nativeElement.clientWidth;
        var sp = this.tableRef.nativeElement.scrollLeft;
        if (getwpos > sp + vpw) {
            this.tableRef.nativeElement.scrollLeft = getpos - (vpw - getw);
        }
        else if (getpos < sp) {
            this.tableRef.nativeElement.scrollLeft = getpos;
        }
        this.cellChange.next();
    };
    AdminoTable2Component.prototype.gotoPos = function (absoluteId, bottomFixed) {
        if (absoluteId === void 0) { absoluteId = 0; }
        if (bottomFixed === void 0) { bottomFixed = false; }
        var lastRowFix = 0;
        if (absoluteId >= this.adjustedTotalsize) {
            absoluteId = this.adjustedTotalsize - 0.0001;
            lastRowFix = this.notfittingRowHeight;
        }
        var targetPage = this.largePageSize > 0 ? Math.floor(absoluteId / this.largePageSize) : 0;
        this.largePage = targetPage;
        this.pageChange();
        // + this.notfittingRowHeight
        var remainder = this.largePageSize > 0 ? absoluteId % this.largePageSize : 0;
        this.scrollPos = this.tableRef.nativeElement.scrollTop =
            (remainder + this.largePageCoeff) * this.rowHeight +
                lastRowFix +
                (bottomFixed && this.notfittingRowHeight !== this.rowHeight ? this.notfittingRowHeight : 0);
        // && absoluteId > this.adjustedTotalsize - 1;
        // this.updateRows();
        this.updateRowStartEnd();
        // this.refreshVrows();
    };
    AdminoTable2Component.prototype.showIndicator = function () {
        // this.vrows.push({ virtualId: this.vrows.length, absoluteId: this.vrows.length, pos: 0 });
        var rowend = this.rowEnd > this.totalsize - 1 ? this.totalsize - 1 : this.rowEnd;
        var searchRowId = this.scrollDirection >= 1 ? rowend : this.rowStart;
        var found = this.vrows.find(function (vrow) {
            return vrow.absoluteId === searchRowId;
        });
        return (found && found.data && found.data.data && found.data.data.origData) || this.dataSource.totalsize <= 0 ? false : true;
    };
    AdminoTable2Component.prototype.scrollbarMouseDown = function () {
        this.manualScroll = true;
    };
    AdminoTable2Component.prototype.scrollbarScroll = function (e) {
        if (this.manualScroll) {
            var target = (this.scrollerRef.nativeElement.scrollTop /
                (this.scrollerRef.nativeElement.scrollHeight - this.scrollerRef.nativeElement.clientHeight)) *
                this.adjustedTotalsize;
            this.gotoPos(target);
        }
    };
    AdminoTable2Component.prototype.scrollEvent = function () {
        this.scrollPos = this.tableRef.nativeElement.scrollTop;
        this.scrollDirection = this.prevScrollPos > this.scrollPos ? -1 : 1;
        // console.log("this.tableRef.nativeElement.scrollTop", this.tableRef.nativeElement.scrollTop)
        // console.log(this.largePage, this.lastLargePage)
        // console.log((this.rowCountOnLastLargePage + 1) * this.rowHeight - 1)
        var scrollmax = (this.rowCountOnLastLargePage + 1) * this.rowHeight +
            (this.notfittingRowHeight !== this.rowHeight ? this.notfittingRowHeight - 1 : 0);
        if (this.largePage === this.lastLargePage && this.scrollPos >= scrollmax) {
            this.scrollPos = this.tableRef.nativeElement.scrollTop = scrollmax;
            // console.log("scrollmaxoverride")
        }
        // && this.adjustedTotalsize > (this.lpage + 1) * this.lpageSize
        // console.log("scrollpos", this.scrollPos, "maxscrollpos", this.maxScrollPos)
        if (this.scrollPos >= this.maxScrollPos && this.largePage < this.lastLargePage) {
            var overshoot = Math.abs(this.maxScrollPos - this.scrollPos);
            this.largePage++;
            this.pageChange();
            console.log("pageChange up", overshoot);
            this.scrollPos = this.tableRef.nativeElement.scrollTop = this.largePage <= 1 ? this.rowHeight : overshoot + 1;
        }
        else if (this.scrollPos <= 0 && this.largePage > 0) {
            var undershoot = Math.abs(this.scrollPos);
            this.largePage--;
            this.pageChange();
            console.log("pageChange down", undershoot);
            this.scrollPos = this.tableRef.nativeElement.scrollTop =
                this.largePage >= 1 ? this.maxScrollPos - 1 : this.maxScrollPos - this.rowHeight - undershoot;
        }
        // this.scrollPosCoeffNormal + this.rowCount + ((this.rowCount) * this.spage)
        //   + this.lpage * (this.lpageSize - 1) + this.lpageCoeff * (this.lpage - 1);
        // console.log(this.scrollPos / this.maxScrollPos);
        // console.log(absPos);
        // this.scrollPercent =this.scrollPos;
        this.updateRows();
        this.scrollPercent = this.rowStart / this.adjustedTotalsize;
        if (!this.manualScroll) {
            this.scrollerRef.nativeElement.scrollTop = (this.maxScrollPos + this.notfittingRowHeight) * this.scrollPercent;
        }
        this.updateDataSource();
        // if (this.scrollPos >= this.rowHeight * this.bufferSize) {
        //   this.tableRef.nativeElement.scrollTop = this.rowHeight;
        //   this.lpage++;
        // }
        this.prevScrollPos = this.scrollPos;
        if (this.headerRef) {
            this.headerRef.nativeElement.style.marginLeft = -this.tableRef.nativeElement.scrollLeft + "px";
        }
        // console.log("scrollpos after", this.scrollPos, "maxscrollpos", this.maxScrollPos)
    };
    AdminoTable2Component.prototype.updateDataSource = function (force) {
        if (force === void 0) { force = false; }
        var currentLoadedStart = this.dataSource.viewpos;
        var currentLoadedEnd = this.dataSource.viewpos + this.dataSource.state.count;
        if (force || currentLoadedStart !== this.rowStart || currentLoadedEnd !== this.rowEnd) {
            this.refreshVrows();
            var rowCount = Math.ceil(this.viewportSize / this.rowHeight) + 1;
            var count = Math.max(this.visibleRowCount - 2, rowCount - 2);
            this.dataSource.state.count = count;
            // this.dataSource.state.cursorpos = -(this.rowStart - this.dataSource.cursorAbsPos);
            this.dataSource.state.cursorpos = this.dataSource.cursorAbsPos - this.rowStart;
            // this.dataSource.loadData();
            this.dataSource.triggerLoadData.next();
            this.cd.detectChanges();
        }
    };
    AdminoTable2Component.prototype.isEllipsisActive = function (e) {
        // return true;
        return e.offsetWidth < e.scrollWidth;
    };
    AdminoTable2Component.prototype.pageChange = function () {
        this.maxScrollPos = Math.floor(this.largePageSize * this.rowHeight);
        this.fakeScrollerHeight = this.maxScrollPos + (this.visibleRowCount - 1) * this.rowHeight;
        this.fakeContentRef.nativeElement.style.height = this.fakeScrollerHeight + "px";
        if (this.largePage > this.lastLargePage) {
            this.largePage = this.lastLargePage;
            this.scrollPos = this.tableRef.nativeElement.scrollTop = this.rowCountOnLastLargePage * this.rowHeight - 1;
        }
        this.largePageCoeff = this.largePage - 1 >= 0 ? 1 : 0;
    };
    AdminoTable2Component.prototype.updateSize = function () {
        if (this.activeRow > this.totalsize - 1) {
            this.activeRow = this.totalsize - 1;
        }
        else if (this.activeRow < 0) {
            this.activeRow = 0;
        }
        // this.calculateWidths();
        // this.cd.detectChanges();
        // this.tableRef.nativeElement.style.paddingRight = this.scrollBarWidth + 'px';
        this.viewportSize = this.tableRef.nativeElement.clientHeight;
        // const count = Math.floor(this.viewportSize / this.rowHeight);
        // this.rowHeight = Math.ceil(this.viewportSize / (count * this.rowHeight) * this.rowHeight);
        this.visibleRowCount = Math.ceil(this.viewportSize / this.rowHeight) + 1;
        if (this.totalsize === -1) {
            this.totalsize = this.visibleRowCount;
            // console.log("totatlsiz", this.tableRef.nativeElement.parentElement.parentElement.parentElement.parentElement.parentElement.clientHeight)
        }
        this.visibleRowCount = this.visibleRowCount > this.totalsize ? this.totalsize : this.visibleRowCount;
        // this.notfittingRowHeight = (Math.ceil(this.viewportSize / this.rowHeight) * this.rowHeight) - this.viewportSize;
        this.notfittingRowHeight = this.rowHeight - (this.viewportSize % this.rowHeight);
        this.calculatedLargePageSize = Math.floor((this.browserMaxSize * 0.5) / this.rowHeight);
        this.calculatedLargePageSize = 15000;
        this.adjustedTotalsize = this.totalsize - (this.visibleRowCount - 1);
        this.lastLargePage = Math.floor(this.adjustedTotalsize / this.calculatedLargePageSize);
        this.rowCountOnLastLargePage = this.adjustedTotalsize % this.calculatedLargePageSize;
        this.largePageSize = this.adjustedTotalsize > this.calculatedLargePageSize ? this.calculatedLargePageSize : this.adjustedTotalsize;
        // this.dataSource.buffer.maxBufferSize = this.lpageSize;
        // this.dataSource.buffer.maxBufferSize = 100;
        // this.lastPage = this.lpageSize - 1 > 0 ? Math.floor(this.totalsize / (this.lpageSize - 1)) : 0;
        // this.rowCountOnLastPage = this.lpageSize >= this.adjustedTotalsize ? this.adjustedTotalsize : this.adjustedTotalsize % this.lpageSize;
        // if totalsize changes and table was already scrolled
        // this.vrows = []
        // for (let i = 0; i < this.visibleRowCount; i++) {
        //   this.vrows.push({ virtualId: this.vrows.length, absoluteId: this.vrows.length, pos: 0 });
        // }
        var rowDifference = Math.abs(this.visibleRowCount - this.vrows.length);
        if (this.vrows.length < this.visibleRowCount) {
            for (var i = 0; i < rowDifference; i++) {
                // this.vrows[i] = { virtualId: i, absoluteId: i, pos: 0 };
                this.vrows.push({
                    virtualId: this.vrows.length,
                    absoluteId: this.vrows.length,
                    pos: 0,
                });
            }
        }
        else if (this.vrows.length > this.visibleRowCount) {
            for (var i = 0; i < rowDifference; i++) {
                this.vrows.pop();
            }
        }
        this.vrows.forEach(function (vrow) {
            vrow.pos = 0;
        });
        this.maxScrollPos = Math.floor(this.largePageSize * this.rowHeight);
        // this.fakeContentRef.nativeElement.style.height = this.maxScrollPos + (this.rowCount - 1) * this.rowHeight + 'px';
        this.scrollerContentRef.nativeElement.style.height =
            this.largePageSize * this.rowHeight + (this.visibleRowCount - 1) * this.rowHeight + "px";
        // this.tableRef.nativeElement.clientHeight * 5 + 'px';
        // this.fakeContentRef.nativeElement.style.width = 1 + 'px';
        // this.fakeContentRef.nativeElement.style.background = 'red';
        // this.cd.detectChanges();
        // this.calculateWidths();
    };
    AdminoTable2Component.prototype.updateRowStartEnd = function () {
        this.scrollPosCoeff = Math.floor(this.scrollPos / this.rowHeight);
        this.smallPage = Math.floor(this.scrollPosCoeff / this.visibleRowCount);
        this.scrollPosCoeffNormal = this.scrollPosCoeff - this.smallPage * this.visibleRowCount;
        this.rowStart = this.scrollPosCoeff + this.largePage * this.largePageSize - this.largePageCoeff;
        this.rowEnd = Math.max(this.rowStart + this.visibleRowCount - 1 - 1, this.rowStart);
    };
    AdminoTable2Component.prototype.updateRows = function () {
        this.updateRowStartEnd();
        for (var _i = 0, _a = this.vrows; _i < _a.length; _i++) {
            var vrow = _a[_i];
            this.updateRow(vrow);
        }
        // this.refreshVrows();
    };
    AdminoTable2Component.prototype.updateRow = function (vrow) {
        // const possibleAbsId = vrow.virtualId + this.visibleRowCount + ((this.visibleRowCount) * this.smallPage)
        //   + this.largePage * (this.largePageSize - 1) + this.largePageCoeff * (this.largePage - 1);
        var possibleAbsId = vrow.virtualId +
            this.visibleRowCount * this.smallPage +
            this.largePage * (this.largePageSize - 1) +
            this.largePageCoeff * (this.largePage - 1);
        // && possibleAbsId <= this.totalsize - 1
        if (vrow.virtualId < this.scrollPosCoeffNormal) {
            possibleAbsId += this.visibleRowCount;
            // console.log('jump', vrow.virtualId)
            if (possibleAbsId < this.totalsize) {
                vrow.absoluteId = possibleAbsId;
                // console.log("sethere")
                // console.log(vrow.absoluteId)
                vrow.pos =
                    vrow.virtualId * this.rowHeight + this.visibleRowCount * this.rowHeight + this.smallPage * this.rowHeight * this.visibleRowCount;
            }
        }
        else {
            vrow.absoluteId = possibleAbsId;
            if (vrow.absoluteId < this.totalsize) {
                vrow.pos = vrow.virtualId * this.rowHeight + this.smallPage * this.rowHeight * this.visibleRowCount;
            }
        }
    };
    AdminoTable2Component.prototype.refreshVrows = function () {
        for (var _i = 0, _a = this.vrows; _i < _a.length; _i++) {
            var vrow = _a[_i];
            var d = this.dataSource.buffer.get(vrow.absoluteId);
            vrow.data = d;
        }
    };
    AdminoTable2Component.prototype.calculateScrollers = function () {
        var showX = "hidden";
        if (this.tableRef && this.tableRef.nativeElement) {
            showX = this.cumulatedColumnWidth > this.tableRef.nativeElement.clientWidth ? "scroll" : "hidden";
        }
        return {
            "overflow-x": showX,
        };
    };
    AdminoTable2Component.prototype.calculateWidths = function () {
        // console.log(this.bodyRef.nativeElement.clientWidth, this.dataSource.state.keys);
        if (!this.bodyRef.nativeElement.children[0]) {
            console.log("returned");
            return;
        }
        var fullWidth = this.bodyRef.nativeElement.clientWidth;
        this.scrollBarWidth = this.tableRef.nativeElement.offsetWidth - this.tableRef.nativeElement.clientWidth;
        this.scrollerRef.nativeElement.style.width = this.scrollBarWidth + "px";
        // console.log(this.scrollBarWidth);
        // const trArr = (this.bodyRef.nativeElement as HTMLElement).children[0].children;
        // console.log(this.tableRef.nativeElement.offsetWidth - this.tableRef.nativeElement.clientWidth)
        // console.log(fullWidth)
        // const actionsWidth = trArr[trArr.length - 1].clientWidth;
        // const availableWidth = fullWidth - actionsWidth - this.scrollBarWidth;
        this.cumulatedColumnWidth = 0;
        var availableWidth = fullWidth;
        var max = 0;
        this.dataSource.columns.forEach(function (col) {
            max += col.length;
        });
        var prevStickies = 0;
        for (var i = 0; i < this.dataSource.columns.length; i++) {
            var col = this.dataSource.columns[i];
            this.columnWidths[i] = (availableWidth / max) * col.length;
            if (this.columnWidths[i] < col.length * 10) {
                this.columnWidths[i] = col.length * 10;
            }
            if (i > 0) {
                this.colPositions[i] = this.colPositions[i - 1] + this.columnWidths[i - 1];
            }
            else {
                this.colPositions[i] = 0;
            }
            this.stickyBreakpoints[i] = prevStickies;
            if (col.sticky) {
                prevStickies += this.columnWidths[i];
            }
            this.cumulatedColumnWidth += this.columnWidths[i];
        }
    };
    AdminoTable2Component.prototype.calcMaxBrowserScrollSize = function () {
        // if (!this.realScrollSize) {
        var div = document.createElement("div");
        var style = div.style;
        style.position = "absolute";
        style.left = "99999999999999px";
        style.top = "9999999999999999px";
        document.body.appendChild(div);
        var size = div.getBoundingClientRect().top;
        document.body.removeChild(div);
        // return Math.abs(size) / 2;
        return size;
        // return 100000;
        // } else {
        //   return this.realScrollSize;
        // }
    };
    // getScrollbarWidth() {
    //   const outer = document.createElement('div');
    //   outer.style.visibility = 'hidden';
    //   outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    //   outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    //   document.body.appendChild(outer);
    //   const inner = document.createElement('div');
    //   outer.appendChild(inner);
    //   const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
    //   outer.parentNode.removeChild(outer);
    //   return scrollbarWidth;
    // }
    // getScrollbarWidth() {
    //   const inner = document.createElement('p');
    //   inner.style.width = '100%';
    //   inner.style.height = '200px';
    //   const outer = document.createElement('div');
    //   outer.style.position = 'absolute';
    //   outer.style.top = '0px';
    //   outer.style.left = '0px';
    //   outer.style.visibility = 'hidden';
    //   outer.style.width = '200px';
    //   outer.style.height = '150px';
    //   outer.style.overflow = 'hidden';
    //   outer.appendChild(inner);
    //   document.body.appendChild(outer);
    //   let w1 = inner.offsetWidth;
    //   outer.style.overflow = 'scroll';
    //   let w2 = inner.offsetWidth;
    //   if (w1 == w2) {
    //     w2 = outer.clientWidth;
    //   }
    //   document.body.removeChild(outer);
    //   return (w1 - w2);
    // }
    ///////////////////
    AdminoTable2Component.prototype.updateColumns = function () {
        var _this = this;
        this.dataSource.columns = [];
        // this.dataSource.displayedColumns = [];
        this.dataSource.keyIds = [];
        var a = 0;
        this._columns.forEach(function (col) {
            var column = {
                description: _this.sanitizer.bypassSecurityTrustHtml(col.description),
                length: col.length,
                id: col.id,
                style: col.style,
                // menuColumn: a === 2 || a === 0 ? false : false,
                sticky: a === 2 || a === 0 ? true : false,
                containerStyle: col.containerStyle,
                headerStyle: col.headerStyle,
                headerContainerStyle: col.headerContainerStyle,
                extraCellDefinitions: col.extraCellDefinitions,
                align: col.align,
                format: col.format,
            };
            _this.dataSource.columns.push(column);
            // this.dataSource.displayedColumns.push(column);
            _this.dataSource.keyIds.push(col.id);
            a++;
        });
    };
    AdminoTable2Component.prototype.format = function (val, format) {
        return this.formatService.format(val, format);
    };
    AdminoTable2Component.prototype.getHeaderContainerStyle = function (column, i) {
        var lastColumnFix = i === this.dataSource.columns.length - 1 ? this.scrollBarWidth : 0;
        var w = this.columnWidths[i] + lastColumnFix;
        var style = Object.assign({
            width: w + "px",
            "max-width": w + "px",
            "min-width": w + "px",
            "text-align": column.align ? column.align : "left",
        }, column.headerContainerStyle);
        style = this.handleSticky(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(style), column, i);
        return style;
    };
    AdminoTable2Component.prototype.getHeaderStyle = function (column, i) {
        return column.headerStyle;
    };
    AdminoTable2Component.prototype.getRowStyle = function (vrow) {
        // transform1: 'translateY(' + vrow.pos + 'px)',
        var style = {
            height: this.rowHeight + "px",
            transform: "translateY(" + vrow.pos + "px)",
            width: this.cumulatedColumnWidth + "px",
        };
        if (vrow.absoluteId === this.dataSource.cursorAbsPos && this.selectedRowStyle) {
            if (this.isFocused) {
                Object.assign(style, this.selectedRowStyle);
            }
            else {
                Object.assign(style, this.inactiveSelectedRowStyle);
            }
        }
        return style;
    };
    AdminoTable2Component.prototype.getContainerStyle = function (column, data, i, vrow) {
        var containerStyle = Object.assign({
            width: this.columnWidths[i] + "px",
            "max-width": this.columnWidths[i] + "px",
            "min-width": this.columnWidths[i] + "px",
        }, column.containerStyle);
        var extra = data && data.styles && data.styles[column.id] && data.styles[column.id].containerStyle;
        if (extra) {
            Object.assign(containerStyle, extra);
        }
        if (vrow.absoluteId === this.dataSource.cursorAbsPos && i === this.dataSource.state.selectedColumnIndex) {
            if (this.isFocused) {
                Object.assign(containerStyle, this.selectedCellStyle);
            }
            else {
                Object.assign(containerStyle, this.inactiveSelectedCellStyle);
            }
        }
        if (this.activeRow === vrow.absoluteId && i === this.dataSource.state.navigationColumnIndex) {
            // Object.assign(containerStyle, { 'outline': '2px solid red', 'outline-offset': '-2px' });
            if (this.isFocused) {
                Object.assign(containerStyle, this.navigationCellStyle);
            }
            else {
                Object.assign(containerStyle, this.inactiveNavigationCellStyle);
            }
        }
        containerStyle = this.handleSticky(containerStyle, column, i, vrow);
        return containerStyle;
    };
    AdminoTable2Component.prototype.handleSticky = function (styleObj, column, i, vrow) {
        if (vrow === void 0) { vrow = null; }
        var left = this.colPositions[i];
        if (column.sticky) {
            var scrollLeft = this.tableRef.nativeElement.scrollLeft;
            var breakpoint = left - this.stickyBreakpoints[i];
            if (scrollLeft > breakpoint) {
                left += scrollLeft - breakpoint;
                styleObj["background"] = "rgba(var(--theme-background-300), 1)";
                // styleObj["transition"] = "background-color .3s, box-shadow .3s";
                if (vrow && vrow.absoluteId === this.dataSource.cursorAbsPos && this.selectedRowStyle) {
                    if (this.isFocused) {
                        Object.assign(styleObj, this.selectedRowStyle);
                    }
                    else {
                        Object.assign(styleObj, this.inactiveSelectedRowStyle);
                    }
                }
                styleObj["box-shadow"] = "3px 0px 2px 2px #00000040";
                styleObj["z-index"] = 2;
            }
        }
        styleObj.left = left + "px";
        return styleObj;
    };
    AdminoTable2Component.prototype.getStyle = function (column, data, i) {
        return data && data.styles && data.styles[column.id] && data.styles[column.id].style;
    };
    AdminoTable2Component.prototype.getBarStyle = function (column, data, i) {
        return data && data.styles && data.styles[column.id] && data.styles[column.id].barStyle;
    };
    AdminoTable2Component.prototype.getCellContent = function (vrow, column) {
        if (vrow.data && vrow.data.data && vrow.data.data.processedData) {
            if (vrow.data.data.processedData["$" + column.id]) {
                return vrow.data.data.processedData["$" + column.id];
            }
            else {
                return vrow.data.data.processedData[column.id];
            }
        }
        return "";
    };
    //////////////////////////////////////
    AdminoTable2Component.prototype.mouseEnter = function (column, vrow, i, cellRef) {
        if (this.isEllipsisActive(cellRef) && vrow) {
            var style = {};
            var content = "";
            if (vrow.data && vrow.data.data) {
                content = this.format(this.getCellContent(vrow, column), column.format);
                style = this.getStyle(column, vrow.data.data, i);
            }
            // this.tooltip.set(vrow.absoluteId + "_" + i, content, style);
        }
    };
    AdminoTable2Component.prototype.mouseLeave = function (column, vrow, i) {
        // if (vrow && vrow.data && vrow.data.data) {
        //   this.tooltip.remove(vrow.absoluteId + "_" + i);
        // }
    };
    ////////////////////////////////
    AdminoTable2Component.prototype.trackByFn = function (index, item) {
        return item.absoluteId;
        //  index; // or item.id
    };
    AdminoTable2Component.prototype.trackByFnCell = function (index, item) {
        return item.id;
        //  index; // or item.id
    };
    AdminoTable2Component.prototype.ngOnDestroy = function () {
        if (this.dataSource) {
            this.dataSource.disconnect();
        }
        if (this.timeoutHelper) {
            clearTimeout(this.timeoutHelper);
        }
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    AdminoTable2Component.ɵfac = function AdminoTable2Component_Factory(t) { return new (t || AdminoTable2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](shared__WEBPACK_IMPORTED_MODULE_5__["FormatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"])); };
    AdminoTable2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminoTable2Component, selectors: [["admino-table2"]], viewQuery: function AdminoTable2Component_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c4, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c5, true);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c6, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.tableRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.fakeContentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.scrollerContentRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.bodyRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.headerRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.mainRef = _t.first);
        } }, hostBindings: function AdminoTable2Component_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mouseup", function AdminoTable2Component_mouseup_HostBindingHandler($event) { return ctx.mouseUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"])("keydown", function AdminoTable2Component_keydown_HostBindingHandler($event) { return ctx.onKeydownHandler($event); });
        } }, inputs: { dataSource: "dataSource", columns: "columns", indexes: "indexes", autoRefresh: "autoRefresh", oddRowStyle: "oddRowStyle", headerHeight: "headerHeight", rowHeight: "rowHeight", hideHeader: "hideHeader", debug: "debug", selectedRowStyle: "selectedRowStyle", selectedCellStyle: "selectedCellStyle", rowMenu: "rowMenu", inactiveSelectedRowStyle: "inactiveSelectedRowStyle", inactiveSelectedCellStyle: "inactiveSelectedCellStyle", navigationCellStyle: "navigationCellStyle", inactiveNavigationCellStyle: "inactiveNavigationCellStyle", keyOverrides: "keyOverrides", isFocused: "isFocused" }, outputs: { valueChange: "valueChange", cellClick: "cellClick", cellChange: "cellChange", cellDoubleClick: "cellDoubleClick", headerCellClick: "headerCellClick", cellContextMenu: "cellContextMenu" }, decls: 18, vars: 16, consts: [[1, "mainwrapper", "admino-table"], ["mainRef", ""], ["class", "aheader", 3, "ngStyle", 4, "ngIf"], [1, "awrapper", 3, "ngClass"], ["tabIndex", "-1", 1, "scroller", 3, "ngClass", "mousedown", "scroll"], ["scrollerRef", ""], [1, "scrollercontent"], ["scrollerContentRef", ""], [1, "rowindicator", 3, "ngClass"], [1, "atable", 3, "ngStyle", "scroll"], ["tableRef", ""], [1, "abody"], ["bodyRef", ""], [1, "fakecontent"], ["fakeContentRef", ""], ["class", "arow", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], [4, "ngIf"], [1, "aheader", 3, "ngStyle"], ["headerRef", ""], ["class", "ahcell", 3, "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "ahcell", 3, "ngStyle", "click"], [1, "cell-content", 3, "innerHTML", "ngStyle"], [1, "arow", 3, "ngClass", "ngStyle"], ["class", "acell", 3, "ngClass", "ngStyle", "click", "dblclick", "contextmenu", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "acell", 3, "ngClass", "ngStyle", "click", "dblclick", "contextmenu"], ["class", "rowbg", 3, "ngStyle", 4, "ngIf"], [1, "cell-content", 3, "ngStyle", "innerHtml"], ["cellRef", ""], ["class", "bar", 3, "ngStyle", 4, "ngIf"], [1, "rowbg", 3, "ngStyle"], [1, "bar", 3, "ngStyle"], [1, "row", "debug"], [1, "col-6"], [1, "color-accent"]], template: function AdminoTable2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AdminoTable2Component_div_2_Template, 3, 4, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("mousedown", function AdminoTable2Component_Template_div_mousedown_4_listener() { return ctx.scrollbarMouseDown(); })("scroll", function AdminoTable2Component_Template_div_scroll_4_listener($event) { return ctx.scrollbarScroll($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("scroll", function AdminoTable2Component_Template_div_scroll_10_listener() { return ctx.scrollEvent(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "div", 13, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, AdminoTable2Component_div_16_Template, 2, 9, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, AdminoTable2Component_ng_container_17_Template, 129, 40, "ng-container", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c10, !ctx.dataSource.initialBrowseRequestHappend));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c11, ctx.dataSource.totalsize < ctx.calculatedLargePageSize));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"](13, _c12, ctx.showIndicator() && ctx.dataSource.initialBrowseRequestHappend, ctx.scrollDirection >= 1));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.scrollDirection ? ctx.rowEnd + 1 : ctx.rowStart + 1, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx.calculateScrollers());
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.vrows)("ngForTrackBy", ctx.trackByFn);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.debug);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DecimalPipe"]], styles: ["[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: inline-block;\n}\n\n.debug[_ngcontent-%COMP%] {\n  height: 400px;\n}\n\n.mainwrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  position: relative;\n  border: 1px solid rgba(var(--theme-foreground-500), 0.3);\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .aheader[_ngcontent-%COMP%] {\n  height: 51px;\n  min-width: 100%;\n  display: flex;\n  border-bottom: 1px solid rgba(var(--theme-foreground-500), 0.3);\n  overflow: hidden;\n  position: relative;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .aheader[_ngcontent-%COMP%]   .ahcell[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  max-width: 100%;\n  min-width: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  border-left: 1px solid rgba(var(--theme-foreground-500), 0.3);\n  cursor: pointer;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .aheader[_ngcontent-%COMP%]   .ahcell.first[_ngcontent-%COMP%] {\n  border-left-width: 0;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .aheader[_ngcontent-%COMP%]   .ahcell.last[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(var(--theme-foreground-500), 0.3);\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .aheader[_ngcontent-%COMP%]   .ahcell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n  align-self: center;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%] {\n  flex: 1;\n  position: relative;\n  overflow: hidden;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper.hidetable[_ngcontent-%COMP%] {\n  opacity: 0;\n  background-color: red;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  z-index: 10;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .scroller[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .rowindicator[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(var(--theme-background-300), 1);\n  border-radius: 7px;\n  padding: 1px 7px;\n  z-index: 4;\n  font-size: 12px;\n  font-weight: 500;\n  top: 10px;\n  left: 10px;\n  opacity: 0;\n  transition: opacity 0.5s;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .rowindicator.bottom[_ngcontent-%COMP%] {\n  top: auto;\n  bottom: 10px;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .rowindicator.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  width: calc(100% + 10px);\n  padding-right: 10px;\n  overflow-x: auto;\n  overflow-y: auto;\n  \n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .fakecontent[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  pointer-events: none;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 1px;\n  position: relative;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  min-width: 100%;\n  overflow: hidden;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow.rowselected[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow.evenrow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%]   .rowbg[_ngcontent-%COMP%] {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  opacity: 0.02;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow.lastrow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%] {\n  border-bottom-width: 1px;\n  border-bottom-style: solid;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%] {\n  height: 100%;\n  box-sizing: border-box;\n  border-top-width: 1px;\n  border-top-style: solid;\n  border-left-width: 1px;\n  border-left-style: solid;\n  position: relative;\n  max-width: 100%;\n  min-width: 1px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: flex;\n  position: absolute;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background: red;\n  transition: width 0.3s ease-in-out, background-color 0.3s ease-in-out;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell.first[_ngcontent-%COMP%] {\n  border-left-width: 0;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell.last[_ngcontent-%COMP%] {\n  border-right-width: 1px;\n  border-right-style: solid;\n}\n\n.mainwrapper[_ngcontent-%COMP%]   .awrapper[_ngcontent-%COMP%]   .atable[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%]   .cell-content[_ngcontent-%COMP%] {\n  z-index: 1;\n  align-self: center;\n  display: inline-block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding-left: 10px;\n  padding-right: 10px;\n  white-space: pre;\n}\n\n.awrapper[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow.evenrow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%]   .rowbg[_ngcontent-%COMP%] {\n  background-color: rgba(var(--theme-foreground-500), 1);\n}\n\n.awrapper[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell[_ngcontent-%COMP%] {\n  border-color: rgba(var(--theme-foreground-500), 0.1);\n}\n\n.awrapper[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell.columnselected[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 1px 1px rgba(var(--theme-foreground-500), 0.5);\n}\n\n.awrapper[_ngcontent-%COMP%]   .abody[_ngcontent-%COMP%]   .arow[_ngcontent-%COMP%]   .acell.columnnavigation[_ngcontent-%COMP%] {\n  box-shadow: inset 0px 0px 1px 1px rgba(var(--theme-foreground-500), 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL3RhYmxlL2FkbWluby10YWJsZTIvYWRtaW5vLXRhYmxlMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQXVCQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdEQUFBO0FBcEJGOztBQXNCRTtFQUNFLFlBQUE7RUFFQSxlQUFBO0VBQ0EsYUFBQTtFQUdBLCtEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXZCSjs7QUF3Qkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw2REFBQTtFQUNBLGVBQUE7QUF0Qk47O0FBdUJNO0VBQ0Usb0JBQUE7QUFyQlI7O0FBd0JNO0VBQ0UsOERBQUE7QUF0QlI7O0FBeUJNO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUF2QlI7O0FBeUNFO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2Q0o7O0FBd0NJO0VBQ0UsVUFBQTtFQUNBLHFCQUFBO0FBdENOOztBQTJDSTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUExQ047O0FBNENNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUExQ1I7O0FBOENJO0VBQ0Usa0JBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFFQSxVQUFBO0VBQ0Esd0JBQUE7QUE3Q047O0FBK0NNO0VBQ0UsU0FBQTtFQUNBLFlBQUE7QUE3Q1I7O0FBZ0RNO0VBQ0UsVUFBQTtBQTlDUjs7QUFrREk7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLHdCQUFBO0VBQ0EsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBYUEscUNBQUE7QUEvRE47O0FBd0RNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF0RFI7O0FBMkVNO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBRUEsb0JBQUE7QUExRVI7O0FBNkVNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTNFUjs7QUE4RVE7RUFDRSxhQUFBO0VBR0Esa0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7QUEvRVY7O0FBZ0ZVO0VBQ0Usb0NBQUE7QUE5RVo7O0FBbUZjO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtBQWpGaEI7O0FBdUZZO0VBQ0Usd0JBQUE7RUFDQSwwQkFBQTtBQXJGZDs7QUF5RlU7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFFQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUVBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUF6Rlo7O0FBMkZZO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFFQUFBO0FBekZkOztBQTRGWTtFQUNFLG9CQUFBO0FBMUZkOztBQTZGWTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7QUEzRmQ7O0FBOEZZO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUE1RmQ7O0FBa0hVO0VBQ0Usc0RBQUE7QUFoSFo7O0FBcUhNO0VBQ0Usb0RBQUE7QUFuSFI7O0FBcUhRO0VBQ0Usd0VBQUE7QUFuSFY7O0FBc0hRO0VBQ0Usd0VBQUE7QUFwSFYiLCJmaWxlIjoicHJvamVjdHMvcGx1Z2lucy9zcmMvdGFibGUvYWRtaW5vLXRhYmxlMi9hZG1pbm8tdGFibGUyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmRlYnVnIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cblxuLy8gdGFibGUge1xuLy8gICBoZWlnaHQ6IDUwMHB4O1xuLy8gICBtYXgtaGVpZ2h0OiA1MDBweDtcbi8vICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xuLy8gICB3aWR0aDogMTAwJTtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xuXG4vLyAgIHRib2R5IHtcbi8vICAgICBoZWlnaHQ6IDMwMHB4O1xuLy8gICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4vLyAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbi8vICAgICB0ciB7XG4vLyAgICAgICBib3JkZXI6IDJweCBzb2xpZCBncmVlbjtcbi8vICAgICAgIGhlaWdodDogNTBweDtcbi8vICAgICB9XG4vLyAgIH1cblxuLy8gfVxuLm1haW53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tdGhlbWUtZm9yZWdyb3VuZC01MDApLCAwLjMpO1xuXG4gIC5haGVhZGVyIHtcbiAgICBoZWlnaHQ6IDUxcHg7XG4gICAgLy8gbWluLWhlaWdodDogNTFweDtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAvLyB6LWluZGV4OiAtMTtcbiAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLXRoZW1lLWZvcmVncm91bmQtNTAwKSwgMC4zKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAuYWhjZWxsIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgIG1pbi13aWR0aDogMXB4O1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEodmFyKC0tdGhlbWUtZm9yZWdyb3VuZC01MDApLCAwLjMpO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgJi5maXJzdCB7XG4gICAgICAgIGJvcmRlci1sZWZ0LXdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAmLmxhc3Qge1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKHZhcigtLXRoZW1lLWZvcmVncm91bmQtNTAwKSwgMC4zKTtcbiAgICAgIH1cblxuICAgICAgLmNlbGwtY29udGVudCB7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgLy8gICAvLyAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAvLyAgIC8vIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgY2FyZCk7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xuICAvLyB9XG5cbiAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAvLyAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIC8vICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAvLyAgIHotaW5kZXg6IDI7XG4gIC8vIH1cblxuICAuYXdyYXBwZXIge1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgJi5oaWRldGFibGUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICB9XG5cbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUxcHgpO1xuXG4gICAgLnNjcm9sbGVyIHtcbiAgICAgIC8vIGJhY2tncm91bmQ6IGdyZWVuICFpbXBvcnRhbnQ7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgei1pbmRleDogMTA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMTBweDtcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5yb3dpbmRpY2F0b3Ige1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1iYWNrZ3JvdW5kLTMwMCksIDEpO1xuICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgICAgcGFkZGluZzogMXB4IDdweDtcbiAgICAgIHotaW5kZXg6IDQ7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgdG9wOiAxMHB4O1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXM7XG5cbiAgICAgICYuYm90dG9tIHtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgICYuc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmF0YWJsZSB7XG4gICAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIC8vd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDEwcHgpO1xuICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIC8vIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgICAvLyB9XG5cbiAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLy8gYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgICAvLyBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgLyogU28gdGhlIHdpZHRoIHdpbGwgYmUgMTAwJSArIDE3cHggKi9cblxuICAgICAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIC8vIH1cblxuICAgICAgLy8gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgLy8gICB3aWR0aDogMHB4O1xuICAgICAgLy8gICBoZWlnaHQ6IDBweDtcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAvLyAgIHotaW5kZXg6IDI7XG4gICAgICAvLyB9XG5cbiAgICAgIC8vICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAvLyB9XG4gICAgICAuZmFrZWNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5hYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmx1ZXZpb2xldDtcblxuICAgICAgICAuYXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xuICAgICAgICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCBncmVlbjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgLy8gbGVmdDogMDtcbiAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAmLnJvd3NlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmV2ZW5yb3cge1xuICAgICAgICAgICAgLmFjZWxsIHtcbiAgICAgICAgICAgICAgLnJvd2JnIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuMDI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmxhc3Ryb3cge1xuICAgICAgICAgICAgLmFjZWxsIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYWNlbGwge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgICAgICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IHNvbGlkO1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDFweDtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgICAgICAgICAuYmFyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJlZDtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmZpcnN0IHtcbiAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubGFzdCB7XG4gICAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMXB4O1xuICAgICAgICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IHNvbGlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuY2VsbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY29sdW1uc2VsZWN0ZWQge1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uYXdyYXBwZXIge1xuICAuYWJvZHkge1xuICAgIC5hcm93IHtcbiAgICAgICYucm93c2VsZWN0ZWQge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCksIDglKSAhaW1wb3J0YW50O1xuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDFweCAxcHggcmdiYShtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKSwgMC4zKTtcbiAgICAgIH1cblxuICAgICAgJi5ldmVucm93IHtcbiAgICAgICAgLmFjZWxsIHtcbiAgICAgICAgICAucm93Ymcge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1mb3JlZ3JvdW5kLTUwMCksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWNlbGwge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEodmFyKC0tdGhlbWUtZm9yZWdyb3VuZC01MDApLCAwLjEpO1xuXG4gICAgICAgICYuY29sdW1uc2VsZWN0ZWQge1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMXB4IDFweCByZ2JhKHZhcigtLXRoZW1lLWZvcmVncm91bmQtNTAwKSwgMC41KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY29sdW1ubmF2aWdhdGlvbiB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxcHggMXB4IHJnYmEodmFyKC0tdGhlbWUtZm9yZWdyb3VuZC01MDApLCAwLjUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], data: { animation: [_admino_table2_animation__WEBPACK_IMPORTED_MODULE_6__["adminoTableAnimation"]] } });
    return AdminoTable2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AdminoTable2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "admino-table2",
                templateUrl: "./admino-table2.component.html",
                styleUrls: ["./admino-table2.component.scss"],
                animations: [_admino_table2_animation__WEBPACK_IMPORTED_MODULE_6__["adminoTableAnimation"]],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: shared__WEBPACK_IMPORTED_MODULE_5__["FormatService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"] }]; }, { valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellDoubleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], headerCellClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], cellContextMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]
        }], dataSource: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], indexes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], autoRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], tableRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["tableRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], scrollerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["scrollerRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], fakeContentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["fakeContentRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], scrollerContentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["scrollerContentRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], static: true }]
        }], bodyRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["bodyRef", { static: true }]
        }], headerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["headerRef"]
        }], mainRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["mainRef", { static: true }]
        }], oddRowStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], headerHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], hideHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], debug: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedRowStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], selectedCellStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rowMenu: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inactiveSelectedRowStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inactiveSelectedCellStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], navigationCellStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], inactiveNavigationCellStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], keyOverrides: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], isFocused: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ["document:mouseup", ["$event"]]
        }], onKeydownHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ["keydown", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/table/admino-table2/admino-table2.datasource.ts":
/*!*************************************************************!*\
  !*** ./src/table/admino-table2/admino-table2.datasource.ts ***!
  \*************************************************************/
/*! exports provided: AdminoTable2DataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminoTable2DataSource", function() { return AdminoTable2DataSource; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admino_table2_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admino-table2.buffer */ "./src/table/admino-table2/admino-table2.buffer.ts");




var AdminoTable2DataSource = /** @class */ (function () {
    function AdminoTable2DataSource(config, sanitizer) {
        var _this = this;
        this.config = config;
        this.sanitizer = sanitizer;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resultSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.result$ = this.resultSubject.asObservable();
        this.loadDataStart = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.triggerLoadData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.currentRequests = [];
        this.columns = [];
        this.displayedColumns = [];
        this.keyIds = [];
        this.indexes = [];
        // keys: any;
        // cursor = 0;
        // index = 1;
        // count = 10;
        // cursorPos = 0;
        this.cursorAbsPos = 0;
        this.data = {};
        this.viewpos = 0;
        this.rows = {};
        this.totalsize = 1;
        this.predefinedStyles = [];
        this.initialBrowseRequestHappend = false;
        // keyAbsolutePosition;
        this.state = {
            keys: { "#position": "first" },
            prevKeys: null,
            prevSelectedColumnIndex: null,
            cursor: 0,
            count: 1,
            index: 1,
            before: 10,
            after: 10,
            cursorPosPercent: 0,
            totalsize: 0,
            cursorpos: 0,
            selectedColumnIndex: 0,
            selectedHeaderColumnIndex: 0,
            navigationColumnIndex: 0,
            navigationRowIndex: 0,
        };
        this.buffer = new _admino_table2_buffer__WEBPACK_IMPORTED_MODULE_3__["AdminoTableBuffer"]();
        this.autoRefresh = 0;
        this.counter = 0;
        this.keyChangedByFrontend = false;
        this.triggerLoadData.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (params) {
            _this.loadData();
        });
    }
    AdminoTable2DataSource.prototype.connect = function () {
        return this.resultSubject.asObservable();
    };
    AdminoTable2DataSource.prototype.disconnect = function () {
        if (this.refreshTimeout) {
            clearTimeout(this.refreshTimeout);
        }
        this.resultSubject.complete();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    AdminoTable2DataSource.prototype.setAutoRefresh = function () {
        var _this = this;
        if (this.refreshTimeout) {
            clearTimeout(this.refreshTimeout);
        }
        if (this.autoRefresh) {
            this.refreshTimeout = setTimeout(function () {
                _this.loadData();
                if (_this.autoRefresh) {
                    _this.setAutoRefresh();
                }
            }, this.autoRefresh);
        }
    };
    AdminoTable2DataSource.prototype.loadData = function (shift) {
        var _this = this;
        if (shift === void 0) { shift = 0; }
        // const calculatedShift = this.calculateShift(shift);
        var calculatedShift = shift;
        var num = this.counter;
        this.counter++;
        return new Promise(function (resolve, reject) {
            var requestObj = {
                subscription: null,
                observable: null,
                shift: shift,
                timeout: null,
                resolvePromise: resolve,
                rejectPromise: reject,
            };
            // const state = {
            //     keys: this.state.keys,
            //     cursor: this.state.cursor,
            //     count: this.state.count,
            //     index: this.state.index,
            //     before: this.state.count,
            //     after: this.count,
            //     cursorPosPercent: this.cursor / (this.count - 1),
            // };
            // this.state.before = this.state.before;
            // this.state.after = this.state.after;
            _this.state.cursorPosPercent = _this.state.cursor / (_this.state.count - 1);
            _this.loadDataStart.next(_this.state);
            var cursorpos = isNaN(_this.state.cursorpos) ? 0 : _this.state.cursorpos;
            requestObj.timeout = setTimeout(function () {
                if (_this.currentRequests[_this.currentRequests.length - 1] !== requestObj) {
                    _this.clearRequest(requestObj);
                    _this.startLatestRequest();
                }
            }, 1000);
            requestObj.observable = _this.config.listFunction(_this.state.keys, cursorpos, calculatedShift, Math.max(_this.state.count, 1), _this.state.index, _this.state.before, _this.state.after);
            _this.currentRequests.push(requestObj);
            if (_this.currentRequests.length <= 1) {
                _this.startLatestRequest();
            }
        });
    };
    AdminoTable2DataSource.prototype.startLatestRequest = function () {
        var latestReq = this.currentRequests[this.currentRequests.length - 1];
        if (latestReq && !latestReq.subscription) {
            latestReq.subscription = this.subscribeTo(latestReq);
        }
    };
    AdminoTable2DataSource.prototype.subscribeTo = function (requestObj) {
        var _this = this;
        return requestObj.observable
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]); }))
            .subscribe(function (data) {
            _this.updateData(data);
            _this.clearRequest(requestObj);
            _this.startLatestRequest();
            _this.initialBrowseRequestHappend = true;
            requestObj.resolvePromise(data);
        }, function (err) {
            _this.clearRequest(requestObj);
            _this.startLatestRequest();
            requestObj.rejectPromise();
        });
    };
    AdminoTable2DataSource.prototype.calculateShift = function (shift) {
        var calculatedShift = shift;
        for (var _i = 0, _a = this.currentRequests; _i < _a.length; _i++) {
            var req = _a[_i];
            calculatedShift += req.shift;
        }
        return calculatedShift;
    };
    AdminoTable2DataSource.prototype.setKeys = function (rowData) {
        if (rowData) {
            this.state.keys = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(rowData);
            if (this.currentRequests.length !== 0) {
                this.clearRequests();
                this.loadData();
            }
        }
        // if (this.currentRequests.length !== 0) {
        // }
    };
    AdminoTable2DataSource.prototype.clearRequest = function (requestObj) {
        var index = this.currentRequests.indexOf(requestObj);
        for (var i = 0; i <= index; i++) {
            var req = this.currentRequests[0];
            if (req.subscription) {
                req.subscription.unsubscribe();
            }
            if (req.timeout) {
                clearTimeout(req.timeout);
            }
            req.subscription = null;
            this.currentRequests.shift();
        }
    };
    AdminoTable2DataSource.prototype.clearRequests = function () {
        var len = this.currentRequests.length;
        for (var i = 0; i < len; i++) {
            var req = this.currentRequests[0];
            if (req.subscription) {
                req.subscription.unsubscribe();
            }
            if (req.timeout) {
                clearTimeout(req.timeout);
            }
            req.subscription = null;
            this.currentRequests.shift();
        }
    };
    AdminoTable2DataSource.prototype.updateData = function (data) {
        if (!data || !data.data) {
            return;
        }
        var totalsize = parseInt(data.totalsize, 10);
        var viewpos = parseInt(data.viewpos, 10);
        var cursorpos = parseInt(data.cursorpos, 10);
        this.data = data;
        this.totalsize = totalsize;
        this.state.totalsize = this.totalsize;
        this.viewpos = viewpos - 1;
        this.predefinedStyles = data.predefinedStyles;
        this.rows = [];
        // this.currentRequests.length === 0 &&
        for (var i = 0; i < this.data.before.length; i++) {
            var d = this.data.before[i];
            var index = this.viewpos - this.data.before.length + i;
            this.rows[index] = d;
            this.setData(index, d);
        }
        for (var i = 0; i < this.data.data.length; i++) {
            var d = this.data.data[i];
            var index = this.viewpos + i;
            this.rows[this.viewpos + i] = d;
            this.setData(index, d);
        }
        for (var i = 0; i < this.data.after.length; i++) {
            var d = this.data.after[i];
            var index = this.viewpos + this.data.data.length + i;
            this.rows[index] = d;
            this.setData(index, d);
        }
        // if (this.currentRequests.length === 0) {
        //     this.keyChangedByFrontend = false;
        // }
        // console.log(this.buffer.container);
        // this.cursorAbsPos = this.viewpos + parseInt(data.cursorpos, 10);
        // if (!keyChangedByFrontend && !this.keyChangedByFrontend || isEqual(data.cursor, this.state.keys)) {
        this.state.keys = data.cursor;
        this.cursorAbsPos = this.viewpos + cursorpos;
        this.state.cursorpos = parseInt(data.cursorpos, 10);
        // }
        this.resultSubject.next(this.rows);
    };
    AdminoTable2DataSource.prototype.setData = function (index, d) {
        var currentBuffer = this.buffer.get(index);
        if (currentBuffer && currentBuffer.data) {
            this.buffer.set(index, this.processData(d, currentBuffer.data));
        }
        else {
            this.buffer.set(index, this.processData(d, null));
        }
    };
    AdminoTable2DataSource.prototype.processData = function (newData, bufferData) {
        if (!bufferData) {
            bufferData = {};
            bufferData.origData = {};
            bufferData.dataVersion = 0;
            bufferData.styles = {};
            bufferData.processedData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newData);
        }
        var newProcessedData = {};
        for (var _i = 0, _a = Object.keys(newData); _i < _a.length; _i++) {
            var key = _a[_i];
            // const extra = newData[column.extraCellDefinitions];
            // const extraStyle = extra && extra.containerStyle;
            if (key.startsWith("$") && typeof newData[key] === "string") {
                if (newData[key] !== bufferData.origData[key]) {
                    newProcessedData[key] = this.sanitizer.bypassSecurityTrustHtml(newData[key]);
                }
                else {
                    newProcessedData[key] = bufferData.processedData[key];
                }
            }
            else {
                newProcessedData[key] = newData[key];
            }
        }
        bufferData.styles = {};
        for (var _b = 0, _c = this.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = newData["$" + column.id] !== undefined ? newData["$" + column.id] : newData[column.id];
            bufferData.styles[column.id] = {};
            var style = column.style ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(column.style) : {};
            var containerStyle = column.containerStyle ? Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(column.containerStyle) : {};
            var barStyle = {};
            var extra = newData[column.extraCellDefinitions];
            var extraStyle = extra && extra.style;
            var extraContainerStyle = extra && extra.containerStyle;
            var extraBarStyle = extra && extra.bar;
            var extraPredefinedStyle = extra &&
                extra.predefinedStyleId !== undefined &&
                this.predefinedStyles !== undefined &&
                this.predefinedStyles[extra.predefinedStyleId];
            var extraPredefinedContainerStyle = extra &&
                extra.predefinedContainerStyleId !== undefined &&
                this.predefinedStyles !== undefined &&
                this.predefinedStyles[extra.predefinedContainerStyleId];
            var extraPredefinedBarStyle = extra &&
                extra.predefinedBarStyleId !== undefined &&
                this.predefinedStyles !== undefined &&
                this.predefinedStyles[extra.predefinedBarStyleId];
            if (extraStyle) {
                Object.assign(style, extraStyle);
            }
            if (extraPredefinedStyle) {
                Object.assign(style, extraPredefinedStyle);
            }
            if (extraContainerStyle) {
                Object.assign(containerStyle, extraContainerStyle);
            }
            if (extraPredefinedContainerStyle) {
                Object.assign(containerStyle, extraPredefinedContainerStyle);
            }
            if (extraBarStyle) {
                Object.assign(barStyle, extraBarStyle);
            }
            if (extraPredefinedBarStyle) {
                Object.assign(barStyle, extraPredefinedBarStyle);
            }
            bufferData.styles[column.id].style = style;
            bufferData.styles[column.id].containerStyle = containerStyle;
            bufferData.styles[column.id].barStyle = barStyle;
        }
        bufferData.processedData = newProcessedData;
        bufferData.origData = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(newData);
        return bufferData;
    };
    // applyFormat(data) {
    //     for (const colId of Object.keys(data)) {
    //         const col = this.columns.find((_col) => {
    //             return _col.id === colId;
    //         });
    //         if (col && col.format !== undefined) {
    //             data[colId] = this.config.formatFunction(data[colId], col.format);
    //         }
    //     }
    //     return data;
    // }
    AdminoTable2DataSource.prototype.findRowByKeys = function (data) {
        var _this = this;
        if (!this.state.keys) {
            return 0;
        }
        var cursorPosition = 0;
        var _loop_1 = function (i) {
            var row = data[i];
            cursorPosition = i;
            var match = true;
            Object.keys(this_1.state.keys).forEach(function (key) {
                if (row[key] !== _this.state.keys[key]) {
                    match = false;
                }
            });
            if (match) {
                return "break";
            }
        };
        var this_1 = this;
        for (var i = data.length - 1; i >= 0; i--) {
            var state_1 = _loop_1(i);
            if (state_1 === "break")
                break;
        }
        return cursorPosition;
    };
    return AdminoTable2DataSource;
}());



/***/ }),

/***/ "./src/table/interactions/contextmenu.ts":
/*!***********************************************!*\
  !*** ./src/table/interactions/contextmenu.ts ***!
  \***********************************************/
/*! exports provided: ContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return ContextMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);


var ContextMenu = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ContextMenu, _super);
    function ContextMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextMenu.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "contextmenu", function (e) {
            var _a;
            if ((_a = interaction.config) === null || _a === void 0 ? void 0 : _a.preventDefault) {
                e.preventDefault();
            }
            console.log("table");
            _this.fire().subscribe();
        });
    };
    ContextMenu.prototype.onUpdate = function () { };
    ContextMenu.prototype.onDestroy = function () { };
    return ContextMenu;
}(shared__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "./src/table/interactions/key-change.ts":
/*!**********************************************!*\
  !*** ./src/table/interactions/key-change.ts ***!
  \**********************************************/
/*! exports provided: KeyChangeInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyChangeInteraction", function() { return KeyChangeInteraction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var KeyChangeInteraction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(KeyChangeInteraction, _super);
    function KeyChangeInteraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    KeyChangeInteraction.prototype.onCreate = function (id, interaction) {
        var _this = this;
        var _a;
        this.valueChangeSub = this.context.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.context.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(((_a = interaction.config) === null || _a === void 0 ? void 0 : _a.debounce) ? interaction.config.debounce : 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newVal) {
            var _a;
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])((_a = _this.oldVal) === null || _a === void 0 ? void 0 : _a.keys, newVal === null || newVal === void 0 ? void 0 : newVal.keys);
        }))
            .subscribe(function (newVal) {
            _this.pluginInstance.table.setPrevValues();
            var sub = _this.fire("keyChange").subscribe();
            // setTimeout((params) => {
            //   sub.unsubscribe();
            // }, 12);
            _this.oldVal = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(newVal);
        });
    };
    KeyChangeInteraction.prototype.onUpdate = function () { };
    KeyChangeInteraction.prototype.onDestroy = function () {
        if (this.valueChangeSub) {
            this.valueChangeSub.unsubscribe();
        }
    };
    return KeyChangeInteraction;
}(shared__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "./src/table/table.component.ts":
/*!**************************************!*\
  !*** ./src/table/table.component.ts ***!
  \**************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admino-table2/admino-table2.component */ "./src/table/admino-table2/admino-table2.component.ts");
/* harmony import */ var _admino_table2_admino_table2_datasource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admino-table2/admino-table2.datasource */ "./src/table/admino-table2/admino-table2.datasource.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _interactions_key_change__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./interactions/key-change */ "./src/table/interactions/key-change.ts");
/* harmony import */ var _interactions_contextmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interactions/contextmenu */ "./src/table/interactions/contextmenu.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);












var TableComponent = /** @class */ (function () {
    function TableComponent(context, sanitizer, cd) {
        this.context = context;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.context.registerInteraction("keyChange", _interactions_key_change__WEBPACK_IMPORTED_MODULE_6__["KeyChangeInteraction"]);
        this.context.overrideInteraction("contextmenu", _interactions_contextmenu__WEBPACK_IMPORTED_MODULE_7__["ContextMenu"]);
    }
    TableComponent.prototype.ngOnInit = function () {
        var _this = this;
        var conf = this.context.pluginConfig;
        this.dataSource = new _admino_table2_admino_table2_datasource__WEBPACK_IMPORTED_MODULE_2__["AdminoTable2DataSource"]({
            listFunction: function (keys, cursorpos, shift, count, index, before, after) {
                return _this.context.api.list(conf.config.viewName, keys, cursorpos, shift, count, index, before, after, conf.config.customVars);
            },
        }, this.sanitizer);
        this.context.redraw$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300)).subscribe(function (params) {
            _this.table.resize(null);
        });
        this.context.update$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function (pluginUpdate) {
            // console.log(newConfig);
            _this.onChange(pluginUpdate);
        });
    };
    TableComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.context.pluginConfig.value) {
            this.dataSource.state = Object.assign(this.dataSource.state, this.context.pluginConfig.value);
            this.dataSource.setKeys(this.context.pluginConfig.value.keys);
            this.table.dataSource.loadData().then(function (params) {
                _this.table.gotoPos(_this.dataSource.viewpos);
                _this.table.setActiveRow(_this.dataSource.cursorAbsPos);
            });
        }
        // this.subscribeToValueChange();
    };
    TableComponent.prototype.setValue = function (value) {
        this.context.control.setValue(value);
    };
    // subscribeToValueChange() {
    //   if (this.valueChangeSub) {
    //     this.valueChangeSub.unsubscribe();
    //   }
    //   // const keyChangeAction = this.getAction("keyChange");
    //   // const dt = keyChangeAction && keyChangeAction.debounce ? keyChangeAction.debounce : 50;
    //   this.valueChangeSub = this.context.control.valueChanges
    //     .pipe(
    //       takeUntil(this.context.destroy$),
    //       debounceTime(50),
    //       filter((newVal) => {
    //         return !isEqual(this.oldVal, newVal);
    //       })
    //     )
    //     .subscribe((newVal) => {
    //       // if (this.element.value !== undefined) {
    //       //   if (keyChangeAction) {
    //       this.table.setPrevValues();
    //       // this.handleAction(keyChangeAction);
    //       this.context.firePluginInteractions("keyChange").subscribe();
    //       //   }
    //       // }
    //       this.oldVal = cloneDeep(newVal);
    //     });
    // }
    TableComponent.prototype.handleCellChange = function (e) {
        this.context.firePluginInteractions("cellChange").subscribe();
    };
    TableComponent.prototype.handleCellClick = function (e) {
        this.context.firePluginInteractions("cellClick").subscribe();
    };
    TableComponent.prototype.handleCellDoubleClick = function (e) {
        this.context.firePluginInteractions("cellDoubleClick").subscribe();
    };
    TableComponent.prototype.handleHeaderCellClick = function (e) {
        this.context.firePluginInteractions("headerCellClick").subscribe();
    };
    TableComponent.prototype.cellContextMenu = function (e) {
        this.context.firePluginInteractions("cellContextMenu", e).subscribe();
    };
    TableComponent.prototype.onChange = function (pluginUpdate) {
        var _this = this;
        var _a, _b;
        var configDiffs = Object(shared__WEBPACK_IMPORTED_MODULE_3__["deepCompare"])((_a = pluginUpdate.prevConfig) === null || _a === void 0 ? void 0 : _a.config, (_b = pluginUpdate.newConfig) === null || _b === void 0 ? void 0 : _b.config);
        var commands = pluginUpdate.commands;
        var diff = configDiffs.diff;
        var config = this.context.pluginConfig.config;
        var reinitNeeded = false;
        if (diff.viewName) {
            this.dataSource.clearRequests();
            this.dataSource.buffer.clearAll();
            this.dataSource.initialBrowseRequestHappend = false;
            this.dataSource = new _admino_table2_admino_table2_datasource__WEBPACK_IMPORTED_MODULE_2__["AdminoTable2DataSource"]({
                listFunction: function (keys, cursorpos, shift, count, index, before, after) {
                    return _this.context.api.list(_this.context.pluginConfig.config.viewName, keys, cursorpos, shift, count, index, before, after, _this.context.pluginConfig.config.customVars);
                },
            }, this.sanitizer);
            reinitNeeded = true;
        }
        if (commands.clearCache) {
            this.dataSource.buffer.clearAll();
            reinitNeeded = true;
        }
        if (diff.columns) {
            reinitNeeded = true;
            this.table.columns = config.columns;
        }
        if (diff.indexes) {
            this.table.indexes = config.indexes;
        }
        if (diff.rowHeight) {
            reinitNeeded = true;
        }
        // if (changes.actions) {
        //   this.subscribeToValueChange();
        // }
        // if (this.element.value && this.element.value.shift) {
        //   delete this.element.value.shift;
        //   delete this.directive.element.value.shift;
        // }
        if (!lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"](commands.setValue)) {
            this.dataSource.state = Object.assign(this.dataSource.state, commands.setValue);
            if (!lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"](commands.setValue.keys)) {
                this.dataSource.setKeys(commands.setValue.keys);
            }
        }
        if (diff.hidden) {
            reinitNeeded = true;
        }
        if (reinitNeeded) {
            // this.table.updateSize();
            // this.table.pageChange();
            this.cd.detectChanges();
            this.table.reinit();
            // this.table.scrollEvent();
        }
        if (commands.setValue || commands.forceRefresh) {
            var shift = !lodash__WEBPACK_IMPORTED_MODULE_8__["isNil"](commands.setValue) && commands.setValue.shift !== undefined ? commands.setValue.shift : 0;
            this.table.dataSource.loadData(shift).then(function (params) {
                _this.table.gotoPos(_this.dataSource.viewpos);
                _this.table.setActiveRow(_this.dataSource.cursorAbsPos);
                _this.table.scrollEvent();
                _this.table.updateRows();
                _this.table.refreshVrows();
            });
        }
    };
    TableComponent.prototype.onDestroy = function () {
        // if (this.valueChangeSub) {
        //   this.valueChangeSub.unsubscribe();
        // }
    };
    TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](shared__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_CONTEXT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_1__["AdminoTable2Component"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        } }, decls: 1, vars: 16, consts: [["tabindex", "0", "data-focus-target", "", 3, "dataSource", "indexes", "columns", "autoRefresh", "rowHeight", "headerHeight", "oddRowStyle", "hideHeader", "debug", "selectedRowStyle", "selectedCellStyle", "inactiveSelectedRowStyle", "inactiveSelectedCellStyle", "navigationCellStyle", "inactiveNavigationCellStyle", "rowMenu", "cellClick", "cellChange", "cellDoubleClick", "headerCellClick", "valueChange", "cellContextMenu"]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "admino-table2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cellClick", function TableComponent_Template_admino_table2_cellClick_0_listener($event) { return ctx.handleCellClick($event); })("cellChange", function TableComponent_Template_admino_table2_cellChange_0_listener($event) { return ctx.handleCellChange($event); })("cellDoubleClick", function TableComponent_Template_admino_table2_cellDoubleClick_0_listener($event) { return ctx.handleCellDoubleClick($event); })("headerCellClick", function TableComponent_Template_admino_table2_headerCellClick_0_listener($event) { return ctx.handleHeaderCellClick($event); })("valueChange", function TableComponent_Template_admino_table2_valueChange_0_listener($event) { return ctx.setValue($event); })("cellContextMenu", function TableComponent_Template_admino_table2_cellContextMenu_0_listener($event) { return ctx.cellContextMenu($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource)("indexes", ctx.context.pluginConfig.config.indexes)("columns", ctx.context.pluginConfig.config.columns)("autoRefresh", ctx.context.pluginConfig.config.autoRefresh)("rowHeight", ctx.context.pluginConfig.config.rowHeight)("headerHeight", ctx.context.pluginConfig.config.headerHeight)("oddRowStyle", ctx.context.pluginConfig.config.oddRowStyle)("hideHeader", ctx.context.pluginConfig.config.hideHeader)("debug", ctx.context.pluginConfig.config.debug)("selectedRowStyle", ctx.context.pluginConfig.config.selectedRowStyle)("selectedCellStyle", ctx.context.pluginConfig.config.selectedCellStyle)("inactiveSelectedRowStyle", ctx.context.pluginConfig.config.inactiveSelectedRowStyle)("inactiveSelectedCellStyle", ctx.context.pluginConfig.config.inactiveSelectedCellStyle)("navigationCellStyle", ctx.context.pluginConfig.config.navigationCellStyle)("inactiveNavigationCellStyle", ctx.context.pluginConfig.config.inactiveNavigationCellStyle)("rowMenu", ctx.context.pluginConfig.config.rowMenu);
        } }, styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJwcm9qZWN0cy9wbHVnaW5zL3NyYy90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */"] });
    return TableComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-table",
                templateUrl: "./table.component.html",
                styleUrls: ["./table.component.scss"],
            }]
    }], function () { return [{ type: shared__WEBPACK_IMPORTED_MODULE_3__["PluginWrapperComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [shared__WEBPACK_IMPORTED_MODULE_3__["PLUGIN_CONTEXT"]]
            }] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_1__["AdminoTable2Component"], { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/table/table.module.ts":
/*!***********************************!*\
  !*** ./src/table/table.module.ts ***!
  \***********************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.component */ "./src/table/table.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admino-table2/admino-table2.component */ "./src/table/admino-table2/admino-table2.component.ts");






var TableModule = /** @class */ (function () {
    function TableModule() {
    }
    TableModule.entry = _table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"];
    TableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TableModule });
    TableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function TableModule_Factory(t) { return new (t || TableModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
    return TableModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TableModule, { declarations: [_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__["AdminoTable2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]], exports: [_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__["AdminoTable2Component"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__["AdminoTable2Component"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__["AdminoTable2Component"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgPluralCase"], _table_component__WEBPACK_IMPORTED_MODULE_0__["TableComponent"], _admino_table2_admino_table2_component__WEBPACK_IMPORTED_MODULE_3__["AdminoTable2Component"]], [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["KeyValuePipe"]]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/projects/plugins/src/main.ts */"./src/main.ts");


/***/ }),

/***/ "@angular/animations":
/*!********************************!*\
  !*** external "ng.animations" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_animations__;

/***/ }),

/***/ "@angular/common":
/*!****************************!*\
  !*** external "ng.common" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_common__;

/***/ }),

/***/ "@angular/core":
/*!**************************!*\
  !*** external "ng.core" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_core__;

/***/ }),

/***/ "@angular/platform-browser":
/*!**************************************!*\
  !*** external "ng.platform-browser" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_platform_browser__;

/***/ }),

/***/ "lodash":
/*!******************************!*\
  !*** external "core.lodash" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "rxjs":
/*!****************************!*\
  !*** external "core.rxjs" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!**************************************!*\
  !*** external "core.rxjs.operators" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ }),

/***/ "shared":
/*!******************************!*\
  !*** external "core.shared" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_shared__;

/***/ }),

/***/ "tslib":
/*!*****************************!*\
  !*** external "core.tslib" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tslib__;

/***/ })

/******/ });
});
//# sourceMappingURL=table.js.map