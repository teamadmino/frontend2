(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("core.@angular/cdk"), require("ng.common"), require("ng.core"), require("ng.forms"), require("core.@angular/material"), require("ng.router"), require("core.lodash"), require("core.rxjs"), require("core.rxjs.operators"), require("core.shared"), require("core.tslib"));
	else if(typeof define === 'function' && define.amd)
		define(["core.@angular/cdk", "ng.common", "ng.core", "ng.forms", "core.@angular/material", "ng.router", "core.lodash", "core.rxjs", "core.rxjs.operators", "core.shared", "core.tslib"], factory);
	else if(typeof exports === 'object')
		exports["group"] = factory(require("core.@angular/cdk"), require("ng.common"), require("ng.core"), require("ng.forms"), require("core.@angular/material"), require("ng.router"), require("core.lodash"), require("core.rxjs"), require("core.rxjs.operators"), require("core.shared"), require("core.tslib"));
	else
		root["group"] = factory(root["core.@angular/cdk"], root["ng.common"], root["ng.core"], root["ng.forms"], root["core.@angular/material"], root["ng.router"], root["core.lodash"], root["core.rxjs"], root["core.rxjs.operators"], root["core.shared"], root["core.tslib"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__angular_cdk_overlay__, __WEBPACK_EXTERNAL_MODULE__angular_common__, __WEBPACK_EXTERNAL_MODULE__angular_core__, __WEBPACK_EXTERNAL_MODULE__angular_forms__, __WEBPACK_EXTERNAL_MODULE__angular_material_button__, __WEBPACK_EXTERNAL_MODULE__angular_router__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE_shared__, __WEBPACK_EXTERNAL_MODULE_tslib__) {
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

/***/ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js":
/*!******************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
  \******************************************************************************************************/
/*! exports provided: HTTP_INTERCEPTORS, HttpBackend, HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule, HttpErrorResponse, HttpEventType, HttpHandler, HttpHeaderResponse, HttpHeaders, HttpParams, HttpRequest, HttpResponse, HttpResponseBase, HttpUrlEncodingCodec, HttpXhrBackend, HttpXsrfTokenExtractor, JsonpClientBackend, JsonpInterceptor, XhrFactory, ɵHttpInterceptingHandler, ɵangular_packages_common_http_http_a, ɵangular_packages_common_http_http_b, ɵangular_packages_common_http_http_c, ɵangular_packages_common_http_http_d, ɵangular_packages_common_http_http_e, ɵangular_packages_common_http_http_f, ɵangular_packages_common_http_http_g, ɵangular_packages_common_http_http_h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS", function() { return HTTP_INTERCEPTORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpBackend", function() { return HttpBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClient", function() { return HttpClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientJsonpModule", function() { return HttpClientJsonpModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule", function() { return HttpClientModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule", function() { return HttpClientXsrfModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorResponse", function() { return HttpErrorResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpEventType", function() { return HttpEventType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHandler", function() { return HttpHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaderResponse", function() { return HttpHeaderResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHeaders", function() { return HttpHeaders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpParams", function() { return HttpParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpRequest", function() { return HttpRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponse", function() { return HttpResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpResponseBase", function() { return HttpResponseBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpUrlEncodingCodec", function() { return HttpUrlEncodingCodec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend", function() { return HttpXhrBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor", function() { return HttpXsrfTokenExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpClientBackend", function() { return JsonpClientBackend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonpInterceptor", function() { return JsonpInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XhrFactory", function() { return XhrFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler", function() { return HttpInterceptingHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_a", function() { return NoopInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_b", function() { return JsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_c", function() { return jsonpCallbackContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d", function() { return BrowserXhr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e", function() { return XSRF_COOKIE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f", function() { return XSRF_HEADER_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g", function() { return HttpXsrfCookieExtractor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h", function() { return HttpXsrfInterceptor; });
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/inherits */ "../../node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/createSuper */ "../../node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/createClass */ "../../node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_9__);







/**
 * @license Angular v10.0.3
 * (c) 2010-2020 Google LLC. https://angular.io/
 * License: MIT
 */




/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */



var HttpHandler = function HttpHandler() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpHandler);
};
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */


var HttpBackend = function HttpBackend() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpBackend);
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */


var HttpHeaders = /*#__PURE__*/function () {
  /**  Constructs a new HTTP header object with the given values.*/
  function HttpHeaders(headers) {
    var _this = this;

    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpHeaders);

    /**
     * Internal map of lowercased header names to the normalized
     * form of the name (the form seen first).
     */
    this.normalizedNames = new Map();
    /**
     * Queued updates to be materialized the next initialization.
     */

    this.lazyUpdate = null;

    if (!headers) {
      this.headers = new Map();
    } else if (typeof headers === 'string') {
      this.lazyInit = function () {
        _this.headers = new Map();
        headers.split('\n').forEach(function (line) {
          var index = line.indexOf(':');

          if (index > 0) {
            var name = line.slice(0, index);
            var key = name.toLowerCase();
            var value = line.slice(index + 1).trim();

            _this.maybeSetNormalizedName(name, key);

            if (_this.headers.has(key)) {
              _this.headers.get(key).push(value);
            } else {
              _this.headers.set(key, [value]);
            }
          }
        });
      };
    } else {
      this.lazyInit = function () {
        _this.headers = new Map();
        Object.keys(headers).forEach(function (name) {
          var values = headers[name];
          var key = name.toLowerCase();

          if (typeof values === 'string') {
            values = [values];
          }

          if (values.length > 0) {
            _this.headers.set(key, values);

            _this.maybeSetNormalizedName(name, key);
          }
        });
      };
    }
  }
  /**
   * Checks for existence of a given header.
   *
   * @param name The header name to check for existence.
   *
   * @returns True if the header exists, false otherwise.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpHeaders, [{
    key: "has",
    value: function has(name) {
      this.init();
      return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */

  }, {
    key: "get",
    value: function get(name) {
      this.init();
      var values = this.headers.get(name.toLowerCase());
      return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */

  }, {
    key: "keys",
    value: function keys() {
      this.init();
      return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */

  }, {
    key: "getAll",
    value: function getAll(name) {
      this.init();
      return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */

  }, {
    key: "append",
    value: function append(name, value) {
      return this.clone({
        name: name,
        value: value,
        op: 'a'
      });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */

  }, {
    key: "set",
    value: function set(name, value) {
      return this.clone({
        name: name,
        value: value,
        op: 's'
      });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */

  }, {
    key: "delete",
    value: function _delete(name, value) {
      return this.clone({
        name: name,
        value: value,
        op: 'd'
      });
    }
  }, {
    key: "maybeSetNormalizedName",
    value: function maybeSetNormalizedName(name, lcName) {
      if (!this.normalizedNames.has(lcName)) {
        this.normalizedNames.set(lcName, name);
      }
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      if (!!this.lazyInit) {
        if (this.lazyInit instanceof HttpHeaders) {
          this.copyFrom(this.lazyInit);
        } else {
          this.lazyInit();
        }

        this.lazyInit = null;

        if (!!this.lazyUpdate) {
          this.lazyUpdate.forEach(function (update) {
            return _this2.applyUpdate(update);
          });
          this.lazyUpdate = null;
        }
      }
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(other) {
      var _this3 = this;

      other.init();
      Array.from(other.headers.keys()).forEach(function (key) {
        _this3.headers.set(key, other.headers.get(key));

        _this3.normalizedNames.set(key, other.normalizedNames.get(key));
      });
    }
  }, {
    key: "clone",
    value: function clone(update) {
      var clone = new HttpHeaders();
      clone.lazyInit = !!this.lazyInit && this.lazyInit instanceof HttpHeaders ? this.lazyInit : this;
      clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
      return clone;
    }
  }, {
    key: "applyUpdate",
    value: function applyUpdate(update) {
      var key = update.name.toLowerCase();

      switch (update.op) {
        case 'a':
        case 's':
          var value = update.value;

          if (typeof value === 'string') {
            value = [value];
          }

          if (value.length === 0) {
            return;
          }

          this.maybeSetNormalizedName(update.name, key);
          var base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
          base.push.apply(base, Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(value));
          this.headers.set(key, base);
          break;

        case 'd':
          var toDelete = update.value;

          if (!toDelete) {
            this.headers.delete(key);
            this.normalizedNames.delete(key);
          } else {
            var existing = this.headers.get(key);

            if (!existing) {
              return;
            }

            existing = existing.filter(function (value) {
              return toDelete.indexOf(value) === -1;
            });

            if (existing.length === 0) {
              this.headers.delete(key);
              this.normalizedNames.delete(key);
            } else {
              this.headers.set(key, existing);
            }
          }

          break;
      }
    }
    /**
     * @internal
     */

  }, {
    key: "forEach",
    value: function forEach(fn) {
      var _this4 = this;

      this.init();
      Array.from(this.normalizedNames.keys()).forEach(function (key) {
        return fn(_this4.normalizedNames.get(key), _this4.headers.get(key));
      });
    }
  }]);

  return HttpHeaders;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */


var HttpUrlEncodingCodec = /*#__PURE__*/function () {
  function HttpUrlEncodingCodec() {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpUrlEncodingCodec);
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpUrlEncodingCodec, [{
    key: "encodeKey",

    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    value: function encodeKey(key) {
      return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */

  }, {
    key: "encodeValue",
    value: function encodeValue(value) {
      return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */

  }, {
    key: "decodeKey",
    value: function decodeKey(key) {
      return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */

  }, {
    key: "decodeValue",
    value: function decodeValue(value) {
      return decodeURIComponent(value);
    }
  }]);

  return HttpUrlEncodingCodec;
}();

function paramParser(rawParams, codec) {
  var map = new Map();

  if (rawParams.length > 0) {
    var params = rawParams.split('&');
    params.forEach(function (param) {
      var eqIdx = param.indexOf('=');

      var _ref = eqIdx == -1 ? [codec.decodeKey(param), ''] : [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))],
          _ref2 = Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, 2),
          key = _ref2[0],
          val = _ref2[1];

      var list = map.get(key) || [];
      list.push(val);
      map.set(key, list);
    });
  }

  return map;
}

function standardEncoding(v) {
  return encodeURIComponent(v).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/gi, '$').replace(/%2C/gi, ',').replace(/%3B/gi, ';').replace(/%2B/gi, '+').replace(/%3D/gi, '=').replace(/%3F/gi, '?').replace(/%2F/gi, '/');
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */


var HttpParams = /*#__PURE__*/function () {
  function HttpParams() {
    var _this5 = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpParams);

    this.updates = null;
    this.cloneFrom = null;
    this.encoder = options.encoder || new HttpUrlEncodingCodec();

    if (!!options.fromString) {
      if (!!options.fromObject) {
        throw new Error("Cannot specify both fromString and fromObject.");
      }

      this.map = paramParser(options.fromString, this.encoder);
    } else if (!!options.fromObject) {
      this.map = new Map();
      Object.keys(options.fromObject).forEach(function (key) {
        var value = options.fromObject[key];

        _this5.map.set(key, Array.isArray(value) ? value : [value]);
      });
    } else {
      this.map = null;
    }
  }
  /**
   * Reports whether the body includes one or more values for a given parameter.
   * @param param The parameter name.
   * @returns True if the parameter has one or more values,
   * false if it has no value or is not present.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpParams, [{
    key: "has",
    value: function has(param) {
      this.init();
      return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */

  }, {
    key: "get",
    value: function get(param) {
      this.init();
      var res = this.map.get(param);
      return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */

  }, {
    key: "getAll",
    value: function getAll(param) {
      this.init();
      return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */

  }, {
    key: "keys",
    value: function keys() {
      this.init();
      return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */

  }, {
    key: "append",
    value: function append(param, value) {
      return this.clone({
        param: param,
        value: value,
        op: 'a'
      });
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */

  }, {
    key: "set",
    value: function set(param, value) {
      return this.clone({
        param: param,
        value: value,
        op: 's'
      });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */

  }, {
    key: "delete",
    value: function _delete(param, value) {
      return this.clone({
        param: param,
        value: value,
        op: 'd'
      });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */

  }, {
    key: "toString",
    value: function toString() {
      var _this6 = this;

      this.init();
      return this.keys().map(function (key) {
        var eKey = _this6.encoder.encodeKey(key); // `a: ['1']` produces `'a=1'`
        // `b: []` produces `''`
        // `c: ['1', '2']` produces `'c=1&c=2'`


        return _this6.map.get(key).map(function (value) {
          return eKey + '=' + _this6.encoder.encodeValue(value);
        }).join('&');
      }) // filter out empty values because `b: []` produces `''`
      // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
      .filter(function (param) {
        return param !== '';
      }).join('&');
    }
  }, {
    key: "clone",
    value: function clone(update) {
      var clone = new HttpParams({
        encoder: this.encoder
      });
      clone.cloneFrom = this.cloneFrom || this;
      clone.updates = (this.updates || []).concat([update]);
      return clone;
    }
  }, {
    key: "init",
    value: function init() {
      var _this7 = this;

      if (this.map === null) {
        this.map = new Map();
      }

      if (this.cloneFrom !== null) {
        this.cloneFrom.init();
        this.cloneFrom.keys().forEach(function (key) {
          return _this7.map.set(key, _this7.cloneFrom.map.get(key));
        });
        this.updates.forEach(function (update) {
          switch (update.op) {
            case 'a':
            case 's':
              var base = (update.op === 'a' ? _this7.map.get(update.param) : undefined) || [];
              base.push(update.value);

              _this7.map.set(update.param, base);

              break;

            case 'd':
              if (update.value !== undefined) {
                var _base = _this7.map.get(update.param) || [];

                var idx = _base.indexOf(update.value);

                if (idx !== -1) {
                  _base.splice(idx, 1);
                }

                if (_base.length > 0) {
                  _this7.map.set(update.param, _base);
                } else {
                  _this7.map.delete(update.param);
                }
              } else {
                _this7.map.delete(update.param);

                break;
              }

          }
        });
        this.cloneFrom = this.updates = null;
      }
    }
  }]);

  return HttpParams;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Determine whether the given HTTP method may include a body.
 */


function mightHaveBody(method) {
  switch (method) {
    case 'DELETE':
    case 'GET':
    case 'HEAD':
    case 'OPTIONS':
    case 'JSONP':
      return false;

    default:
      return true;
  }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */


function isArrayBuffer(value) {
  return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */


function isBlob(value) {
  return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */


function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */


var HttpRequest = /*#__PURE__*/function () {
  function HttpRequest(method, url, third, fourth) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpRequest);

    this.url = url;
    /**
     * The request body, or `null` if one isn't set.
     *
     * Bodies are not enforced to be immutable, as they can include a reference to any
     * user-defined data type. However, interceptors should take care to preserve
     * idempotence by treating them as such.
     */

    this.body = null;
    /**
     * Whether this request should be made in a way that exposes progress events.
     *
     * Progress events are expensive (change detection runs on each event) and so
     * they should only be requested if the consumer intends to monitor them.
     */

    this.reportProgress = false;
    /**
     * Whether this request should be sent with outgoing credentials (cookies).
     */

    this.withCredentials = false;
    /**
     * The expected response type of the server.
     *
     * This is used to parse the response appropriately before returning it to
     * the requestee.
     */

    this.responseType = 'json';
    this.method = method.toUpperCase(); // Next, need to figure out which argument holds the HttpRequestInit
    // options, if any.

    var options; // Check whether a body argument is expected. The only valid way to omit
    // the body argument is to use a known no-body method like GET.

    if (mightHaveBody(this.method) || !!fourth) {
      // Body is the third argument, options are the fourth.
      this.body = third !== undefined ? third : null;
      options = fourth;
    } else {
      // No body required, options are the third argument. The body stays null.
      options = third;
    } // If options have been passed, interpret them.


    if (options) {
      // Normalize reportProgress and withCredentials.
      this.reportProgress = !!options.reportProgress;
      this.withCredentials = !!options.withCredentials; // Override default response type of 'json' if one is provided.

      if (!!options.responseType) {
        this.responseType = options.responseType;
      } // Override headers if they're provided.


      if (!!options.headers) {
        this.headers = options.headers;
      }

      if (!!options.params) {
        this.params = options.params;
      }
    } // If no headers have been passed in, construct a new HttpHeaders instance.


    if (!this.headers) {
      this.headers = new HttpHeaders();
    } // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.


    if (!this.params) {
      this.params = new HttpParams();
      this.urlWithParams = url;
    } else {
      // Encode the parameters to a string in preparation for inclusion in the URL.
      var params = this.params.toString();

      if (params.length === 0) {
        // No parameters, the visible URL is just the URL given at creation time.
        this.urlWithParams = url;
      } else {
        // Does the URL already have query parameters? Look for '?'.
        var qIdx = url.indexOf('?'); // There are 3 cases to handle:
        // 1) No existing parameters -> append '?' followed by params.
        // 2) '?' exists and is followed by existing query string ->
        //    append '&' followed by params.
        // 3) '?' exists at the end of the url -> append params directly.
        // This basically amounts to determining the character, if any, with
        // which to join the URL and parameters.

        var sep = qIdx === -1 ? '?' : qIdx < url.length - 1 ? '&' : '';
        this.urlWithParams = url + sep + params;
      }
    }
  }
  /**
   * Transform the free-form body into a serialized format suitable for
   * transmission to the server.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpRequest, [{
    key: "serializeBody",
    value: function serializeBody() {
      // If no body is present, no need to serialize it.
      if (this.body === null) {
        return null;
      } // Check whether the body is already in a serialized form. If so,
      // it can just be returned directly.


      if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) || typeof this.body === 'string') {
        return this.body;
      } // Check whether the body is an instance of HttpUrlEncodedParams.


      if (this.body instanceof HttpParams) {
        return this.body.toString();
      } // Check whether the body is an object or array, and serialize with JSON if so.


      if (typeof this.body === 'object' || typeof this.body === 'boolean' || Array.isArray(this.body)) {
        return JSON.stringify(this.body);
      } // Fall back on toString() for everything else.


      return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */

  }, {
    key: "detectContentTypeHeader",
    value: function detectContentTypeHeader() {
      // An empty body has no content type.
      if (this.body === null) {
        return null;
      } // FormData bodies rely on the browser's content type assignment.


      if (isFormData(this.body)) {
        return null;
      } // Blobs usually have their own content type. If it doesn't, then
      // no type can be inferred.


      if (isBlob(this.body)) {
        return this.body.type || null;
      } // Array buffers have unknown contents and thus no type can be inferred.


      if (isArrayBuffer(this.body)) {
        return null;
      } // Technically, strings could be a form of JSON data, but it's safe enough
      // to assume they're plain strings.


      if (typeof this.body === 'string') {
        return 'text/plain';
      } // `HttpUrlEncodedParams` has its own content-type.


      if (this.body instanceof HttpParams) {
        return 'application/x-www-form-urlencoded;charset=UTF-8';
      } // Arrays, objects, and numbers will be encoded as JSON.


      if (typeof this.body === 'object' || typeof this.body === 'number' || Array.isArray(this.body)) {
        return 'application/json';
      } // No type could be inferred.


      return null;
    }
  }, {
    key: "clone",
    value: function clone() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // For method, url, and responseType, take the current value unless
      // it is overridden in the update hash.
      var method = update.method || this.method;
      var url = update.url || this.url;
      var responseType = update.responseType || this.responseType; // The body is somewhat special - a `null` value in update.body means
      // whatever current body is present is being overridden with an empty
      // body, whereas an `undefined` value in update.body implies no
      // override.

      var body = update.body !== undefined ? update.body : this.body; // Carefully handle the boolean options to differentiate between
      // `false` and `undefined` in the update args.

      var withCredentials = update.withCredentials !== undefined ? update.withCredentials : this.withCredentials;
      var reportProgress = update.reportProgress !== undefined ? update.reportProgress : this.reportProgress; // Headers and params may be appended to if `setHeaders` or
      // `setParams` are used.

      var headers = update.headers || this.headers;
      var params = update.params || this.params; // Check whether the caller has asked to add headers.

      if (update.setHeaders !== undefined) {
        // Set every requested header.
        headers = Object.keys(update.setHeaders).reduce(function (headers, name) {
          return headers.set(name, update.setHeaders[name]);
        }, headers);
      } // Check whether the caller has asked to set params.


      if (update.setParams) {
        // Set every requested param.
        params = Object.keys(update.setParams).reduce(function (params, param) {
          return params.set(param, update.setParams[param]);
        }, params);
      } // Finally, construct the new HttpRequest using the pieces from above.


      return new HttpRequest(method, url, body, {
        params: params,
        headers: headers,
        reportProgress: reportProgress,
        responseType: responseType,
        withCredentials: withCredentials
      });
    }
  }]);

  return HttpRequest;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */


var HttpEventType;

(function (HttpEventType) {
  /**
   * The request was sent out over the wire.
   */
  HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
  /**
   * An upload progress event was received.
   */

  HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
  /**
   * The response status code and headers were received.
   */

  HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
  /**
   * A download progress event was received.
   */

  HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
  /**
   * The full response including the body was received.
   */

  HttpEventType[HttpEventType["Response"] = 4] = "Response";
  /**
   * A custom event from an interceptor or a backend.
   */

  HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */


var HttpResponseBase =
/**
 * Super-constructor for all responses.
 *
 * The single parameter accepted is an initialization hash. Any properties
 * of the response passed there will override the default values.
 */
function HttpResponseBase(init) {
  var defaultStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  var defaultStatusText = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'OK';

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpResponseBase);

  // If the hash has values passed, use them to initialize the response.
  // Otherwise use the default values.
  this.headers = init.headers || new HttpHeaders();
  this.status = init.status !== undefined ? init.status : defaultStatus;
  this.statusText = init.statusText || defaultStatusText;
  this.url = init.url || null; // Cache the ok value to avoid defining a getter.

  this.ok = this.status >= 200 && this.status < 300;
};
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */


var HttpHeaderResponse = /*#__PURE__*/function (_HttpResponseBase) {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpHeaderResponse, _HttpResponseBase);

  var _super = Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(HttpHeaderResponse);

  /**
   * Create a new `HttpHeaderResponse` with the given parameters.
   */
  function HttpHeaderResponse() {
    var _this8;

    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpHeaderResponse);

    _this8 = _super.call(this, init);
    _this8.type = HttpEventType.ResponseHeader;
    return _this8;
  }
  /**
   * Copy this `HttpHeaderResponse`, overriding its contents with the
   * given parameter hash.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpHeaderResponse, [{
    key: "clone",
    value: function clone() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // Perform a straightforward initialization of the new HttpHeaderResponse,
      // overriding the current parameters with new ones if given.
      return new HttpHeaderResponse({
        headers: update.headers || this.headers,
        status: update.status !== undefined ? update.status : this.status,
        statusText: update.statusText || this.statusText,
        url: update.url || this.url || undefined
      });
    }
  }]);

  return HttpHeaderResponse;
}(HttpResponseBase);
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */


var HttpResponse = /*#__PURE__*/function (_HttpResponseBase2) {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpResponse, _HttpResponseBase2);

  var _super2 = Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(HttpResponse);

  /**
   * Construct a new `HttpResponse`.
   */
  function HttpResponse() {
    var _this9;

    var init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpResponse);

    _this9 = _super2.call(this, init);
    _this9.type = HttpEventType.Response;
    _this9.body = init.body !== undefined ? init.body : null;
    return _this9;
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpResponse, [{
    key: "clone",
    value: function clone() {
      var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new HttpResponse({
        body: update.body !== undefined ? update.body : this.body,
        headers: update.headers || this.headers,
        status: update.status !== undefined ? update.status : this.status,
        statusText: update.statusText || this.statusText,
        url: update.url || this.url || undefined
      });
    }
  }]);

  return HttpResponse;
}(HttpResponseBase);
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */


var HttpErrorResponse = /*#__PURE__*/function (_HttpResponseBase3) {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_0__["default"])(HttpErrorResponse, _HttpResponseBase3);

  var _super3 = Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_1__["default"])(HttpErrorResponse);

  function HttpErrorResponse(init) {
    var _this10;

    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpErrorResponse);

    // Initialize with a default status of 0 / Unknown Error.
    _this10 = _super3.call(this, init, 0, 'Unknown Error');
    _this10.name = 'HttpErrorResponse';
    /**
     * Errors are never okay, even when the status code is in the 2xx success range.
     */

    _this10.ok = false; // If the response was successful, then this was a parse error. Otherwise, it was
    // a protocol-level failure of some sort. Either the request failed in transit
    // or the server returned an unsuccessful status code.

    if (_this10.status >= 200 && _this10.status < 300) {
      _this10.message = "Http failure during parsing for ".concat(init.url || '(unknown url)');
    } else {
      _this10.message = "Http failure response for ".concat(init.url || '(unknown url)', ": ").concat(init.status, " ").concat(init.statusText);
    }

    _this10.error = init.error || null;
    return _this10;
  }

  return HttpErrorResponse;
}(HttpResponseBase);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */


function addBody(options, body) {
  return {
    body: body,
    headers: options.headers,
    observe: options.observe,
    params: options.params,
    reportProgress: options.reportProgress,
    responseType: options.responseType,
    withCredentials: options.withCredentials
  };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 *
 * @publicApi
 */


var HttpClient = /*#__PURE__*/function () {
  function HttpClient(handler) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpClient);

    this.handler = handler;
  }
  /**
   * Constructs an observable for a generic HTTP request that, when subscribed,
   * fires the request through the chain of registered interceptors and on to the
   * server.
   *
   * You can pass an `HttpRequest` directly as the only parameter. In this case,
   * the call returns an observable of the raw `HttpEvent` stream.
   *
   * Alternatively you can pass an HTTP method as the first parameter,
   * a URL string as the second, and an options hash containing the request body as the third.
   * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
   * type of returned observable.
   *   * The `responseType` value determines how a successful response body is parsed.
   *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
   * object as a type parameter to the call.
   *
   * The `observe` value determines the return type, according to what you are interested in
   * observing.
   *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
   * progress events by default.
   *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
   * where the `T` parameter depends on the `responseType` and any optionally provided type
   * parameter.
   *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
   *
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpClient, [{
    key: "request",
    value: function request(first, url) {
      var _this11 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var req; // First, check whether the primary argument is an instance of `HttpRequest`.

      if (first instanceof HttpRequest) {
        // It is. The other arguments must be undefined (per the signatures) and can be
        // ignored.
        req = first;
      } else {
        // It's a string, so it represents a URL. Construct a request based on it,
        // and incorporate the remaining arguments (assuming `GET` unless a method is
        // provided.
        // Figure out the headers.
        var headers = undefined;

        if (options.headers instanceof HttpHeaders) {
          headers = options.headers;
        } else {
          headers = new HttpHeaders(options.headers);
        } // Sort out parameters.


        var params = undefined;

        if (!!options.params) {
          if (options.params instanceof HttpParams) {
            params = options.params;
          } else {
            params = new HttpParams({
              fromObject: options.params
            });
          }
        } // Construct the request.


        req = new HttpRequest(first, url, options.body !== undefined ? options.body : null, {
          headers: headers,
          params: params,
          reportProgress: options.reportProgress,
          // By default, JSON is assumed to be returned for all calls.
          responseType: options.responseType || 'json',
          withCredentials: options.withCredentials
        });
      } // Start with an Observable.of() the initial request, and run the handler (which
      // includes all interceptors) inside a concatMap(). This way, the handler runs
      // inside an Observable chain, which causes interceptors to be re-run on every
      // subscription (this also makes retries re-run the handler, including interceptors).


      var events$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["concatMap"])(function (req) {
        return _this11.handler.handle(req);
      })); // If coming via the API signature which accepts a previously constructed HttpRequest,
      // the only option is to get the event stream. Otherwise, return the event stream if
      // that is what was requested.

      if (first instanceof HttpRequest || options.observe === 'events') {
        return events$;
      } // The requested stream contains either the full response or the body. In either
      // case, the first step is to filter the event stream to extract a stream of
      // responses(s).


      var res$ = events$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["filter"])(function (event) {
        return event instanceof HttpResponse;
      })); // Decide which stream to return.

      switch (options.observe || 'body') {
        case 'body':
          // The requested stream is the body. Map the response stream to the response
          // body. This could be done more simply, but a misbehaving interceptor might
          // transform the response body into a different format and ignore the requested
          // responseType. Guard against this by validating that the response is of the
          // requested type.
          switch (req.responseType) {
            case 'arraybuffer':
              return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
                // Validate that the body is an ArrayBuffer.
                if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                  throw new Error('Response is not an ArrayBuffer.');
                }

                return res.body;
              }));

            case 'blob':
              return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
                // Validate that the body is a Blob.
                if (res.body !== null && !(res.body instanceof Blob)) {
                  throw new Error('Response is not a Blob.');
                }

                return res.body;
              }));

            case 'text':
              return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
                // Validate that the body is a string.
                if (res.body !== null && typeof res.body !== 'string') {
                  throw new Error('Response is not a string.');
                }

                return res.body;
              }));

            case 'json':
            default:
              // No validation needed for JSON responses, as they can be of any type.
              return res$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
                return res.body;
              }));
          }

        case 'response':
          // The response stream was requested directly, so return it.
          return res$;

        default:
          // Guard against new future observe types being added.
          throw new Error("Unreachable: unhandled observe type ".concat(options.observe, "}"));
      }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */

  }, {
    key: "get",
    value: function get(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */

  }, {
    key: "head",
    value: function head(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */

  }, {
    key: "jsonp",
    value: function jsonp(url, callbackParam) {
      return this.request('JSONP', url, {
        params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
        observe: 'body',
        responseType: 'json'
      });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */

  }, {
    key: "options",
    value: function options(url) {
      var _options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      return this.request('OPTIONS', url, _options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */

  }, {
    key: "patch",
    value: function patch(url, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */

  }, {
    key: "post",
    value: function post(url, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */

  }, {
    key: "put",
    value: function put(url, body) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.request('PUT', url, addBody(options, body));
    }
  }]);

  return HttpClient;
}();

HttpClient.ɵfac = function HttpClient_Factory(t) {
  return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](HttpHandler));
};

HttpClient.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpClient,
  factory: HttpClient.ɵfac
});

HttpClient.ctorParameters = function () {
  return [{
    type: HttpHandler
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpClient, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: HttpHandler
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */


var HttpInterceptorHandler = /*#__PURE__*/function () {
  function HttpInterceptorHandler(next, interceptor) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpInterceptorHandler);

    this.next = next;
    this.interceptor = interceptor;
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpInterceptorHandler, [{
    key: "handle",
    value: function handle(req) {
      return this.interceptor.intercept(req, this.next);
    }
  }]);

  return HttpInterceptorHandler;
}();
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */


var HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('HTTP_INTERCEPTORS');

var NoopInterceptor = /*#__PURE__*/function () {
  function NoopInterceptor() {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, NoopInterceptor);
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(NoopInterceptor, [{
    key: "intercept",
    value: function intercept(req, next) {
      return next.handle(req);
    }
  }]);

  return NoopInterceptor;
}();

NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) {
  return new (t || NoopInterceptor)();
};

NoopInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: NoopInterceptor,
  factory: NoopInterceptor.ɵfac
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](NoopInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.


var nextRequestId = 0; // Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.

var JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.'; // Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.

var JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
var JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */

var JsonpCallbackContext = function JsonpCallbackContext() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, JsonpCallbackContext);
};
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */


