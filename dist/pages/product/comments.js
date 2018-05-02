"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),c=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(c).then(function(e){r("next",e)},function(e){r("throw",e)});e(c)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_previewImage=require("./../../mixins/previewImage.js"),_previewImage2=_interopRequireDefault(_previewImage),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_score=require("./../../components/product/score.js"),_score2=_interopRequireDefault(_score),_comments=require("./../../components/product/comments.js"),_comments2=_interopRequireDefault(_comments),ProductDetail=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),c=0;c<i;c++)o[c]=arguments[c];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},r.$repeat={},r.$props={nulldata:{text:"还没有评价"},loadmore:{"xmlns:wx":""},score:{class:"score-chart","xmlns:v-bind":"","v-bind:score.sync":"totalScore"},comments:{"v-bind:datalist.sync":"commentList"}},r.$events={},r.components={nulldata:_nulldata2.default,loadmore:_loadmore2.default,score:_score2.default,comments:_comments2.default},r.mixins=[_previewImage2.default],r.data={proloaded:!1,isloading:!1,limit:10,totalPage:1,totalCount:0,totalScore:0,currentPage:1,commentList:null},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,r,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.currentPage,t?n=this.currentPage+1:(this.totalPage=1,n=1),r={id:this.activeId,page:this.currentPage,limit:this.limit},e.next=5,_utils2.default.request(_api2.default.product.comments,{data:r}).then(function(e){var r=e.result;try{if(!r.datalist.length)return;a.commentList=t?_.concat(a.productList,r.datalist):r.datalist}catch(e){a.commentList=null}a.totalPage=r.totalPage,a.totalScore=r.totalScore,a.totalCount=r.totalCount,a.currentPage=n}).catch(function(e){});case 5:this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeId=t.id,e.next=3,this.getInitialData();case 3:this.proloaded=!0,this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onReachBottom",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("上拉加载更多"),!(this.currentPage>=this.totalPage)){e.next=3;break}return e.abrupt("return");case 3:return this.isloading=!0,e.next=6,this.getInitialData("loadmore");case 6:this.isloading=!1,this.$apply();case 8:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("下拉刷新数据"),e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ProductDetail,"pages/product/comments"));