"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,o){try{var s=t[i](o),u=s.value}catch(e){return void n(e)}if(!s.done)return Promise.resolve(u).then(function(e){r("next",e)},function(e){r("throw",e)});e(u)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_dec,_class,_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_input=require("./../../mixins/input.js"),_input2=_interopRequireDefault(_input),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_products=require("./../../components/order/products.js"),_products2=_interopRequireDefault(_products),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),store=(0,_wepyRedux.getStore)(),OrderDetail=(_dec=(0,_wepyRedux.connect)({shopBuyConsignee:function(e){return e.shopcart.shopBuyConsignee},shopBuyList:function(e){return e.shopcart.shopBuyList},shopBuyType:function(e){return e.shopcart.shopBuyType},totalAmount:function(e){return e.shopcart.totalAmount}}))(_class=function(e){function t(){var e,n,r,i;_classCallCheck(this,t);for(var o=arguments.length,s=Array(o),u=0;u<o;u++)s[u]=arguments[u];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"}},r.$repeat={},r.$props={loadmore:{"xmlns:wx":""},products:{"xmlns:v-bind":"","v-bind:datalist.sync":"shopBuyList"}},r.$events={},r.components={loadmore:_loadmore2.default,products:_products2.default},r.mixins=[_input2.default],r.data={preloaded:!1,message:"",freightAmount:"0.00",freightTemplate:null},r.methods={tapConsignee:function(){this.shopBuyConsignee?_wepy2.default.navigateTo({url:"/pages/consignee/list?sid="+this.shopBuyConsignee.id+"&isOpt=true"}):_wepy2.default.navigateTo({url:"/pages/consignee/edit?isOpt=true"})},formSubmit:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.shopBuyConsignee){e.next=5;break}return _utils2.default.showToast("请填写收货地址"),e.abrupt("return");case 5:return n={formId:t.detail.formId,otype:this.shopBuyType,products:null,frees:null,consignee:this.shopBuyConsignee,freight:this.freightAmount,message:this.message},1==this.shopBuyType&&(n.products=this.shopBuyList.map(function(e){return{id:e.id,sid:e.sid,type:e.type,count:e.count,custom:e.custom||null}})),2==this.shopBuyType&&(n.frees=this.shopBuyList.map(function(e){return{id:e.id}})),_wepy2.default.showLoading(),e.next=11,_utils2.default.request(_api2.default.order.create,{data:n,method:"POST"}).then(function(){var e=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var i=t.result;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.delShopBuyStorage();case 2:if(!n.products){e.next=5;break}return e.next=5,store.dispatch(r.delShopCartList(n.products));case 5:_wepy2.default.redirectTo({url:"/pages/order/detail?id="+i});case 6:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}()).catch(function(e){_wepy2.default.showModal({title:"温馨提示",content:e.message,showCancel:!1})});case 11:_wepy2.default.hideLoading();case 12:case"end":return e.stop()}},e,this)}));return e}()},r.computed={actualAmount:function(){var e=NaN!=Number(this.freightAmount)?Number(this.freightAmount):0;return((NaN!=Number(this.totalAmount)?Number(this.totalAmount):0)+e).toFixed(2)}},i=n,_possibleConstructorReturn(r,i)}return _inherits(t,e),_createClass(t,[{key:"delShopBuyStorage",value:function(){store.dispatch((0,_actions.delShopBuyList)()),store.dispatch((0,_actions.delShopBuyConsignee)())}},{key:"getFreightTemplate",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,_utils2.default.request(_api2.default.freightTemplate.default).then(function(e){var n=e.result;t=n}).catch(function(e){});case 3:return this.freightTemplate=t,this.$apply(),e.abrupt("return",Promise.resolve());case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"clacFreightAmount",value:function(){var e=this.freightTemplate,t=e.price,n=e.plusPrice,r=e.expressStart,i=e.expressPlus,o=e.expressArea,s=e.exemption;if(!(s.status&&this.actualAmount>=s.limit)){var u=0,a=0,c=null;if(this.shopBuyList.forEach(function(e){e.isFreeShipping||(u+=e.count)}),u)try{var p=this.shopBuyConsignee.area.split(" ")[0],l=this.shopBuyConsignee.area.split(" ")[1];o.forEach(function(e){e.area.forEach(function(t){t.province!=p&&t.province!=p+"市"||t.city.some(function(e){return e==l})&&(c=e)})}),a=c?Math.ceil((u-Number(c.expressStart))/Number(c.expressPlus))*Number(c.plusPrice)+Number(c.price):Math.ceil((u-Number(r))/Number(i))*Number(n)+Number(t)}catch(e){}this.freightAmount=a.toFixed(2),this.$apply()}}},{key:"onUnload",value:function(){this.delShopBuyStorage()}},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,store.dispatch((0,_actions.getShopBuyList)());case 2:return e.next=4,store.dispatch((0,_actions.getShopBuyConsignee)());case 4:return e.next=6,this.getFreightTemplate();case 6:return e.next=8,this.clacFreightAmount();case 8:this.preloaded=!0,this.$apply();case 10:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(OrderDetail,"pages/order/confirm"));