var JsonpClientBackend = /*#__PURE__*/function () {
  function JsonpClientBackend(callbackMap, document) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, JsonpClientBackend);

    this.callbackMap = callbackMap;
    this.document = document;
  }
  /**
   * Get the name of the next callback method, by incrementing the global `nextRequestId`.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(JsonpClientBackend, [{
    key: "nextCallback",
    value: function nextCallback() {
      return "ng_jsonp_callback_".concat(nextRequestId++);
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */

  }, {
    key: "handle",
    value: function handle(req) {
      var _this12 = this;

      // Firstly, check both the method and response type. If either doesn't match
      // then the request was improperly routed here and cannot be handled.
      if (req.method !== 'JSONP') {
        throw new Error(JSONP_ERR_WRONG_METHOD);
      } else if (req.responseType !== 'json') {
        throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
      } // Everything else happens inside the Observable boundary.


      return new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
        // The first step to make a request is to generate the callback name, and replace the
        // callback placeholder in the URL with the name. Care has to be taken here to ensure
        // a trailing &, if matched, gets inserted back into the URL in the correct place.
        var callback = _this12.nextCallback();

        var url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, "=".concat(callback, "$1")); // Construct the <script> tag and point it at the URL.

        var node = _this12.document.createElement('script');

        node.src = url; // A JSONP request requires waiting for multiple callbacks. These variables
        // are closed over and track state across those callbacks.
        // The response object, if one has been received, or null otherwise.

        var body = null; // Whether the response callback has been called.

        var finished = false; // Whether the request has been cancelled (and thus any other callbacks)
        // should be ignored.

        var cancelled = false; // Set the response callback in this.callbackMap (which will be the window
        // object in the browser. The script being loaded via the <script> tag will
        // eventually call this callback.

        _this12.callbackMap[callback] = function (data) {
          // Data has been received from the JSONP script. Firstly, delete this callback.
          delete _this12.callbackMap[callback]; // Next, make sure the request wasn't cancelled in the meantime.

          if (cancelled) {
            return;
          } // Set state to indicate data was received.


          body = data;
          finished = true;
        }; // cleanup() is a utility closure that removes the <script> from the page and
        // the response callback from the window. This logic is used in both the
        // success, error, and cancellation paths, so it's extracted out for convenience.


        var cleanup = function cleanup() {
          // Remove the <script> tag if it's still on the page.
          if (node.parentNode) {
            node.parentNode.removeChild(node);
          } // Remove the response callback from the callbackMap (window object in the
          // browser).


          delete _this12.callbackMap[callback];
        }; // onLoad() is the success callback which runs after the response callback
        // if the JSONP script loads successfully. The event itself is unimportant.
        // If something went wrong, onLoad() may run without the response callback
        // having been invoked.


        var onLoad = function onLoad(event) {
          // Do nothing if the request has been cancelled.
          if (cancelled) {
            return;
          } // Cleanup the page.


          cleanup(); // Check whether the response callback has run.

          if (!finished) {
            // It hasn't, something went wrong with the request. Return an error via
            // the Observable error path. All JSONP errors have status 0.
            observer.error(new HttpErrorResponse({
              url: url,
              status: 0,
              statusText: 'JSONP Error',
              error: new Error(JSONP_ERR_NO_CALLBACK)
            }));
            return;
          } // Success. body either contains the response body or null if none was
          // returned.


          observer.next(new HttpResponse({
            body: body,
            status: 200,
            statusText: 'OK',
            url: url
          })); // Complete the stream, the response is over.

          observer.complete();
        }; // onError() is the error callback, which runs if the script returned generates
        // a Javascript error. It emits the error via the Observable error channel as
        // a HttpErrorResponse.


        var onError = function onError(error) {
          // If the request was already cancelled, no need to emit anything.
          if (cancelled) {
            return;
          }

          cleanup(); // Wrap the error in a HttpErrorResponse.

          observer.error(new HttpErrorResponse({
            error: error,
            status: 0,
            statusText: 'JSONP Error',
            url: url
          }));
        }; // Subscribe to both the success (load) and error events on the <script> tag,
        // and add it to the page.


        node.addEventListener('load', onLoad);
        node.addEventListener('error', onError);

        _this12.document.body.appendChild(node); // The request has now been successfully sent.


        observer.next({
          type: HttpEventType.Sent
        }); // Cancellation handler.

        return function () {
          // Track the cancellation so event listeners won't do anything even if already scheduled.
          cancelled = true; // Remove the event listeners so they won't run if the events later fire.

          node.removeEventListener('load', onLoad);
          node.removeEventListener('error', onError); // And finally, clean up the page.

          cleanup();
        };
      });
    }
  }]);

  return JsonpClientBackend;
}();

JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) {
  return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]));
};

JsonpClientBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: JsonpClientBackend,
  factory: JsonpClientBackend.ɵfac
});

JsonpClientBackend.ctorParameters = function () {
  return [{
    type: JsonpCallbackContext
  }, {
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](JsonpClientBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: JsonpCallbackContext
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
      }]
    }];
  }, null);
})();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */


var JsonpInterceptor = /*#__PURE__*/function () {
  function JsonpInterceptor(jsonp) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, JsonpInterceptor);

    this.jsonp = jsonp;
  }
  /**
   * Identifies and handles a given JSONP request.
   * @param req The outgoing request object to handle.
   * @param next The next interceptor in the chain, or the backend
   * if no interceptors remain in the chain.
   * @returns An observable of the event stream.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(JsonpInterceptor, [{
    key: "intercept",
    value: function intercept(req, next) {
      if (req.method === 'JSONP') {
        return this.jsonp.handle(req);
      } // Fall through for normal HTTP requests.


      return next.handle(req);
    }
  }]);

  return JsonpInterceptor;
}();

JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) {
  return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](JsonpClientBackend));
};

JsonpInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: JsonpInterceptor,
  factory: JsonpInterceptor.ɵfac
});

JsonpInterceptor.ctorParameters = function () {
  return [{
    type: JsonpClientBackend
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](JsonpInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: JsonpClientBackend
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */

function getResponseUrl(xhr) {
  if ('responseURL' in xhr && xhr.responseURL) {
    return xhr.responseURL;
  }

  if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
    return xhr.getResponseHeader('X-Request-URL');
  }

  return null;
}
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 */


var XhrFactory = function XhrFactory() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, XhrFactory);
};
/**
 * A factory for `HttpXhrBackend` that uses the `XMLHttpRequest` browser API.
 *
 */


var BrowserXhr = /*#__PURE__*/function () {
  function BrowserXhr() {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, BrowserXhr);
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(BrowserXhr, [{
    key: "build",
    value: function build() {
      return new XMLHttpRequest();
    }
  }]);

  return BrowserXhr;
}();

BrowserXhr.ɵfac = function BrowserXhr_Factory(t) {
  return new (t || BrowserXhr)();
};

BrowserXhr.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: BrowserXhr,
  factory: BrowserXhr.ɵfac
});

BrowserXhr.ctorParameters = function () {
  return [];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](BrowserXhr, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [];
  }, null);
})();
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */


var HttpXhrBackend = /*#__PURE__*/function () {
  function HttpXhrBackend(xhrFactory) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpXhrBackend);

    this.xhrFactory = xhrFactory;
  }
  /**
   * Processes a request and returns a stream of response events.
   * @param req The request object.
   * @returns An observable of the response events.
   */


  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpXhrBackend, [{
    key: "handle",
    value: function handle(req) {
      var _this13 = this;

      // Quick check to give a better error message when a user attempts to use
      // HttpClient.jsonp() without installing the JsonpClientModule
      if (req.method === 'JSONP') {
        throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
      } // Everything happens on Observable subscription.


      return new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"](function (observer) {
        // Start by setting up the XHR object with request method, URL, and withCredentials flag.
        var xhr = _this13.xhrFactory.build();

        xhr.open(req.method, req.urlWithParams);

        if (!!req.withCredentials) {
          xhr.withCredentials = true;
        } // Add all the requested headers.


        req.headers.forEach(function (name, values) {
          return xhr.setRequestHeader(name, values.join(','));
        }); // Add an Accept header if one isn't present already.

        if (!req.headers.has('Accept')) {
          xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
        } // Auto-detect the Content-Type header if one isn't present already.


        if (!req.headers.has('Content-Type')) {
          var detectedType = req.detectContentTypeHeader(); // Sometimes Content-Type detection fails.

          if (detectedType !== null) {
            xhr.setRequestHeader('Content-Type', detectedType);
          }
        } // Set the responseType if one was requested.


        if (req.responseType) {
          var responseType = req.responseType.toLowerCase(); // JSON responses need to be processed as text. This is because if the server
          // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
          // xhr.response will be null, and xhr.responseText cannot be accessed to
          // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
          // is parsed by first requesting text and then applying JSON.parse.

          xhr.responseType = responseType !== 'json' ? responseType : 'text';
        } // Serialize the request body if one is present. If not, this will be set to null.


        var reqBody = req.serializeBody(); // If progress events are enabled, response headers will be delivered
        // in two events - the HttpHeaderResponse event and the full HttpResponse
        // event. However, since response headers don't change in between these
        // two events, it doesn't make sense to parse them twice. So headerResponse
        // caches the data extracted from the response whenever it's first parsed,
        // to ensure parsing isn't duplicated.

        var headerResponse = null; // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
        // state, and memoizes it into headerResponse.

        var partialFromXhr = function partialFromXhr() {
          if (headerResponse !== null) {
            return headerResponse;
          } // Read status and normalize an IE9 bug (http://bugs.jquery.com/ticket/1450).


          var status = xhr.status === 1223 ? 204 : xhr.status;
          var statusText = xhr.statusText || 'OK'; // Parse headers from XMLHttpRequest - this step is lazy.

          var headers = new HttpHeaders(xhr.getAllResponseHeaders()); // Read the response URL from the XMLHttpResponse instance and fall back on the
          // request URL.

          var url = getResponseUrl(xhr) || req.url; // Construct the HttpHeaderResponse and memoize it.

          headerResponse = new HttpHeaderResponse({
            headers: headers,
            status: status,
            statusText: statusText,
            url: url
          });
          return headerResponse;
        }; // Next, a few closures are defined for the various events which XMLHttpRequest can
        // emit. This allows them to be unregistered as event listeners later.
        // First up is the load event, which represents a response being fully available.


        var onLoad = function onLoad() {
          // Read response state from the memoized partial data.
          var _partialFromXhr = partialFromXhr(),
              headers = _partialFromXhr.headers,
              status = _partialFromXhr.status,
              statusText = _partialFromXhr.statusText,
              url = _partialFromXhr.url; // The body will be read out if present.


          var body = null;

          if (status !== 204) {
            // Use XMLHttpRequest.response if set, responseText otherwise.
            body = typeof xhr.response === 'undefined' ? xhr.responseText : xhr.response;
          } // Normalize another potential bug (this one comes from CORS).


          if (status === 0) {
            status = !!body ? 200 : 0;
          } // ok determines whether the response will be transmitted on the event or
          // error channel. Unsuccessful status codes (not 2xx) will always be errors,
          // but a successful status code can still result in an error if the user
          // asked for JSON data and the body cannot be parsed as such.


          var ok = status >= 200 && status < 300; // Check whether the body needs to be parsed as JSON (in many cases the browser
          // will have done that already).

          if (req.responseType === 'json' && typeof body === 'string') {
            // Save the original body, before attempting XSSI prefix stripping.
            var originalBody = body;
            body = body.replace(XSSI_PREFIX, '');

            try {
              // Attempt the parse. If it fails, a parse error should be delivered to the user.
              body = body !== '' ? JSON.parse(body) : null;
            } catch (error) {
              // Since the JSON.parse failed, it's reasonable to assume this might not have been a
              // JSON response. Restore the original body (including any XSSI prefix) to deliver
              // a better error response.
              body = originalBody; // If this was an error request to begin with, leave it as a string, it probably
              // just isn't JSON. Otherwise, deliver the parsing error to the user.

              if (ok) {
                // Even though the response status was 2xx, this is still an error.
                ok = false; // The parse error contains the text of the body that failed to parse.

                body = {
                  error: error,
                  text: body
                };
              }
            }
          }

          if (ok) {
            // A successful response is delivered on the event stream.
            observer.next(new HttpResponse({
              body: body,
              headers: headers,
              status: status,
              statusText: statusText,
              url: url || undefined
            })); // The full body has been received and delivered, no further events
            // are possible. This request is complete.

            observer.complete();
          } else {
            // An unsuccessful request is delivered on the error channel.
            observer.error(new HttpErrorResponse({
              // The error in this case is the response body (error from the server).
              error: body,
              headers: headers,
              status: status,
              statusText: statusText,
              url: url || undefined
            }));
          }
        }; // The onError callback is called when something goes wrong at the network level.
        // Connection timeout, DNS error, offline, etc. These are actual errors, and are
        // transmitted on the error channel.


        var onError = function onError(error) {
          var _partialFromXhr2 = partialFromXhr(),
              url = _partialFromXhr2.url;

          var res = new HttpErrorResponse({
            error: error,
            status: xhr.status || 0,
            statusText: xhr.statusText || 'Unknown Error',
            url: url || undefined
          });
          observer.error(res);
        }; // The sentHeaders flag tracks whether the HttpResponseHeaders event
        // has been sent on the stream. This is necessary to track if progress
        // is enabled since the event will be sent on only the first download
        // progerss event.


        var sentHeaders = false; // The download progress event handler, which is only registered if
        // progress events are enabled.

        var onDownProgress = function onDownProgress(event) {
          // Send the HttpResponseHeaders event if it hasn't been sent already.
          if (!sentHeaders) {
            observer.next(partialFromXhr());
            sentHeaders = true;
          } // Start building the download progress event to deliver on the response
          // event stream.


          var progressEvent = {
            type: HttpEventType.DownloadProgress,
            loaded: event.loaded
          }; // Set the total number of bytes in the event if it's available.

          if (event.lengthComputable) {
            progressEvent.total = event.total;
          } // If the request was for text content and a partial response is
          // available on XMLHttpRequest, include it in the progress event
          // to allow for streaming reads.


          if (req.responseType === 'text' && !!xhr.responseText) {
            progressEvent.partialText = xhr.responseText;
          } // Finally, fire the event.


          observer.next(progressEvent);
        }; // The upload progress event handler, which is only registered if
        // progress events are enabled.


        var onUpProgress = function onUpProgress(event) {
          // Upload progress events are simpler. Begin building the progress
          // event.
          var progress = {
            type: HttpEventType.UploadProgress,
            loaded: event.loaded
          }; // If the total number of bytes being uploaded is available, include
          // it.

          if (event.lengthComputable) {
            progress.total = event.total;
          } // Send the event.


          observer.next(progress);
        }; // By default, register for load and error events.


        xhr.addEventListener('load', onLoad);
        xhr.addEventListener('error', onError); // Progress events are only enabled if requested.

        if (req.reportProgress) {
          // Download progress is always enabled if requested.
          xhr.addEventListener('progress', onDownProgress); // Upload progress depends on whether there is a body to upload.

          if (reqBody !== null && xhr.upload) {
            xhr.upload.addEventListener('progress', onUpProgress);
          }
        } // Fire the request, and notify the event stream that it was fired.


        xhr.send(reqBody);
        observer.next({
          type: HttpEventType.Sent
        }); // This is the return from the Observable function, which is the
        // request cancellation handler.

        return function () {
          // On a cancellation, remove all registered event listeners.
          xhr.removeEventListener('error', onError);
          xhr.removeEventListener('load', onLoad);

          if (req.reportProgress) {
            xhr.removeEventListener('progress', onDownProgress);

            if (reqBody !== null && xhr.upload) {
              xhr.upload.removeEventListener('progress', onUpProgress);
            }
          } // Finally, abort the in-flight request.


          if (xhr.readyState !== xhr.DONE) {
            xhr.abort();
          }
        };
      });
    }
  }]);

  return HttpXhrBackend;
}();

HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) {
  return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](XhrFactory));
};

HttpXhrBackend.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpXhrBackend,
  factory: HttpXhrBackend.ɵfac
});

HttpXhrBackend.ctorParameters = function () {
  return [{
    type: XhrFactory
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpXhrBackend, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: XhrFactory
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


var XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('XSRF_COOKIE_NAME');
var XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_6__["InjectionToken"]('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */

var HttpXsrfTokenExtractor = function HttpXsrfTokenExtractor() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpXsrfTokenExtractor);
};
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */


var HttpXsrfCookieExtractor = /*#__PURE__*/function () {
  function HttpXsrfCookieExtractor(doc, platform, cookieName) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpXsrfCookieExtractor);

    this.doc = doc;
    this.platform = platform;
    this.cookieName = cookieName;
    this.lastCookieString = '';
    this.lastToken = null;
    /**
     * @internal for testing
     */

    this.parseCount = 0;
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpXsrfCookieExtractor, [{
    key: "getToken",
    value: function getToken() {
      if (this.platform === 'server') {
        return null;
      }

      var cookieString = this.doc.cookie || '';

      if (cookieString !== this.lastCookieString) {
        this.parseCount++;
        this.lastToken = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["ɵparseCookieValue"])(cookieString, this.cookieName);
        this.lastCookieString = cookieString;
      }

      return this.lastToken;
    }
  }]);

  return HttpXsrfCookieExtractor;
}();

HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) {
  return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](XSRF_COOKIE_NAME));
};

HttpXsrfCookieExtractor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpXsrfCookieExtractor,
  factory: HttpXsrfCookieExtractor.ɵfac
});

HttpXsrfCookieExtractor.ctorParameters = function () {
  return [{
    type: undefined,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"]]
    }]
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [XSRF_COOKIE_NAME]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["DOCUMENT"]]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["PLATFORM_ID"]]
      }]
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [XSRF_COOKIE_NAME]
      }]
    }];
  }, null);
})();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */


var HttpXsrfInterceptor = /*#__PURE__*/function () {
  function HttpXsrfInterceptor(tokenService, headerName) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpXsrfInterceptor);

    this.tokenService = tokenService;
    this.headerName = headerName;
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpXsrfInterceptor, [{
    key: "intercept",
    value: function intercept(req, next) {
      var lcUrl = req.url.toLowerCase(); // Skip both non-mutating requests and absolute URLs.
      // Non-mutating requests don't require a token, and absolute URLs require special handling
      // anyway as the cookie set
      // on our origin is not the same as the token expected by another origin.

      if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') || lcUrl.startsWith('https://')) {
        return next.handle(req);
      }

      var token = this.tokenService.getToken(); // Be careful not to overwrite an existing header of the same name.

      if (token !== null && !req.headers.has(this.headerName)) {
        req = req.clone({
          headers: req.headers.set(this.headerName, token)
        });
      }

      return next.handle(req);
    }
  }]);

  return HttpXsrfInterceptor;
}();

HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) {
  return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](XSRF_HEADER_NAME));
};

HttpXsrfInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpXsrfInterceptor,
  factory: HttpXsrfInterceptor.ɵfac
});

HttpXsrfInterceptor.ctorParameters = function () {
  return [{
    type: HttpXsrfTokenExtractor
  }, {
    type: String,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
      args: [XSRF_HEADER_NAME]
    }]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: HttpXsrfTokenExtractor
    }, {
      type: String,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Inject"],
        args: [XSRF_HEADER_NAME]
      }]
    }];
  }, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */


var HttpInterceptingHandler = /*#__PURE__*/function () {
  function HttpInterceptingHandler(backend, injector) {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpInterceptingHandler);

    this.backend = backend;
    this.injector = injector;
    this.chain = null;
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpInterceptingHandler, [{
    key: "handle",
    value: function handle(req) {
      if (this.chain === null) {
        var interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
        this.chain = interceptors.reduceRight(function (next, interceptor) {
          return new HttpInterceptorHandler(next, interceptor);
        }, this.backend);
      }

      return this.chain.handle(req);
    }
  }]);

  return HttpInterceptingHandler;
}();

HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) {
  return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]));
};

HttpInterceptingHandler.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: HttpInterceptingHandler,
  factory: HttpInterceptingHandler.ɵfac
});

HttpInterceptingHandler.ctorParameters = function () {
  return [{
    type: HttpBackend
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
  }];
};
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injectable"]
  }], function () {
    return [{
      type: HttpBackend
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Injector"]
    }];
  }, null);
})();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */


function interceptingHandler(backend) {
  var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!interceptors) {
    return backend;
  }

  return interceptors.reduceRight(function (next, interceptor) {
    return new HttpInterceptorHandler(next, interceptor);
  }, backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */


function jsonpCallbackContext() {
  if (typeof window === 'object') {
    return window;
  }

  return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */


var HttpClientXsrfModule = /*#__PURE__*/function () {
  function HttpClientXsrfModule() {
    Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpClientXsrfModule);
  }

  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HttpClientXsrfModule, null, [{
    key: "disable",

    /**
     * Disable the default XSRF protection.
     */
    value: function disable() {
      return {
        ngModule: HttpClientXsrfModule,
        providers: [{
          provide: HttpXsrfInterceptor,
          useClass: NoopInterceptor
        }]
      };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */

  }, {
    key: "withOptions",
    value: function withOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return {
        ngModule: HttpClientXsrfModule,
        providers: [options.cookieName ? {
          provide: XSRF_COOKIE_NAME,
          useValue: options.cookieName
        } : [], options.headerName ? {
          provide: XSRF_HEADER_NAME,
          useValue: options.headerName
        } : []]
      };
    }
  }]);

  return HttpClientXsrfModule;
}();

HttpClientXsrfModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: HttpClientXsrfModule
});
HttpClientXsrfModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function HttpClientXsrfModule_Factory(t) {
    return new (t || HttpClientXsrfModule)();
  },
  providers: [HttpXsrfInterceptor, {
    provide: HTTP_INTERCEPTORS,
    useExisting: HttpXsrfInterceptor,
    multi: true
  }, {
    provide: HttpXsrfTokenExtractor,
    useClass: HttpXsrfCookieExtractor
  }, {
    provide: XSRF_COOKIE_NAME,
    useValue: 'XSRF-TOKEN'
  }, {
    provide: XSRF_HEADER_NAME,
    useValue: 'X-XSRF-TOKEN'
  }]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      providers: [HttpXsrfInterceptor, {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpXsrfInterceptor,
        multi: true
      }, {
        provide: HttpXsrfTokenExtractor,
        useClass: HttpXsrfCookieExtractor
      }, {
        provide: XSRF_COOKIE_NAME,
        useValue: 'XSRF-TOKEN'
      }, {
        provide: XSRF_HEADER_NAME,
        useValue: 'X-XSRF-TOKEN'
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


var HttpClientModule = function HttpClientModule() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpClientModule);
};

HttpClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: HttpClientModule
});
HttpClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function HttpClientModule_Factory(t) {
    return new (t || HttpClientModule)();
  },
  providers: [HttpClient, {
    provide: HttpHandler,
    useClass: HttpInterceptingHandler
  }, HttpXhrBackend, {
    provide: HttpBackend,
    useExisting: HttpXhrBackend
  }, BrowserXhr, {
    provide: XhrFactory,
    useExisting: BrowserXhr
  }],
  imports: [[HttpClientXsrfModule.withOptions({
    cookieName: 'XSRF-TOKEN',
    headerName: 'X-XSRF-TOKEN'
  })]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HttpClientModule, {
    imports: [HttpClientXsrfModule]
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      /**
       * Optional configuration for XSRF protection.
       */
      imports: [HttpClientXsrfModule.withOptions({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN'
      })],

      /**
       * Configures the [dependency injector](guide/glossary#injector) where it is imported
       * with supporting services for HTTP communications.
       */
      providers: [HttpClient, {
        provide: HttpHandler,
        useClass: HttpInterceptingHandler
      }, HttpXhrBackend, {
        provide: HttpBackend,
        useExisting: HttpXhrBackend
      }, BrowserXhr, {
        provide: XhrFactory,
        useExisting: BrowserXhr
      }]
    }]
  }], null, null);
})();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */


var HttpClientJsonpModule = function HttpClientJsonpModule() {
  Object(_Users_attila_gitx_admino2_frontend_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, HttpClientJsonpModule);
};

HttpClientJsonpModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: HttpClientJsonpModule
});
HttpClientJsonpModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  factory: function HttpClientJsonpModule_Factory(t) {
    return new (t || HttpClientJsonpModule)();
  },
  providers: [JsonpClientBackend, {
    provide: JsonpCallbackContext,
    useFactory: jsonpCallbackContext
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: JsonpInterceptor,
    multi: true
  }]
});
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"],
    args: [{
      providers: [JsonpClientBackend, {
        provide: JsonpCallbackContext,
        useFactory: jsonpCallbackContext
      }, {
        provide: HTTP_INTERCEPTORS,
        useClass: JsonpInterceptor,
        multi: true
      }]
    }]
  }], null, null);
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*******************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*****************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!********************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!************************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*****************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!**************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!**************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createSuper; });
/* harmony import */ var _getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct */ "../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js");
/* harmony import */ var _possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");



function _createSuper(Derived) {
  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return function () {
    var Super = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(_getPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result);
  };
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!***********************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!***************************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _isNativeReflectConstruct; });
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!******************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!***********************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!******************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!********************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!****************************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../../node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*****************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!****************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!********************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!*********************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "../../node_modules/css-element-queries/index.js":
/*!*************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/css-element-queries/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ResizeSensor: __webpack_require__(/*! ./src/ResizeSensor */ "../../node_modules/css-element-queries/src/ResizeSensor.js"),
  ElementQueries: __webpack_require__(/*! ./src/ElementQueries */ "../../node_modules/css-element-queries/src/ElementQueries.js")
};

/***/ }),

/***/ "../../node_modules/css-element-queries/src/ElementQueries.js":
/*!**************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/css-element-queries/src/ElementQueries.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./ResizeSensor.js */ "../../node_modules/css-element-queries/src/ResizeSensor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {
  /**
   *
   * @type {Function}
   * @constructor
   */
  var ElementQueries = function ElementQueries() {
    //<style> element with our dynamically created styles
    var cssStyleElement; //all rules found for element queries

    var allQueries = {}; //association map to identify which selector belongs to a element from the animationstart event.

    var idToSelectorMapping = [];
    /**
     *
     * @param element
     * @returns {Number}
     */

    function getEmSize(element) {
      if (!element) {
        element = document.documentElement;
      }

      var fontSize = window.getComputedStyle(element, null).fontSize;
      return parseFloat(fontSize) || 16;
    }
    /**
     * Get element size
     * @param {HTMLElement} element
     * @returns {Object} {width, height}
     */


    function getElementSize(element) {
      if (!element.getBoundingClientRect) {
        return {
          width: element.offsetWidth,
          height: element.offsetHeight
        };
      }

      var rect = element.getBoundingClientRect();
      return {
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
    /**
     *
     * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
     *
     * @param {HTMLElement} element
     * @param {*} value
     * @returns {*}
     */


    function convertToPx(element, value) {
      var numbers = value.split(/\d/);
      var units = numbers[numbers.length - 1];
      value = parseFloat(value);

      switch (units) {
        case "px":
          return value;

        case "em":
          return value * getEmSize(element);

        case "rem":
          return value * getEmSize();
        // Viewport units!
        // According to http://quirksmode.org/mobile/tableViewport.html
        // documentElement.clientWidth/Height gets us the most reliable info

        case "vw":
          return value * document.documentElement.clientWidth / 100;

        case "vh":
          return value * document.documentElement.clientHeight / 100;

        case "vmin":
        case "vmax":
          var vw = document.documentElement.clientWidth / 100;
          var vh = document.documentElement.clientHeight / 100;
          var chooser = Math[units === "vmin" ? "min" : "max"];
          return value * chooser(vw, vh);

        default:
          return value;
        // for now, not supporting physical units (since they are just a set number of px)
        // or ex/ch (getting accurate measurements is hard)
      }
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {String} id
     * @constructor
     */


    function SetupInformation(element, id) {
      this.element = element;
      var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;
      var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];
      /**
       * Extracts the computed width/height and sets to min/max- attribute.
       */

      this.call = function () {
        // extract current dimensions
        elementSize = getElementSize(this.element);
        attrValues = {};

        for (key in allQueries[id]) {
          if (!allQueries[id].hasOwnProperty(key)) {
            continue;
          }

          option = allQueries[id][key];
          value = convertToPx(this.element, option.value);
          actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
          attrName = option.mode + '-' + option.property;
          attrValue = '';

          if (option.mode === 'min' && actualValue >= value) {
            attrValue += option.value;
          }

          if (option.mode === 'max' && actualValue <= value) {
            attrValue += option.value;
          }

          if (!attrValues[attrName]) attrValues[attrName] = '';

          if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
            attrValues[attrName] += ' ' + attrValue;
          }
        }

        for (var k in attributes) {
          if (!attributes.hasOwnProperty(k)) continue;

          if (attrValues[attributes[k]]) {
            this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
          } else {
            this.element.removeAttribute(attributes[k]);
          }
        }
      };
    }
    /**
     * @param {HTMLElement} element
     * @param {Object}      id
     */


    function setupElement(element, id) {
      if (!element.elementQueriesSetupInformation) {
        element.elementQueriesSetupInformation = new SetupInformation(element, id);
      }

      if (!element.elementQueriesSensor) {
        element.elementQueriesSensor = new ResizeSensor(element, function () {
          element.elementQueriesSetupInformation.call();
        });
      }
    }
    /**
     * Stores rules to the selector that should be applied once resized.
     *
     * @param {String} selector
     * @param {String} mode min|max
     * @param {String} property width|height
     * @param {String} value
     */


    function queueQuery(selector, mode, property, value) {
      if (typeof allQueries[selector] === 'undefined') {
        allQueries[selector] = []; // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

        var id = idToSelectorMapping.length;
        cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
        cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: ' + id + 'px;}';
        idToSelectorMapping.push(selector);
      }

      allQueries[selector].push({
        mode: mode,
        property: property,
        value: value
      });
    }

    function getQuery(container) {
      var query;
      if (document.querySelectorAll) query = container ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
      if (!query && 'undefined' !== typeof $$) query = $$;
      if (!query && 'undefined' !== typeof jQuery) query = jQuery;

      if (!query) {
        throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
      }

      return query;
    }
    /**
     * If animationStart didn't catch a new element in the DOM, we can manually search for it
     */


    function findElementQueriesElements(container) {
      var query = getQuery(container);

      for (var selector in allQueries) {
        if (allQueries.hasOwnProperty(selector)) {
          // find all elements based on the extract query selector from the element query rule
          var elements = query(selector, container);

          for (var i = 0, j = elements.length; i < j; i++) {
            setupElement(elements[i], selector);
          }
        }
      }
    }
    /**
     *
     * @param {HTMLElement} element
     */


    function attachResponsiveImage(element) {
      var children = [];
      var rules = [];
      var sources = [];
      var defaultImageId = 0;
      var lastActiveImage = -1;
      var loadedImages = [];

      for (var i in element.children) {
        if (!element.children.hasOwnProperty(i)) continue;

        if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
          children.push(element.children[i]);
          var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width'); //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');

          var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');
          sources.push(src);
          var rule = {
            minWidth: minWidth
          };
          rules.push(rule);

          if (!minWidth) {
            defaultImageId = children.length - 1;
            element.children[i].style.display = 'block';
          } else {
            element.children[i].style.display = 'none';
          }
        }
      }

      lastActiveImage = defaultImageId;

      function check() {
        var imageToDisplay = false,
            i;

        for (i in children) {
          if (!children.hasOwnProperty(i)) continue;

          if (rules[i].minWidth) {
            if (element.offsetWidth > rules[i].minWidth) {
              imageToDisplay = i;
            }
          }
        }

        if (!imageToDisplay) {
          //no rule matched, show default
          imageToDisplay = defaultImageId;
        }

        if (lastActiveImage !== imageToDisplay) {
          //image change
          if (!loadedImages[imageToDisplay]) {
            //image has not been loaded yet, we need to load the image first in memory to prevent flash of
            //no content
            var image = new Image();

            image.onload = function () {
              children[imageToDisplay].src = sources[imageToDisplay];
              children[lastActiveImage].style.display = 'none';
              children[imageToDisplay].style.display = 'block';
              loadedImages[imageToDisplay] = true;
              lastActiveImage = imageToDisplay;
            };

            image.src = sources[imageToDisplay];
          } else {
            children[lastActiveImage].style.display = 'none';
            children[imageToDisplay].style.display = 'block';
            lastActiveImage = imageToDisplay;
          }
        } else {
          //make sure for initial check call the .src is set correctly
          children[imageToDisplay].src = sources[imageToDisplay];
        }
      }

      element.resizeSensorInstance = new ResizeSensor(element, check);
      check();
    }

    function findResponsiveImages() {
      var query = getQuery();
      var elements = query('[data-responsive-image],[responsive-image]');

      for (var i = 0, j = elements.length; i < j; i++) {
        attachResponsiveImage(elements[i]);
      }
    }

    var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
    var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;
    /**
     * @param {String} css
     */

    function extractQuery(css) {
      var match, smatch, attrs, attrMatch;
      css = css.replace(/'/g, '"');

      while (null !== (match = regex.exec(css))) {
        smatch = match[1] + match[3];
        attrs = match[2];

        while (null !== (attrMatch = attrRegex.exec(attrs))) {
          queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
        }
      }
    }
    /**
     * @param {CssRule[]|String} rules
     */


    function readRules(rules) {
      var selector = '';

      if (!rules) {
        return;
      }

      if ('string' === typeof rules) {
        rules = rules.toLowerCase();

        if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
          extractQuery(rules);
        }
      } else {
        for (var i = 0, j = rules.length; i < j; i++) {
          if (1 === rules[i].type) {
            selector = rules[i].selectorText || rules[i].cssText;

            if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
              extractQuery(selector);
            } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
              extractQuery(selector);
            }
          } else if (4 === rules[i].type) {
            readRules(rules[i].cssRules || rules[i].rules);
          } else if (3 === rules[i].type) {
            if (rules[i].styleSheet.hasOwnProperty("cssRules")) {
              readRules(rules[i].styleSheet.cssRules);
            }
          }
        }
      }
    }

    var defaultCssInjected = false;
    /**
     * Searches all css rules and setups the event listener to all elements with element query rules..
     */

    this.init = function () {
      var animationStart = 'animationstart';

      if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
        animationStart = 'webkitAnimationStart';
      } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
        animationStart = 'mozanimationstart';
      } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
        animationStart = 'oanimationstart';
      }

      document.body.addEventListener(animationStart, function (e) {
        var element = e.target;
        var styles = element && window.getComputedStyle(element, null);
        var animationName = styles && styles.getPropertyValue('animation-name');
        var requiresSetup = animationName && -1 !== animationName.indexOf('element-queries');

        if (requiresSetup) {
          element.elementQueriesSensor = new ResizeSensor(element, function () {
            if (element.elementQueriesSetupInformation) {
              element.elementQueriesSetupInformation.call();
            }
          });
          var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
          var id = sensorStyles.getPropertyValue('min-width');
          id = parseInt(id.replace('px', ''));
          setupElement(e.target, idToSelectorMapping[id]);
        }
      });

      if (!defaultCssInjected) {
        cssStyleElement = document.createElement('style');
        cssStyleElement.type = 'text/css';
        cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}'; //safari wants at least one rule in keyframes to start working

        cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
        document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
        defaultCssInjected = true;
      }

      for (var i = 0, j = document.styleSheets.length; i < j; i++) {
        try {
          if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
            console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
          }

          readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
        } catch (e) {}
      }

      findResponsiveImages();
    };
    /**
     * Go through all collected rules (readRules()) and attach the resize-listener.
     * Not necessary to call it manually, since we detect automatically when new elements
     * are available in the DOM. However, sometimes handy for dirty DOM modifications.
     *
     * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
     */


    this.findElementQueriesElements = function (container) {
      findElementQueriesElements(container);
    };

    this.update = function () {
      this.init();
    };
  };

  ElementQueries.update = function () {
    ElementQueries.instance.update();
  };
  /**
   * Removes all sensor and elementquery information from the element.
   *
   * @param {HTMLElement} element
   */


  ElementQueries.detach = function (element) {
    if (element.elementQueriesSetupInformation) {
      //element queries
      element.elementQueriesSensor.detach();
      delete element.elementQueriesSetupInformation;
      delete element.elementQueriesSensor;
    } else if (element.resizeSensorInstance) {
      //responsive image
      element.resizeSensorInstance.detach();
      delete element.resizeSensorInstance;
    }
  };

  ElementQueries.init = function () {
    if (!ElementQueries.instance) {
      ElementQueries.instance = new ElementQueries();
    }

    ElementQueries.instance.init();
  };

  var domLoaded = function domLoaded(callback) {
    /* Mozilla, Chrome, Opera */
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', callback, false);
    }
    /* Safari, iCab, Konqueror */
    else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
        var DOMLoadTimer = setInterval(function () {
          if (/loaded|complete/i.test(document.readyState)) {
            callback();
            clearInterval(DOMLoadTimer);
          }
        }, 10);
      }
      /* Other web browsers */
      else window.onload = callback;
  };

  ElementQueries.findElementQueriesElements = function (container) {
    ElementQueries.instance.findElementQueriesElements(container);
  };

  ElementQueries.listen = function () {
    domLoaded(ElementQueries.init);
  };

  return ElementQueries;
});

