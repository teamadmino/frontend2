!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):"function"==typeof define&&define.amd?define(["adm.@angular/common","adm.@angular/forms","adm.rxjs/operators","adm.shared","adm.@angular/core"],t):"object"==typeof exports?exports.code=t(require("adm.@angular/common"),require("adm.@angular/forms"),require("adm.rxjs/operators"),require("adm.shared"),require("adm.@angular/core")):e.code=t(e["adm.@angular/common"],e["adm.@angular/forms"],e["adm.rxjs/operators"],e["adm.shared"],e["adm.@angular/core"])}("undefined"!=typeof self?self:this,function(e,t,n,a,o){return function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(a,o,(function(t){return e[t]}).bind(null,o));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/assets/plugins/code",n(n.s=0)}({0:function(e,t,n){e.exports=n("P+m1")},"0S4P":function(t,n){t.exports=e},"3xDq":function(e,n){e.exports=t},"P+m1":function(e,t,n){"use strict";n.r(t),n.d(t,"CodeModule",function(){return _});var a,o=n("0S4P"),r=n("vOrQ"),s=n("cfyg"),i=n("aP7H"),l='"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',c="\n  .codeflask {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n\n  .codeflask, .codeflask * {\n    box-sizing: border-box;\n  }\n\n  .codeflask__pre {\n    pointer-events: none;\n    z-index: 3;\n    overflow: hidden;\n  }\n\n  .codeflask__textarea {\n    background: none;\n    border: none;\n    color: "+(a="caret-color",(("undefined"!=typeof CSS?CSS.supports(a,"#000"):"undefined"!=typeof document&&function(e){return(e=e.split("-").filter(function(e){return!!e}).map(function(e){return e[0].toUpperCase()+e.substr(1)}).join(""))[0].toLowerCase()+e.substr(1)}(a)in document.body.style)?"#fff":"#ccc")+";\n    z-index: 1;\n    resize: none;\n    font-family: ")+l+";\n    -webkit-appearance: pre;\n    caret-color: #111;\n    z-index: 2;\n    width: 100%;\n    height: 100%;\n  }\n\n  .codeflask--has-line-numbers .codeflask__textarea {\n    width: calc(100% - 40px);\n  }\n\n  .codeflask__code {\n    display: block;\n    font-family: "+l+";\n    overflow: hidden;\n  }\n\n  .codeflask__flatten {\n    padding: 10px;\n    font-size: 13px;\n    line-height: 20px;\n    white-space: pre;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: auto;\n    margin: 0 !important;\n    outline: none;\n    text-align: left;\n  }\n\n  .codeflask--has-line-numbers .codeflask__flatten {\n    width: calc(100% - 40px);\n    left: 40px;\n  }\n\n  .codeflask__line-highlight {\n    position: absolute;\n    top: 10px;\n    left: 0;\n    width: 100%;\n    height: 20px;\n    background: rgba(0,0,0,0.1);\n    z-index: 1;\n  }\n\n  .codeflask__lines {\n    padding: 10px 4px;\n    font-size: 12px;\n    line-height: 20px;\n    font-family: 'Cousine', monospace;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    text-align: right;\n    color: #999;\n    z-index: 2;\n  }\n\n  .codeflask__lines__line {\n    display: block;\n  }\n\n  .codeflask.codeflask--has-line-numbers {\n    padding-left: 40px;\n  }\n\n  .codeflask.codeflask--has-line-numbers:before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 40px;\n    height: 100%;\n    background: #eee;\n    z-index: 1;\n  }\n";function d(e,t,n){var a=t||"codeflask-style",o=n||document.head;if(!e)return!1;if(document.getElementById(a))return!0;var r=document.createElement("style");return r.innerHTML=e,r.id=a,o.appendChild(r),!0}var u={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};function g(e){return String(e).replace(/[&<>"'`=/]/g,function(e){return u[e]})}var p,h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},f=(function(e){var t=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof o?new o(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var o,r,s=a.util.type(t);switch(n=n||{},s){case"Object":if(r=a.util.objId(t),n[r])return n[r];for(var i in n[r]=o={},t)t.hasOwnProperty(i)&&(o[i]=e(t[i],n));return o;case"Array":return r=a.util.objId(t),n[r]?n[r]:(n[r]=o=[],t.forEach(function(t,a){o[a]=e(t,n)}),o);default:return t}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var r=(o=o||a.languages)[e],s={};for(var i in r)if(r.hasOwnProperty(i)){if(i==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(i)||(s[i]=r[i])}var c=o[e];return o[e]=s,a.languages.DFS(a.languages,function(t,n){n===c&&t!=e&&(this[t]=s)}),s},DFS:function e(t,n,o,r){r=r||{};var s=a.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],o||i);var l=t[i],c=a.util.type(l);"Object"!==c||r[s(l)]?"Array"!==c||r[s(l)]||(r[s(l)]=!0,e(l,n,i,r)):(r[s(l)]=!0,e(l,n,null,r))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",o);for(var r,s=o.elements||e.querySelectorAll(o.selector),i=0;r=s[i++];)a.highlightElement(r,!0===t,o.callback)},highlightElement:function(n,o,r){for(var s,i,l=n;l&&!t.test(l.className);)l=l.parentNode;l&&(s=(l.className.match(t)||[,""])[1].toLowerCase(),i=a.languages[s]),n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+s,n.parentNode&&/pre/i.test((l=n.parentNode).nodeName)&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+s);var c={element:n,language:s,grammar:i,code:n.textContent},d=function(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),r&&r.call(c.element)};if(a.hooks.run("before-sanity-check",c),c.code)if(a.hooks.run("before-highlight",c),c.grammar)if(o&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){d(e.data)},u.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else d(a.highlight(c.code,c.grammar,c.language));else d(a.util.encode(c.code));else a.hooks.run("complete",c)},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",r),r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),o.stringify(a.util.encode(r.tokens),r.language)},matchGrammar:function(e,t,n,r,s,i,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){if(c==l)return;var d=n[c];d="Array"===a.util.type(d)?d:[d];for(var u=0;u<d.length;++u){var g=d[u],p=g.inside,h=!!g.lookbehind,f=!!g.greedy,m=0,b=g.alias;if(f&&!g.pattern.global){var y=g.pattern.toString().match(/[imuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}g=g.pattern||g;for(var k=r,C=s;k<t.length;C+=t[k].length,++k){var v=t[k];if(t.length>e.length)return;if(!(v instanceof o)){if(f&&k!=t.length-1){if(g.lastIndex=C,!(O=g.exec(e)))break;for(var x=O.index+(h?O[1].length:0),_=O.index+O[0].length,P=k,w=C,M=t.length;P<M&&(w<_||!t[P].type&&!t[P-1].greedy);++P)x>=(w+=t[P].length)&&(++k,C=w);if(t[k]instanceof o)continue;F=P-k,v=e.slice(C,w),O.index-=C}else{g.lastIndex=0;var O=g.exec(v),F=1}if(O){h&&(m=O[1]?O[1].length:0),_=(x=O.index+m)+(O=O[0].slice(m)).length;var A=v.slice(0,x),S=v.slice(_),T=[k,F];A&&(++k,C+=A.length,T.push(A));var L=new o(c,p?a.tokenize(O,p):O,b,O,f);if(T.push(L),S&&T.push(S),Array.prototype.splice.apply(t,T),1!=F&&a.matchGrammar(e,t,n,k,C,!0,c),i)break}else if(i)break}}}}},tokenize:function(e,t){var n=[e],o=t.rest;if(o){for(var r in o)t[r]=o[r];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var o,r=0;o=n[r++];)o(t)}},Token:o};function o(e,t,n,a,o){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!o}if(e.Prism=a,o.stringify=function(e,t,n){if("string"==typeof e)return e;if(Array.isArray(e))return e.map(function(n){return o.stringify(n,t,e)}).join("");var r={type:e.type,content:o.stringify(e.content,t,n),tag:"span",classes:["token",e.type],attributes:{},language:t,parent:n};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(r.classes,s)}a.hooks.run("wrap",r);var i=Object.keys(r.attributes).map(function(e){return e+'="'+(r.attributes[e]||"").replace(/"/g,"&quot;")+'"'}).join(" ");return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+(i?" "+i:"")+">"+r.content+"</"+r.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),o=n.language,r=n.immediateClose;e.postMessage(a.highlight(n.code,a.languages[o],o)),r&&e.close()},!1),a):a;var r=document.currentScript||[].slice.call(document.getElementsByTagName("script")).pop();return r&&(a.filename=r.src,a.manual||r.hasAttribute("data-manual")||("loading"!==document.readyState?window.requestAnimationFrame?window.requestAnimationFrame(a.highlightAll):window.setTimeout(a.highlightAll,16):document.addEventListener("DOMContentLoaded",a.highlightAll))),a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==h&&(h.Prism=t),t.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:/<!DOCTYPE[\s\S]+?>/i,cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var r={};r[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",r)}}),t.languages.xml=t.languages.extend("markup",{}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+?[\s\S]*?(?:;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:RegExp("url\\((?:"+t.source+"|.*?)\\)","i"),selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX][\dA-Fa-f]+|0[bB][01]+|0[oO][0-7]+)n?|\d+n|NaN|Infinity)\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,function:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})\]]))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${[^}]+}|[^\\`])*`/,greedy:!0,inside:{interpolation:{pattern:/\${[^}]+}/,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}}}),t.languages.markup&&t.languages.markup.tag.addInlined("script","javascript"),t.languages.js=t.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var n={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach(function(e){if(!e.hasAttribute("data-src-loaded")){for(var a,o=e.getAttribute("data-src"),r=e,s=/\blang(?:uage)?-([\w-]+)\b/i;r&&!s.test(r.className);)r=r.parentNode;if(r&&(a=(e.className.match(s)||[,""])[1]),!a){var i=(o.match(/\.(\w+)$/)||[,""])[1];a=n[i]||i}var l=document.createElement("code");l.className="language-"+a,e.textContent="",l.textContent="Loading\u2026",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",o,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,t.highlightElement(l),e.setAttribute("data-src-loaded","")):l.textContent=c.status>=400?"\u2716 Error "+c.status+" while fetching file: "+c.statusText:"\u2716 Error: File does not exist or is empty")},c.send(null)}}),t.plugins.toolbar&&t.plugins.toolbar.registerButton("download-file",function(e){var t=e.element.parentNode;if(t&&/pre/i.test(t.nodeName)&&t.hasAttribute("data-src")&&t.hasAttribute("data-download-link")){var n=t.getAttribute("data-src"),a=document.createElement("a");return a.textContent=t.getAttribute("data-download-link-label")||"Download",a.setAttribute("download",""),a.href=n,a}})},document.addEventListener("DOMContentLoaded",function(){self.Prism.fileHighlight()}))}(p={exports:{}}),p.exports),m=function(e,t){if(!e)throw Error("CodeFlask expects a parameter which is Element or a String selector");if(!t)throw Error("CodeFlask expects an object containing options as second parameter");if(e.nodeType)this.editorRoot=e;else{var n=document.querySelector(e);n&&(this.editorRoot=n)}this.opts=t,this.startEditor()};m.prototype.startEditor=function(){if(!d(c,null,this.opts.styleParent))throw Error("Failed to inject CodeFlask CSS.");this.createWrapper(),this.createTextarea(),this.createPre(),this.createCode(),this.runOptions(),this.listenTextarea(),this.populateDefault(),this.updateCode(this.code)},m.prototype.createWrapper=function(){this.code=this.editorRoot.innerHTML,this.editorRoot.innerHTML="",this.elWrapper=this.createElement("div",this.editorRoot),this.elWrapper.classList.add("codeflask")},m.prototype.createTextarea=function(){this.elTextarea=this.createElement("textarea",this.elWrapper),this.elTextarea.classList.add("codeflask__textarea","codeflask__flatten")},m.prototype.createPre=function(){this.elPre=this.createElement("pre",this.elWrapper),this.elPre.classList.add("codeflask__pre","codeflask__flatten")},m.prototype.createCode=function(){this.elCode=this.createElement("code",this.elPre),this.elCode.classList.add("codeflask__code","language-"+(this.opts.language||"html"))},m.prototype.createLineNumbers=function(){this.elLineNumbers=this.createElement("div",this.elWrapper),this.elLineNumbers.classList.add("codeflask__lines"),this.setLineNumber()},m.prototype.createElement=function(e,t){var n=document.createElement(e);return t.appendChild(n),n},m.prototype.runOptions=function(){this.opts.rtl=this.opts.rtl||!1,this.opts.tabSize=this.opts.tabSize||2,this.opts.enableAutocorrect=this.opts.enableAutocorrect||!1,this.opts.lineNumbers=this.opts.lineNumbers||!1,this.opts.defaultTheme=!1!==this.opts.defaultTheme,this.opts.areaId=this.opts.areaId||null,this.opts.ariaLabelledby=this.opts.ariaLabelledby||null,this.opts.readonly=this.opts.readonly||null,"boolean"!=typeof this.opts.handleTabs&&(this.opts.handleTabs=!0),"boolean"!=typeof this.opts.handleSelfClosingCharacters&&(this.opts.handleSelfClosingCharacters=!0),"boolean"!=typeof this.opts.handleNewLineIndentation&&(this.opts.handleNewLineIndentation=!0),!0===this.opts.rtl&&(this.elTextarea.setAttribute("dir","rtl"),this.elPre.setAttribute("dir","rtl")),!1===this.opts.enableAutocorrect&&(this.elTextarea.setAttribute("spellcheck","false"),this.elTextarea.setAttribute("autocapitalize","off"),this.elTextarea.setAttribute("autocomplete","off"),this.elTextarea.setAttribute("autocorrect","off")),this.opts.lineNumbers&&(this.elWrapper.classList.add("codeflask--has-line-numbers"),this.createLineNumbers()),this.opts.defaultTheme&&d("\n.codeflask {\n  background: #fff;\n  color: #4f559c;\n}\n\n.codeflask .token.punctuation {\n  color: #4a4a4a;\n}\n\n.codeflask .token.keyword {\n  color: #8500ff;\n}\n\n.codeflask .token.operator {\n  color: #ff5598;\n}\n\n.codeflask .token.string {\n  color: #41ad8f;\n}\n\n.codeflask .token.comment {\n  color: #9badb7;\n}\n\n.codeflask .token.function {\n  color: #8500ff;\n}\n\n.codeflask .token.boolean {\n  color: #8500ff;\n}\n\n.codeflask .token.number {\n  color: #8500ff;\n}\n\n.codeflask .token.selector {\n  color: #8500ff;\n}\n\n.codeflask .token.property {\n  color: #8500ff;\n}\n\n.codeflask .token.tag {\n  color: #8500ff;\n}\n\n.codeflask .token.attr-value {\n  color: #8500ff;\n}\n","theme-default",this.opts.styleParent),this.opts.areaId&&this.elTextarea.setAttribute("id",this.opts.areaId),this.opts.ariaLabelledby&&this.elTextarea.setAttribute("aria-labelledby",this.opts.ariaLabelledby),this.opts.readonly&&this.enableReadonlyMode()},m.prototype.updateLineNumbersCount=function(){for(var e="",t=1;t<=this.lineNumber;t++)e=e+'<span class="codeflask__lines__line">'+t+"</span>";this.elLineNumbers.innerHTML=e},m.prototype.listenTextarea=function(){var e=this;this.elTextarea.addEventListener("input",function(t){e.code=t.target.value,e.elCode.innerHTML=g(t.target.value),e.highlight(),setTimeout(function(){e.runUpdate(),e.setLineNumber()},1)}),this.elTextarea.addEventListener("keydown",function(t){e.handleTabs(t),e.handleSelfClosingCharacters(t),e.handleNewLineIndentation(t)}),this.elTextarea.addEventListener("scroll",function(t){e.elPre.style.transform="translate3d(-"+t.target.scrollLeft+"px, -"+t.target.scrollTop+"px, 0)",e.elLineNumbers&&(e.elLineNumbers.style.transform="translate3d(0, -"+t.target.scrollTop+"px, 0)")})},m.prototype.handleTabs=function(e){if(this.opts.handleTabs){if(9!==e.keyCode)return;e.preventDefault();var t=this.elTextarea,n=t.selectionDirection,a=t.selectionStart,o=t.selectionEnd,r=t.value,s=r.substr(0,a),i=r.substring(a,o),l=r.substring(o),c=" ".repeat(this.opts.tabSize);if(a!==o&&i.length>=c.length){var d=a-s.split("\n").pop().length,u=c.length,g=c.length;e.shiftKey?(r.substr(d,c.length)===c?(u=-u,d>a?(i=i.substring(0,d)+i.substring(d+c.length),g=0):d===a?(u=0,g=0,i=i.substring(c.length)):(g=-g,s=s.substring(0,d)+s.substring(d+c.length))):(u=0,g=0),i=i.replace(new RegExp("\n"+c.split("").join("\\"),"g"),"\n")):(s=s.substr(0,d)+c+s.substring(d,a),i=i.replace(/\n/g,"\n"+c)),t.value=s+i+l,t.selectionStart=a+u,t.selectionEnd=a+i.length+g,t.selectionDirection=n}else t.value=s+c+l,t.selectionStart=a+c.length,t.selectionEnd=a+c.length;this.updateCode(t.value),this.elTextarea.selectionEnd=o+this.opts.tabSize}},m.prototype.handleSelfClosingCharacters=function(e){if(this.opts.handleSelfClosingCharacters){var t=e.key;if(["(","[","{","<","'",'"'].includes(t)||[")","]","}",">","'",'"'].includes(t))switch(t){case"(":case")":this.closeCharacter(t);break;case"[":case"]":this.closeCharacter(t);break;case"{":case"}":this.closeCharacter(t);break;case"<":case">":case"'":case'"':this.closeCharacter(t)}}},m.prototype.setLineNumber=function(){this.lineNumber=this.code.split("\n").length,this.opts.lineNumbers&&this.updateLineNumbersCount()},m.prototype.handleNewLineIndentation=function(e){if(this.opts.handleNewLineIndentation&&13===e.keyCode){e.preventDefault();var t=this.elTextarea,n=t.selectionStart,a=t.selectionEnd,o=t.value,r=o.substr(0,n),s=o.substring(a),i=o.lastIndexOf("\n",n-1),l=i+o.slice(i+1).search(/[^ ]|$/),c=l>i?l-i:0,d=r+"\n"+" ".repeat(c)+s;t.value=d,t.selectionStart=n+c+1,t.selectionEnd=n+c+1,this.updateCode(t.value)}},m.prototype.closeCharacter=function(e){var t=this.elTextarea.selectionStart,n=this.elTextarea.selectionEnd;if(this.skipCloseChar(e)){var a=this.code.substr(n,1)===e,o=a?n+1:n,r=!a&&["'",'"'].includes(e)?e:"",s=""+this.code.substring(0,t)+r+this.code.substring(o);this.updateCode(s),this.elTextarea.selectionEnd=++this.elTextarea.selectionStart}else{var i=e;switch(e){case"(":i=String.fromCharCode(e.charCodeAt()+1);break;case"<":case"{":case"[":i=String.fromCharCode(e.charCodeAt()+2)}var l=this.code.substring(t,n),c=""+this.code.substring(0,t)+l+i+this.code.substring(n);this.updateCode(c)}this.elTextarea.selectionEnd=t},m.prototype.skipCloseChar=function(e){var t=Math.abs(this.elTextarea.selectionEnd-this.elTextarea.selectionStart)>0;return[")","}","]",">"].includes(e)||["'",'"'].includes(e)&&!t},m.prototype.updateCode=function(e){this.code=e,this.elTextarea.value=e,this.elCode.innerHTML=g(e),this.highlight(),this.setLineNumber(),setTimeout(this.runUpdate.bind(this),1)},m.prototype.updateLanguage=function(e){this.elCode.classList.remove("language-"+this.opts.language),this.elCode.classList.add("language-"+e),this.opts.language=e,this.highlight()},m.prototype.addLanguage=function(e,t){f.languages[e]=t},m.prototype.populateDefault=function(){this.updateCode(this.code)},m.prototype.highlight=function(){f.highlightElement(this.elCode,!1)},m.prototype.onUpdate=function(e){if(e&&"[object Function]"!=={}.toString.call(e))throw Error("CodeFlask expects callback of type Function");this.updateCallBack=e},m.prototype.getCode=function(){return this.code},m.prototype.runUpdate=function(){this.updateCallBack&&this.updateCallBack(this.code)},m.prototype.enableReadonlyMode=function(){this.elTextarea.setAttribute("readonly",!0)},m.prototype.disableReadonlyMode=function(){this.elTextarea.removeAttribute("readonly")};var b=m,y=n("nLpZ"),k=n("xw6W"),C=["editorRef"],v=function(){function e(e,t){this.cd=e,this.context=t,this.text="",this.languages=[y,k]}return e.prototype.ngOnInit=function(){var e=this;this.flask=new b(this.editorRef.nativeElement,{language:"ts",lineNumbers:!0,defaultTheme:!0}),this.flask.onUpdate(function(t){e.context.control.setValue(t)}),this.context.update$.pipe(Object(i.takeUntil)(this.context.destroy$)).subscribe(function(t){t.compareResult.diff.value&&e.updateValue()}),this.updateValue()},e.prototype.updateValue=function(){this.flask.updateCode(this.context.control.value)},e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](r.ChangeDetectorRef),r["\u0275\u0275directiveInject"](s.PLUGIN_CONTEXT))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["app-code"]],viewQuery:function(e,t){var n;1&e&&r["\u0275\u0275staticViewQuery"](C,!0,r.ElementRef),2&e&&r["\u0275\u0275queryRefresh"](n=r["\u0275\u0275loadQuery"]())&&(t.editorRef=n.first)},decls:2,vars:0,consts:[[1,"editor"],["editorRef",""]],template:function(e,t){1&e&&r["\u0275\u0275element"](0,"div",0,1)},styles:["[_nghost-%COMP%]{width:100%}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]{width:100%;height:100%;background:rgba(var(--theme-background-500),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  pre.codeflask__pre.codeflask__flatten{width:auto}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .codeflask.codeflask--has-line-numbers:before{background:rgba(var(--theme-background-400),1);z-index:6}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .codeflask__lines{z-index:10}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  code[class*=language-], [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  pre[class*=language-]{color:rgba(var(--theme-foreground-500),1);background:none;font-family:Consolas,Monaco,Andale Mono,Ubuntu Mono,monospace}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .codeflask{background:rgba(var(--theme-background-500),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  :not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.cdata, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.comment, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.doctype, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.prolog{color:rgba(var(--theme-foreground-500),.4)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.punctuation{color:rgba(var(--theme-foreground-50),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.namespace{opacity:.7}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.constant, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.deleted, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.property, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.symbol, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.tag{color:rgba(var(--theme-warn-500),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.boolean, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.number{color:rgba(var(--theme-primary-500),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.attr-name, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.builtin, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.char, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.inserted, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.selector, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.string{color:rgba(var(--theme-accent-500),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .language-css .token.string, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .style .token.string, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.entity, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.operator, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.url, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.variable{color:rgba(var(--theme-warn-700),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.atrule, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.attr-value, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.class-name, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.function{color:rgba(var(--theme-accent-300),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.keyword{color:rgba(var(--theme-primary-300),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.important, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.regex{color:rgba(var(--theme-warn-300),1)}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.bold, [_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.important{font-weight:700}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.italic{font-style:italic}[_nghost-%COMP%]   .editor[_ngcontent-%COMP%]  .token.entity{cursor:help}"]}),e}(),x=n("3xDq"),_=function(){function e(){}return e.entry=v,e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.CommonModule,x.FormsModule]]}),e}();t.default=_},aP7H:function(e,t){e.exports=n},cfyg:function(e,t){e.exports=a},nLpZ:function(e,t){Prism.languages.typescript=Prism.languages.extend("javascript",{keyword:/\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),Prism.languages.ts=Prism.languages.typescript},vOrQ:function(e,t){e.exports=o},xw6W:function(e,t){Prism.languages.json={comment:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,property:{pattern:/"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,greedy:!0},string:{pattern:/"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,greedy:!0},number:/-?\d+\.?\d*(e[+-]?\d+)?/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:true|false)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}}}})});