"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(i,a){try{var s=t[i](a),o=s.value}catch(e){return void r(e)}if(!s.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_lodash=require("./../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../utils/api.js"),_api2=_interopRequireDefault(_api),_common=require("./../mixins/common.js"),_common2=_interopRequireDefault(_common),_nulldata=require("./../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_searchbar=require("./../components/searchbar.js"),_searchbar2=_interopRequireDefault(_searchbar),_item=require("./../components/product/item.js"),_item2=_interopRequireDefault(_item),_grid=require("./../components/product/grid.js"),_grid2=_interopRequireDefault(_grid),_filter=require("./../components/product/filter.js"),_filter2=_interopRequireDefault(_filter),ProductList=function(e){function t(){var e,r,n,i;_classCallCheck(this,t);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return r=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},n.$repeat={},n.$props={nulldata:{},loadmore:{"xmlns:wx":""},searchbar:{"xmlns:v-bind":"","v-bind:keyword.sync":"keyword","xmlns:v-on":""},items:{"v-bind:datalist.sync":"productList"},grids:{"v-bind:datalist.sync":"productList"},filter:{"v-bind:datalist.sync":"filterList","v-bind:checked.once":"filterValue"}},n.$events={searchbar:{"v-on:on-search":"onSearch"},filter:{"v-on:on-submit":"submitFilter"}},n.components={nulldata:_nulldata2.default,loadmore:_loadmore2.default,searchbar:_searchbar2.default,items:_item2.default,grids:_grid2.default,filter:_filter2.default},n.mixins=[_common2.default],n.data={preloaded:!1,isloading:!1,isGridList:!0,productList:null,filterList:null,filterValue:null,keyword:"",sortValue:"",yearValue:"",typeValue:"",limit:10,totalPage:1,currentPage:1},n.methods={tapGridList:function(e){this.isGridList=!this.isGridList},showFilter:function(e){this.$broadcast("showFilter")},tapSort:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next="price"===e.t0?3:"popular"===e.t0?5:7;break;case 3:return this.sortValue="isPriceUp"==this.sortValue?"isPriceDown":"isPriceUp",e.abrupt("break",8);case 5:return this.sortValue="isPopular",e.abrupt("break",8);case 7:this.sortValue=null;case 8:return this.productList=null,this.isloading=!0,e.next=12,this.getInitialData();case 12:this.isloading=!1,this.$apply();case 14:case"end":return e.stop()}},e,this)}));return e}(),submitFilter:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.filterValue=_lodash2.default.cloneDeep(t);try{this.yearValue=t.find(function(e){return"year"==e.key}).val[0]}catch(e){this.yearValue=null}try{this.typeValue=t.find(function(e){return"type"==e.key}).val[0]}catch(e){this.typeValue=null}return this.productList=null,this.isloading=!0,e.next=7,this.getInitialData();case 7:this.isloading=!1,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}(),onSearch:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.keyword=t,this.sortValue=null,this.filterValue=null,this.yearValue=null,this.typeValue=null,this.productList=null,this.totalPage=1,this.currentPage=1,this.isloading=!0,e.next=11,this.getInitialData();case 11:this.isloading=!1,this.$apply();case 13:case"end":return e.stop()}},e,this)}));return e}()},i=r,_possibleConstructorReturn(n,i)}return _inherits(t,e),_createClass(t,[{key:"getProductFilter",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.filterList=[{key:"type",name:"生熟",child:[{key:1,name:"生茶"},{key:2,name:"熟茶"}]}],e.next=3,_utils2.default.request(_api2.default.product.year).then(function(e){var r=e.result,n=[];n=r.map(function(e,t){return e.key=e.year,e.name=e.year,e}),n.length&&(t.yearList=n,t.filterList.push({key:"year",name:"年分",child:n}))});case 3:this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var r,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t?this.currentPage=this.currentPage+1:(this.totalPage=1,this.currentPage=1),r={keyword:this.keyword||"",sort:this.sortValue||"",year:this.yearValue||"",type:this.typeValue||"",page:this.currentPage,limit:this.limit},t){e.next=5;break}return e.next=5,this.getProductFilter();case 5:return e.next=7,_utils2.default.request(_api2.default.product.search,{data:r}).then(function(e){var r=e.result;try{if(!r.datalist.length)return;n.productList=t?_lodash2.default.concat(n.productList,r.datalist):_lodash2.default.cloneDeep(r.datalist)}catch(e){n.productList=null}n.totalPage=r.totalPage,n.currentPage=currentPage}).catch(function(e){});case 7:this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.keyword=t.keyword,e.next=3,this.getInitialData();case 3:this.preloaded=!0,this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onReachBottom",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.currentPage>=this.totalPage)){e.next=3;break}return e.abrupt("return");case 3:return this.isloading=!0,e.next=6,this.getInitialData("loadmore");case 6:this.isloading=!1,this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(ProductList,"pages/search"));