/***/ }),

/***/ "../../node_modules/css-element-queries/src/ResizeSensor.js":
/*!************************************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/css-element-queries/src/ResizeSensor.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function () {
  // Make sure it does not throw in a SSR (Server Side Rendering) situation
  if (typeof window === "undefined") {
    return null;
  } // https://github.com/Semantic-Org/Semantic-UI/issues/3855
  // https://github.com/marcj/css-element-queries/issues/257


  var globalWindow = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')(); // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
  // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
  // would generate too many unnecessary events.

  var requestAnimationFrame = globalWindow.requestAnimationFrame || globalWindow.mozRequestAnimationFrame || globalWindow.webkitRequestAnimationFrame || function (fn) {
    return globalWindow.setTimeout(fn, 20);
  };

  var cancelAnimationFrame = globalWindow.cancelAnimationFrame || globalWindow.mozCancelAnimationFrame || globalWindow.webkitCancelAnimationFrame || function (timer) {
    globalWindow.clearTimeout(timer);
  };
  /**
   * Iterate over each of the provided element(s).
   *
   * @param {HTMLElement|HTMLElement[]} elements
   * @param {Function}                  callback
   */


  function forEachElement(elements, callback) {
    var elementsType = Object.prototype.toString.call(elements);
    var isCollectionTyped = '[object Array]' === elementsType || '[object NodeList]' === elementsType || '[object HTMLCollection]' === elementsType || '[object Object]' === elementsType || 'undefined' !== typeof jQuery && elements instanceof jQuery //jquery
    || 'undefined' !== typeof Elements && elements instanceof Elements //mootools
    ;
    var i = 0,
        j = elements.length;

    if (isCollectionTyped) {
      for (; i < j; i++) {
        callback(elements[i]);
      }
    } else {
      callback(elements);
    }
  }
  /**
  * Get element size
  * @param {HTMLElement} element
  * @returns {Object} {width, height}
  */


  function getElementSize(element) {
    if (!element.getBoundingClientRect) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    var rect = element.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
  }
  /**
   * Apply CSS styles to element.
   *
   * @param {HTMLElement} element
   * @param {Object} style
   */


  function setStyle(element, style) {
    Object.keys(style).forEach(function (key) {
      element.style[key] = style[key];
    });
  }
  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */


  var ResizeSensor = function ResizeSensor(element, callback) {
    //Is used when checking in reset() only for invisible elements
    var lastAnimationFrameForInvisibleCheck = 0;
    /**
     *
     * @constructor
     */

    function EventQueue() {
      var q = [];

      this.add = function (ev) {
        q.push(ev);
      };

      var i, j;

      this.call = function (sizeInfo) {
        for (i = 0, j = q.length; i < j; i++) {
          q[i].call(this, sizeInfo);
        }
      };

      this.remove = function (ev) {
        var newQueue = [];

        for (i = 0, j = q.length; i < j; i++) {
          if (q[i] !== ev) newQueue.push(q[i]);
        }

        q = newQueue;
      };

      this.length = function () {
        return q.length;
      };
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */


    function attachResizeEvent(element, resized) {
      if (!element) return;

      if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);
      element.resizeSensor = document.createElement('div');
      element.resizeSensor.dir = 'ltr';
      element.resizeSensor.className = 'resize-sensor';
      var style = {
        pointerEvents: 'none',
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        overflow: 'hidden',
        zIndex: '-1',
        visibility: 'hidden',
        maxWidth: '100%'
      };
      var styleChild = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        transition: '0s'
      };
      setStyle(element.resizeSensor, style);
      var expand = document.createElement('div');
      expand.className = 'resize-sensor-expand';
      setStyle(expand, style);
      var expandChild = document.createElement('div');
      setStyle(expandChild, styleChild);
      expand.appendChild(expandChild);
      var shrink = document.createElement('div');
      shrink.className = 'resize-sensor-shrink';
      setStyle(shrink, style);
      var shrinkChild = document.createElement('div');
      setStyle(shrinkChild, styleChild);
      setStyle(shrinkChild, {
        width: '200%',
        height: '200%'
      });
      shrink.appendChild(shrinkChild);
      element.resizeSensor.appendChild(expand);
      element.resizeSensor.appendChild(shrink);
      element.appendChild(element.resizeSensor);
      var computedStyle = window.getComputedStyle(element);
      var position = computedStyle ? computedStyle.getPropertyValue('position') : null;

      if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
        element.style.position = 'relative';
      }

      var dirty = false; //last request animation frame id used in onscroll event

      var rafId = 0;
      var size = getElementSize(element);
      var lastWidth = 0;
      var lastHeight = 0;
      var initialHiddenCheck = true;
      lastAnimationFrameForInvisibleCheck = 0;

      var resetExpandShrink = function resetExpandShrink() {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        expandChild.style.width = width + 10 + 'px';
        expandChild.style.height = height + 10 + 'px';
        expand.scrollLeft = width + 10;
        expand.scrollTop = height + 10;
        shrink.scrollLeft = width + 10;
        shrink.scrollTop = height + 10;
      };

      var reset = function reset() {
        // Check if element is hidden
        if (initialHiddenCheck) {
          var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

          if (invisible) {
            // Check in next frame
            if (!lastAnimationFrameForInvisibleCheck) {
              lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
              });
            }

            return;
          } else {
            // Stop checking
            initialHiddenCheck = false;
          }
        }

        resetExpandShrink();
      };

      element.resizeSensor.resetSensor = reset;

      var onResized = function onResized() {
        rafId = 0;
        if (!dirty) return;
        lastWidth = size.width;
        lastHeight = size.height;

        if (element.resizedAttached) {
          element.resizedAttached.call(size);
        }
      };

      var onScroll = function onScroll() {
        size = getElementSize(element);
        dirty = size.width !== lastWidth || size.height !== lastHeight;

        if (dirty && !rafId) {
          rafId = requestAnimationFrame(onResized);
        }

        reset();
      };

      var addEvent = function addEvent(el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll); // Fix for custom Elements and invisible elements

      lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
        lastAnimationFrameForInvisibleCheck = 0;
        reset();
      });
    }

    forEachElement(element, function (elem) {
      attachResizeEvent(elem, callback);
    });

    this.detach = function (ev) {
      // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
      if (!lastAnimationFrameForInvisibleCheck) {
        cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
        lastAnimationFrameForInvisibleCheck = 0;
      }

      ResizeSensor.detach(element, ev);
    };

    this.reset = function () {
      element.resizeSensor.resetSensor();
    };
  };

  ResizeSensor.reset = function (element) {
    forEachElement(element, function (elem) {
      elem.resizeSensor.resetSensor();
    });
  };

  ResizeSensor.detach = function (element, ev) {
    forEachElement(element, function (elem) {
      if (!elem) return;

      if (elem.resizedAttached && typeof ev === "function") {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) return;
      }

      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }

        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  };

  if (typeof MutationObserver !== "undefined") {
    var observer = new MutationObserver(function (mutations) {
      for (var i in mutations) {
        if (mutations.hasOwnProperty(i)) {
          var items = mutations[i].addedNodes;

          for (var j = 0; j < items.length; j++) {
            if (items[j].resizeSensor) {
              ResizeSensor.reset(items[j]);
            }
          }
        }
      }
    });
    document.addEventListener("DOMContentLoaded", function (event) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  return ResizeSensor;
});

/***/ }),

/***/ "../../node_modules/tinycolor2/tinycolor.js":
/*!********************************************************************************!*\
  !*** /Users/attila/gitx/admino2_frontend/node_modules/tinycolor2/tinycolor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;// TinyColor v1.4.1
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
(function (Math) {
  var trimLeft = /^\s+/,
      trimRight = /\s+$/,
      tinyCounter = 0,
      mathRound = Math.round,
      mathMin = Math.min,
      mathMax = Math.max,
      mathRandom = Math.random;

  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {}; // If input is already a tinycolor, return itself

    if (color instanceof tinycolor) {
      return color;
    } // If we are called as a function, call using new instead


    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }

    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType; // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`

    if (this._r < 1) {
      this._r = mathRound(this._r);
    }

    if (this._g < 1) {
      this._g = mathRound(this._g);
    }

    if (this._b < 1) {
      this._b = mathRound(this._b);
    }

    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }

  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;

      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }

      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }

      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }

      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
          s = mathRound(hsv.s * 100),
          v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
          s = mathRound(hsl.s * 100),
          l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }

      if (this._a < 1) {
        return false;
      }

      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";

      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }

      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");

      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }

        return this.toRgbString();
      }

      if (format === "rgb") {
        formattedString = this.toRgbString();
      }

      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }

      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }

      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }

      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }

      if (format === "hex8") {
        formattedString = this.toHex8String();
      }

      if (format === "name") {
        formattedString = this.toName();
      }

      if (format === "hsl") {
        formattedString = this.toHslString();
      }

      if (format === "hsv") {
        formattedString = this.toHsvString();
      }

      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  }; // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1

  tinycolor.fromRatio = function (color, opts) {
    if (typeof color == "object") {
      var newColor = {};

      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }

      color = newColor;
    }

    return tinycolor(color, opts);
  }; // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //


  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;

    if (typeof color == "string") {
      color = stringInputToObject(color);
    }

    if (typeof color == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }

      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }

    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  } // Conversion Functions
  // --------------------
  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>
  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]


  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  } // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]


  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        l = (max + min) / 2;

    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      l: l
    };
  } // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);

    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]


  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
        min = mathMin(r, g, b);
    var h,
        s,
        v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;

    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;

        case g:
          h = (b - r) / d + 2;
          break;

        case b:
          h = (r - g) / d + 4;
          break;
      }

      h /= 6;
    }

    return {
      h: h,
      s: s,
      v: v
    };
  } // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]


  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
        f = h - i,
        p = v * (1 - s),
        q = v * (1 - f * s),
        t = v * (1 - (1 - f) * s),
        mod = i % 6,
        r = [v, q, p, p, t, v][mod],
        g = [t, v, v, q, p, p][mod],
        b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  } // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex


  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))]; // Return a 3 character hex if possible

    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }

    return hex.join("");
  } // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex


  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))]; // Return a 4 character hex if possible

    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }

    return hex.join("");
  } // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"


  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  } // `equals`
  // Can be called with any tinycolor input


  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }

    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };

  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  }; // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>


  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }

  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }

  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }

  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  } // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.


  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  } // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>


  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }

  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }

  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];

    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }

    return ret;
  }

  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
        s = hsv.s,
        v = hsv.v;
    var ret = [];
    var modification = 1 / results;

    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }

    return ret;
  } // Utility Functions
  // ---------------------


  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  }; // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)
  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)


  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  }; // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.
  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false


  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);

    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;

      case "AAlarge":
        out = readability >= 3;
        break;

      case "AAAsmall":
        out = readability >= 7;
        break;
    }

    return out;
  }; // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"


  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;

    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);

      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }

    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  }; // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>


  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  }; // Make it easy to access colors via `hexNames[hex]`

  var hexNames = tinycolor.hexNames = flip(names); // Utilities
  // ---------
  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`

  function flip(o) {
    var flipped = {};

    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }

    return flipped;
  } // Return a valid alpha value [0,1] with all invalid values being set to 1


  function boundAlpha(a) {
    a = parseFloat(a);

    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }

    return a;
  } // Take input from [0, n] and return it as [0, 1]


  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }

    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n))); // Automatically convert percentage into number

    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    } // Handle floating point rounding errors


    if (Math.abs(n - max) < 0.000001) {
      return 1;
    } // Convert into [0, 1] range if it isn't already


    return n % max / parseFloat(max);
  } // Force a number between 0 and 1


  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  } // Parse a base-16 hex value into a base-10 integer


  function parseIntFromHex(val) {
    return parseInt(val, 16);
  } // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>


  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  } // Check to see if string passed in is a percentage


  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  } // Force a hex value to have 2 characters


  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  } // Replace a decimal with it's percentage value


  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }

    return n;
  } // Converts a decimal to a hex value


  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  } // Converts a hex value to a decimal


  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }

  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?"; // <http://www.w3.org/TR/css3-values/#number-value>

    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?"; // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.

    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")"; // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren

    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }(); // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).


  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  } // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`


  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;

    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    } // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.


    var match;

    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }

    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }

    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }

    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }

    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }

    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }

    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }

    return false;
  }

  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();

    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }

    if (size !== "small" && size !== "large") {
      size = "small";
    }

    return {
      "level": level,
      "size": size
    };
  } // Node: Export function


  if ( true && module.exports) {
    module.exports = tinycolor;
  } // AMD/requirejs: Define the module
  else if (true) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return tinycolor;
      }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } // Browser: Expose to window
    else {}
})(Math);

/***/ }),

/***/ "../shared/src/lib/button/button.component.ts":
/*!****************************************************!*\
  !*** ../shared/src/lib/button/button.component.ts ***!
  \****************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var _c0 = ["sharedBtn", ""];
var _c1 = ["*"];
var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
    ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["button", "sharedBtn", ""]], attrs: _c0, ngContentSelectors: _c1, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, styles: ["[_nghost-%COMP%] {\n  padding: 0 15px;\n  border: 1px solid #d8dde6;\n  border-radius: 6px;\n  line-height: 40px;\n  cursor: pointer;\n  background: #fff;\n}\n[_nghost-%COMP%]:hover {\n  background: #f3f7fb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NoYXJlZC9zcmMvbGliL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMvc2hhcmVkL3NyYy9saWIvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkZGU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YzZjdmYjtcbiAgfVxufVxuIl19 */"] });
    return ButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: "button[sharedBtn]",
                template: "<ng-content></ng-content>",
                styleUrls: ["./button.component.scss"],
            }]
    }], null, null); })();


/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/constants/commands.ts":
/*!**************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/constants/commands.ts ***!
  \**************************************************************/
/*! exports provided: COMMAND_PREFIX, PLUGIN_COMMANDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMAND_PREFIX", function() { return COMMAND_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_COMMANDS", function() { return PLUGIN_COMMANDS; });
var COMMAND_PREFIX = "_command_";
var PLUGIN_COMMANDS = {
    setValue: COMMAND_PREFIX + "setValue",
    forceUpdate: COMMAND_PREFIX + "forceRefresh",
    destroy: COMMAND_PREFIX + "destroy",
};


/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/constants/interaction-handlers.ts":
/*!**************************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/constants/interaction-handlers.ts ***!
  \**************************************************************************/
/*! exports provided: INTERACTION_HANDLERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTERACTION_HANDLERS", function() { return INTERACTION_HANDLERS; });
/* harmony import */ var _interactions_keydown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../interactions/keydown */ "../shared/src/lib/plugin-wrapper/interactions/keydown.ts");
/* harmony import */ var _interactions_value_change__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interactions/value-change */ "../shared/src/lib/plugin-wrapper/interactions/value-change.ts");
/* harmony import */ var _interactions_click__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interactions/click */ "../shared/src/lib/plugin-wrapper/interactions/click.ts");
/* harmony import */ var _interactions_drag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interactions/drag */ "../shared/src/lib/plugin-wrapper/interactions/drag.ts");
/* harmony import */ var _interactions_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../interactions/drop */ "../shared/src/lib/plugin-wrapper/interactions/drop.ts");
/* harmony import */ var _interactions_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../interactions/plugin */ "../shared/src/lib/plugin-wrapper/interactions/plugin.ts");
/* harmony import */ var _interactions_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../interactions/contextmenu */ "../shared/src/lib/plugin-wrapper/interactions/contextmenu.ts");







var INTERACTION_HANDLERS = {
    valueChange: _interactions_value_change__WEBPACK_IMPORTED_MODULE_1__["ValueChange"],
    click: _interactions_click__WEBPACK_IMPORTED_MODULE_2__["Click"],
    drag: _interactions_drag__WEBPACK_IMPORTED_MODULE_3__["Drag"],
    drop: _interactions_drop__WEBPACK_IMPORTED_MODULE_4__["Drop"],
    plugin: _interactions_plugin__WEBPACK_IMPORTED_MODULE_5__["PluginInteraction"],
    keydown: _interactions_keydown__WEBPACK_IMPORTED_MODULE_0__["Keydown"],
    contextmenu: _interactions_contextmenu__WEBPACK_IMPORTED_MODULE_6__["ContextMenu"],
};


/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/click.ts":
/*!**************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/click.ts ***!
  \**************************************************************/
/*! exports provided: Click */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Click", function() { return Click; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");


var Click = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Click, _super);
    function Click() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Click.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "click", function () {
            _this.fire().subscribe();
        });
    };
    Click.prototype.onUpdate = function () { };
    Click.prototype.onDestroy = function () { };
    return Click;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/contextmenu.ts":
/*!********************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/contextmenu.ts ***!
  \********************************************************************/
/*! exports provided: ContextMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContextMenu", function() { return ContextMenu; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");


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
            _this.fire().subscribe();
        });
    };
    ContextMenu.prototype.onUpdate = function () { };
    ContextMenu.prototype.onDestroy = function () { };
    return ContextMenu;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/drag.ts":
/*!*************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/drag.ts ***!
  \*************************************************************/
/*! exports provided: Drag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drag", function() { return Drag; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../shared/src/lib/plugin-wrapper/utils.ts");
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");



var Drag = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Drag, _super);
    function Drag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drag.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.context.pluginComponentRef.location.nativeElement.setAttribute("draggable", true);
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "drag", function (e) {
            e.preventDefault();
        });
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "dragstart", function (e) {
            var data = {
                draggedElementId: _this.context.pluginConfig.id,
                draggedElementPath: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getPath"])(_this.context),
                draggedElementvalue: _this.context.control.value,
            };
            var d = {
                data: data,
                allowedDropTargets: interaction.config.allowedDropTargets,
            };
            e.dataTransfer.setData("text", JSON.stringify(d));
            if (interaction) {
                _this.fire({ dragEvent: "dragstart" }).subscribe();
            }
        });
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "dragend", function (e) {
            if (interaction) {
                _this.fire({ dragEvent: "dragend" }).subscribe();
            }
        });
    };
    Drag.prototype.onUpdate = function () { };
    Drag.prototype.onDestroy = function () {
        this.context.pluginComponentRef.location.nativeElement.removeAttribute("draggable");
    };
    return Drag;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_2__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/drop.ts":
/*!*************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/drop.ts ***!
  \*************************************************************/
/*! exports provided: Drop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drop", function() { return Drop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");


var Drop = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Drop, _super);
    function Drop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drop.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "dragover", function (e) {
            // e.dataTransfer.dropEffect = "link"
            e.preventDefault();
        });
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "drop", function (e) {
            e.preventDefault();
            var d = JSON.parse(e.dataTransfer.getData("text"));
            if (!d) {
                console.warn("No drag data received on drop to following target:", _this.context.pluginConfig.id);
                return;
            }
            var allowedDropTargets = d.allowedDropTargets;
            if (!allowedDropTargets || allowedDropTargets.indexOf(interaction.config.dropTargetId) < 0) {
                console.warn("Dropped data not allowed for this drop target:", _this.context.pluginConfig.id, "data:", d);
                return;
            }
            var data = d.data;
            if (!data) {
                data = {};
            }
            data.dropLocation = { x: e.offsetX, y: e.offsetY };
            data.dropTargetWidth = e.target.offsetWidth;
            data.dropTargetHeight = e.target.offsetHeight;
            _this.fire(data).subscribe();
            // e.target.appendChild(document.getElementById(data));
        });
    };
    Drop.prototype.onUpdate = function () { };
    Drop.prototype.onDestroy = function () { };
    return Drop;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts":
/*!*************************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts ***!
  \*************************************************************************/
/*! exports provided: InteractionBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionBase", function() { return InteractionBase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);



var InteractionBase = /** @class */ (function () {
    function InteractionBase() {
        this.listeners = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        // dataHook = (data) => {
        //   return data;
        // };
        this.fire$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.debouncedFire$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    // requests;
    InteractionBase.prototype.onCreate = function (id, interaction) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
    };
    InteractionBase.prototype.create = function (id, context, interaction) {
        var _this = this;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        this.id;
        this.context = context;
        this.interaction = interaction;
        this.fire$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(interaction.debounce)).subscribe(function (data) {
            _this.debouncedFire(data);
        });
        this.onCreate.apply(this, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([id, interaction], args));
    };
    InteractionBase.prototype.onUpdate = function () { };
    InteractionBase.prototype.update = function () {
        this.onUpdate();
    };
    InteractionBase.prototype.registerListener = function (el, evt, boundFunc) {
        el.addEventListener(evt, boundFunc.bind(this));
        this.listeners.push({ el: el, evt: evt, boundFunc: boundFunc });
    };
    InteractionBase.prototype.onDestroy = function () { };
    InteractionBase.prototype.destroy = function () {
        this.onDestroy();
        for (var _i = 0, _a = this.listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener.el.removeEventListener(listener.evt, listener.boundFunc);
        }
        this.destroy$.next();
        this.destroy$.complete();
    };
    InteractionBase.prototype.fire = function (data) {
        // setTimeout((params) => {
        //   this.fire$.next(data);
        // });
        if (data === void 0) { data = null; }
        // return this.debouncedFire$.pipe(
        //   tap((params) => {
        //     console.log("NEEXT");
        //   }),
        //   finalize(() => {
        //     this.unsubscribe$.next();
        //   })
        // );
        return this.context.fireActions(this.id, this.interaction.actions, null, this.interaction, data);
    };
    InteractionBase.prototype.debouncedFire = function (data) {
        if (data === void 0) { data = null; }
        // this.context
        //   .fireActions(this.id, this.interaction.actions, null, this.interaction, data)
        //   .pipe(takeUntil(this.unsubscribe$))
        //   .subscribe((result) => {
        //     this.debouncedFire$.next(result);
        //   });
    };
    return InteractionBase;
}());



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/keydown.ts":
/*!****************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/keydown.ts ***!
  \****************************************************************/
/*! exports provided: Keydown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Keydown", function() { return Keydown; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");


var Keydown = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Keydown, _super);
    function Keydown() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keydown.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.registerListener(this.context.pluginComponentRef.location.nativeElement, "keydown", function (e) {
            var _a, _b;
            var data = { code: e.code, key: e.key, which: e.which, location: e.location };
            if ((_a = interaction.config) === null || _a === void 0 ? void 0 : _a.preventDefault) {
                e.preventDefault();
            }
            if ((_b = interaction.config) === null || _b === void 0 ? void 0 : _b.keys) {
                if (interaction.config.keys.indexOf(e.key.toLowerCase()) >= 0) {
                    var sub = _this.fire(data).subscribe();
                    // sub.unsubscribe();
                }
            }
            else {
                _this.fire(data).subscribe();
            }
        });
    };
    Keydown.prototype.onUpdate = function () { };
    Keydown.prototype.onDestroy = function () { };
    return Keydown;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/plugin.ts":
/*!***************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/plugin.ts ***!
  \***************************************************************/
/*! exports provided: PluginInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginInteraction", function() { return PluginInteraction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");


var PluginInteraction = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(PluginInteraction, _super);
    function PluginInteraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PluginInteraction.prototype.onCreate = function (id, interaction) { };
    PluginInteraction.prototype.onUpdate = function () { };
    PluginInteraction.prototype.onDestroy = function () { };
    return PluginInteraction;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/interactions/value-change.ts":
/*!*********************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/interactions/value-change.ts ***!
  \*********************************************************************/
/*! exports provided: ValueChange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueChange", function() { return ValueChange; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interaction_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interaction-base */ "../shared/src/lib/plugin-wrapper/interactions/interaction-base.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var ValueChange = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ValueChange, _super);
    function ValueChange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ValueChange.prototype.onCreate = function (id, interaction) {
        var _this = this;
        this.context.control.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (newVal) {
            return !Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(_this.prevValue, newVal);
        }))
            .subscribe(function (value) {
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                _this.fire(value).subscribe();
            });
        });
        this.prevValue = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this.context.control.value);
    };
    ValueChange.prototype.onUpdate = function () { };
    ValueChange.prototype.onDestroy = function () {
        clearTimeout(this.timeout);
    };
    return ValueChange;
}(_interaction_base__WEBPACK_IMPORTED_MODULE_1__["InteractionBase"]));



/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/plugin-wrapper.component.ts":
/*!********************************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/plugin-wrapper.component.ts ***!
  \********************************************************************/
