(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _util=require("./util"),randomOne=(0,_util.random)(10),randomTwo=(0,_util.random)(20);console.log("".concat(randomOne," ").concat(randomTwo)),console.log("test");

},{"./util":2}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.random=void 0;var random=exports.random=function(r){return Math.floor(Math.random()*r)};

},{}]},{},[1]);

//# sourceMappingURL=main.js.map
