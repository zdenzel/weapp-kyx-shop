"use strict";function noop(){}function bind(e,t){return function(){e.apply(t,arguments)}}function Promise(e){if(!(this instanceof Promise))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],doResolve(e,this)}function handle(e,t){for(;3===e._state;)e=e._value;if(0===e._state)return void e._deferreds.push(t);e._handled=!0,Promise._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null===n)return void(1===e._state?resolve:reject)(t.promise,e._value);var o;try{o=n(e._value)}catch(e){return void reject(t.promise,e)}resolve(t.promise,o)})}function resolve(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof Promise)return e._state=3,e._value=t,void finale(e);if("function"==typeof n)return void doResolve(bind(n,t),e)}e._state=1,e._value=t,finale(e)}catch(t){reject(e,t)}}function reject(e,t){e._state=2,e._value=t,finale(e)}function finale(e){2===e._state&&0===e._deferreds.length&&Promise._immediateFn(function(){e._handled||Promise._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)handle(e,e._deferreds[t]);e._deferreds=null}function Handler(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function doResolve(e,t){var n=!1;try{e(function(e){n||(n=!0,resolve(t,e))},function(e){n||(n=!0,reject(t,e))})}catch(e){if(n)return;n=!0,reject(t,e)}}var setTimeoutFunc=setTimeout;Promise.prototype.catch=function(e){return this.then(null,e)},Promise.prototype.then=function(e,t){var n=new this.constructor(noop);return handle(this,new Handler(e,t,n)),n},Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})},Promise.all=function(e){return new Promise(function(t,n){function o(e,u){try{if(u&&("object"==typeof u||"function"==typeof u)){var c=u.then;if("function"==typeof c)return void c.call(u,function(t){o(e,t)},n)}r[e]=u,0==--i&&t(r)}catch(e){n(e)}}if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);for(var i=r.length,u=0;u<r.length;u++)o(u,r[u])})},Promise.resolve=function(e){return e&&"object"==typeof e&&e.constructor===Promise?e:new Promise(function(t){t(e)})},Promise.reject=function(e){return new Promise(function(t,n){n(e)})},Promise.race=function(e){return new Promise(function(t,n){for(var o=0,r=e.length;o<r;o++)e[o].then(t,n)})},Promise._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){setTimeoutFunc(e,0)},Promise._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console},module.exports=Promise;