/*! exports provided: PLUGIN_CONTEXT, PluginWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUGIN_CONTEXT", function() { return PLUGIN_CONTEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluginWrapperComponent", function() { return PluginWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_interaction_handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/interaction-handlers */ "../shared/src/lib/plugin-wrapper/constants/interaction-handlers.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "@angular/forms");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_forms__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../shared/src/lib/plugin-wrapper/utils.ts");
/* harmony import */ var _services_config_utils_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/config-utils.service */ "../shared/src/lib/services/config-utils.service.ts");
/* harmony import */ var _services_action_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/action.service */ "../shared/src/lib/services/action.service.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/config.service */ "../shared/src/lib/services/config.service.ts");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/api.service */ "../shared/src/lib/services/api.service.ts");
/* harmony import */ var _services_ping_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/ping.service */ "../shared/src/lib/services/ping.service.ts");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/theme.service */ "../shared/src/lib/services/theme.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/user.service */ "../shared/src/lib/services/user.service.ts");
/* harmony import */ var _services_format_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../services/format.service */ "../shared/src/lib/services/format.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! css-element-queries */ "../../node_modules/css-element-queries/index.js");
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(css_element_queries__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/deepcompare */ "../shared/src/lib/utils/deepcompare.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _services_key_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../services/key.service */ "../shared/src/lib/services/key.service.ts");





























var _c0 = ["targetRef"];
function PluginWrapperComponent_ng_template_0_Template(rf, ctx) { }
var PLUGIN_CONTEXT = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]("PluginContext");
var PluginWrapperComponent = /** @class */ (function () {
    function PluginWrapperComponent(injector, cfr, el, action, api, key, config, configUtils, ping, theme, user, format, renderer) {
        this.injector = injector;
        this.cfr = cfr;
        this.el = el;
        this.action = action;
        this.api = api;
        this.key = key;
        this.config = config;
        this.configUtils = configUtils;
        this.ping = ping;
        this.theme = theme;
        this.user = user;
        this.format = format;
        this.renderer = renderer;
        this.containerStyle = {};
        this.pluginConfig = {};
        this.rootContext = this;
        this.redraw$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.contentChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.resize$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.update$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.init$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.viewinit$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["BehaviorSubject"](false);
        this.pluginInteractionApplied$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.pluginInteractionDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__["Subject"]();
        this.interactions = {};
        this.focusElements = [];
        this.wrapperInteractionHandlers = {};
        this.pluginInteractionHandlers = {};
        this.wrapperInteractionHandlers = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](_constants_interaction_handlers__WEBPACK_IMPORTED_MODULE_1__["INTERACTION_HANDLERS"]);
    }
    PluginWrapperComponent.prototype.ngOnInit = function () { };
    PluginWrapperComponent.prototype.ngAfterViewInit = function () {
        this.viewinit$.next(true);
    };
    PluginWrapperComponent.prototype.setPlugin = function (id, pluginConfig) {
        var _this = this;
        this.reset();
        this.id = id;
        this.path = lodash__WEBPACK_IMPORTED_MODULE_17__["isNil"](this.path) ? (this.parentContext ? this.parentContext.path + "." + id : id) : this.path;
        var prevConfig = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](this.pluginConfig);
        var diff = Object(_utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__["deepCompare"])(prevConfig, pluginConfig);
        this.pluginConfig = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](pluginConfig);
        var createdPlugin = this.pluginCreator.createPlugin(this.pluginConfig, this.vcRef, this.cfr, this.injector, this);
        this.pluginComponentRef = createdPlugin.componentRef;
        this.pluginDefinition = createdPlugin.pluginDefinition;
        this.createControl();
        this.processPluginConfig(prevConfig, this.pluginConfig, diff);
        this.pluginComponentRef.changeDetectorRef.detectChanges();
        // needed for proper dimensions calculation for the grouplayout system
        this.renderer.addClass(this.pluginComponentRef.location.nativeElement, "app-d-block");
        this.rs = new css_element_queries__WEBPACK_IMPORTED_MODULE_15__["ResizeSensor"](this.pluginComponentRef.location.nativeElement, function () {
            _this.contentChanged$.next();
        });
        this.focusElements = this.pluginComponentRef.location.nativeElement.querySelectorAll("[data-focus-target]");
        this.focusElements.forEach(function () {
            // console.log(el.getAttribute("data-focus-target"));
        });
        this.viewinit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(this.destroy$)).subscribe(function (viewinited) {
            if (viewinited) {
                _this.action.setFocus.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(_this.destroy$)).subscribe(function (focusData) {
                    if (focusData.path === _this.path) {
                        console.log(focusData);
                        if (Number.isInteger(focusData.value) && _this.focusElements[focusData.value]) {
                            _this.focusElements[focusData.value].focus();
                        }
                        else if (_this.focusElements[0]) {
                            _this.focusElements[0].focus();
                        }
                    }
                });
            }
        });
        // console.log(this.focusElements);
    };
    PluginWrapperComponent.prototype.updateStyles = function (prevStyles, newStyles) {
        var _this = this;
        var diffs = Object(_utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__["deepCompare"])(prevStyles, newStyles);
        Object.keys(diffs.deleted).forEach(function (prop) {
            _this.renderer.removeStyle(_this.pluginComponentRef.location.nativeElement, prop);
        });
        if (Object.keys(diffs.new).length > 0) {
            Object.keys(newStyles).forEach(function (prop) {
                _this.renderer.setStyle(_this.pluginComponentRef.location.nativeElement, prop, newStyles[prop]);
            });
        }
    };
    PluginWrapperComponent.prototype.updateClasses = function (prevClasses, newClasses) {
        var _this = this;
        var diffs = Object(_utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__["deepCompare"])(prevClasses, newClasses);
        Object.keys(diffs.deleted).forEach(function (prop) {
            _this.renderer.removeClass(_this.pluginComponentRef.location.nativeElement, prop);
        });
        if (Object.keys(diffs.new).length > 0) {
            newClasses.forEach(function (className) {
                _this.renderer.addClass(_this.pluginComponentRef.location.nativeElement, className);
            });
        }
    };
    PluginWrapperComponent.prototype.updatePlugin = function (newConfig) {
        var prevConfig = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](this.pluginConfig);
        var commands = newConfig.commands ? newConfig.commands : {};
        delete newConfig.commands;
        this.pluginConfig = newConfig;
        var compareResult = Object(_utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__["deepCompare"])(prevConfig, this.pluginConfig);
        if (compareResult.diff.type) {
            console.warn("Plugin type is not allowed to be updated, please destroy and recreate instead: ", this.id);
            return;
        }
        this.processPluginConfig(prevConfig, newConfig, compareResult);
        this.update$.next({ prevConfig: prevConfig, newConfig: newConfig, compareResult: compareResult, commands: commands });
    };
    PluginWrapperComponent.prototype.processPluginConfig = function (prevConfig, newConfig, compareResult) {
        var _this = this;
        var diff = compareResult.diff;
        if (diff.containerStyle) {
            this.containerStyle = this.pluginConfig.containerStyle;
        }
        if (diff.containerClasses) {
            this.containerClasses = this.pluginConfig.containerClasses;
        }
        if (diff.style) {
            this.updateStyles(prevConfig.style, newConfig.style);
        }
        if (diff.classes) {
            this.updateClasses(prevConfig.classes, newConfig.classes);
        }
        if (diff.theme) {
            if (newConfig.theme) {
                this.theme.applyColorVars(this.el.nativeElement, newConfig.theme);
            }
            else {
                this.theme.removeColorVars(this.el.nativeElement);
            }
        }
        if (diff.value) {
            this.control.setValue(newConfig.value);
        }
        if (diff.interactions) {
            var diffs = Object(_utils_deepcompare__WEBPACK_IMPORTED_MODULE_16__["deepCompare"])(prevConfig.interactions, newConfig.interactions);
            Object.keys(diffs.new).forEach(function (id) {
                _this.applyInteraction(id, newConfig.interactions[id]);
            });
            Object.keys(diffs.deleted).forEach(function (id) {
                if (_this.interactions[id]) {
                    _this.interactions[id].destroy();
                }
                delete _this.interactions[id];
            });
            Object.keys(diffs.updated).forEach(function (id) {
                _this.applyInteraction(id, newConfig.interactions[id]);
            });
        }
    };
    PluginWrapperComponent.prototype.registerInteraction = function (id, handlerClass) {
        this.pluginInteractionHandlers[id] = handlerClass;
    };
    PluginWrapperComponent.prototype.overrideInteraction = function (id, handlerClass) {
        this.wrapperInteractionHandlers[id] = handlerClass;
    };
    PluginWrapperComponent.prototype.applyInteraction = function (id, interaction) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        if (this.interactions[id]) {
            this.interactions[id].destroy();
        }
        if (this.wrapperInteractionHandlers[interaction.type]) {
            var funcClass = this.wrapperInteractionHandlers[interaction.type];
            if (interaction.type === "plugin") {
                if (this.pluginInteractionHandlers[interaction.pluginTrigger]) {
                    funcClass = this.pluginInteractionHandlers[interaction.pluginTrigger];
                }
                else {
                    funcClass = this.wrapperInteractionHandlers[interaction.type];
                }
            }
            else {
                funcClass = this.wrapperInteractionHandlers[interaction.type];
            }
            var func = new funcClass();
            func.pluginInstance = this.pluginComponentRef.instance;
            func.create.apply(func, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])([id, this, interaction], args));
            this.interactions[id] = func;
        }
        else {
            console.warn("Unknown functionality:", interaction.type);
        }
    };
    PluginWrapperComponent.prototype.removeInteraction = function (id) {
        if (this.interactions[id]) {
            this.interactions[id].destroy();
            delete this.interactions[id];
        }
    };
    // registerInteractionHandler(id: string, handler: new () => InteractionBase) {
    //   INTERACTION_HANDLERS[this.pluginConfig.type + "_" + id] = handler;
    // }
    PluginWrapperComponent.prototype.getPluginInteractions = function (pluginInteraction) {
        var _this = this;
        if (pluginInteraction === void 0) { pluginInteraction = undefined; }
        var interactions = {};
        Object.keys(this.interactions).forEach(function (key) {
            var interactionConfig = _this.interactions[key].interaction;
            if (interactionConfig.type === "plugin" &&
                (interactionConfig.pluginTrigger === pluginInteraction || pluginInteraction === undefined)) {
                interactions[key] = _this.interactions[key];
            }
        });
        return interactions;
    };
    PluginWrapperComponent.prototype.firePluginInteractions = function (type, data) {
        var _this = this;
        if (data === void 0) { data = null; }
        var interactions = this.getPluginInteractions(type);
        var observables = [];
        Object.keys(interactions).forEach(function (key) {
            var interaction = interactions[key];
            observables.push(interaction.fire(data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(_this.destroy$)));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(observables);
    };
    PluginWrapperComponent.prototype.fireActions = function (id, actions, initiatedBy, interaction, actionData) {
        var _this = this;
        if (initiatedBy === void 0) { initiatedBy = null; }
        if (interaction === void 0) { interaction = null; }
        if (actionData === void 0) { actionData = {}; }
        // const promises: Promise<any>[] = [];
        var observables = [];
        actions.forEach(function (action) {
            var _a;
            var requestBody = {
                initiatedBy: initiatedBy ? initiatedBy : Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getPath"])(_this, id),
                interactionDefinition: interaction,
                action: action,
                actionData: actionData,
                rootPluginConfig: _this.rootContext.pluginConfig,
                rootPluginValue: (_a = {},
                    _a[_this.rootContext.id] = _this.rootContext.control.value,
                    _a),
                customVars: _this.action.customVars,
                modifierKeys: _this.key.activeModifierKeys,
                queryParams: _this.action.queryParams,
            };
            console.log(requestBody);
            var observable = _this.actionHandler(requestBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["takeUntil"])(_this.destroy$));
            observables.push(observable);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_13__["forkJoin"])(observables);
    };
    PluginWrapperComponent.prototype.createControl = function () {
        if (this.pluginDefinition.controlType === "group") {
            this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({});
        }
        else if (this.pluginDefinition.controlType === "array") {
            this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]);
        }
        else {
            this.control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        }
        if (this.parentContext) {
            this.parentContext.control.addControl(this.id, this.control);
        }
    };
    PluginWrapperComponent.prototype.removeControl = function () {
        if (this.parentContext && this.parentContext.control.get(this.id)) {
            this.parentContext.control.removeControl(this.id);
        }
        if (this.control) {
            this.control.reset();
        }
    };
    // getChild(path: string): PluginWrapperComponent {
    //   const split = path.split('.');
    //   if (split.length > 1) {
    //     split.shift();
    //     return this.pluginComponentRef.instance.getChild(split.join('.'))
    //   } else {
    //     return this;
    //   }
    // }
    PluginWrapperComponent.prototype.reset = function () {
        var _this = this;
        this.destroyPlugin();
        this.containerClasses = [];
        this.containerStyle = [];
        Object.keys(this.interactions).forEach(function (id) {
            _this.interactions[id].destroy();
            delete _this.interactions[id];
        });
        this.path = undefined;
        this.id = undefined;
        this.pluginConfig = {};
        this.focusElements = [];
        this.theme.removeColorVars(this.el.nativeElement);
        this.removeControl();
        this.wrapperInteractionHandlers = lodash__WEBPACK_IMPORTED_MODULE_17__["cloneDeep"](_constants_interaction_handlers__WEBPACK_IMPORTED_MODULE_1__["INTERACTION_HANDLERS"]);
        this.pluginInteractionHandlers = {};
    };
    PluginWrapperComponent.prototype.destroyPlugin = function () {
        if (this.rs) {
            this.rs.detach();
        }
        if (this.pluginComponentRef) {
            this.destroy$.next();
            this.pluginComponentRef.destroy();
        }
        // this.vcRef.clear();
    };
    PluginWrapperComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next();
        this.destroyPlugin();
    };
    PluginWrapperComponent.ɵfac = function PluginWrapperComponent_Factory(t) { return new (t || PluginWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_key_service__WEBPACK_IMPORTED_MODULE_18__["KeyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_config_utils_service__WEBPACK_IMPORTED_MODULE_5__["ConfigUtilsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_ping_service__WEBPACK_IMPORTED_MODULE_9__["PingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_format_service__WEBPACK_IMPORTED_MODULE_12__["FormatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"])); };
    PluginWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PluginWrapperComponent, selectors: [["app-plugin-wrapper"]], viewQuery: function PluginWrapperComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.vcRef = _t.first);
        } }, hostVars: 4, hostBindings: function PluginWrapperComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleMap"](ctx.containerStyle);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.containerClasses);
        } }, inputs: { pluginConfig: "pluginConfig", pluginCreator: "pluginCreator", pluginLoader: "pluginLoader", actionHandler: "actionHandler", parentContext: "parentContext", rootContext: "rootContext", wrapperComponentRef: "wrapperComponentRef" }, decls: 2, vars: 0, consts: [["targetRef", ""]], template: function PluginWrapperComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, PluginWrapperComponent_ng_template_0_Template, 0, 0, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  z-index: 0;\n  display: inline-block;\n  transition: box-shadow 0.2s;\n  box-shadow: \"0px 0px 3px 3px rgba(0,0,0,0)\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NoYXJlZC9zcmMvbGliL3BsdWdpbi13cmFwcGVyL3BsdWdpbi13cmFwcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBSUUsa0JBQUE7RUFDQSxVQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUNBLDJDQUFBO0FBSkYiLCJmaWxlIjoicHJvamVjdHMvc2hhcmVkL3NyYy9saWIvcGx1Z2luLXdyYXBwZXIvcGx1Z2luLXdyYXBwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC8vIG1hcmdpbjogMTVweDtcbiAgLy8gb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xuICAvLyBvdXRsaW5lLW9mZnNldDogLTFweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAwO1xuICAvLyBkaXNwbGF5OiB0YWJsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAvLyB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG4gIGJveC1zaGFkb3c6IFwiMHB4IDBweCAzcHggM3B4IHJnYmEoMCwwLDAsMClcIjtcbn1cblxuLy8gLnBhdGgge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgbGVmdDogMDtcbi8vIH1cbiJdfQ== */"] });
    return PluginWrapperComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PluginWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: "app-plugin-wrapper",
                templateUrl: "./plugin-wrapper.component.html",
                styleUrls: ["./plugin-wrapper.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _services_action_service__WEBPACK_IMPORTED_MODULE_6__["ActionService"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }, { type: _services_key_service__WEBPACK_IMPORTED_MODULE_18__["KeyService"] }, { type: _services_config_service__WEBPACK_IMPORTED_MODULE_7__["ConfigService"] }, { type: _services_config_utils_service__WEBPACK_IMPORTED_MODULE_5__["ConfigUtilsService"] }, { type: _services_ping_service__WEBPACK_IMPORTED_MODULE_9__["PingService"] }, { type: _services_theme_service__WEBPACK_IMPORTED_MODULE_10__["ThemeService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] }, { type: _services_format_service__WEBPACK_IMPORTED_MODULE_12__["FormatService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }]; }, { containerStyle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ["style"]
        }], containerClasses: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"],
            args: ["class"]
        }], vcRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
            args: ["targetRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], static: true }]
        }], pluginConfig: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pluginCreator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], pluginLoader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], actionHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], parentContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], rootContext: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }], wrapperComponentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }] }); })();


/***/ }),

/***/ "../shared/src/lib/plugin-wrapper/utils.ts":
/*!*************************************************!*\
  !*** ../shared/src/lib/plugin-wrapper/utils.ts ***!
  \*************************************************/
/*! exports provided: getPath, removeCommandsFromPluginConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPath", function() { return getPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCommandsFromPluginConfig", function() { return removeCommandsFromPluginConfig; });
/* harmony import */ var _constants_commands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/commands */ "../shared/src/lib/plugin-wrapper/constants/commands.ts");

var getPath = function (context, path) {
    var _a;
    if (path === void 0) { path = true; }
    path = (_a = {}, _a[context.id] = path, _a);
    if (context.parentContext) {
        return getPath(context.parentContext, path);
    }
    else {
        return path;
    }
};
var removeCommandsFromPluginConfig = function (pluginConfig) {
    for (var _i = 0, _a = Object.keys(pluginConfig); _i < _a.length; _i++) {
        var key = _a[_i];
        if (key.startsWith(_constants_commands__WEBPACK_IMPORTED_MODULE_0__["COMMAND_PREFIX"])) {
            delete pluginConfig[key];
        }
    }
};
// export const hasAction = (pluginConfig: PluginConfig, trigger) => {
//   if (pluginConfig.interactions) {
//     const found = pluginConfig.interactions.find((action) => {
//       return action.type === trigger;
//     });
//     if (found) {
//       return found;
//     } else {
//       return null;
//     }
//   }
//   return null;
// };
// export const isPluginLevelFunctionality = (trigger: string) => {
//     const found = Object.keys(FUNCTIONALITIES).find((key) => {
//         return key === trigger;
//     });
//     return found;
// }
// export const mergeConfig = (target, source) => {
//   return _.merge(target, source);
// };
// mergeConfig(target, source) {
//   if (isObject(target) && isObject(source)) {
//     for (const key of Object.keys(source)) {
//       if (isObject(source[key]) && !isArray(source[key])) {
//         // if (key === 'value' || key.split('__')[1] === 'replace') {
//         //   target[key] = source[key];
//         // } else {
//         if (!target[key]) {
//           Object.assign(target, { [key]: {} });
//         }
//         target[key] = this.mergeConfig(target[key], source[key]);
//         // }
//       } else if (isArray(source[key])) {
//         // if (key.split('__')[1] === 'replace') {
//         //   target[key.split('__')[0]] = source[key];
//         // } else
//         if ((source[key][0] && source[key][0].id !== undefined) || key === "elements") {
//           target[key] = this.mergeArrays(target[key], source[key]);
//         } else {
//           target[key] = source[key];
//         }
//       } else {
//         Object.assign(target, { [key]: source[key] });
//       }
//     }
//   } else {
//     target = source;
//   }
//   return target;
// }
// mergeArrays(target: any[], source) {
//   if (!target) {
//     target = [];
//   }
//   for (const item of source) {
//     if (item.id) {
//       const foundTargetItem = target.find((titem) => {
//         return titem.id === item.id;
//       });
//       if (foundTargetItem) {
//         this.mergeConfig(foundTargetItem, item);
//       } else {
//         if (item.createAt !== undefined) {
//           target.splice(item.createAt, 0, item);
//         } else {
//           target.push(item);
//         }
//       }
//       // if (item.destroy) {
//       //   target.splice(target.indexOf(foundTargetItem), 1);
//       // }
//     }
//   }
//   return target;
// }
// removeEventsFromConfig(config) {
//   for (const key of Object.keys(config)) {
//     if (key.startsWith("_command_")) {
//       delete config[key];
//     }
//   }
// }


/***/ }),

/***/ "../shared/src/lib/services/action.service.ts":
/*!****************************************************!*\
  !*** ../shared/src/lib/services/action.service.ts ***!
  \****************************************************/
/*! exports provided: ActionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionService", function() { return ActionService; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.service */ "../shared/src/lib/services/config.service.ts");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "../shared/src/lib/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_encodeparams__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/encodeparams */ "../shared/src/lib/utils/encodeparams.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_wrap_into_observable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/wrap-into-observable */ "../shared/src/lib/utils/wrap-into-observable.ts");
/* harmony import */ var _theme_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme.service */ "../shared/src/lib/services/theme.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _utils_openfile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/openfile */ "../shared/src/lib/utils/openfile.ts");
/* harmony import */ var _utils_savefile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/savefile */ "../shared/src/lib/utils/savefile.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user.service */ "../shared/src/lib/services/user.service.ts");
/* harmony import */ var _key_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./key.service */ "../shared/src/lib/services/key.service.ts");























var ActionService = /** @class */ (function () {
    // RESPONSE_HANDLERS = {
    //   setScreen: (data) => {
    //     this.activeScreenId = data.id;
    //     this.setQueryParams({});
    //     this.setScreen.next(data);
    //   },
    //   updateScreen: (data) => {
    //     this.updateScreen.next(data);
    //   },
    //   setCustomVars: (data) => {
    //   },
    //   updateCustomVars: (data) => {},
    //   setSid: (data) => {},
    //   setFirstName: (data) => {},
    //   setLastname: (data) => {},
    //   setMenu: (data) => {},
    //   setMenuState: (data) => {},
    //   setQueryParams: (data) => {},
    //   setBottomButtons: (data) => {},
    //   setFocus: (data) => {},
    //   setPing: (data) => {},
    //   setSnackbars: (data) => {},
    //   startAction: (data) => {},
    //   showToolbar: (data) => {},
    //   closePopup: (data) => {},
    //   setTheme: (data) => {},
    // };
    function ActionService(router, route, http, api, cs, ts, user, key) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.api = api;
        this.cs = cs;
        this.ts = ts;
        this.user = user;
        this.key = key;
        this.setScreen = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.updateScreen = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.snackbarEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.showToolbar = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](true);
        this.menuState = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.setMenu = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]([]);
        this.setFocus = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]("");
        this.queryParams = null;
        this.activeRequests = [];
        this.customVars = {};
        this.activeScreenId = "";
        this.pingFrequency = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
    }
    ActionService.prototype.init = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.queryParams = Object(_utils_encodeparams__WEBPACK_IMPORTED_MODULE_6__["decodeParams"])(params);
        });
        if (this.queryParams && Object.keys(this.queryParams).indexOf("scanner") > -1) {
            var params = window.location.href.substring(window.location.href.indexOf("?"));
            this.backendGetRequest(this.cs.config.loginScreen + params).subscribe();
        }
        else {
            this.backendRequest(this.cs.config.loginScreen).subscribe();
        }
    };
    ActionService.prototype.handleAction = function (actionEvent) {
        if (!actionEvent.action) {
            console.warn("No action definition");
            return Object(_utils_wrap_into_observable__WEBPACK_IMPORTED_MODULE_8__["wrapIntoObservable"])(null);
        }
        if (typeof actionEvent.action === "string") {
            // return wrapIntoObservable(null);
        }
        else if (actionEvent.action.type === "backend") {
            // if (actionEvent.actionDefinition.includeSchema) {
            //   schema = actionEvent.rootPluginConfig;
            // }
            return this.backendRequest(actionEvent.action.backendAction, actionEvent);
        }
        else if (actionEvent.action.type === "frontend") {
            return this.handleFrontendAction(actionEvent.action);
        }
        else if (actionEvent.action.type === "url") {
            this.handleUrlAction(actionEvent.action);
        }
        else if (actionEvent.action.type === "download") {
            this.api.downloadFile(actionEvent.action.downloadId).subscribe(function (data) {
                if (actionEvent.action.fileAction === "open") {
                    Object(_utils_openfile__WEBPACK_IMPORTED_MODULE_11__["openFile"])(data, actionEvent.action.fileName, actionEvent.action.fileType);
                }
                else {
                    Object(_utils_savefile__WEBPACK_IMPORTED_MODULE_12__["saveFile"])(data, actionEvent.action.fileName, actionEvent.action.fileType);
                }
            });
        }
        return Object(_utils_wrap_into_observable__WEBPACK_IMPORTED_MODULE_8__["wrapIntoObservable"])(null);
    };
    ActionService.prototype.backendRequest = function (backendAction, actionEvent) {
        var _this = this;
        if (actionEvent === void 0) { actionEvent = {}; }
        var req = Object(lodash__WEBPACK_IMPORTED_MODULE_0__["cloneDeep"])(actionEvent);
        return this.api.request(backendAction, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            _this.handleResponse(response);
            return response;
        }));
    };
    ActionService.prototype.backendGetRequest = function (screen) {
        var _this = this;
        return this.api.getRequest(screen).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
            _this.handleResponse(response);
            return response;
        }));
    };
    ActionService.prototype.handleResponse = function (response) {
        // Object.keys(response).forEach((key) => {
        //   const handler = this.RESPONSE_HANDLERS[key];
        //   if (handler !== undefined) {
        //     handler(response[key]);
        //   }
        // });
        if (response.setScreen !== undefined) {
            this.activeScreenId = response.setScreen.id;
            this.setQueryParams({});
            this.setScreen.next(response.setScreen);
        }
        if (response.updateScreen !== undefined) {
            this.updateScreen.next(response.updateScreen);
        }
        if (response.setSid !== undefined) {
            this.user.sid = response.setSid;
        }
        if (response.setMenu !== undefined) {
            this.setMenu.next(response.setMenu);
        }
        if (response.setMenuState !== undefined) {
            this.menuState.next(response.setMenuState);
        }
        if (response.showToolbar !== undefined) {
            this.showToolbar.next(response.showToolbar);
        }
        if (response.setTheme !== undefined) {
            this.ts.setColors(response.setTheme);
        }
        if (response.setBottomButtons !== undefined) {
            this.user.setBottomButtons(response.setBottomButtons);
        }
        if (response.setFirstName !== undefined) {
            this.user.firstname = response.setFirstName;
        }
        if (response.setLastname !== undefined) {
            this.user.lastname = response.setLastname;
        }
        if (response.setCustomVars !== undefined) {
            this.customVars = response.setCustomVars;
        }
        if (response.updateCustomVars !== undefined) {
            Object(lodash__WEBPACK_IMPORTED_MODULE_0__["merge"])(this.customVars, response.updateCustomVars);
        }
        if (response.setQueryParams !== undefined) {
            this.setQueryParams(response.setQueryParams);
        }
        if (response.setFocus !== undefined) {
            var path = this.propertiesToArray(response.setFocus)[0];
            this.setFocus.next({ setFocus: response.setFocus, path: path, value: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["get"])(response.setFocus, path) });
        }
        if (response.setPing !== undefined) {
            this.pingFrequency.next(response.setPing);
        }
        if (response.setSnackbars !== undefined) {
            this.snackbarEvent.next(response.setSnackbars);
        }
        if (response.startAction !== undefined) {
            for (var _i = 0, _a = response.startAction; _i < _a.length; _i++) {
                var action = _a[_i];
                this.handleAction({ interactionDefinition: action }).subscribe();
            }
        }
    };
    ActionService.prototype.propertiesToArray = function (obj) {
        var isObject = function (val) { return typeof val === "object" && !Array.isArray(val); };
        var addDelimiter = function (a, b) { return (a ? a + "." + b : b); };
        var paths = function (obj, head) {
            if (obj === void 0) { obj = {}; }
            if (head === void 0) { head = ""; }
            return Object.entries(obj).reduce(function (product, _a) {
                var key = _a[0], value = _a[1];
                var fullPath = addDelimiter(head, key);
                return isObject(value) ? product.concat(paths(value, fullPath)) : product.concat(fullPath);
            }, []);
        };
        return paths(obj);
    };
    ActionService.prototype.handleFrontendAction = function (action, form) {
        if (form === void 0) { form = null; }
        if (action.frontendAction === "logout") {
            this.user.logout();
            this.setScreen.next({});
            var logoutScreen = action.logoutScreen !== undefined ? action.logoutScreen : this.cs.config.loginScreen;
            this.activeScreenId = "";
            this.pingFrequency.next(0);
            return this.backendRequest(logoutScreen);
        }
        else {
            return Object(_utils_wrap_into_observable__WEBPACK_IMPORTED_MODULE_8__["wrapIntoObservable"])(null);
        }
    };
    ActionService.prototype.handleUrlAction = function (action, form) {
        if (form === void 0) { form = null; }
        window.open(action.url, action.target ? action.target : "_blank");
    };
    ActionService.prototype.setQueryParams = function (params) {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: Object(_utils_encodeparams__WEBPACK_IMPORTED_MODULE_6__["encodeParams"])(params),
        });
    };
    ActionService.prototype.filterScreenValue = function (filters, value, filtered) {
        if (filtered === void 0) { filtered = {}; }
        if (!filters || Object.keys(filters).length === 0) {
            return value;
        }
        for (var _i = 0, _a = Object.keys(filters); _i < _a.length; _i++) {
            var key = _a[_i];
            // const element = parentElement && parentElement.elements.find((el: Element) => {
            //   return el.id === key;
            // });
            if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["isObject"])(filters[key])) {
                // if (filters[key] === false && filters[key] !== undefined) {
                filtered[key] = value[key];
                // } else {
                //   const config = cloneDeep(element);
                //   delete config.value;
                //   filtered[key] = { config, value: value[key] };
                // }
            }
            else {
                var filteredSubObject = this.filterScreenValue(filters[key], value[key], filtered[key]);
                if (Object.keys(filteredSubObject).length > 0) {
                    filtered[key] = filteredSubObject;
                }
            }
        }
        return filtered;
    };
    ActionService.prototype.addTypesToValueKeys = function (value, schema, newScreenVal) {
        if (newScreenVal === void 0) { newScreenVal = {}; }
        var _loop_1 = function (key) {
            var found = schema.elements.find(function (el) {
                return el.id === key;
            });
            if (found) {
                if (found.type === "group") {
                    newScreenVal[key + ":" + found.type] = this_1.addTypesToValueKeys(value[key], found);
                }
                else {
                    newScreenVal[key + ":" + found.type] = value[key];
                }
            }
            else {
                console.log("NOT FOUND ELEMENT BY ID WHEN ADDING TYPES TO VALUEKEYS");
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
            var key = _a[_i];
            _loop_1(key);
        }
        return newScreenVal;
    };
    ActionService.ɵfac = function ActionService_Factory(t) { return new (t || ActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_key_service__WEBPACK_IMPORTED_MODULE_14__["KeyService"])); };
    ActionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ActionService, factory: ActionService.ɵfac, providedIn: "root" });
    return ActionService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ActionService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }, { type: _config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"] }, { type: _theme_service__WEBPACK_IMPORTED_MODULE_9__["ThemeService"] }, { type: _user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"] }, { type: _key_service__WEBPACK_IMPORTED_MODULE_14__["KeyService"] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/api.service.ts":
/*!*************************************************!*\
  !*** ../shared/src/lib/services/api.service.ts ***!
  \*************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);






// import { v4 as uuidv4 } from 'uuid';
var ApiService = /** @class */ (function () {
    // tabId = uuidv4();
    function ApiService(http) {
        this.http = http;
        this.BASE_URL = "BASE URL NOT SET IN APP-CONFIG";
        this.LOGIN = "/login";
        this.BROWSE = "/browse";
        this.DOWNLOAD = "/download";
        this.BROWSER_INFO = "/browserinfo";
        this.REQUEST = "/request";
        this.PING = "/ping";
    }
    ApiService.prototype.init = function (baseUrl) {
        this.BASE_URL = baseUrl;
    };
    ApiService.prototype.downloadFile = function (downloadid) {
        return this.http.post(this.BASE_URL + this.DOWNLOAD, { downloadid: downloadid }, { responseType: "blob" });
    };
    ApiService.prototype.list = function (view, keys, cursorpos, shift, count, index, before, after, customVars) {
        if (before === void 0) { before = 0; }
        if (after === void 0) { after = 0; }
        if (customVars === void 0) { customVars = {}; }
        var dummySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        var body = {
            cursor: cursorpos.toString(),
            count: count.toString(),
            keys: keys,
            shift: shift.toString(),
            index: index.toString(),
            table: view,
            before: before.toString(),
            after: after.toString(),
            customVars: customVars,
        };
        this.http
            .post(this.BASE_URL + this.BROWSE, body)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            // setTimeout((params) => {
            dummySubject.next(response);
            dummySubject.complete();
            return response;
            // }, 300 + Math.random() * 1000);
        }))
            .subscribe(function (params) { }, function (err) {
            dummySubject.error(err);
            // dummySubject.complete();
            // return response;
        });
        return dummySubject;
    };
    ApiService.prototype.getInfo = function (view) {
        return this.http.post(this.BASE_URL + this.BROWSER_INFO, { view: view });
    };
    ApiService.prototype.request = function (requestedScreen, request) {
        return this.http.post(this.BASE_URL + this.REQUEST + "/" + requestedScreen, request);
        // .pipe(delay(3000), map((val) => {
        //   // try {
        //   //   val['updateScreen']["elements"][0]['_forceRefresh'] = true;
        //   // } catch (error) {
        //   // }
        //   return val;
        // }));
    };
    ApiService.prototype.getRequest = function (requestedScreen) {
        return this.http.get(this.BASE_URL + this.REQUEST + "/" + requestedScreen);
    };
    ApiService.prototype.ping = function (screenName) {
        return this.http.post(this.BASE_URL + this.PING, { screenName: screenName });
    };
    ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: "root" });
    return ApiService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/config-utils.service.ts":
