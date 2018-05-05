"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,i){try{var a=t[o](i),u=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_dec,_class,_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_minui=require("./../mixins/minui.js"),_minui2=_interopRequireDefault(_minui),_utils=require("./../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../utils/api.js"),_api2=_interopRequireDefault(_api),_nulldata=require("./nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_wepyRedux=require("./../npm/wepy-redux/lib/index.js"),_actions=require("./../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),PageShopCart=(_dec=(0,_wepyRedux.connect)({shopCartList:function(e){return e.shopcart.shopCartList},isSelectedAll:function(e){return e.shopcart.isSelectedAll},totalAmount:function(e){return e.shopcart.totalAmount}}))(_class=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var i=arguments.length,a=Array(i),u=0;u<i;u++)a[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.$repeat={},r.$props={nulldata:{"xmlns:wx":""}},r.$events={},r.components={nulldata:_nulldata2.default,loadmore:_loadmore2.default},r.mixins=[_minui2.default],r.data={uid:null},r.computed={optimize:function(){var e=Math.ceil(180*winRatio);return e+"x"+e}},r.methods={onCheckAll:function(){var e={uid:this.uid};store.dispatch((0,_actions.checkShopCartAll)(e))},onCheckOne:function(e){store.dispatch((0,_actions.checkShopCartOne)(e))},onChangeCounter:function(e){var t=e.currentTarget.dataset.value,n=e.detail.number,r=Object.assign({},t,{count:n});store.dispatch((0,_actions.setShopCart)(r))},onDelCart:function(e){var t=this;wx.showModal({title:"温馨提示",content:"请确认要删除该商品吗？",success:function(n){n.confirm&&(store.dispatch((0,_actions.delShopCart)(e)),t.$apply())}})},formSubmit:function(e){console.log("去结算");e.detail.formId;if(!this.shopCartList.some(function(e){return 1==e.isSelected}))return void _utils2.default.showToast("未选中商品");store.dispatch((0,_actions.setShopBuyList)()).then(function(e){_wepy2.default.navigateTo({url:"/pages/order/confirm"})})}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),_createClass(t,[{key:"onReady",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,store.dispatch((0,_actions.getShopCart)());case 2:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;exports.default=PageShopCart;