"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../utils/index.js"),_utils2=_interopRequireDefault(_utils),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,ListClassify=function(e){function t(){var e,r,n,o;_classCallCheck(this,t);for(var i=arguments.length,u=Array(i),s=0;s<i;s++)u[s]=arguments[s];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),n.props={skin:{type:String,default:""},style:{type:String,default:""},route:{type:String,default:""},rediect:{type:Boolean,default:!1},width:{type:[String,Number],default:750},height:{type:[String,Number],default:64},margin:{type:[String,Number],default:0},padding:{type:[String,Number],default:20},keyword:{type:String,default:""}},n.data={inputFocused:!1,inputKeyword:""},n.events={},n.watch={},n.methods={inputTyping:function(e){this.keyword=e.detail.value&&e.detail.value.replace(/[\r\n\s*]/g,"")||""},formSubmit:function(){if(console.log("formSubmit"),!this.keyword)return void _utils2.default.showToast("请输入关键字");this.$emit("on-search",this.keyword)},formReset:function(){console.log("formReset"),this.keyword=""}},o=r,_possibleConstructorReturn(n,o)}return _inherits(t,e),_createClass(t,[{key:"onLoad",value:function(){}}]),t}(_wepy2.default.component);exports.default=ListClassify;