/*!**********************************************************!*\
  !*** ../shared/src/lib/services/config-utils.service.ts ***!
  \**********************************************************/
/*! exports provided: ConfigUtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigUtilsService", function() { return ConfigUtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var ConfigUtilsService = /** @class */ (function () {
    function ConfigUtilsService(parent) {
        this.num = Math.random();
        if (parent) {
            throw Error("[ConfigUtilsService]: trying to create multiple instances,\n        but this service should be a singleton.");
        }
    }
    ConfigUtilsService.ɵfac = function ConfigUtilsService_Factory(t) { return new (t || ConfigUtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ConfigUtilsService, 12)); };
    ConfigUtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigUtilsService, factory: ConfigUtilsService.ɵfac });
    return ConfigUtilsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigUtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ConfigUtilsService, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/config.service.ts":
/*!****************************************************!*\
  !*** ../shared/src/lib/services/config.service.ts ***!
  \****************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);





var ConfigService = /** @class */ (function () {
    //   libs: LibDefinitions;
    function ConfigService(http) {
        this.http = http;
        this.configLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        // this.configLoaded.subscribe((config) => {
        //     if (config) {
        //         this.config = config;
        //     }
        // });
    }
    ConfigService.prototype.loadConfig = function (configPath, pluginsConfigPath) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([this.http.get(configPath), this.http.get(pluginsConfigPath)]).subscribe(function (result) {
            _this.config = result[0];
            _this.plugins = result[1];
            //   this.libs = result[1].libs;
            _this.configLoaded.next(true);
        });
        // this.http.get(configPath).subscribe((result: AppConfig) => {
        //     this.configLoaded.next(result);
        // });
        // this.http.get(pluginsConfigPath).subscribe((result: AppConfig) => {
        //     this.configLoaded.next(result);
        // });
    };
    ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
    ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: "root" });
    return ConfigService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/format.service.ts":
/*!****************************************************!*\
  !*** ../shared/src/lib/services/format.service.ts ***!
  \****************************************************/
/*! exports provided: FormatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatService", function() { return FormatService; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);




var FormatService = /** @class */ (function () {
    function FormatService(decimalPipe, currencyPipe, datePipe) {
        this.decimalPipe = decimalPipe;
        this.currencyPipe = currencyPipe;
        this.datePipe = datePipe;
    }
    FormatService.prototype.format = function (value, format) {
        if (format === undefined) {
            return value;
        }
        else {
            var split = format.split(":");
            var type = split[0];
            if (type === "number") {
                var formatDef = split[1];
                var locale = split[2] ? split[2] : null;
                return this.decimalPipe.transform(value, formatDef, locale);
            }
            else if (type === "date") {
                var formatDef = split[1];
                // const timezone = split[2] ? split[2] : null;
                var locale = split[2] ? split[2] : null;
                return this.datePipe.transform(value, formatDef, "", locale);
            }
            else if (type === "currency") {
                var formatDef = split[1];
                var locale = split[2] ? split[2] : null;
                return this.currencyPipe.transform(value, formatDef, locale);
            }
            else {
                return value;
            }
        }
    };
    FormatService.ɵfac = function FormatService_Factory(t) { return new (t || FormatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
    FormatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FormatService, factory: FormatService.ɵfac, providedIn: "root" });
    return FormatService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["CurrencyPipe"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/key.service.ts":
/*!*************************************************!*\
  !*** ../shared/src/lib/services/key.service.ts ***!
  \*************************************************/
/*! exports provided: KeyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyService", function() { return KeyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var KeyService = /** @class */ (function () {
    function KeyService() {
        var _this = this;
        this.modifierKeysList = ["Control", "Shift", "Alt", "Meta"];
        this.activeModifierKeys = [];
        window.addEventListener("keydown", function (event) {
            if (_this.modifierKeysList.indexOf(event.key) > -1 && _this.activeModifierKeys.indexOf(event.code) === -1) {
                _this.activeModifierKeys.push(event.code);
            }
        });
        window.addEventListener("keyup", function (event) {
            if (_this.modifierKeysList.indexOf(event.key) > -1 && _this.activeModifierKeys.indexOf(event.code) > -1) {
                _this.activeModifierKeys.splice(_this.activeModifierKeys.indexOf(event.code), 1);
            }
        });
    }
    KeyService.ɵfac = function KeyService_Factory(t) { return new (t || KeyService)(); };
    KeyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: KeyService, factory: KeyService.ɵfac, providedIn: "root" });
    return KeyService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/ping.service.ts":
/*!**************************************************!*\
  !*** ../shared/src/lib/services/ping.service.ts ***!
  \**************************************************/
/*! exports provided: PingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingService", function() { return PingService; });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ "../shared/src/lib/services/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.service */ "../shared/src/lib/services/action.service.ts");






var PingService = /** @class */ (function () {
    function PingService(api, as) {
        this.api = api;
        this.as = as;
    }
    PingService.prototype.init = function () {
        var _this = this;
        this.startTimeout();
        this.as.pingFrequency.subscribe(function (params) {
            _this.startTimeout();
        });
    };
    PingService.prototype.startTimeout = function () {
        var _this = this;
        if (this.as.pingFrequency.value <= 0) {
            this.clearPing();
            return;
        }
        this.pingTimeout = setTimeout(function () {
            _this.pingSub = _this.api.ping(_this.as.activeScreenId).subscribe(function (response) {
                _this.as.handleResponse(response);
                _this.startTimeout();
            }, function (err) {
                _this.startTimeout();
            });
        }, this.as.pingFrequency.value);
    };
    PingService.prototype.clearPing = function () {
        if (this.pingTimeout) {
            clearTimeout(this.pingTimeout);
        }
        if (this.pingSub) {
            this.pingSub.unsubscribe();
        }
    };
    PingService.ɵfac = function PingService_Factory(t) { return new (t || PingService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"])); };
    PingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PingService, factory: PingService.ɵfac, providedIn: "root" });
    return PingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_0__["ApiService"] }, { type: _action_service__WEBPACK_IMPORTED_MODULE_2__["ActionService"] }]; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/theme.service.ts":
/*!***************************************************!*\
  !*** ../shared/src/lib/services/theme.service.ts ***!
  \***************************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tinycolor2 */ "../../node_modules/tinycolor2/tinycolor.js");
/* harmony import */ var tinycolor2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tinycolor2__WEBPACK_IMPORTED_MODULE_1__);



var ThemeService = /** @class */ (function () {
    function ThemeService() {
        this.id = Math.random();
        this.colors = {};
        // colors: string[] = ['#bb00ff', '#0000aa', '#11aaaa', '#000000', '#ffffff']
        // names: string[] = ['primary', 'accent', 'warn', 'foreground', 'background']
        this.palettes = {};
        this.cssVars = {};
        // setInterval((params) => {
        //   for (let i = 0; i < this.colors.length; i++) {
        //     this.colors[i] = tinycolor.random().toHexString();
        //     this.updateColors();
        //   }
        // }, 2000)
        var a = 1;
        // document.addEventListener("dblclick", () => {
        //   if (a % 2) {
        //     this.colors = {
        //       primary: "#5434e3",
        //       accent: "#ed7300",
        //       warn: "#11aaaa",
        //       foreground: "#2f3d47",
        //       background: "#f3f2f5",
        //     };
        //   } else {
        //     this.colors = {
        //       primary: "#863bff",
        //       accent: "#ffdd30",
        //       warn: "#11aaaa",
        //       foreground: "#ffffff",
        //       background: "#482196",
        //     };
        //   }
        //   a++;
        //   this.updateColors();
        // });
        this.updateColors();
    }
    ThemeService.prototype.init = function (colors) {
        this.setColors(colors);
    };
    ThemeService.prototype.setColors = function (colors) {
        this.colors = colors;
        this.updateColors();
    };
    ThemeService.prototype.getPalettes = function (colors) {
        var palettes = {};
        for (var _i = 0, _a = Object.keys(colors); _i < _a.length; _i++) {
            var key = _a[_i];
            palettes[key] = this.computeColors(colors[key]);
        }
        return palettes;
    };
    ThemeService.prototype.getCssVars = function (palettes) {
        var cssVars = [];
        for (var _i = 0, _a = Object.keys(palettes); _i < _a.length; _i++) {
            var colorname = _a[_i];
            var cols = palettes[colorname];
            for (var _b = 0, cols_1 = cols; _b < cols_1.length; _b++) {
                var c = cols_1[_b];
                var key = "--theme-" + colorname + "-" + c.name;
                var value = c.hex;
                var key2 = "--theme-" + colorname + "-contrast-" + c.name;
                var value2 = c.darkContrast ? "0,0,0" : "255,255,255";
                cssVars.push({ key: key, value: value });
                cssVars.push({ key: key2, value: value2 });
            }
        }
        return cssVars;
    };
    ThemeService.prototype.updateCssVars = function (el, cssVars) {
        for (var _i = 0, cssVars_1 = cssVars; _i < cssVars_1.length; _i++) {
            var c = cssVars_1[_i];
            el.style.setProperty(c.key, c.value);
        }
    };
    ThemeService.prototype.applyColorVars = function (el, colors) {
        var palettes = this.getPalettes(colors);
        var cssVars = this.getCssVars(palettes);
        this.updateCssVars(el, cssVars);
    };
    ThemeService.prototype.removeColorVars = function (el) {
        var palettes = this.getPalettes(this.colors);
        var cssVars = this.getCssVars(palettes);
        for (var _i = 0, cssVars_2 = cssVars; _i < cssVars_2.length; _i++) {
            var c = cssVars_2[_i];
            el.style.removeProperty(c.key);
        }
    };
    ThemeService.prototype.updateColors = function () {
        // this.applyColorVars(document.documentElement, this.c)
        this.palettes = this.getPalettes(this.colors);
        this.cssVars = this.getCssVars(this.palettes);
        this.updateCssVars(document.documentElement, this.cssVars);
    };
    ThemeService.prototype.computeColors = function (hex) {
        return [
            // this.getColorObject(tinycolor(hex).lighten(52), "50"),
            // this.getColorObject(tinycolor(hex).lighten(37), "100"),
            // this.getColorObject(tinycolor(hex).lighten(26), "200"),
            // this.getColorObject(tinycolor(hex).lighten(12), "300"),
            // this.getColorObject(tinycolor(hex).lighten(6), "400"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(40), "50"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(30), "100"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(26), "200"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(12), "300"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(6), "400"),
            // this.getColorObject(tinycolor(hex).lighten(30), "50"),
            // this.getColorObject(tinycolor(hex).lighten(25), "100"),
            // this.getColorObject(tinycolor(hex).lighten(17), "200"),
            // this.getColorObject(tinycolor(hex).lighten(12), "300"),
            // this.getColorObject(tinycolor(hex).lighten(6), "400"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex), "500"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).darken(6), "600"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).darken(12), "700"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).darken(18), "800"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).darken(24), "900"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(50).saturate(30), "A100"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(30).saturate(30), "A200"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(10).saturate(15), "A400"),
            this.getColorObject(tinycolor2__WEBPACK_IMPORTED_MODULE_1__(hex).lighten(5).saturate(5), "A700"),
        ];
    };
    ThemeService.prototype.getColorObject = function (value, name) {
        var c = tinycolor2__WEBPACK_IMPORTED_MODULE_1__(value);
        return {
            name: name,
            hex: c.toRgbString().slice(4, -1),
            darkContrast: c.isLight(),
        };
    };
    ThemeService.ɵfac = function ThemeService_Factory(t) { return new (t || ThemeService)(); };
    ThemeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ThemeService, factory: ThemeService.ɵfac, providedIn: "root" });
    return ThemeService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../shared/src/lib/services/user.service.ts":
/*!**************************************************!*\
  !*** ../shared/src/lib/services/user.service.ts ***!
  \**************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);



var UserService = /** @class */ (function () {
    function UserService() {
        this.userLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this._sid = "";
        this.firstname = "";
        this.lastname = "";
        this.menu = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.bottomButtons = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    UserService.prototype.init = function () {
        var storedSid = localStorage.getItem("sid");
        if (storedSid) {
            this.sid = storedSid;
        }
    };
    Object.defineProperty(UserService.prototype, "sid", {
        get: function () {
            return this._sid;
        },
        set: function (v) {
            this._sid = v;
            if (this.sid) {
                localStorage.setItem("sid", this.sid);
                this.setLoginState(true);
            }
            else {
                this.logout();
            }
        },
        enumerable: false,
        configurable: true
    });
    UserService.prototype.setLoginState = function (bool) {
        if (bool) {
            this.userLoggedIn.next(true);
        }
    };
    UserService.prototype.setMenu = function (menu) {
        this.menu.next(menu);
    };
    UserService.prototype.setBottomButtons = function (buttons) {
        this.bottomButtons.next(buttons);
    };
    UserService.prototype.logout = function () {
        this._sid = "";
        localStorage.removeItem("sid");
        this.firstname = "";
        this.lastname = "";
        this.userLoggedIn.next(false);
    };
    UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
    UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: "root" });
    return UserService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../shared/src/lib/shared.component.ts":
/*!*********************************************!*\
  !*** ../shared/src/lib/shared.component.ts ***!
  \*********************************************/
/*! exports provided: SharedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponent", function() { return SharedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);


var SharedComponent = /** @class */ (function () {
    function SharedComponent() {
    }
    SharedComponent.ɵfac = function SharedComponent_Factory(t) { return new (t || SharedComponent)(); };
    SharedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SharedComponent, selectors: [["shared-component"]], decls: 2, vars: 0, template: function SharedComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Shared component ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, encapsulation: 2 });
    return SharedComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "shared-component",
                template: "\n    <h4>\n      Shared component\n    </h4>\n  ",
                styles: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "../shared/src/lib/tabs/tab.component.ts":
/*!***********************************************!*\
  !*** ../shared/src/lib/tabs/tab.component.ts ***!
  \***********************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tabs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component */ "../shared/src/lib/tabs/tabs.component.ts");




var _c0 = ["*"];
var TabComponent = /** @class */ (function () {
    function TabComponent(tabsComponent) {
        this.hidden = true;
        tabsComponent.addTab(this);
    }
    TabComponent.ɵfac = function TabComponent_Factory(t) { return new (t || TabComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"])); };
    TabComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabComponent, selectors: [["shared-tab"]], hostVars: 1, hostBindings: function TabComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("hidden", ctx.hidden);
        } }, inputs: { title: "title" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function TabComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        } }, encapsulation: 2 });
    return TabComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "shared-tab",
                template: "<ng-content></ng-content>",
            }]
    }], function () { return [{ type: _tabs_component__WEBPACK_IMPORTED_MODULE_1__["TabsComponent"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hidden: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["hidden"]
        }] }); })();


/***/ }),

/***/ "../shared/src/lib/tabs/tabs.component.ts":
/*!************************************************!*\
  !*** ../shared/src/lib/tabs/tabs.component.ts ***!
  \************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);



function TabsComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabsComponent_li_1_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); var tab_r1 = ctx.$implicit; var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.selectTab(tab_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var tab_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("tab--active", !tab_r1.hidden);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tab_r1.title, " ");
} }
var _c0 = ["*"];
var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.tabs = [];
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabsComponent.prototype.addTab = function (tabComponent) {
        if (!this.tabs.length) {
            tabComponent.hidden = false;
        }
        this.tabs.push(tabComponent);
    };
    TabsComponent.prototype.selectTab = function (tabComponent) {
        this.tabs.map(function (tab) { return (tab.hidden = true); });
        tabComponent.hidden = false;
        this.selected.emit(tabComponent);
    };
    TabsComponent.ɵfac = function TabsComponent_Factory(t) { return new (t || TabsComponent)(); };
    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabsComponent, selectors: [["shared-tabs"]], outputs: { selected: "selected" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "tabs"], ["class", "tab", 3, "tab--active", "click", 4, "ngFor", "ngForOf"], [1, "tab-body"], [1, "tab", 3, "click"]], template: function TabsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TabsComponent_li_1_Template, 2, 3, "li", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tabs);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  border-bottom: 1px solid #ebeef2;\n}\n\n.tab[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 20px;\n  line-height: 40px;\n  cursor: pointer;\n}\n\n.tab-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.tab--active[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: #03a9f4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3NoYXJlZC9zcmMvbGliL3RhYnMvdGFicy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNFO0VBQ0UsYUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoicHJvamVjdHMvc2hhcmVkL3NyYy9saWIvdGFicy90YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlZWYyO1xufVxuXG4udGFiIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgJi1ib2R5IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICB9XG5cbiAgJi0tYWN0aXZlOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAzcHg7XG4gICAgYmFja2dyb3VuZDogIzAzYTlmNDtcbiAgfVxufVxuIl19 */"] });
    return TabsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "shared-tabs",
                templateUrl: "./tabs.component.html",
                styleUrls: ["./tabs.component.scss"],
            }]
    }], null, { selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../shared/src/lib/utils/deepcompare.ts":
/*!**********************************************!*\
  !*** ../shared/src/lib/utils/deepcompare.ts ***!
  \**********************************************/
/*! exports provided: deepCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepCompare", function() { return deepCompare; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var deepCompare = function (oldObj, newObj) {
    var diffMap = {
        new: {},
        updated: {},
        deleted: {},
        diff: {},
    };
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](oldObj) && lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](newObj)) {
        return diffMap;
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](newObj)) {
        Object.keys(oldObj).forEach(function (d) {
            diffMap.deleted[d] = true;
            diffMap.diff[d] = true;
        });
        return diffMap;
    }
    if (lodash__WEBPACK_IMPORTED_MODULE_0__["isNil"](oldObj)) {
        Object.keys(newObj).forEach(function (d) {
            diffMap.new[d] = true;
            diffMap.diff[d] = true;
        });
        return diffMap;
    }
    var keys = Object.keys(oldObj).concat(Object.keys(newObj));
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!lodash__WEBPACK_IMPORTED_MODULE_0__["isEqual"](oldObj[key], newObj[key])) {
            diffMap.diff[key] = true;
            if (!oldObj.hasOwnProperty(key)) {
                diffMap.new[key] = true;
            }
            else if (!newObj.hasOwnProperty(key)) {
                diffMap.deleted[key] = true;
            }
            else {
                diffMap.updated[key] = true;
            }
        }
    }
    return diffMap;
};


/***/ }),

/***/ "../shared/src/lib/utils/encodeparams.ts":
/*!***********************************************!*\
  !*** ../shared/src/lib/utils/encodeparams.ts ***!
  \***********************************************/
/*! exports provided: encodeParams, decodeParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeParams", function() { return encodeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeParams", function() { return decodeParams; });
function encodeParams(params) {
    var encoded = {};
    Object.keys(params).forEach(function (key) {
        encoded[key] = encodeURIComponent(params[key]);
    });
    return encoded;
}
function decodeParams(params) {
    var decoded = {};
    Object.keys(params).forEach(function (key) {
        decoded[key] = decodeURIComponent(params[key]);
    });
    return decoded;
}


/***/ }),

/***/ "../shared/src/lib/utils/openfile.ts":
/*!*******************************************!*\
  !*** ../shared/src/lib/utils/openfile.ts ***!
  \*******************************************/
/*! exports provided: openFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return openFile; });
function openFile(data, fileName, fileType) {
    if (fileType === void 0) { fileType = ""; }
    var file = new Blob([data], { type: fileType });
    var fileURL = URL.createObjectURL(file);
    window.open(fileURL);
}


/***/ }),

/***/ "../shared/src/lib/utils/savefile.ts":
/*!*******************************************!*\
  !*** ../shared/src/lib/utils/savefile.ts ***!
  \*******************************************/
/*! exports provided: saveFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveFile", function() { return saveFile; });
function saveFile(data, fileName, fileType) {
    if (fileType === void 0) { fileType = ""; }
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var blob = new Blob([data], { type: fileType });
    var url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
}


/***/ }),

/***/ "../shared/src/lib/utils/wrap-into-observable.ts":
/*!*******************************************************!*\
  !*** ../shared/src/lib/utils/wrap-into-observable.ts ***!
  \*******************************************************/
/*! exports provided: wrapIntoObservable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapIntoObservable", function() { return wrapIntoObservable; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);


function wrapIntoObservable(value) {
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisObservable"])(value)) {
        return value;
    }
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵisPromise"])(value)) {
        // Use `Promise.resolve()` to wrap promise-like instances.
        // Required ie when a Resolver returns a AngularJS `$q` promise to correctly trigger the
        // change detection.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(Promise.resolve(value));
    }
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(value);
}


/***/ }),

/***/ "./src/group/group-layout.ts":
/*!***********************************!*\
  !*** ./src/group/group-layout.ts ***!
  \***********************************/
/*! exports provided: GroupLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupLayout", function() { return GroupLayout; });
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layout_position_controller_group_layout_position_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/position-controller/group-layout-position-controller */ "./src/group/layout/position-controller/group-layout-position-controller.ts");
/* harmony import */ var _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/layout-element-controls/layout-element-controls.component */ "./src/group/layout/layout-element-controls/layout-element-controls.component.ts");
/* harmony import */ var _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout-controls/layout-controls.component */ "./src/group/layout/layout-controls/layout-controls.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__);








