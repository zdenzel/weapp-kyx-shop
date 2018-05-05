"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(i,a){try{var o=t[i](a),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_common=require("./../../mixins/common.js"),_common2=_interopRequireDefault(_common),_minui=require("./../../mixins/minui.js"),_minui2=_interopRequireDefault(_minui),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),store=(0,_wepyRedux.getStore)(),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,FreeTopics=function(e){function t(){var e,n,r,i;_classCallCheck(this,t);for(var a=arguments.length,o=Array(a),s=0;s<a;s++)o[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},r.$repeat={},r.$props={loadmore:{"xmlns:wx":""}},r.$events={},r.components={loadmore:_loadmore2.default},r.mixins=[_common2.default,_minui2.default],r.data={preloaded:!1,isloading:!1,limit:10,totalPage:1,currentPage:1,amount:0,productList:null,selected:[],selectedLimit:3},r.computed={optimize:function(){var e=Math.ceil((devWidth-60)/2*winRatio);return e+"x"+e}},r.methods={onSelect:function(e){var t=_lodash2.default.cloneDeep(this.selected)||[],n=_lodash2.default.cloneDeep(this.productList)||[];if(t.length>=this.selectedLimit&&!t.find(function(t){return t==e}))return void _utils2.default.showToast("只能选择"+this.selectedLimit+"个");var r=t.findIndex(function(t){return t==e});r>-1?t.splice(r,1):t.push(e),this.productList=n.map(function(e){return e.isSelected=!!t.some(function(t){return t==e.id}),e}),this.selected=_lodash2.default.cloneDeep(t)},onSubmit:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.amount){e.next=3;break}return _wepy2.default.showModal({title:"温馨提示",content:"今天的试喝名额已经领完了",showCancel:!1}),e.abrupt("return");case 3:if(this.selected&&this.selected.length){e.next=6;break}return _utils2.default.showToast("请选择商品"),e.abrupt("return");case 6:return t=[],this.productList.forEach(function(e){if(n.selected.some(function(t){return t==e.id})){var r=_lodash2.default.assign({},e,{sid:0,uid:_wepy2.default.$instance.globalData.uid,type:3,count:1,stock:1,price:"0.00",skuAttrText:"免费试喝"});t.push(r)}}),e.next=10,store.dispatch((0,_actions.setShopBuyList)(t)).then(function(e){_wepy2.default.navigateTo({url:"/pages/order/confirm"})});case 10:case"end":return e.stop()}},e,this)}));return e}()},r.events={},i=n,_possibleConstructorReturn(r,i)}return _inherits(t,e),_createClass(t,[{key:"getTopicsFree",value:function(){function e(e,n){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t,n){var r,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object.assign({page:1,limit:10},t),e.next=3,_utils2.default.request(_api2.default.topics.free,{data:r}).then(function(e){var t=e.result;try{if(!t.datalist.length)return;i.productList=n?_lodash2.default.concat(i.productList,t.datalist):_lodash2.default.cloneDeep(t.datalist)}catch(e){}i.amount=t.amount,i.totalPage=t.totalPage,i.$apply()}).catch(function(e){});case 3:this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t?this.currentPage=this.currentPage+1:(this.totalPage=1,this.currentPage=1),n={page:this.currentPage,limit:this.limit},e.next=4,this.getTopicsFree(n,t);case 4:this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInitialData();case 2:this.preloaded=!0,this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onReachBottom",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.currentPage>=this.totalPage)){e.next=3;break}return e.abrupt("return");case 3:return this.isloading=!0,e.next=6,this.getInitialData("loadmore");case 6:this.isloading=!1,this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(FreeTopics,"pages/topics/free"));