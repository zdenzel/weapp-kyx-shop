"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),__TOAST_OPTION__={show:!1,text:"提示信息",icon:"warning",color:"#fff",image:null,duration:1500,callback:null},MinuiMixin=function(t){function e(){var t,o,n,r;_classCallCheck(this,e);for(var i=arguments.length,a=Array(i),s=0;s<i;s++)a[s]=arguments[s];return o=n=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),n.data={$toast:__TOAST_OPTION__},r=o,_possibleConstructorReturn(n,r)}return _inherits(e,t),_createClass(e,[{key:"$showToast",value:function(t){var e=this,o=Object.assign({},__TOAST_OPTION__,t),n=o.text,r=o.icon,i=o.color,a=o.image,s=o.duration;o.callback;this.$toast.text=n,this.$toast.icon=r,this.$toast.color=i,this.$toast.image=a,this.$toast.duration=s,this.$toast.show=!0,setTimeout(function(){e.$hideToast()},s)}},{key:"$hideToast",value:function(t){this.$toast.show=!1,t&&t(),this.$apply()}}]),e}(_wepy2.default.mixin);exports.default=MinuiMixin;