var GroupLayout = /** @class */ (function () {
    function GroupLayout(id, context, hostEl, hostVC, wrapperEl, wrapperVC, renderer, cfr, injector, cd, overlay) {
        var _this = this;
        this.id = id;
        this.context = context;
        this.hostEl = hostEl;
        this.hostVC = hostVC;
        this.wrapperEl = wrapperEl;
        this.wrapperVC = wrapperVC;
        this.renderer = renderer;
        this.cfr = cfr;
        this.injector = injector;
        this.cd = cd;
        this.overlay = overlay;
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.editMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.editModeExited$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.buildMode$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.buildModeCancelled$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.buildModeEnded$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.addNew$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.layoutElements = {};
        this.viewportW = 1000;
        this.viewportH = 1000;
        this.skipResizeEvent = false;
        this.activeElementIds = [];
        this.activeElementEngaged = false;
        this.lastHoveredElement = null;
        this.resizeListener = this.renderer.listen("window", "resize", function (e) {
            _this.onResize();
        });
        this.backgroundClickListener = this.renderer.listen(this.wrapperEl.nativeElement, "click", function (e) {
            if (e.target === e.currentTarget) {
                _this.deactivate();
            }
        });
        this.backgroundMouseOverListener = this.renderer.listen(this.wrapperEl.nativeElement, "mouseover", function (e) {
            if (e.target === e.currentTarget && _this.activeElementEngaged === false) {
                _this.deactivate();
                _this.setLastHovered(null);
            }
        });
    }
    // Init and creation
    GroupLayout.prototype.init = function (elements, layoutConfig) {
        var _this = this;
        var _a, _b;
        this.elements = elements;
        var collectedLayout = {};
        Object.keys(this.elements).forEach(function (key) {
            var _a;
            var elLayout = (_a = _this.elements[key].instance.pluginConfig) === null || _a === void 0 ? void 0 : _a.layout;
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](elLayout) && elLayout.type === "absolute") {
                collectedLayout[key] = elLayout;
            }
        });
        this.layout = collectedLayout;
        this.currentLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layout);
        this.layoutConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(layoutConfig);
        this.positionController = new _layout_position_controller_group_layout_position_controller__WEBPACK_IMPORTED_MODULE_2__["GroupLayoutPositionController"]();
        var initialState = this.initLayoutElements();
        this.positionController.listOfRenderedElements = this.layoutElements;
        this.positionController.wrapperEl = this.wrapperEl;
        this.positionController.id = this.id;
        this.positionController.layout = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layout);
        this.positionController.activeState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(initialState);
        this.positionController.nextState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(initialState);
        this.positionController.layoutConfig = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layoutConfig);
        this.positionController.renderer = this.renderer;
        this.editMode$.next((_a = this.layoutConfig) === null || _a === void 0 ? void 0 : _a.editMode);
        this.buildMode$.next((_b = this.layoutConfig) === null || _b === void 0 ? void 0 : _b.buildMode);
        this.editMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value) {
                _this.createLayoutControls();
            }
            else {
                _this.editModeExited$.next();
                _this.removeLayoutControls();
            }
        });
        this.buildMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])()).subscribe(function (value) {
            if (value) {
                _this.enableBuildMode();
            }
            else {
                _this.disableBuildMode();
            }
        });
        // this.positionController.updateState$.pipe(debounceTime(500), takeUntil(this.ngUnsubscribe)).subscribe((newState) => {
        //   this.updateState(newState);
        //   this.updateAll();
        // });
        this.positionController.updateState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (newState) {
            _this.updateState(newState);
            _this.updateAll();
            _this.updateElementControls();
        });
        this.positionController.commitState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (newState) {
            _this.updateState(newState);
            _this.positionController.activeState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(_this.currentState);
            _this.positionController.nextState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(_this.currentState);
            _this.updateAll();
            _this.updateElementControls();
        });
        this.positionController.commitLayout$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(function (newState) {
            _this.layout = _this.positionController.toLayout();
            _this.positionController.layout = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(_this.layout);
        });
        this.cd.detectChanges();
        this.initLayout();
    };
    GroupLayout.prototype.updateState = function (newState) {
        this.previousState = this.currentState;
        this.currentState = newState;
    };
    GroupLayout.prototype.initLayout = function () {
        this.positionController.initState({
            width: this.wrapperEl.nativeElement.clientWidth,
            height: this.wrapperEl.nativeElement.clientHeight,
        });
    };
    GroupLayout.prototype.enableBuildMode = function () {
        var _this = this;
        Object.keys(this.layoutElements).forEach(function (id) {
            _this.enableBuildModeOnElement(id);
        });
        this.layoutControlsRef.instance.buildMode = true;
        this.cd.detectChanges();
    };
    GroupLayout.prototype.enableBuildModeOnElement = function (id) {
        var _this = this;
        var el = this.layoutElements[id];
        this.renderer.addClass(el.componentRef.instance.pluginComponentRef.location.nativeElement, "limit-interaction");
        this.renderer.addClass(el.componentRef.location.nativeElement, "editing");
        el.componentRef.changeDetectorRef.detectChanges();
        el.listeners.keydown = this.renderer.listen(document, "keydown", function (evt) {
            if (evt.key === "Control") {
                _this.activeElementEngaged = true;
            }
        });
        el.listeners.keyup = this.renderer.listen(document, "keyup", function (evt) {
            if (evt.key === "Control") {
                _this.activeElementEngaged = false;
            }
        });
        el.listeners.click = this.renderer.listen(el.componentRef.location.nativeElement, "click", function (evt) {
            _this.activate(id, evt.ctrlKey);
            if (evt.ctrlKey) {
                _this.activeElementEngaged = true;
            }
        });
        el.listeners.mouseover = this.renderer.listen(el.componentRef.location.nativeElement, "mouseover", function (evt) {
            if ((_this.activeElementIds.length <= 1 || !evt.ctrlKey) && !_this.activeElementEngaged) {
                _this.activate(id);
            }
            else {
                _this.setLastHovered(id);
            }
        });
    };
    GroupLayout.prototype.setLastHovered = function (id) {
        this.lastHoveredElement = id;
    };
    GroupLayout.prototype.disableBuildMode = function () {
        var _this = this;
        var _a;
        if ((_a = this.layoutControlsRef) === null || _a === void 0 ? void 0 : _a.instance.buildMode) {
            this.layoutControlsRef.instance.buildMode = false;
        }
        this.deactivate();
        Object.keys(this.layoutElements).forEach(function (key) {
            var el = _this.layoutElements[key];
            if (el.listeners.click) {
                el.listeners.click();
            }
            if (el.listeners.mouseover) {
                el.listeners.mouseover();
            }
            _this.renderer.removeClass(el.componentRef.instance.pluginComponentRef.location.nativeElement, "limit-interaction");
            _this.renderer.removeClass(el.componentRef.location.nativeElement, "editing");
        });
        this.cd.detectChanges();
    };
    GroupLayout.prototype.activate = function (id, add) {
        if (add === void 0) { add = false; }
        this.setLastHovered(null);
        var el = this.layoutElements[id];
        this.renderer.addClass(el.componentRef.location.nativeElement, "editing-active");
        if (add) {
            this.activeElementIds.push(id);
        }
        else {
            this.deactivate();
            this.activeElementIds = [id];
        }
        if (!this.activeElementControls) {
            this.activeElementControls = this.createElementControls(this.activeElementIds, this.wrapperVC);
        }
        this.positionController.controlComponent = this.activeElementControls;
        this.activeElementControls.instance.setIds(this.activeElementIds);
        this.updateElementControls();
    };
    GroupLayout.prototype.deactivate = function () {
        var _this = this;
        this.activeElementIds.forEach(function (id) {
            var el = _this.layoutElements[id];
            _this.renderer.removeClass(el.componentRef.location.nativeElement, "editing-active");
            if (id === _this.lastHoveredElement) {
                _this.setLastHovered(null);
            }
        });
        this.activeElementEngaged = false;
        if (this.activeButtonControl) {
            this.activeButtonControl.dispose();
        }
        if (this.activeElementControls) {
            this.activeElementControls.destroy();
            this.activeElementControls = null;
        }
        this.activeElementIds = [];
        if (this.lastHoveredElement !== null) {
            this.activate(this.lastHoveredElement);
        }
    };
    GroupLayout.prototype.subscribeToElementWrapperEvents = function (subject, callback) {
        subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.editModeExited$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.buildModeCancelled$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.buildModeEnded$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(callback);
    };
    GroupLayout.prototype.createLayoutControls = function () {
        var _this = this;
        var componentFactory = this.cfr.resolveComponentFactory(_layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__["LayoutControlsComponent"]);
        var componentRef = this.hostVC.createComponent(componentFactory, undefined, this.injector);
        componentRef.instance.buildMode = this.buildMode$.value;
        this.subscribeToLayoutControlEvent(componentRef.instance.buildModeEntered, function () {
            _this.buildMode$.next(true);
        });
        this.subscribeToLayoutControlEvent(componentRef.instance.buildModeEnded, function () {
            _this.buildModeEnded$.next(_this.positionController.toLayout());
            _this.buildMode$.next(false);
        });
        this.subscribeToLayoutControlEvent(componentRef.instance.buildModeCancelled, function () {
            _this.buildMode$.next(false);
            _this.buildModeCancelled$.next();
        });
        componentRef.changeDetectorRef.detectChanges();
        this.layoutControlsRef = componentRef;
    };
    GroupLayout.prototype.subscribeToLayoutControlEvent = function (subject, callback) {
        subject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.editModeExited$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe)).subscribe(callback);
    };
    GroupLayout.prototype.removeLayoutControls = function () {
        if (this.layoutControlsRef) {
            this.layoutControlsRef.destroy();
        }
    };
    GroupLayout.prototype.layoutConfigChange = function (newLayoutConfig) {
        var diff = Object(shared__WEBPACK_IMPORTED_MODULE_0__["getDiff"])(this.layoutConfig, newLayoutConfig);
        var diffs = Object(shared__WEBPACK_IMPORTED_MODULE_0__["deepCompare"])(this.layoutConfig, newLayoutConfig);
        if (diff.buildMode) {
            this.buildMode$.next(newLayoutConfig.buildMode);
        }
        if (diff.editMode) {
            this.editMode$.next(newLayoutConfig.editMode);
        }
        this.positionController.onLayoutConfigChange(newLayoutConfig, diffs);
        this.layoutConfig = newLayoutConfig;
    };
    GroupLayout.prototype.elementsChange = function () {
        var _this = this;
        var collectedLayout = {};
        Object.keys(this.elements).forEach(function (key) {
            var _a;
            var elLayout = (_a = _this.elements[key].instance.pluginConfig) === null || _a === void 0 ? void 0 : _a.layout;
            if (!lodash__WEBPACK_IMPORTED_MODULE_1__["isNil"](elLayout) && elLayout.type === "absolute") {
                collectedLayout[key] = elLayout;
            }
        });
        var diffs = Object(shared__WEBPACK_IMPORTED_MODULE_0__["deepCompare"])(this.currentLayout, collectedLayout);
        var newEls = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(diffs.new);
        Object.keys(newEls).forEach(function (id) {
            var initialState = _this.initLayoutElement(id, collectedLayout[id]);
            if (_this.buildMode$.value) {
                _this.enableBuildModeOnElement(id);
            }
            newEls[id] = initialState;
        });
        Object.keys(diffs.deleted).forEach(function (id) {
            if (_this.activeElementIds.indexOf(id) > -1) {
                _this.deactivate();
            }
            _this.destroyLayoutElement(id);
        });
        this.currentLayout = collectedLayout;
        this.positionController.onLayoutChange(collectedLayout, newEls, diffs.deleted, diffs.updated);
    };
    GroupLayout.prototype.initLayoutElements = function () {
        var _this = this;
        var initialState = {};
        Object.keys(this.layout).forEach(function (id) {
            var config = _this.layout[id];
            if (config.type === "absolute") {
                initialState[id] = _this.initLayoutElement(id, config);
            }
        });
        return initialState;
    };
    GroupLayout.prototype.initLayoutElement = function (id, config) {
        var _this = this;
        this.layoutElements[id] = this.createLayoutElement(id, this.elements[id]);
        var wrapperInstance = this.layoutElements[id].componentRef.instance;
        this.renderer.setStyle(this.layoutElements[id].componentRef.location.nativeElement, "position", "absolute");
        // this.renderer.setStyle(this.layoutElements[key].componentRef.location.nativeElement, "transition", "left 0.2s, top 0.2s");
        if (config.initialMaxW !== undefined) {
            this.renderer.setStyle(wrapperInstance.pluginComponentRef.location.nativeElement, "max-width", config.initialMaxW + "px");
        }
        if (config.initialMaxH !== undefined) {
            this.renderer.setStyle(wrapperInstance.pluginComponentRef.location.nativeElement, "max-height", config.initialMaxH + "px");
        }
        var rect = wrapperInstance.pluginComponentRef.location.nativeElement.getBoundingClientRect();
        var state = {
            left: 0,
            top: 0,
            width: 0,
            height: 0,
            renderedContentWidth: rect.width,
            renderedContentHeight: rect.height,
            naturalWidth: rect.width,
            naturalHeight: rect.height,
            zIndex: null,
        };
        if (config.initialMaxW !== undefined) {
            this.renderer.removeStyle(wrapperInstance.pluginComponentRef.location.nativeElement, "max-width");
        }
        if (config.initialMaxH !== undefined) {
            this.renderer.removeStyle(wrapperInstance.pluginComponentRef.location.nativeElement, "max-height");
        }
        wrapperInstance.contentChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(wrapperInstance.destroy$)).subscribe(function () {
            var newRect = wrapperInstance.pluginComponentRef.location.nativeElement.getBoundingClientRect();
            _this.positionController.onElementSizeChanged(id, { renderedContentWidth: newRect.width, renderedContentHeight: newRect.height });
        });
        return state;
    };
    GroupLayout.prototype.createLayoutElement = function (id, componentRef) {
        var layoutElement = {
            componentRef: componentRef,
            listeners: {},
        };
        return layoutElement;
    };
    GroupLayout.prototype.createElementControls = function (id, vcRef) {
        var _this = this;
        var componentFactory = this.cfr.resolveComponentFactory(_layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_3__["LayoutElementControlsComponent"]);
        var componentRef = vcRef.createComponent(componentFactory, undefined, this.injector);
        componentRef.instance.ids = id;
        componentRef.instance.wrapperEl = this.hostEl;
        componentRef.instance.elementButtons = this.layoutConfig.elementButtons;
        componentRef.changeDetectorRef.detectChanges();
        this.subscribeToElementControlEvent(componentRef.instance.dragStart$, function (e) {
            _this.activeElementEngaged = true;
            _this.positionController.onDragStart(e.ids.length > 1 ? e.ids : e.ids[0], e.data, e.elementButton);
        });
        this.subscribeToElementControlEvent(componentRef.instance.drag$, function (e) {
            _this.positionController.onDrag(e.ids.length > 1 ? e.ids : e.ids[0], e.data, e.elementButton);
        });
        this.subscribeToElementControlEvent(componentRef.instance.dragEnd$, function (e) {
            _this.positionController.onDragEnd(e.ids.length > 1 ? e.ids : e.ids[0], e.data, e.elementButton);
        });
        this.subscribeToElementControlEvent(componentRef.instance.scaleStart$, function (e) {
            _this.activeElementEngaged = true;
            _this.positionController.onScaleStart(e.ids.length > 1 ? e.ids : e.ids[0], e.data);
        });
        this.subscribeToElementControlEvent(componentRef.instance.scale$, function (e) {
            _this.positionController.onScale(e.ids.length > 1 ? e.ids : e.ids[0], e.data);
        });
        this.subscribeToElementControlEvent(componentRef.instance.scaleEnd$, function (e) {
            _this.positionController.onScaleEnd(e.ids.length > 1 ? e.ids : e.ids[0], e.data);
        });
        this.subscribeToElementControlEvent(componentRef.instance.buttonEvent$, function (e) {
            var _a;
            _this.positionController.onButtonEvent(e.ids.length > 1 ? e.ids : e.ids[0], e.data, e.elementButton);
            if ((_a = e.elementButton) === null || _a === void 0 ? void 0 : _a.actions) {
                _this.context.fireActions(e.ids.length > 1 ? e.ids : e.ids[0], e.elementButton.actions, null, null, e.elementButton).subscribe();
            }
        });
        this.subscribeToElementControlEvent(componentRef.instance.click$, function (e) {
            _this.activeElementEngaged = true;
        });
        this.subscribeToElementControlEvent(componentRef.instance.mouseOver$, function (e) {
            // if (this.activeButtonControl) {
            //   this.activeButtonControl.dispose();
            // }
            // this.activeButtonControl = this.createControlButtons(this.elements[id].location);
        });
        this.subscribeToElementControlEvent(componentRef.instance.doubleClick$, function (data) {
            _this.positionController.onDoubleClick(data.ids.length > 1 ? data.ids : data.ids[0], null);
            // this.updateControlButtons();
        });
        this.subscribeToElementControlEvent(componentRef.instance.mouseLeave$, function (e) {
            // if (this.activeButtonControl) {
            //   this.activeButtonControl.dispose();
            // }
        });
        return componentRef;
    };
    GroupLayout.prototype.updateElementControls = function () {
        if (this.activeElementControls) {
            var state = this.combineStates(this.activeElementIds);
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "left", state.left + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "top", state.top + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "width", state.width + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "height", state.height + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "max-width", state.width + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "max-height", state.height + "px");
            this.renderer.setStyle(this.activeElementControls.location.nativeElement, "z-index", state.zIndex + 1000);
            this.activeElementControls.instance.update(state.left, state.top, state.width, state.height);
        }
        // this.updateControlButtons();
    };
    GroupLayout.prototype.combineStates = function (ids) {
        var combinedState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.currentState[ids[0]]);
        var minX;
        var minY;
        var maxX;
        var maxY;
        for (var i = 0; i < ids.length; i++) {
            var id = ids[i];
            var state = this.currentState[id];
            if (minX === undefined || state.left < minX) {
                minX = state.left;
            }
            if (minY === undefined || state.top < minY) {
                minY = state.top;
            }
            if (maxX === undefined || maxX < state.left + state.width) {
                maxX = state.left + state.width;
            }
            if (maxY === undefined || maxY < state.top + state.height) {
                maxY = state.top + state.height;
            }
        }
        return { left: minX, top: minY, width: maxX - minX, height: maxY - minY, zIndex: combinedState.zIndex };
    };
    GroupLayout.prototype.subscribeToElementControlEvent = function (subject, callback) {
        subject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.editModeExited$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.buildModeCancelled$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.buildModeEnded$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.ngUnsubscribe))
            .subscribe(callback);
    };
    GroupLayout.prototype.onResize = function () {
        this.viewportW = this.hostEl.nativeElement.clientWidth;
        this.viewportH = this.hostEl.nativeElement.clientHeight;
        this.positionController.onResize({
            width: this.viewportW,
            height: this.viewportH,
        });
    };
    // Updating positions
    GroupLayout.prototype.updateAll = function () {
        var _this = this;
        Object.keys(this.layoutElements).forEach(function (key) {
            var el = _this.layoutElements[key];
            _this.updateStyle(key);
            // if (this.buildMode$.value) {
            //   el.controlsRef.instance.info = this.positionController.infoHook(key);
            // }
            el.componentRef.instance.redraw$.next();
        });
    };
    GroupLayout.prototype.updateConfig = function (id, config) {
        var elConfig = this.currentLayout[id];
        Object.assign(elConfig, config);
    };
    // Applying css style to the element
    GroupLayout.prototype.updateStyle = function (id) {
        var el = this.layoutElements[id];
        if (!this.currentState) {
            console.warn("State not yet inited");
            return;
        }
        var state = this.currentState[id];
        if (!state) {
            console.warn("State not defined for", id, el);
            return;
        }
        // this.renderer.setStyle(el.componentRef.location.nativeElement, "overflow", "hidden");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "left", state.left + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "top", state.top + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "width", state.width + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "height", state.height + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "max-width", state.width + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "max-height", state.height + "px");
        this.renderer.setStyle(el.componentRef.location.nativeElement, "z-index", state.zIndex);
    };
    GroupLayout.prototype.destroyLayoutElement = function (id) {
        var _this = this;
        if (this.layoutElements[id].listeners) {
            Object.keys(this.layoutElements[id].listeners).forEach(function (lkey) {
                _this.layoutElements[id].listeners[lkey]();
            });
        }
        delete this.layoutElements[id];
    };
    GroupLayout.prototype.destroy = function () {
        var _this = this;
        this.disableBuildMode();
        // Cleaning up all listeners
        Object.keys(this.layoutElements).forEach(function (id) {
            _this.destroyLayoutElement(id);
        });
        if (this.resizeListener) {
            this.resizeListener();
        }
        if (this.backgroundClickListener) {
            this.backgroundClickListener();
        }
        if (this.backgroundMouseOverListener) {
            this.backgroundMouseOverListener();
        }
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return GroupLayout;
}());



/***/ }),

/***/ "./src/group/group.component.ts":
/*!**************************************!*\
  !*** ./src/group/group.component.ts ***!
  \**************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _group_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./group.utils */ "./src/group/group.utils.ts");
/* harmony import */ var _group_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./group-layout */ "./src/group/group-layout.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_7__);













var _c0 = ["targetVC"];
var _c1 = ["wrapperRef"];
var _c2 = ["wrapperVC"];
var _c3 = ["overlayContainerRef"];
function GroupComponent_ng_template_3_Template(rf, ctx) { }
var _c4 = function (a0) { return { building: a0 }; };
var GroupComponent = /** @class */ (function () {
    function GroupComponent(cfr, injector, overlay, overlayContainer, renderer, elRef, hostVC, cd, context) {
        this.cfr = cfr;
        this.injector = injector;
        this.overlay = overlay;
        this.overlayContainer = overlayContainer;
        this.renderer = renderer;
        this.elRef = elRef;
        this.hostVC = hostVC;
        this.cd = cd;
        this.context = context;
        this.elements = {};
        this.elementAdded$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.elementRemoved$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isBuilding = false;
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        // if (this.context.rootContext === this.context) {
        //   (this.overlayContainer as any).setContainer(this.overlayContainerRef.nativeElement);
        // }
        this.pluginOnInit();
        this.context.update$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function (update) {
            _this.pluginOnUpdate(update.prevConfig, update.newConfig, update.compareResult, update.commands);
        });
    };
    GroupComponent.prototype.pluginOnInit = function () {
        var _this = this;
        this.context.redraw$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function () {
            _this.layout.onResize();
        });
        this.context.contentChanged$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function () {
            _this.layout.onResize();
        });
        this.layout = new _group_layout__WEBPACK_IMPORTED_MODULE_4__["GroupLayout"](this.context.id, this.context, this.elRef, this.hostVC, this.wrapperRef, this.targetVC, this.renderer, this.cfr, this.injector, this.cd, this.overlay);
        this.createPluginWrappers();
        // this.sortWrappers();
    };
    GroupComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var _a, _b;
        var layoutConfig = (_b = (_a = this.context.pluginConfig) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.layoutConfig;
        layoutConfig = layoutConfig ? layoutConfig : {};
        this.layout.init(this.elements, layoutConfig);
        this.layout.buildModeEnded$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function (layout) {
            _this.saveLayout(layout);
        });
        this.layout.buildMode$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function (val) {
            _this.isBuilding = val;
        });
        this.layout.addNew$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.context.destroy$)).subscribe(function () {
            _this.addNew();
        });
    };
    GroupComponent.prototype.saveLayout = function (layout) {
        this.context.firePluginInteractions("saveLayout", layout).subscribe();
        // temporary test layout merge, should be updated from the backend;
        Object.keys(layout).forEach(function (key) {
            var conf = layout[key];
            // console.log(key, this.elements[key]);
            // this.elements[key].instance.pluginConfig.layout = conf;
            // this.context.pluginConfig.config.layout[key] = conf;
        });
        this.sortWrappers();
    };
    GroupComponent.prototype.addNew = function () {
        // this.context.getPluginInteractions("addNew").forEach((interaction) => {
        //   interaction.fire();
        // });
    };
    GroupComponent.prototype.sortWrappers = function () {
        var _this = this;
        var sortedElements = Object(_group_utils__WEBPACK_IMPORTED_MODULE_3__["sortElementKeysByLayout"])(this.elements);
        sortedElements = sortedElements.filter(function (key) {
            var _a, _b, _c;
            var layoutConfig = (_c = (_b = (_a = _this.context.pluginConfig) === null || _a === void 0 ? void 0 : _a.config) === null || _b === void 0 ? void 0 : _b.layout) === null || _c === void 0 ? void 0 : _c[key];
            if ((layoutConfig === null || layoutConfig === void 0 ? void 0 : layoutConfig.type) === "absolute") {
                return true;
            }
            else {
                return false;
            }
        });
        for (var i = 0; i < sortedElements.length; i++) {
            var key = sortedElements[i];
            var el = this.elements[key];
            var viewRef = el.hostView;
            var index = this.targetVC.indexOf(viewRef);
            if (index !== i) {
                this.targetVC.detach(index);
                this.targetVC.insert(viewRef, i);
                // this.targetVC.move(viewRef, i);
            }
        }
    };
    GroupComponent.prototype.pluginOnUpdate = function (prevConfig, newConfig, compareResult, commands) {
        var _this = this;
        var diff = compareResult.diff;
        if (diff.config) {
            var configDiffs = Object(shared__WEBPACK_IMPORTED_MODULE_1__["getDiff"])(prevConfig.config, newConfig.config);
            // && newConfig.config.elements
            //  this.currentPluginConfig = mergeConfig(this.currentPluginConfig, rootPluginUpdate);
            if (configDiffs.elements) {
                var elementDiffs = Object(shared__WEBPACK_IMPORTED_MODULE_1__["getDiff"])(prevConfig.config.elements, newConfig.config.elements);
                var eDiffs = Object(shared__WEBPACK_IMPORTED_MODULE_1__["deepCompare"])(prevConfig.config.elements, newConfig.config.elements);
                Object.keys(eDiffs.deleted).forEach(function (id) {
                    _this.elements[id].destroy();
                    delete _this.elements[id];
                });
                Object.keys(eDiffs.new).forEach(function (id) {
                    _this.elements[id] = _this.createPlugin(id, newConfig.config.elements[id]);
                });
                Object.keys(eDiffs.updated).forEach(function (id) {
                    _this.elements[id].instance.updatePlugin(newConfig.config.elements[id]);
                });
                // for (const key of Object.keys(elementDiffs)) {
                //   const newPluginConf = newConfig.config.elements[key];
                //   const pluginWrapperRef = this.elements[key];
                //   if (pluginWrapperRef && _.isNil(newPluginConf)) {
                //     // delete
                //     pluginWrapperRef.destroy();
                //     delete this.elements[key];
                //     // this.layout.removeElement(key);
                //   } else if (!_.isNil(newPluginConf) && !pluginWrapperRef) {
                //     // new, needs to be createad
                //     this.elements[key] = this.createPlugin(key, newPluginConf);
                //     // this.layout.addElement(key, newPluginConf.layout);
                //   } else if (pluginWrapperRef) {
                //     // update
                //     pluginWrapperRef.instance.updatePlugin(newPluginConf);
                //     // this.layout.updateElement(key, newPluginConf.layout);
                //   }
                // }
                this.layout.elementsChange();
            }
            if (configDiffs.layoutConfig) {
                this.layout.layoutConfigChange(newConfig.config.layoutConfig);
            }
        }
    };
    GroupComponent.prototype.createPluginWrappers = function () {
        var pluginConfig = this.context.pluginConfig;
        if (!pluginConfig.config || !pluginConfig.config.elements) {
            console.warn("Group type plugin does not have any child elements", this.context.pluginConfig.id);
        }
        // Create normal plugins first
        this.createPlugins(pluginConfig.config.elements);
        // Create popups plugins second
        // this.createPlugins(true, pluginConfig.config.elements)
    };
    GroupComponent.prototype.createPlugins = function (elements) {
        // const sortedElements = sortElementsByLayout(elements, this.layout);
        for (var _i = 0, _a = Object.keys(elements); _i < _a.length; _i++) {
            var key = _a[_i];
            var pluginConfig = elements[key];
            this.elements[key] = this.createPlugin(key, pluginConfig);
        }
    };
    GroupComponent.prototype.createPlugin = function (id, pluginConfig) {
        var _a, _b, _c;
        var componentRef;
        if (((_c = (_b = (_a = this.context.pluginConfig.config) === null || _a === void 0 ? void 0 : _a.layout) === null || _b === void 0 ? void 0 : _b[id]) === null || _c === void 0 ? void 0 : _c.type) === "popup") {
            componentRef = this.createPopupRef(pluginConfig.layout[id]);
        }
        else {
            var componentFactory = this.cfr.resolveComponentFactory(this.context.pluginCreator.getPluginWrapperComponent());
            componentRef = this.targetVC.createComponent(componentFactory, undefined, this.injector);
        }
        var instance = componentRef.instance;
        instance.pluginCreator = this.context.pluginCreator;
        instance.pluginLoader = this.context.pluginLoader;
        instance.parentContext = this.context;
        instance.rootContext = this.context.rootContext;
        instance.actionHandler = this.context.actionHandler;
        instance.wrapperComponentRef = componentRef;
        // instance.path = (this.context.path !== undefined ? this.context.path + "." : "") + this.context.id + "." + key;
        instance.setPlugin(id, pluginConfig);
        return componentRef;
    };
    GroupComponent.prototype.createPopupRef = function (popupOptions) {
        var positionStrategy = this.overlay.position();
        var connectedTo = this.getConnectedToElementRef(popupOptions);
        if (connectedTo) {
            positionStrategy = positionStrategy.flexibleConnectedTo(connectedTo);
            if (popupOptions.withPositions) {
                positionStrategy = positionStrategy.withPositions(popupOptions.withPositions);
            }
            else {
                positionStrategy = positionStrategy.withPositions([
                    {
                        originX: "start",
                        originY: "bottom",
                        overlayX: "start",
                        overlayY: "top",
                    },
                    {
                        originX: "start",
                        originY: "top",
                        overlayX: "start",
                        overlayY: "bottom",
                    },
                ]);
            }
            if (popupOptions.withPush !== undefined) {
                positionStrategy = positionStrategy.withPush(popupOptions.withPush);
            }
            else {
                positionStrategy = positionStrategy.withPush(true);
            }
        }
        else if (popupOptions.global) {
            positionStrategy = positionStrategy
                .global()
                .left(popupOptions.global.x + "px")
                .top(popupOptions.global.y + "px");
        }
        var overlayRef = this.overlay.create({
            width: popupOptions.width,
            height: popupOptions.height,
            positionStrategy: positionStrategy,
            hasBackdrop: popupOptions.hasBackdrop,
        });
        overlayRef.backdropClick().subscribe(function () {
            overlayRef.detach();
            overlayRef.dispose();
        });
        var userProfilePortal = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.context.pluginCreator.getPluginWrapperComponent());
        return overlayRef.attach(userProfilePortal);
    };
    GroupComponent.prototype.getConnectedToElementRef = function (popupOptions) {
        return popupOptions.connectedTo ? this.elements[popupOptions.connectedTo].instance.pluginComponentRef.location : null;
    };
    GroupComponent.prototype.ngOnDestroy = function () {
        this.layout.destroy();
    };
    GroupComponent.ɵfac = function GroupComponent_Factory(t) { return new (t || GroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](shared__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_CONTEXT"])); };
    GroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GroupComponent, selectors: [["app-group"]], viewQuery: function GroupComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.targetVC = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperRef = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.wrapperVC = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.overlayContainerRef = _t.first);
        } }, hostVars: 2, hostBindings: function GroupComponent_HostBindings(rf, ctx) { if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("building", ctx.isBuilding);
        } }, decls: 7, vars: 4, consts: [[1, "wrapper", 3, "cdkTrapFocus", "ngClass"], ["wrapperVC", "", "wrapperRef", ""], ["targetVC", ""], [1, ""], ["overlayContainerRef", ""]], template: function GroupComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GroupComponent_ng_template_3_Template, 0, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3, 4);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkTrapFocus", ctx.context.pluginConfig.config == null ? null : ctx.context.pluginConfig.config.trapFocus)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c4, ctx.layout == null ? null : ctx.layout.buildMode$.value));
        } }, directives: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["CdkTrapFocus"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: inline-flex;\n  width: 100%;\n  height: 100%;\n}\n.building[_nghost-%COMP%]::after {\n  outline: 1px solid rgba(var(--theme-accent-500), 1);\n  outline-offset: -1px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  pointer-events: none;\n  z-index: 999999;\n}\n[_nghost-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  overflow-x: auto;\n  overflow-y: auto;\n  position: relative;\n}\n[_nghost-%COMP%]  .editing::after {\n  outline: 1px solid rgba(var(--theme-background-900), 0.6);\n  outline-offset: -1px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  cursor: pointer;\n}\n[_nghost-%COMP%]  .editing-active::after {\n  outline: 1px solid rgba(var(--theme-accent-600), 0.8);\n}\n[_nghost-%COMP%]  .limit-interaction {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n[_nghost-%COMP%]  .limit-interaction * {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n}\n[_nghost-%COMP%]  .edit-shadow {\n  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2dyb3VwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Usb0JBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtBQUhGO0FBS0k7RUFDRSxtREFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUhOO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7QUFTSTtFQUNFLHlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5OO0FBV0k7RUFDRSxxREFBQTtBQVROO0FBYUU7RUFDRSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG9CQUFBO0FBWEo7QUFZSTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0Esb0JBQUE7QUFWTjtBQWFFO0VBQ0UsZ0RBQUE7QUFYSiIsImZpbGUiOiJwcm9qZWN0cy9wbHVnaW5zL3NyYy9ncm91cC9ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gb3V0bGluZTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcblxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICAmLmJ1aWxkaW5nIHtcbiAgICAmOjphZnRlciB7XG4gICAgICBvdXRsaW5lOiAxcHggc29saWQgcmdiYSh2YXIoLS10aGVtZS1hY2NlbnQtNTAwKSwgMSk7XG4gICAgICBvdXRsaW5lLW9mZnNldDogLTFweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIHotaW5kZXg6IDk5OTk5OTtcbiAgICB9XG4gIH1cbiAgLndyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbjpob3N0OjpuZy1kZWVwIHtcbiAgLmVkaXRpbmcge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKHZhcigtLXRoZW1lLWJhY2tncm91bmQtOTAwKSwgMC42KTtcbiAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZWRpdGluZy1hY3RpdmUge1xuICAgICY6OmFmdGVyIHtcbiAgICAgIG91dGxpbmU6IDFweCBzb2xpZCByZ2JhKHZhcigtLXRoZW1lLWFjY2VudC02MDApLCAwLjgpO1xuICAgIH1cbiAgfVxuXG4gIC5saW1pdC1pbnRlcmFjdGlvbiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgKiB7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgfVxuICAuZWRpdC1zaGFkb3cge1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgfVxufVxuIl19 */"] });
    return GroupComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-group",
                templateUrl: "./group.component.html",
                styleUrls: ["./group.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: shared__WEBPACK_IMPORTED_MODULE_1__["PluginWrapperComponent"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [shared__WEBPACK_IMPORTED_MODULE_1__["PLUGIN_CONTEXT"]]
            }] }]; }, { targetVC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["targetVC", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], static: true }]
        }], wrapperRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["wrapperRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], wrapperVC: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["wrapperVC", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], overlayContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["overlayContainerRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: true }]
        }], isBuilding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ["class.building"]
        }] }); })();


/***/ }),

/***/ "./src/group/group.module.ts":
/*!***********************************!*\
  !*** ./src/group/group.module.ts ***!
  \***********************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _group_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./group.component */ "./src/group/group.component.ts");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! shared */ "shared");
/* harmony import */ var shared__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(shared__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout-controls/layout-controls.component */ "./src/group/layout/layout-controls/layout-controls.component.ts");
/* harmony import */ var _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/layout-element-controls/layout-element-controls.component */ "./src/group/layout/layout-element-controls/layout-element-controls.component.ts");
/* harmony import */ var _layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout-element-controls/layout-element-button-controls/layout-element-button-controls.component */ "./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button-controls.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "@angular/cdk/overlay");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _layout_layout_element_controls_layout_element_button_controls_layout_element_button_layout_element_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/layout-element-controls/layout-element-button-controls/layout-element-button/layout-element-button.component */ "./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button/layout-element-button.component.ts");
/* harmony import */ var _shared_src_lib_shared_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/src/lib/shared.component */ "../shared/src/lib/shared.component.ts");
/* harmony import */ var _shared_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/src/lib/button/button.component */ "../shared/src/lib/button/button.component.ts");
/* harmony import */ var _shared_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/src/lib/tabs/tab.component */ "../shared/src/lib/tabs/tab.component.ts");
/* harmony import */ var _shared_src_lib_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/src/lib/tabs/tabs.component */ "../shared/src/lib/tabs/tabs.component.ts");
/* harmony import */ var _shared_src_lib_plugin_wrapper_plugin_wrapper_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../shared/src/lib/plugin-wrapper/plugin-wrapper.component */ "../shared/src/lib/plugin-wrapper/plugin-wrapper.component.ts");





























