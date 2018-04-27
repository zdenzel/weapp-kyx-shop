"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var s=t[i](a),u=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_dec,_class,_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_common=require("./../../mixins/common.js"),_common2=_interopRequireDefault(_common),_tabbar=require("./../../components/tabbar.js"),_tabbar2=_interopRequireDefault(_tabbar),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_item=require("./../../components/product/item.js"),_item2=_interopRequireDefault(_item),_grid=require("./../../components/product/grid.js"),_grid2=_interopRequireDefault(_grid),_filter=require("./../../components/product/filter.js"),_filter2=_interopRequireDefault(_filter),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),ProductList=(_dec=(0,_wepyRedux.connect)({catalogList:function(e){return e.catalog.catalogList}}))(_class=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var a=arguments.length,s=Array(a),u=0;u<a;u++)s[u]=arguments[u];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},n.$repeat={},n.$props={tabbar:{class:"catalog","xmlns:v-bind":"","v-bind:datalist.sync":"catalogList","v-bind:defaultKey.sync":"activeId","xmlns:v-on":""},nulldata:{},loadmore:{"xmlns:wx":""},items:{"v-bind:datalist.sync":"productList"},grids:{"v-bind:datalist.sync":"productList"},filter:{"v-bind:datalist.sync":"filterList","v-bind:checked.sync":"filterValue"}},n.$events={tabbar:{"v-on:on-change":"onTabChange"},filter:{"v-on:on-submit":"submitFilter"}},n.components={tabbar:_tabbar2.default,nulldata:_nulldata2.default,loadmore:_loadmore2.default,items:_item2.default,grids:_grid2.default,filter:_filter2.default},n.mixins=[_common2.default],n.data={preloaded:!1,isloading:!1,isGridList:!0,activeId:1,offsetLeft:0,productList:null,yearList:[],filterList:null,sortValue:null,yearValue:null,typeValue:null,filterValue:null,limit:10,totalPage:1,currentPage:1},n.methods={onTabChange:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r=t.key;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.activeId!=r){e.next=2;break}return e.abrupt("return");case 2:return this.activeId=r,this.sortValue=null,this.filterValue=null,this.yearValue=null,this.typeValue=null,this.productList=null,this.totalPage=1,this.currentPage=1,this.isloading=!0,e.next=13,this.getInitialData();case 13:this.isloading=!1,this.$apply();case 15:case"end":return e.stop()}},e,this)}));return e}(),tapGridList:function(e){this.isGridList=!this.isGridList},showFilter:function(e){this.$broadcast("showFilter")},tapSort:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("popular"!=t||"isPopular"!=this.sortValue){e.next=2;break}return e.abrupt("return");case 2:e.t0=t,e.next="price"===e.t0?5:"popular"===e.t0?7:9;break;case 5:return this.sortValue="isPriceUp"==this.sortValue?"isPriceDown":"isPriceUp",e.abrupt("break",10);case 7:return this.sortValue="isPopular",e.abrupt("break",10);case 9:this.sortValue=null;case 10:return this.productList=null,this.isloading=!0,e.next=14,this.getInitialData();case 14:this.isloading=!1,this.$apply();case 16:case"end":return e.stop()}},e,this)}));return e}(),submitFilter:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.filterValue=_lodash2.default.cloneDeep(t);try{this.yearValue=t.find(function(e){return"year"==e.key}).val[0]}catch(e){this.yearValue=null}try{this.typeValue=t.find(function(e){return"type"==e.key}).val[0]}catch(e){this.typeValue=null}return this.productList=null,this.isloading=!0,e.next=7,this.getInitialData();case 7:this.isloading=!1,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"calcOffsetLeft",value:function(e){return e>winWidth/2?e-winWidth/2+20:0}},{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=this.currentPage,t?r=this.currentPage+1:(this.totalPage=1,r=1),n={cid:this.activeId||"",sort:this.sortValue||"",year:this.yearValue||"",type:this.typeValue||"",page:r,limit:this.limit},t){e.next=6;break}return e.next=6,this.getProductFilter();case 6:return e.next=8,_utils2.default.request(_api2.default.product.list,{data:n}).then(function(e){var n=e.result;try{if(!n.datalist.length)return;i.productList=t?_lodash2.default.concat(i.productList,n.datalist):_lodash2.default.cloneDeep(n.datalist)}catch(e){}i.totalPage=n.totalPage,i.currentPage=r,i.$apply()}).catch(function(e){});case 8:this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"getProductFilter",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={cid:this.activeId},this.filterList=[{key:"type",name:"生熟",child:[{key:1,name:"生茶"},{key:2,name:"熟茶"}]}],e.next=4,_utils2.default.request(_api2.default.product.year,{data:t}).then(function(e){var t=e.result,n=[];n=t.map(function(e,t){return e.key=e.year,e.name=e.year,e}),n.length&&(r.yearList=n,r.filterList.push({key:"year",name:"年分",child:n}))});case 4:this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeId=t.id,e.next=3,store.dispatch((0,_actions.getCatalogList)());case 3:return e.next=5,this.getInitialData();case 5:this.preloaded=!0,this.$apply();case 7:case"end":return e.stop()}},e,this)}));return e}()},{key:"onReachBottom",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.currentPage>=this.totalPage)){e.next=3;break}return e.abrupt("return");case 3:return this.isloading=!0,e.next=6,this.getInitialData("loadmore");case 6:this.isloading=!1,this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ProductList,"pages/product/list"));