var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule.entry = _group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"];
    GroupModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GroupModule });
    GroupModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GroupModule_Factory(t) { return new (t || GroupModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]]] });
    return GroupModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GroupModule, { declarations: [_group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"],
        _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__["LayoutControlsComponent"],
        _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__["LayoutElementControlsComponent"],
        _layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__["LayoutElementButtonControlsComponent"],
        _layout_layout_element_controls_layout_element_button_controls_layout_element_button_layout_element_button_component__WEBPACK_IMPORTED_MODULE_9__["LayoutElementButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GroupModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["A11yModule"]],
                declarations: [
                    _group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"],
                    _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__["LayoutControlsComponent"],
                    _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__["LayoutElementControlsComponent"],
                    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__["LayoutElementButtonControlsComponent"],
                    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_layout_element_button_component__WEBPACK_IMPORTED_MODULE_9__["LayoutElementButtonComponent"],
                ],
                entryComponents: [_group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__["LayoutElementControlsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _shared_src_lib_shared_component__WEBPACK_IMPORTED_MODULE_10__["SharedComponent"], _shared_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _shared_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"], _shared_src_lib_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _shared_src_lib_plugin_wrapper_plugin_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["PluginWrapperComponent"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Dir"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkFixedSizeVirtualScroll"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualForOf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["TooltipComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkAriaLive"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkTrapFocus"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"],
    _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__["LayoutControlsComponent"],
    _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__["LayoutElementControlsComponent"],
    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__["LayoutElementButtonControlsComponent"],
    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_layout_element_button_component__WEBPACK_IMPORTED_MODULE_9__["LayoutElementButtonComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__["LayoutElementButtonControlsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _shared_src_lib_shared_component__WEBPACK_IMPORTED_MODULE_10__["SharedComponent"], _shared_src_lib_button_button_component__WEBPACK_IMPORTED_MODULE_11__["ButtonComponent"], _shared_src_lib_tabs_tab_component__WEBPACK_IMPORTED_MODULE_12__["TabComponent"], _shared_src_lib_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _shared_src_lib_plugin_wrapper_plugin_wrapper_component__WEBPACK_IMPORTED_MODULE_14__["PluginWrapperComponent"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkConnectedOverlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkOverlayOrigin"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Dir"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkScrollable"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkFixedSizeVirtualScroll"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualForOf"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkVirtualScrollViewport"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["TooltipComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatAnchor"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["_MatMenu"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuTrigger"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatMenuContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkAriaLive"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkTrapFocus"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["CdkMonitorFocus"], _group_component__WEBPACK_IMPORTED_MODULE_2__["GroupComponent"],
    _layout_layout_controls_layout_controls_component__WEBPACK_IMPORTED_MODULE_4__["LayoutControlsComponent"],
    _layout_layout_element_controls_layout_element_controls_component__WEBPACK_IMPORTED_MODULE_5__["LayoutElementControlsComponent"],
    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_controls_component__WEBPACK_IMPORTED_MODULE_6__["LayoutElementButtonControlsComponent"],
    _layout_layout_element_controls_layout_element_button_controls_layout_element_button_layout_element_button_component__WEBPACK_IMPORTED_MODULE_9__["LayoutElementButtonComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/group/group.utils.ts":
/*!**********************************!*\
  !*** ./src/group/group.utils.ts ***!
  \**********************************/
/*! exports provided: sortPopupsToEnd, filterLayoutElementsByType, sortElementKeysByLayout, addStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortPopupsToEnd", function() { return sortPopupsToEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterLayoutElementsByType", function() { return filterLayoutElementsByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortElementKeysByLayout", function() { return sortElementKeysByLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addStyles", function() { return addStyles; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

var sortPopupsToEnd = function (elements) {
    return Object.keys(elements).sort(function (a, b) {
        if (Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(elements[a], "config.popup") && !Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(elements[b], "config.popup")) {
            return 1;
        }
        if (!Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(elements[a], "config.popup") && Object(lodash__WEBPACK_IMPORTED_MODULE_0__["has"])(elements[b], "config.popup")) {
            return -1;
        }
        return 0;
    });
};
var filterLayoutElementsByType = function (layout, type) {
    var filtered = {};
    Object.keys(layout).forEach(function (key) {
        var el = layout[key];
        if (el.type === type) {
            filtered[key] = el;
        }
    });
    return filtered;
};
// export const sortElementKeys = (elements) => {
//   const sortedElementKeys = Object.keys(elements).sort((a, b) => {
//     const elA = elements[a];
//     const elB = elements[b];
//     if (elA.popup && !elA.popup) {
//       return 1;
//     }
//     if (!elB.popup && elA.popup) {
//       return -1;
//     }
//     return 0;
//   });
// };
var sortElementKeysByLayout = function (elements) {
    var sortedElementKeys = Object.keys(elements).sort(function (a, b) {
        var elA = elements[a];
        var elB = elements[b];
        var elALayoutConf = elA.layout;
        var elBLayoutConf = elB.layout;
        if (elALayoutConf && elBLayoutConf) {
            if (elALayoutConf.index !== undefined && elBLayoutConf.index !== undefined) {
                if (elALayoutConf.index < elBLayoutConf.index) {
                    return -1;
                }
                if (elALayoutConf.index > elBLayoutConf.index) {
                    return 1;
                }
            }
            if (elALayoutConf.index !== undefined) {
                return -1;
            }
            if (elBLayoutConf.index !== undefined) {
                return 1;
            }
            if (elALayoutConf.y < elBLayoutConf.y) {
                return -1;
            }
            if (elALayoutConf.y > elBLayoutConf.y) {
                return 1;
            }
            if (elALayoutConf.x < elBLayoutConf.x) {
                return -1;
            }
            if (elALayoutConf.x > elBLayoutConf.x) {
                return 1;
            }
            return 0;
        }
        if (!elALayoutConf) {
            return 1;
        }
        if (!elBLayoutConf) {
            return -1;
        }
        return 0;
    });
    return sortedElementKeys;
};
var addStyles = function (renderer, elem, style) {
    if (style) {
        Object.keys(style).forEach(function (prop) {
            renderer.setStyle(elem, prop, style[prop]);
        });
    }
};


/***/ }),

/***/ "./src/group/layout/layout-controls/layout-controls.component.ts":
/*!***********************************************************************!*\
  !*** ./src/group/layout/layout-controls/layout-controls.component.ts ***!
  \***********************************************************************/
/*! exports provided: LayoutControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutControlsComponent", function() { return LayoutControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "@angular/material/button");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_material_button__WEBPACK_IMPORTED_MODULE_3__);






function LayoutControlsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutControlsComponent_div_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.openSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LayoutControlsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutControlsComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LayoutControlsComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutControlsComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.startEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "build");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LayoutControlsComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutControlsComponent_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cancelEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LayoutControlsComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutControlsComponent_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.endEdit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var LayoutControlsComponent = /** @class */ (function () {
    function LayoutControlsComponent() {
        this.buildMode = false;
        this.buildModeEntered = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.buildModeEnded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.buildModeCancelled = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    LayoutControlsComponent.prototype.startEdit = function () {
        this.buildModeEntered.next();
    };
    LayoutControlsComponent.prototype.endEdit = function () {
        this.buildModeEnded.next();
    };
    LayoutControlsComponent.prototype.cancelEdit = function () {
        this.buildModeCancelled.next();
    };
    LayoutControlsComponent.prototype.openSettings = function () { };
    LayoutControlsComponent.prototype.addElement = function () { };
    LayoutControlsComponent.ɵfac = function LayoutControlsComponent_Factory(t) { return new (t || LayoutControlsComponent)(); };
    LayoutControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutControlsComponent, selectors: [["app-layout-controls"]], decls: 6, vars: 5, consts: [["class", "button-container", 4, "ngIf"], [1, "button-container"], ["mat-mini-fab", "", "color", "primary", "class", "my-fab", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "warn", "class", "my-fab", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "primary", 1, "my-fab", 3, "click"], ["mat-mini-fab", "", "color", "warn", 1, "my-fab", 3, "click"], ["mat-mini-fab", "", "color", "accent", 1, "my-fab", 3, "click"]], template: function LayoutControlsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LayoutControlsComponent_div_0_Template, 4, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutControlsComponent_div_1_Template, 4, 0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutControlsComponent_button_3_Template, 3, 0, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LayoutControlsComponent_button_4_Template, 3, 0, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LayoutControlsComponent_div_5_Template, 4, 0, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buildMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buildMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buildMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buildMode);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buildMode);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  padding: 15px;\n  text-align: right;\n  pointer-events: none;\n}\n\n.button-container[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  pointer-events: none;\n}\n\n.button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtY29udHJvbHMvbGF5b3V0LWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFDRTtFQUNFLG1CQUFBO0FBQ0oiLCJmaWxlIjoicHJvamVjdHMvcGx1Z2lucy9zcmMvZ3JvdXAvbGF5b3V0L2xheW91dC1jb250cm9scy9sYXlvdXQtY29udHJvbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAwLCAwLjIpO1xuICB6LWluZGV4OiAxO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgYnV0dG9uIHtcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB9XG59XG4iXX0= */"] });
    return LayoutControlsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-layout-controls",
                templateUrl: "./layout-controls.component.html",
                styleUrls: ["./layout-controls.component.scss"],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button-controls.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button-controls.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: LayoutElementButtonControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutElementButtonControlsComponent", function() { return LayoutElementButtonControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/group/layout/layout-element-controls/layout-element-button-controls/utils.ts");



function LayoutElementButtonControlsComponent_app_layout_element_button_1_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-element-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonEvent", function LayoutElementButtonControlsComponent_app_layout_element_button_1_Template_app_layout_element_button_buttonEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onButtonEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var button_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button", button_r2);
} }
var LayoutElementButtonControlsComponent = /** @class */ (function () {
    function LayoutElementButtonControlsComponent(cd) {
        this.cd = cd;
        this.buttonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(LayoutElementButtonControlsComponent.prototype, "elementButtons", {
        get: function () {
            return this._elementButtons;
        },
        set: function (val) {
            this._elementButtons = val;
            this.processedButtons = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["processButtons"])(val);
        },
        enumerable: false,
        configurable: true
    });
    LayoutElementButtonControlsComponent.prototype.ngOnInit = function () { };
    LayoutElementButtonControlsComponent.prototype.onButtonEvent = function (e) {
        this.buttonEvent.emit(e);
    };
    LayoutElementButtonControlsComponent.ɵfac = function LayoutElementButtonControlsComponent_Factory(t) { return new (t || LayoutElementButtonControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    LayoutElementButtonControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutElementButtonControlsComponent, selectors: [["app-layout-element-button-controls"]], inputs: { elementButtons: "elementButtons" }, outputs: { buttonEvent: "buttonEvent" }, decls: 8, vars: 1, consts: [[1, "button-container"], [3, "button", "buttonEvent", 4, "ngFor", "ngForOf"], ["menu", "matMenu"], ["mat-menu-item", ""], [3, "button", "buttonEvent"]], template: function LayoutElementButtonControlsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutElementButtonControlsComponent_app_layout_element_button_1_Template, 1, 1, "app-layout-element-button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-menu", null, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Item 1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Item 2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.processedButtons);
        } }, styles: [".button-container[_ngcontent-%COMP%] {\n  background: rgba(var(--theme-background-800), 0.8);\n  border-radius: 10px;\n  padding: 5px;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtZWxlbWVudC1jb250cm9scy9sYXlvdXQtZWxlbWVudC1idXR0b24tY29udHJvbHMvbGF5b3V0LWVsZW1lbnQtYnV0dG9uLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6InByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtZWxlbWVudC1jb250cm9scy9sYXlvdXQtZWxlbWVudC1idXR0b24tY29udHJvbHMvbGF5b3V0LWVsZW1lbnQtYnV0dG9uLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLXRoZW1lLWJhY2tncm91bmQtODAwKSwgMC44KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNXB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIl19 */"] });
    return LayoutElementButtonControlsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutElementButtonControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-layout-element-button-controls",
                templateUrl: "./layout-element-button-controls.component.html",
                styleUrls: ["./layout-element-button-controls.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { elementButtons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button/layout-element-button.component.ts":
/*!******************************************************************************************************************************************!*\
  !*** ./src/group/layout/layout-element-controls/layout-element-button-controls/layout-element-button/layout-element-button.component.ts ***!
  \******************************************************************************************************************************************/
/*! exports provided: LayoutElementButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutElementButtonComponent", function() { return LayoutElementButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/group/layout/layout-element-controls/layout-element-button-controls/utils.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/menu */ "@angular/material/button");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "@angular/common");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_angular_common__WEBPACK_IMPORTED_MODULE_3__);









function LayoutElementButtonComponent_button_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4)("matTooltip", ctx_r0.button.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.button.icon);
} }
function LayoutElementButtonComponent_button_1_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.button.icon);
} }
function LayoutElementButtonComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutElementButtonComponent_button_1_mat_icon_1_Template, 2, 1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4)("matTooltip", ctx_r1.button.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.button.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.button.label, "\n");
} }
function LayoutElementButtonComponent_button_2_Template(rf, ctx) { if (rf & 1) {
    var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementButtonComponent_button_2_Template_button_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.button.supportDrag ? ctx_r7.onButtonEvent({ event: $event, elementButton: ctx_r7.button }) : null; })("click", function LayoutElementButtonComponent_button_2_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.button.supportDrag ? null : ctx_r9.onButtonEvent({ event: $event, elementButton: ctx_r9.button }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r2.button.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.button.icon);
} }
function LayoutElementButtonComponent_button_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.button.icon);
} }
function LayoutElementButtonComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementButtonComponent_button_3_Template_button_mousedown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.button.supportDrag ? ctx_r11.onButtonEvent({ event: $event, elementButton: ctx_r11.button }) : null; })("click", function LayoutElementButtonComponent_button_3_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.button.supportDrag ? null : ctx_r13.onButtonEvent({ event: $event, elementButton: ctx_r13.button }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutElementButtonComponent_button_3_mat_icon_1_Template, 2, 1, "mat-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx_r3.button.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.button.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.button.label, "\n");
} }
function LayoutElementButtonComponent_ng_template_6_app_layout_element_button_0_Template(rf, ctx) { if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-element-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonEvent", function LayoutElementButtonComponent_ng_template_6_app_layout_element_button_0_Template_app_layout_element_button_buttonEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.onButtonEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var subButton_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("button", subButton_r15);
} }
function LayoutElementButtonComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LayoutElementButtonComponent_ng_template_6_app_layout_element_button_0_Template, 1, 1, "app-layout-element-button", 11);
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.getSubButtons(ctx_r5.button.subButtons));
} }
var LayoutElementButtonComponent = /** @class */ (function () {
    function LayoutElementButtonComponent(cd) {
        this.cd = cd;
        // @Input() set elementButtons(val: { [id: string]: ElementButton }) {
        //   this._elementButtons = val;
        //   this.processButtons();
        // }
        // get elementButtons(): { [id: string]: ElementButton } {
        //   return this._elementButtons;
        // }
        this.buttonEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LayoutElementButtonComponent.prototype.ngOnInit = function () { };
    LayoutElementButtonComponent.prototype.onButtonEvent = function (e) {
        this.buttonEvent.emit(e);
    };
    LayoutElementButtonComponent.prototype.getSubButtons = function (subbuttons) {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["processButtons"])(subbuttons);
    };
    LayoutElementButtonComponent.ɵfac = function LayoutElementButtonComponent_Factory(t) { return new (t || LayoutElementButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    LayoutElementButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutElementButtonComponent, selectors: [["app-layout-element-button"]], viewQuery: function LayoutElementButtonComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        } }, inputs: { button: "button" }, outputs: { buttonEvent: "buttonEvent" }, decls: 7, vars: 4, consts: [["mat-icon-button", "", 3, "matMenuTriggerFor", "matTooltip", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", "matTooltip", 4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "mousedown", "click", 4, "ngIf"], ["mat-button", "", 3, "matTooltip", "mousedown", "click", 4, "ngIf"], ["menu", "matMenu"], ["matMenuContent", ""], ["mat-icon-button", "", 3, "matMenuTriggerFor", "matTooltip"], ["mat-button", "", 3, "matMenuTriggerFor", "matTooltip"], [4, "ngIf"], ["mat-icon-button", "", 3, "matTooltip", "mousedown", "click"], ["mat-button", "", 3, "matTooltip", "mousedown", "click"], ["style", "display: block; width: 100%;", 3, "button", "buttonEvent", 4, "ngFor", "ngForOf"], [2, "display", "block", "width", "100%", 3, "button", "buttonEvent"]], template: function LayoutElementButtonComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LayoutElementButtonComponent_button_0_Template, 3, 3, "button", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LayoutElementButtonComponent_button_1_Template, 3, 4, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutElementButtonComponent_button_2_Template, 3, 2, "button", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LayoutElementButtonComponent_button_3_Template, 3, 3, "button", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LayoutElementButtonComponent_ng_template_6_Template, 1, 1, "ng-template", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.button.label && ctx.button.subButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.button.label && ctx.button.subButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.button.label && !ctx.button.subButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.button.label && !ctx.button.subButtons);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuContent"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], LayoutElementButtonComponent], styles: ["[_nghost-%COMP%] {\n  display: inline-block;\n}\n\n.mat-button[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtZWxlbWVudC1jb250cm9scy9sYXlvdXQtZWxlbWVudC1idXR0b24tY29udHJvbHMvbGF5b3V0LWVsZW1lbnQtYnV0dG9uL2xheW91dC1lbGVtZW50LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRiIsImZpbGUiOiJwcm9qZWN0cy9wbHVnaW5zL3NyYy9ncm91cC9sYXlvdXQvbGF5b3V0LWVsZW1lbnQtY29udHJvbHMvbGF5b3V0LWVsZW1lbnQtYnV0dG9uLWNvbnRyb2xzL2xheW91dC1lbGVtZW50LWJ1dHRvbi9sYXlvdXQtZWxlbWVudC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5tYXQtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4iXX0= */"] });
    return LayoutElementButtonComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutElementButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-layout-element-button",
                templateUrl: "./layout-element-button.component.html",
                styleUrls: ["./layout-element-button.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"], { static: false }]
        }], button: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], buttonEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/group/layout/layout-element-controls/layout-element-button-controls/utils.ts":
/*!******************************************************************************************!*\
  !*** ./src/group/layout/layout-element-controls/layout-element-button-controls/utils.ts ***!
  \******************************************************************************************/
/*! exports provided: processButtons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processButtons", function() { return processButtons; });
var processButtons = function (elementButtons) {
    var buttons = [];
    if (!elementButtons) {
        return buttons;
    }
    Object.keys(elementButtons)
        .sort(function (a, b) {
        var aEl = elementButtons[a];
        var bEl = elementButtons[b];
        if (aEl.index > bEl.index) {
            return 1;
        }
        if (aEl.index < bEl.index) {
            return -1;
        }
        return 0;
    })
        .forEach(function (id) {
        buttons.push(elementButtons[id]);
    });
    return buttons;
};


/***/ }),

/***/ "./src/group/layout/layout-element-controls/layout-element-controls.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/group/layout/layout-element-controls/layout-element-controls.component.ts ***!
  \***************************************************************************************/
/*! exports provided: LayoutElementControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutElementControlsComponent", function() { return LayoutElementControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);



var _c0 = ["buttonsRef"];
var _c1 = function (a0, a1) { return { bottom: a0, right: a1 }; };
function LayoutElementControlsComponent_app_layout_element_button_controls_0_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-layout-element-button-controls", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonEvent", function LayoutElementControlsComponent_app_layout_element_button_controls_0_Template_app_layout_element_button_controls_buttonEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.handleButtonEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("elementButtons", ctx_r0.elementButtons)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c1, ctx_r0.buttons && ctx_r0.top - ctx_r0.buttons.nativeElement.clientHeight < 0, ctx_r0.buttons && ctx_r0.left - (ctx_r0.buttons.nativeElement.clientWidth - ctx_r0.width) < 0));
} }
function LayoutElementControlsComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", ctx_r1.info, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
var _c2 = function (a0) { return { "drag-active": a0 }; };
var _c3 = function (a0) { return { "pointer-events": a0 }; };
var LayoutElementControlsComponent = /** @class */ (function () {
    function LayoutElementControlsComponent(renderer, cd) {
        this.renderer = renderer;
        this.cd = cd;
        this.dragStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.drag$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragEnd$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scale$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scaleEnd$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.scaleStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mouseOver$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.mouseLeave$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.click$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.buttonEvent$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.doubleClick$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.dragActive = false;
        this.scaleActive = false;
        this.dragData = {
            startX: 0,
            startY: 0,
            deltaX: 0,
            deltaY: 0,
        };
    }
    LayoutElementControlsComponent.prototype.evt = function (e) {
        this.click$.next({ ids: this.ids, data: null, e: e });
    };
    LayoutElementControlsComponent.prototype.handleButtonEvent = function (e) {
        if (e.elementButton.supportDrag) {
            this.elementButton = e.elementButton;
            this.dragStart(e.event, this.elementButton);
        }
        else {
            this.buttonEvent$.next({ ids: this.ids, data: null, elementButton: e.elementButton, e: e.event });
        }
    };
    LayoutElementControlsComponent.prototype.update = function (left, top, width, height) {
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
    };
    LayoutElementControlsComponent.prototype.ngOnInit = function () { };
    LayoutElementControlsComponent.prototype.doubleClick = function (e) {
        this.doubleClick$.next({ ids: this.ids, data: null, e: e });
    };
    LayoutElementControlsComponent.prototype.mouseOver = function (e) {
        this.mouseOver$.next({ ids: this.ids, data: e, e: e });
    };
    LayoutElementControlsComponent.prototype.mouseLeave = function (e) {
        this.mouseLeave$.next({ ids: this.ids, data: e, e: e });
    };
    LayoutElementControlsComponent.prototype.setIds = function (ids) {
        this.ids = ids;
    };
    LayoutElementControlsComponent.prototype.dragStart = function (e, elementButton) {
        // this.click$.next({ ids: this.ids, data: null, e: e });
        if (elementButton === void 0) { elementButton = null; }
        e.preventDefault();
        this.dragActive = true;
        var rect = this.wrapperEl.nativeElement.getBoundingClientRect();
        this.dragData.startX = e.pageX - rect.left;
        this.dragData.startY = e.pageY - rect.top;
        delete this.dragData["direction"];
        this.registerMouseListeners();
        this.dragStart$.next({ ids: this.ids, data: this.dragData, elementButton: elementButton, e: e });
    };
    LayoutElementControlsComponent.prototype.scaleStart = function (e, direction) {
        e.preventDefault();
        var rect = this.wrapperEl.nativeElement.getBoundingClientRect();
        this.dragData.startX = e.pageX - rect.left;
        this.dragData.startY = e.pageY - rect.top;
        this.dragData.direction = direction;
        this.scaleActive = true;
        this.registerMouseListeners();
        this.scaleStart$.next({ ids: this.ids, data: this.dragData, e: e });
    };
    LayoutElementControlsComponent.prototype.onMouseMove = function (e) {
        var rect = this.wrapperEl.nativeElement.getBoundingClientRect();
        this.dragData.deltaX = e.pageX - rect.left - this.dragData.startX;
        this.dragData.deltaY = e.pageY - rect.top - this.dragData.startY;
        if (this.dragActive) {
            this.drag$.next({ ids: this.ids, data: this.dragData, elementButton: this.elementButton, e: e });
        }
        if (this.scaleActive) {
            this.scale$.next({ ids: this.ids, data: this.dragData, e: e });
        }
    };
    LayoutElementControlsComponent.prototype.onMouseUp = function (e) {
        if (this.dragActive) {
            this.dragEnd$.next({ ids: this.ids, data: this.dragData, elementButton: this.elementButton, e: e });
        }
        if (this.scaleActive) {
            this.scaleEnd$.next({ ids: this.ids, data: this.dragData, e: e });
        }
        this.elementButton = null;
        this.dragActive = false;
        this.scaleActive = false;
        this.cleanUpMouseListeners();
        this.cd.markForCheck();
    };
    LayoutElementControlsComponent.prototype.registerMouseListeners = function () {
        var _this = this;
        this.cleanUpMouseListeners();
        this.mouseUpListener = this.renderer.listen("window", "mouseup", function (e) { return _this.onMouseUp(e); });
        this.mouseMoveListener = this.renderer.listen("window", "mousemove", function (e) { return _this.onMouseMove(e); });
    };
    LayoutElementControlsComponent.prototype.cleanUpMouseListeners = function () {
        if (this.mouseUpListener) {
            this.mouseUpListener();
        }
        if (this.mouseMoveListener) {
            this.mouseMoveListener();
        }
    };
    LayoutElementControlsComponent.prototype.ngOnDestroy = function () {
        if (this.scaleActive) {
            this.scaleEnd$.next({ ids: this.ids, data: this.dragData, e: null });
        }
        if (this.dragActive) {
            this.dragEnd$.next({ ids: this.ids, data: this.dragData, elementButton: this.elementButton, e: null });
        }
        this.cleanUpMouseListeners();
    };
    LayoutElementControlsComponent.ɵfac = function LayoutElementControlsComponent_Factory(t) { return new (t || LayoutElementControlsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
    LayoutElementControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutElementControlsComponent, selectors: [["app-layout-element-controls"]], viewQuery: function LayoutElementControlsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.buttons = _t.first);
        } }, hostBindings: function LayoutElementControlsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LayoutElementControlsComponent_click_HostBindingHandler($event) { return ctx.evt($event); });
        } }, decls: 17, vars: 11, consts: [["class", "control-buttons", 3, "elementButtons", "ngClass", "buttonEvent", 4, "ngIf"], [1, "wrapper", 3, "mouseover", "mouseleave", "dblclick"], [1, "bg", 3, "ngClass", "ngStyle", "mousedown"], [1, "drag", "horizontal", "top", 3, "mousedown"], [1, "drag", "horizontal", "bottom", 3, "mousedown"], [1, "drag", "vertical", "left", 3, "mousedown"], [1, "drag", "vertical", "right", 3, "mousedown"], [1, "drag", "corner", "nw", 3, "mousedown"], [1, "drag", "corner", "ne", 3, "mousedown"], [1, "drag", "corner", "sw", 3, "mousedown"], [1, "drag", "corner", "se", 3, "mousedown"], [1, "drag", "center-control", "n", 3, "mousedown"], [1, "drag", "center-control", "s", 3, "mousedown"], [1, "drag", "center-control", "w", 3, "mousedown"], [1, "drag", "center-control", "e", 3, "mousedown"], [1, "drag", "center-drag", 3, "ngClass", "mousedown"], ["class", "drag info", 3, "innerHtml", 4, "ngIf"], [1, "control-buttons", 3, "elementButtons", "ngClass", "buttonEvent"], ["buttonsRef", ""], [1, "drag", "info", 3, "innerHtml"]], template: function LayoutElementControlsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LayoutElementControlsComponent_app_layout_element_button_controls_0_Template, 2, 5, "app-layout-element-button-controls", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function LayoutElementControlsComponent_Template_div_mouseover_1_listener($event) { return ctx.mouseOver($event); })("mouseleave", function LayoutElementControlsComponent_Template_div_mouseleave_1_listener($event) { return ctx.mouseLeave($event); })("dblclick", function LayoutElementControlsComponent_Template_div_dblclick_1_listener($event) { return ctx.doubleClick($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_2_listener($event) { return ctx.dragStart($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_3_listener($event) { return ctx.scaleStart($event, "n"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_4_listener($event) { return ctx.scaleStart($event, "s"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_5_listener($event) { return ctx.scaleStart($event, "w"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_6_listener($event) { return ctx.scaleStart($event, "e"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_7_listener($event) { return ctx.scaleStart($event, "nw"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_8_listener($event) { return ctx.scaleStart($event, "ne"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_9_listener($event) { return ctx.scaleStart($event, "sw"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_10_listener($event) { return ctx.scaleStart($event, "se"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_11_listener($event) { return ctx.scaleStart($event, "n"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_12_listener($event) { return ctx.scaleStart($event, "s"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_13_listener($event) { return ctx.scaleStart($event, "w"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_14_listener($event) { return ctx.scaleStart($event, "e"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function LayoutElementControlsComponent_Template_div_mousedown_15_listener($event) { return ctx.dragStart($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LayoutElementControlsComponent_div_16_Template, 1, 1, "div", 16);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.elementButtons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c2, ctx.dragActive))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c3, ctx.ids.length > 1 ? "none" : "all"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.dragActive));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.info);
        } }, styles: ["[_nghost-%COMP%] {\n  outline: 1px solid rgba(var(--theme-accent-600));\n  outline-offset: -1px;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.control-buttons[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  right: 0;\n  pointer-events: all;\n}\n\n.control-buttons.bottom[_ngcontent-%COMP%] {\n  top: 100%;\n  bottom: auto;\n}\n\n.control-buttons.right[_ngcontent-%COMP%] {\n  left: 0;\n  right: auto;\n}\n\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n  opacity: 1;\n  transition: opacity 0.2s;\n  pointer-events: none;\n}\n\n.bg[_ngcontent-%COMP%] {\n  pointer-events: all;\n  cursor: -webkit-grab;\n  cursor: grab;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n.bg.drag-active[_ngcontent-%COMP%] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  left: 15px;\n  word-wrap: break-word;\n  max-width: 100%;\n  padding: 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  pointer-events: none;\n  font-size: 10px;\n  background-color: rgba(50, 50, 50, 0.5);\n}\n\n.corner[_ngcontent-%COMP%] {\n  pointer-events: all;\n  width: 10px;\n  height: 10px;\n  background-color: rgba(var(--theme-background-600));\n  border: 2px solid rgba(var(--theme-accent-600));\n  position: absolute;\n  border-radius: 5px;\n}\n\n.corner.nw[_ngcontent-%COMP%] {\n  top: -5px;\n  left: -5px;\n  cursor: nw-resize;\n}\n\n.corner.ne[_ngcontent-%COMP%] {\n  top: -5px;\n  right: -5px;\n  cursor: ne-resize;\n}\n\n.corner.sw[_ngcontent-%COMP%] {\n  bottom: -5px;\n  left: -5px;\n  cursor: sw-resize;\n}\n\n.corner.se[_ngcontent-%COMP%] {\n  bottom: -5px;\n  right: -5px;\n  cursor: se-resize;\n}\n\n.center-drag[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  background-color: rgba(var(--theme-accent-600));\n  border-radius: 5px;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n  pointer-events: all;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.center-drag.drag-active[_ngcontent-%COMP%] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.center-control[_ngcontent-%COMP%] {\n  pointer-events: all;\n  width: 7px;\n  height: 7px;\n  position: absolute;\n  background-color: rgba(var(--theme-accent-600));\n  border-radius: 5px;\n}\n\n.center-control.n[_ngcontent-%COMP%] {\n  top: -3.5px;\n  left: calc(50% - 3.5px);\n  cursor: n-resize;\n}\n\n.center-control.s[_ngcontent-%COMP%] {\n  bottom: -3.5px;\n  left: calc(50% - 3.5px);\n  cursor: s-resize;\n}\n\n.center-control.w[_ngcontent-%COMP%] {\n  top: calc(50% - 3.5px);\n  left: -3.5px;\n  transform: rotate(90deg);\n  cursor: w-resize;\n}\n\n.center-control.e[_ngcontent-%COMP%] {\n  top: calc(50% - 3.5px);\n  right: -3.5px;\n  transform: rotate(90deg);\n  cursor: e-resize;\n}\n\n.horizontal[_ngcontent-%COMP%] {\n  pointer-events: all;\n  cursor: n-resize;\n  position: absolute;\n  width: 100%;\n  height: 10px;\n  left: 0;\n}\n\n.horizontal.top[_ngcontent-%COMP%] {\n  top: 0;\n}\n\n.horizontal.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n\n.vertical[_ngcontent-%COMP%] {\n  pointer-events: all;\n  cursor: w-resize;\n  position: absolute;\n  height: 100%;\n  width: 10px;\n  top: 0;\n}\n\n.vertical.left[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.vertical.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.topleft[_ngcontent-%COMP%] {\n  cursor: nw-resize;\n  left: 0;\n  top: 0;\n}\n\n.topright[_ngcontent-%COMP%] {\n  cursor: ne-resize;\n  right: 0;\n  top: 0;\n}\n\n.bottomleft[_ngcontent-%COMP%] {\n  cursor: sw-resize;\n  left: 0;\n  bottom: 0;\n}\n\n.bottomright[_ngcontent-%COMP%] {\n  cursor: se-resize;\n  right: 0;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtZWxlbWVudC1jb250cm9scy9sYXlvdXQtZWxlbWVudC1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdEQUFBO0VBQ0Esb0JBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQVNBLG1CQUFBO0FBUkY7O0FBQUU7RUFDRSxTQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFFO0VBQ0UsT0FBQTtFQUNBLFdBQUE7QUFFSjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFLRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7QUFISjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSx1Q0FBQTtBQUxGOztBQVNBO0VBQ0UsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBUUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTko7O0FBU0U7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUEo7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBUEo7O0FBU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBUEo7O0FBV0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFFQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtBQVRGOztBQVVFO0VBQ0Usd0JBQUE7RUFBQSxnQkFBQTtBQVJKOztBQWNBO0VBQ0UsbUJBQUE7RUFDQSxVQUplO0VBS2YsV0FKZTtFQUtmLGtCQUFBO0VBQ0EsK0NBQUE7RUFFQSxrQkFBQTtBQVpGOztBQWNFO0VBQ0UsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFaSjs7QUFlRTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBYko7O0FBZUU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUVBLGdCQUFBO0FBZEo7O0FBZ0JFO0VBQ0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWRKOztBQWtCQTtFQUNFLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBRUEsT0FBQTtBQWpCRjs7QUFtQkU7RUFDRSxNQUFBO0FBakJKOztBQW9CRTtFQUNFLFNBQUE7QUFsQko7O0FBc0JBO0VBQ0UsbUJBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFFQSxNQUFBO0FBckJGOztBQXVCRTtFQUNFLE9BQUE7QUFyQko7O0FBd0JFO0VBQ0UsUUFBQTtBQXRCSjs7QUEwQkE7RUFDRSxpQkFBQTtFQUVBLE9BQUE7RUFDQSxNQUFBO0FBeEJGOztBQTJCQTtFQUNFLGlCQUFBO0VBRUEsUUFBQTtFQUNBLE1BQUE7QUF6QkY7O0FBNEJBO0VBQ0UsaUJBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtBQXpCRjs7QUE0QkE7RUFDRSxpQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FBekJGIiwiZmlsZSI6InByb2plY3RzL3BsdWdpbnMvc3JjL2dyb3VwL2xheW91dC9sYXlvdXQtZWxlbWVudC1jb250cm9scy9sYXlvdXQtZWxlbWVudC1jb250cm9scy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgb3V0bGluZTogMXB4IHNvbGlkIHJnYmEodmFyKC0tdGhlbWUtYWNjZW50LTYwMCkpO1xuICBvdXRsaW5lLW9mZnNldDogLTFweDtcbiAgLy8gd2lkdGg6IDEwMHB4O1xuICAvLyBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uY29udHJvbC1idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIHJpZ2h0OiAwO1xuICAmLmJvdHRvbSB7XG4gICAgdG9wOiAxMDAlO1xuICAgIGJvdHRvbTogYXV0bztcbiAgfVxuICAmLnJpZ2h0IHtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiBhdXRvO1xuICB9XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gIC8vICY6aG92ZXIge1xuICAvLyAgIG9wYWNpdHk6IDE7XG4gIC8vIH1cbn1cblxuLmJnIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgY3Vyc29yOiBncmFiO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMjU1LCAwLjIpO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICYuZHJhZy1hY3RpdmUge1xuICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDI1NSwgMC41KTtcbiAgfVxufVxuXG4uaW5mbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNXB4O1xuICBsZWZ0OiAxNXB4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MCwgNTAsIDUwLCAwLjUpO1xufVxuXG4kY29ybmVyLXNpemU6IDVweDtcbi5jb3JuZXIge1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWJhY2tncm91bmQtNjAwKSk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEodmFyKC0tdGhlbWUtYWNjZW50LTYwMCkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcblxuICAmLm53IHtcbiAgICB0b3A6IC0kY29ybmVyLXNpemU7XG4gICAgbGVmdDogLSRjb3JuZXItc2l6ZTtcbiAgICBjdXJzb3I6IG53LXJlc2l6ZTtcbiAgfVxuXG4gICYubmUge1xuICAgIHRvcDogLSRjb3JuZXItc2l6ZTtcbiAgICByaWdodDogLSRjb3JuZXItc2l6ZTtcbiAgICBjdXJzb3I6IG5lLXJlc2l6ZTtcbiAgfVxuICAmLnN3IHtcbiAgICBib3R0b206IC0kY29ybmVyLXNpemU7XG4gICAgbGVmdDogLSRjb3JuZXItc2l6ZTtcbiAgICBjdXJzb3I6IHN3LXJlc2l6ZTtcbiAgfVxuICAmLnNlIHtcbiAgICBib3R0b206IC0kY29ybmVyLXNpemU7XG4gICAgcmlnaHQ6IC0kY29ybmVyLXNpemU7XG4gICAgY3Vyc29yOiBzZS1yZXNpemU7XG4gIH1cbn1cblxuLmNlbnRlci1kcmFnIHtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLXRoZW1lLWFjY2VudC02MDApKTtcbiAgLy8gYm9yZGVyOiAycHggc29saWQgcmdiYSh2YXIoLS10aGVtZS1hY2NlbnQtNjAwKSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIGN1cnNvcjogZ3JhYjtcbiAgJi5kcmFnLWFjdGl2ZSB7XG4gICAgY3Vyc29yOiBncmFiYmluZztcbiAgfVxufVxuXG4kY29udHJvbC1zaXplLXc6IDdweDtcbiRjb250cm9sLXNpemUtaDogN3B4O1xuLmNlbnRlci1jb250cm9sIHtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgd2lkdGg6ICRjb250cm9sLXNpemUtdztcbiAgaGVpZ2h0OiAkY29udHJvbC1zaXplLWg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS10aGVtZS1hY2NlbnQtNjAwKSk7XG4gIC8vIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEodmFyKC0tdGhlbWUtYWNjZW50LTYwMCkpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgJi5uIHtcbiAgICB0b3A6IC0kY29udHJvbC1zaXplLWgvMjtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JGNvbnRyb2wtc2l6ZS13LzJ9KTtcbiAgICBjdXJzb3I6IG4tcmVzaXplO1xuICB9XG5cbiAgJi5zIHtcbiAgICBib3R0b206IC0kY29udHJvbC1zaXplLWgvMjtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtICN7JGNvbnRyb2wtc2l6ZS13LzJ9KTtcbiAgICBjdXJzb3I6IHMtcmVzaXplO1xuICB9XG4gICYudyB7XG4gICAgdG9wOiBjYWxjKDUwJSAtICN7JGNvbnRyb2wtc2l6ZS1oLzJ9KTtcbiAgICBsZWZ0OiAtJGNvbnRyb2wtc2l6ZS13LzI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuXG4gICAgY3Vyc29yOiB3LXJlc2l6ZTtcbiAgfVxuICAmLmUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAjeyRjb250cm9sLXNpemUtaC8yfSk7XG4gICAgcmlnaHQ6IC0kY29udHJvbC1zaXplLXcvMjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgY3Vyc29yOiBlLXJlc2l6ZTtcbiAgfVxufVxuXG4uaG9yaXpvbnRhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG5cbiAgY3Vyc29yOiBuLXJlc2l6ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMjU1LCAwLjMpO1xuICBsZWZ0OiAwO1xuXG4gICYudG9wIHtcbiAgICB0b3A6IDA7XG4gIH1cblxuICAmLmJvdHRvbSB7XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG5cbi52ZXJ0aWNhbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG5cbiAgY3Vyc29yOiB3LXJlc2l6ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMjU1LCAwLjMpO1xuICB0b3A6IDA7XG5cbiAgJi5sZWZ0IHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgJi5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG4gIH1cbn1cblxuLnRvcGxlZnQge1xuICBjdXJzb3I6IG53LXJlc2l6ZTtcblxuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG5cbi50b3ByaWdodCB7XG4gIGN1cnNvcjogbmUtcmVzaXplO1xuXG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG59XG5cbi5ib3R0b21sZWZ0IHtcbiAgY3Vyc29yOiBzdy1yZXNpemU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmJvdHRvbXJpZ2h0IHtcbiAgY3Vyc29yOiBzZS1yZXNpemU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG4iXX0= */"] });
    return LayoutElementControlsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutElementControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-layout-element-controls",
                templateUrl: "./layout-element-controls.component.html",
                styleUrls: ["./layout-element-controls.component.scss"],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { buttons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["buttonsRef", { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], static: false }]
        }], evt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["click", ["$event"]]
        }] }); })();


/***/ }),

/***/ "./src/group/layout/position-controller/group-layout-position-controller.ts":
/*!**********************************************************************************!*\
  !*** ./src/group/layout/position-controller/group-layout-position-controller.ts ***!
  \**********************************************************************************/
/*! exports provided: GroupLayoutPositionController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupLayoutPositionController", function() { return GroupLayoutPositionController; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/group/layout/position-controller/utils.ts");



var GroupLayoutPositionController = /** @class */ (function () {
    function GroupLayoutPositionController() {
        this.updateState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.commitState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.commitLayout$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.virtualW = 1000;
        this.virtualH = 1000;
        this.tempData = { pointerX: 0, pointerY: 0 };
    }
    GroupLayoutPositionController.prototype.initState = function (dimensions) {
        // console.log(this.layoutConfig);
        // this.layoutConfig = this.layout["@@setup"] as any;
        this.dimensions = dimensions;
        this.redrawLayout();
    };
    GroupLayoutPositionController.prototype.redrawLayout = function () {
        var _this = this;
        console.log("-> redraw");
        var allInitialized = true;
        Object.keys(this.layout).forEach(function (key) {
            var elActiveState = _this.activeState[key];
            var elLayoutConfig = _this.layout[key];
            // const coefficientW = this.dimensions.width / this.virtualW;
            // const coefficientH = this.dimensions.height / this.virtualH;
            if (elLayoutConfig["initialRedraw"] === undefined) {
                _this.nextState[key] = _this.createStateFromConfig(elLayoutConfig, elActiveState);
                elLayoutConfig["initialRedraw"] = true;
                console.log("Initial:", key);
            }
        });
        this.commitState$.next(this.nextState);
        console.log("<- redraw");
    };
    GroupLayoutPositionController.prototype.createStateFromConfig = function (elLayoutConfig, initialState) {
        var elNextState = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(initialState);
        var coefficientH = 1;
        var coefficientW = 1;
        elNextState.left = elLayoutConfig.x * coefficientW;
        elNextState.top = elLayoutConfig.y * coefficientH;
        if (elLayoutConfig.w !== undefined) {
            elNextState.width = elLayoutConfig.w * coefficientW;
        }
        else {
            elNextState.width = initialState.renderedContentWidth;
        }
        if (elLayoutConfig.h !== undefined) {
            elNextState.height = elLayoutConfig.h * coefficientH;
        }
        else {
            elNextState.height = initialState.renderedContentHeight;
        }
        return elNextState;
    };
    GroupLayoutPositionController.prototype.onElementAdded = function (id, elLayoutConfig, initialState) {
        this.layout[id] = elLayoutConfig;
        this.nextState[id] = this.createStateFromConfig(elLayoutConfig, initialState);
        elLayoutConfig["initialRedraw"] = true;
    };
    GroupLayoutPositionController.prototype.onElementUpdated = function (id, elLayoutConfig) {
        this.layout[id] = elLayoutConfig;
        var elActiveState = this.activeState[id];
        this.nextState[id] = this.createStateFromConfig(elLayoutConfig, elActiveState);
    };
    GroupLayoutPositionController.prototype.onElementRemoved = function (id) {
        delete this.nextState[id];
        delete this.layout[id];
    };
    GroupLayoutPositionController.prototype.onLayoutChange = function (newLayout, newElements, deletedElements, updatedElements) {
        var _this = this;
        Object.keys(deletedElements).forEach(function (id) {
            _this.onElementRemoved(id);
        });
        Object.keys(newElements).forEach(function (id) {
            _this.onElementAdded(id, newLayout[id], newElements[id]);
        });
        Object.keys(updatedElements).forEach(function (id) {
            _this.onElementUpdated(id, newLayout[id]);
        });
        this.commitState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.onLayoutConfigChange = function (newLayoutConfig, diffs) {
        console.log(newLayoutConfig, diffs);
    };
    GroupLayoutPositionController.prototype.onButtonEvent = function (id, data, elementButton) {
        console.log(id);
        console.log(elementButton.actionId);
    };
    GroupLayoutPositionController.prototype.onDoubleClick = function (id, data) {
        console.log(id);
    };
    GroupLayoutPositionController.prototype.onElementSizeChanged = function (id, size) {
        console.warn("elementSizeChanged", id, size);
        var elActiveState = this.activeState[id];
        var elNextState = this.nextState[id];
        elActiveState.renderedContentWidth = size.renderedContentWidth;
        elActiveState.renderedContentHeight = size.renderedContentHeight;
        elNextState.renderedContentWidth = size.renderedContentWidth;
        elNextState.renderedContentHeight = size.renderedContentHeight;
        this.redrawLayout();
    };
    GroupLayoutPositionController.prototype.onDragStart = function (id, data, elementButton) {
        // elementButton?.actionId
        if (elementButton === void 0) { elementButton = null; }
        this.prepareDragOrScale(id, data, "rgba(var(--theme-accent-500), 1)");
    };
    GroupLayoutPositionController.prototype.onDrag = function (id, data, elementButton) {
        // elementButton?.actionId
        if (elementButton === void 0) { elementButton = null; }
        switch (this.layoutConfig["dragMode"]) {
            case "float":
                this.dragModeFloat(id, data);
                break;
            case "pilot":
                this.dragModePilot(id, data);
                break;
            case "pilotWithScroll":
                this.dragModePilotWithScroll(id, data);
                break;
            case "simplePush":
                this.dragModeSimplePush(id, data);
                break;
            case "simple":
            default:
                this.dragModeSimple(id, data);
                break;
        }
    };
    GroupLayoutPositionController.prototype.onDragEnd = function (id, data, elementButton) {
        // elementButton?.actionId
        if (elementButton === void 0) { elementButton = null; }
        this.finishDragOrScale(id);
    };
    GroupLayoutPositionController.prototype.onScaleStart = function (id, data) {
        this.prepareDragOrScale(id, data, "rgba(var(--theme-primary-500), 1)");
    };
    GroupLayoutPositionController.prototype.onScale = function (id, data) {
        var pointerX = data.startX + data.deltaX; // mouse pointer
        var pointerY = data.startY + data.deltaY;
        var deltaX = pointerX - this.tempData.pointerX; // delta from previous position
        var deltaY = pointerY - this.tempData.pointerY;
        var distanceX = Math.abs(deltaX);
        var distanceY = Math.abs(deltaY);
        var directionX = Math.sign(deltaX);
        var directionY = Math.sign(deltaY);
        var peaks = this.getScaleAffectedPeaks(data.direction, directionX, directionY);
        var elNextState = this.nextState[id];
        while (distanceX + distanceY > 0) {
            var handleX = distanceX > distanceY;
            var effectiveX = handleX ? directionX : 0;
            var effectiveY = handleX ? 0 : directionY;
            if ((handleX && (peaks.x0 < 0 || 0 < peaks.x1)) || (!handleX && (peaks.y0 < 0 || 0 < peaks.y1))) {
                if (this.canMoveAndPushOthers(id, effectiveX, effectiveY) && this.canIncrease(elNextState, effectiveX, effectiveY)) {
                    this.pushAllAffected(id, effectiveX, effectiveY);
                    handleX ? distanceX-- : distanceY--;
                    if (handleX) {
                        effectiveX < 0 ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addX1"])(elNextState, 1) : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addX0"])(elNextState, -1);
                    }
                    else {
                        effectiveY < 0 ? Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addY1"])(elNextState, 1) : Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addY0"])(elNextState, -1);
                    }
                }
                else {
                    handleX ? (distanceX = 0) : (distanceY = 0);
                }
            }
            else {
                Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addAxis"])(elNextState, handleX, peaks.x0, peaks.y0, peaks.x1, peaks.y1);
                if (this.isOutOfBounds(elNextState) || !this.isScaleAble(id, effectiveX, effectiveY)) {
                    handleX ? (distanceX = 0) : (distanceY = 0);
                    Object(_utils__WEBPACK_IMPORTED_MODULE_2__["addAxis"])(elNextState, handleX, -peaks.x0, -peaks.y0, -peaks.x1, -peaks.y1);
                }
                else {
                    handleX ? distanceX-- : distanceY--;
                }
            }
        }
        this.updateLastProcessedPointers(pointerX, pointerY);
    };
    GroupLayoutPositionController.prototype.onScaleEnd = function (id, data) {
        this.finishDragOrScale(id);
    };
    GroupLayoutPositionController.prototype.onResize = function (dimensions) {
        this.dimensions = dimensions;
        // this.redrawLayout();
    };
    // Converts current state back to LayoutConfig for saving
    GroupLayoutPositionController.prototype.toLayout = function () {
        var _this = this;
        // temporary solution for testing, writing the current state back into the layout
        var clonedLayout = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["cloneDeep"])(this.layout);
        Object.keys(this.activeState).forEach(function (key) {
            var state = _this.activeState[key];
            clonedLayout[key].x = state.left;
            clonedLayout[key].y = state.top;
            clonedLayout[key].w = state.width;
            clonedLayout[key].h = state.height;
        });
        return clonedLayout;
    };
    GroupLayoutPositionController.prototype.infoHook = function (id) {
        // const elActiveState = this.activeState[id];
        // const elNextState = this.nextState[id];
        // return `
        // x: ${round(elActiveState.left)} / ${round(elNextState.left)} <br>
        // y: ${round(elActiveState.top)} / ${round(elNextState.top)}<br>
        // w: ${round(elActiveState.width)} / ${round(elNextState.width)}<br>
        // h: ${round(elActiveState.height)} / ${round(elNextState.height)}
        // `;
        var _a, _b;
        if ((_b = (_a = this.layout[id]) === null || _a === void 0 ? void 0 : _a.properties) === null || _b === void 0 ? void 0 : _b.fixedX) {
            // true ||  > 0
        }
        else {
            // false || undefined || null || <=0
        }
        return JSON.stringify(this.layout[id].properties);
    };
    // --------------------------------------------------------------------------- drag modes
    GroupLayoutPositionController.prototype.dragModePilot = function (id, data) {
        var elActiveState = this.activeState[id];
        var elNextState = this.nextState[id];
        elNextState.top = elActiveState.top + data.deltaY;
        elNextState.left = elActiveState.left + data.deltaX;
        this.updateState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.dragModePilotWithScroll = function (id, data) {
        var elActiveState = this.activeState[id];
        var elNextState = this.nextState[id];
        elNextState.top = elActiveState.top + data.deltaY;
        elNextState.left = elActiveState.left + data.deltaX;
        // logic to follow dragged element with the scrollbar
        var hostEl = this.wrapperEl.nativeElement;
        if (elNextState.left + elNextState.width > hostEl.clientWidth + hostEl.scrollLeft) {
            hostEl.scrollLeft = elNextState.left + elNextState.width - hostEl.clientWidth;
        }
        if (elNextState.left < hostEl.scrollLeft) {
            hostEl.scrollLeft = elNextState.left;
        }
        if (elNextState.top + elNextState.height > hostEl.clientHeight + hostEl.scrollTop) {
            hostEl.scrollTop = elNextState.top + elNextState.height - hostEl.clientHeight;
        }
        if (elNextState.top < hostEl.scrollTop) {
            hostEl.scrollTop = elNextState.top;
        }
        this.updateState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.dragModeSimple = function (id, data) {
        var elNextState = this.nextState[id];
        var dragContext = this.getDragContext(elNextState, data);
        while (dragContext.distanceX + dragContext.distanceY > 0) {
            var moveX = dragContext.distanceX > dragContext.distanceY ? dragContext.directionX : 0;
            var moveY = dragContext.distanceX > dragContext.distanceY ? 0 : dragContext.directionY;
            if (this.canMoveSingleElement(id, moveX, moveY)) {
                this.pushAllAffected(id, moveX, moveY);
                moveX === 0 ? dragContext.distanceY-- : dragContext.distanceX--;
            }
            else {
                moveX === 0 ? (dragContext.distanceY = 0) : (dragContext.distanceX = 0);
            }
        }
        this.updateLastProcessedPointers(dragContext.pointerX, dragContext.pointerY);
    };
    GroupLayoutPositionController.prototype.dragModeSimplePush = function (id, data) {
        var elNextState = this.nextState[id];
        var dragContext = this.getDragContext(elNextState, data);
        while (dragContext.distanceX + dragContext.distanceY > 0) {
            var moveX = dragContext.distanceX > dragContext.distanceY ? dragContext.directionX : 0;
            var moveY = dragContext.distanceX > dragContext.distanceY ? 0 : dragContext.directionY;
            if (this.canMoveAndPushOthers(id, moveX, moveY)) {
                this.pushAllAffected(id, moveX, moveY);
                moveX === 0 ? dragContext.distanceY-- : dragContext.distanceX--;
            }
            else {
                moveX === 0 ? (dragContext.distanceY = 0) : (dragContext.distanceX = 0);
            }
        }
        this.updateLastProcessedPointers(dragContext.pointerX, dragContext.pointerY);
    };
    GroupLayoutPositionController.prototype.dragModeFloat = function (id, data) {
        var elNextState = this.nextState[id];
        var dragContext = this.getDragContext(elNextState, data);
        elNextState.top += dragContext.directionY * dragContext.distanceY;
        elNextState.left += dragContext.directionX * dragContext.distanceX;
        this.renderer.setStyle(this.listOfRenderedElements[id].componentRef.location.nativeElement, "background", this.isOverflow(elNextState) || this.getOverlaps(id, elNextState).length !== 0
            ? "rgba(var(--theme-warn-500), 1)"
            : "rgba(var(--theme-accent-500), 1)");
        this.updateLastProcessedPointers(dragContext.pointerX, dragContext.pointerY);
    };
    // --------------------------------------------------------------------------- internal methods
    GroupLayoutPositionController.prototype.prepareDragOrScale = function (id, data, color) {
        this.createTempDiv();
        this.renderer.setStyle(this.tempDiv, "width", this.nextState[id].width + "px");
        this.renderer.setStyle(this.tempDiv, "height", this.nextState[id].height + "px");
        this.renderer.setStyle(this.tempDiv, "top", this.nextState[id].top + "px");
        this.renderer.setStyle(this.tempDiv, "left", this.nextState[id].left + "px");
        this.renderer.setStyle(this.tempDiv, "z-index", 0);
        this.nextState[id].zIndex = 9999;
        this.tempData.startPos = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getCoordinates"])(this.nextState[id]);
        this.tempData.pointerX = data.startX;
        this.tempData.pointerY = data.startY;
        this.tempData.background = this.listOfRenderedElements[id].componentRef.location.nativeElement.style.background;
        // resize delay WIP
        // this.renderer.setStyle(
        //   this.listOfRenderedElements[id].componentRef.instance.pluginComponentRef.location.nativeElement,
        //   "width",
        //   this.activeState[id].width + "px"
        // );
        // this.renderer.setStyle(
        //   this.listOfRenderedElements[id].componentRef.instance.pluginComponentRef.location.nativeElement,
        //   "height",
        //   this.activeState[id].height + "px"
        // );
        this.renderer.setStyle(this.listOfRenderedElements[id].componentRef.location.nativeElement, "background", color);
        this.renderer.setStyle(this.listOfRenderedElements[id].componentRef.location.nativeElement, "box-shadow", "5px 5px 8px 8px rgba(var(--theme-background-900), 0.4)");
        this.commitState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.finishDragOrScale = function (id) {
        // setCoordinates(this.nextState["@@setup"], { x0: -20, y0: -20, x1: -10, y1: -10 });
        this.cleanUpTempDiv();
        var s = this.nextState[id];
        if (this.isOverflow(s) || this.getOverlaps(id, s).length !== 0)
            Object(_utils__WEBPACK_IMPORTED_MODULE_2__["setCoordinates"])(s, this.tempData.startPos);
        this.nextState[id].zIndex = 0;
        // // resize delay WIP
        // this.renderer.removeStyle(this.listOfRenderedElements[id].componentRef.instance.pluginComponentRef.location.nativeElement, "width");
        // this.renderer.removeStyle(this.listOfRenderedElements[id].componentRef.instance.pluginComponentRef.location.nativeElement, "height");
        this.renderer.setStyle(this.listOfRenderedElements[id].componentRef.location.nativeElement, "background", this.tempData.background);
        this.renderer.setStyle(this.listOfRenderedElements[id].componentRef.location.nativeElement, "box-shadow", "0px 0px 3px 3px rgba(var(--theme-background-900), 0)");
        this.commitState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.updateLastProcessedPointers = function (x, y) {
        this.tempData.pointerX = x;
        this.tempData.pointerY = y;
        this.updateState$.next(this.nextState);
    };
    GroupLayoutPositionController.prototype.canMoveAndPushOthers = function (id, sx, sy) {
        var _this = this;
        var e = this.nextState[id];
        if (!this.isMoveAble(id, sx, sy))
            return false;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["move"])(e, sx, sy);
        var result = (function () {
            if (_this.isOverflow(e))
                return false;
            for (var _i = 0, _a = _this.getOverlaps(id, e); _i < _a.length; _i++) {
                var item = _a[_i];
                if (!_this.canMoveAndPushOthers(item, sx, sy)) {
                    return false;
                }
            }
            return true;
        })();
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["move"])(e, -sx, -sy);
        return result;
    };
    GroupLayoutPositionController.prototype.canMoveSingleElement = function (id, sx, sy) {
        var _this = this;
        var e = this.nextState[id];
        if (!this.isMoveAble(id, sx, sy))
            return false;
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["move"])(e, sx, sy);
        var result = (function () {
            if (_this.isOverflow(e)) {
                return false;
            }
            else
                return _this.getOverlaps(id, e).length === 0;
        })();
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["move"])(e, -sx, -sy);
        return result;
    };
    GroupLayoutPositionController.prototype.pushAllAffected = function (id, sx, sy) {
        var e = this.nextState[id];
        Object(_utils__WEBPACK_IMPORTED_MODULE_2__["move"])(e, sx, sy);
        for (var _i = 0, _a = this.getOverlaps(id, e); _i < _a.length; _i++) {
            var item = _a[_i];
            this.pushAllAffected(item, sx, sy);
        }
    };
    GroupLayoutPositionController.prototype.getOverlaps = function (id, e) {
        var _this = this;
        var overlaps = [];
        Object.keys(this.layout).forEach(function (item) {
            if (item === "@@setup" || item === id)
                return;
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["isCollision"])(_this.nextState[item], e))
                overlaps.push(item);
        });
        return overlaps;
    };
    GroupLayoutPositionController.prototype.isMoveAble = function (id, x, y) {
        // const properties = this.layout[id]["properties"] === undefined ? "" : this.layout[id]["properties"];
        // if (x !== 0 && properties.search("fixedXpos") >= 0) return false;
        // if (y !== 0 && properties.search("fixedYpos") >= 0) return false;
        return true;
    };
    GroupLayoutPositionController.prototype.isScaleAble = function (id, x, y) {
        // const properties = this.layout[id]["properties"] === undefined ? "" : this.layout[id]["properties"];
        // if (x !== 0 && (properties.search("fixedXpos") >= 0 || properties.search("fixedXsize") >= 0)) return false;
        // if (y !== 0 && (properties.search("fixedYpos") >= 0 || properties.search("fixedXsize") >= 0)) return false;
        return true;
    };
    GroupLayoutPositionController.prototype.isOverflow = function (e) {
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY1"])(e) >= this.dimensions.height)
            return true;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY0"])(e) < 0)
            return true;
        if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX1"])(e) >= this.dimensions.width)
            return true;
        return Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX0"])(e) < 0;
    };
    GroupLayoutPositionController.prototype.getDragContext = function (e, data) {
        var pointerX = data.startX + data.deltaX; // mouse pointer
        var pointerY = data.startY + data.deltaY;
        var deltaX = pointerX - this.tempData.pointerX; // delta from previous position
        var deltaY = pointerY - this.tempData.pointerY;
        // centering if disconnected
        if (this.tempData.pointerX < Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX0"])(e) || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX1"])(e) < this.tempData.pointerX) {
            deltaX = this.getCenteringCorrection(deltaX, pointerX, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX0"])(e), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX1"])(e));
        }
        if (this.tempData.pointerY < Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY0"])(e) || Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY1"])(e) < this.tempData.pointerY) {
            deltaY = this.getCenteringCorrection(deltaY, pointerY, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY0"])(e), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY1"])(e));
        }
        // slippery area handling
        var slipperyArea = this.layoutConfig["slipperyArea"];
        if (slipperyArea > 0) {
            if (e.width >= 2 * slipperyArea + 10 && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX0"])(e) <= pointerX && pointerX <= Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX1"])(e)) {
                deltaX = this.getSlipperyCorrection(deltaX, pointerX, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX0"])(e), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getX1"])(e), slipperyArea);
            }
            if (e.height >= 2 * slipperyArea + 10 && Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY0"])(e) <= pointerY && pointerY <= Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY1"])(e)) {
                deltaY = this.getSlipperyCorrection(deltaY, pointerY, Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY0"])(e), Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getY1"])(e), slipperyArea);
            }
        }
        return {
            distanceX: Math.abs(deltaX),
            distanceY: Math.abs(deltaY),
            directionX: Math.sign(deltaX),
            directionY: Math.sign(deltaY),
            pointerX: pointerX,
            pointerY: pointerY,
        };
    };
    GroupLayoutPositionController.prototype.getCenteringCorrection = function (delta, pointer, start, end) {
        return pointer < start || end < pointer ? Math.round(pointer - (start + end) / 2) : delta;
    };
    GroupLayoutPositionController.prototype.getSlipperyCorrection = function (delta, pointer, start, end, slipperyArea) {
        if (delta > 0) {
            return delta - Math.min(Math.max(0, slipperyArea - (pointer - start)), delta);
        }
        else if (delta < 0) {
            return delta + Math.min(Math.max(0, slipperyArea - (end - pointer)), -delta);
        }
        return delta;
    };
    GroupLayoutPositionController.prototype.getScaleAffectedPeaks = function (direction, directionX, directionY) {
        var x0 = 0;
        var x1 = 0;
        var y0 = 0;
        var y1 = 0;
        switch (direction) {
            case "n":
                y0 = directionY;
                break;
            case "s":
                y1 = directionY;
                break;
            case "w":
                x0 = directionX;
                break;
            case "e":
                x1 = directionX;
                break;
            case "nw":
                y0 = directionY;
                x0 = directionX;
                break;
            case "ne":
                y0 = directionY;
                x1 = directionX;
                break;
            case "sw":
                y1 = directionY;
                x0 = directionX;
                break;
            case "se":
                y1 = directionY;
                x1 = directionX;
                break;
            default:
                break;
        }
        return { x0: x0, y0: y0, x1: x1, y1: y1 };
    };
    GroupLayoutPositionController.prototype.isOutOfBounds = function (e) {
        return e.width < 25 || 1000 < e.width || e.height < 25 || 1000 < e.height;
    };
    GroupLayoutPositionController.prototype.canIncrease = function (e, x, y) {
        return x + e.width <= 1000 && y + e.height <= 1000;
    };
    GroupLayoutPositionController.prototype.createTempDiv = function () {
        this.tempDiv = this.renderer.createElement("div");
        this.renderer.appendChild(this.wrapperEl.nativeElement, this.tempDiv);
        this.renderer.setStyle(this.tempDiv, "background", "rgba(var(--theme-background-300), 0.3)");
        this.renderer.setStyle(this.tempDiv, "border", "1px dotted rgba(var(--theme-background-300), 0.7)");
        this.renderer.setStyle(this.tempDiv, "position", "absolute");
    };
    GroupLayoutPositionController.prototype.cleanUpTempDiv = function () {
        if (this.tempDiv) {
            this.renderer.removeChild(this.wrapperEl, this.tempDiv);
            this.tempDiv = null;
        }
    };
    return GroupLayoutPositionController;
}());



/***/ }),

/***/ "./src/group/layout/position-controller/utils.ts":
/*!*******************************************************!*\
  !*** ./src/group/layout/position-controller/utils.ts ***!
  \*******************************************************/
/*! exports provided: move, isCollision, getX0, getY0, getX1, getY1, addX0, addY0, addX1, addY1, addAxis, getCoordinates, setCoordinates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCollision", function() { return isCollision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getX0", function() { return getX0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getY0", function() { return getY0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getX1", function() { return getX1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getY1", function() { return getY1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addX0", function() { return addX0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addY0", function() { return addY0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addX1", function() { return addX1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addY1", function() { return addY1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAxis", function() { return addAxis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCoordinates", function() { return getCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCoordinates", function() { return setCoordinates; });
var move = function (a, dx, dy) {
    a.left += dx;
    a.top += dy;
};
var isCollision = function (a, b) {
    var xa0 = getX0(a);
    var xa1 = getX1(a);
    var ya0 = getY0(a);
    var ya1 = getY1(a);
    var xb0 = getX0(b);
    var xb1 = getX1(b);
    var yb0 = getY0(b);
    var yb1 = getY1(b);
    return xa0 <= xb1 && xb0 <= xa1 && ya0 <= yb1 && yb0 <= ya1;
};
var getX0 = function (e) {
    return e.left;
};
var getY0 = function (e) {
    return e.top;
};
var getX1 = function (e) {
    return e.left + e.width - 1;
};
var getY1 = function (e) {
    return e.top + e.height - 1;
};
var addX0 = function (e, x0) {
    e.left += x0;
    e.width -= x0;
};
var addY0 = function (e, y0) {
    e.top += y0;
    e.height -= y0;
};
var addX1 = function (e, x1) {
    e.width += x1;
};
var addY1 = function (e, y1) {
    e.height += y1;
};
var addAxis = function (e, axisX, x0, y0, x1, y1) {
    if (axisX) {
        addX0(e, x0);
        addX1(e, x1);
    }
    else {
        addY0(e, y0);
        addY1(e, y1);
    }
};
var getCoordinates = function (e) {
    return { x0: getX0(e), y0: getY0(e), x1: getX1(e), y1: getY1(e) };
};
var setCoordinates = function (e, coordinates) {
    if (e === undefined)
        return;
    e.left = coordinates["x0"];
    e.top = coordinates["y0"];
    e.width = coordinates["x1"] - coordinates["x0"] + 1;
    e.height = coordinates["y1"] - coordinates["y0"] + 1;
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: GroupModule, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _group_group_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./group/group.module */ "./src/group/group.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return _group_group_module__WEBPACK_IMPORTED_MODULE_0__["GroupModule"]; });



/* harmony default export */ __webpack_exports__["default"] = (_group_group_module__WEBPACK_IMPORTED_MODULE_0__["GroupModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/attila/gitx/admino2_frontend/projects/plugins/src/main.ts */"./src/main.ts");


/***/ }),

/***/ "@angular/cdk/overlay":
/*!************************************!*\
  !*** external "core.@angular/cdk" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_cdk_overlay__;

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

/***/ "@angular/forms":
/*!***************************!*\
  !*** external "ng.forms" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_forms__;

/***/ }),

/***/ "@angular/material/button":
/*!*****************************************!*\
  !*** external "core.@angular/material" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_material_button__;

/***/ }),

/***/ "@angular/router":
/*!****************************!*\
  !*** external "ng.router" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__angular_router__;

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
//# sourceMappingURL=group.js.map