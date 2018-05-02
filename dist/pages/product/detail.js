"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(a,i){try{var o=t[a](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),_dec,_class,_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_previewImage=require("./../../mixins/previewImage.js"),_previewImage2=_interopRequireDefault(_previewImage),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_sku=require("./../../components/product/sku.js"),_sku2=_interopRequireDefault(_sku),_score=require("./../../components/product/score.js"),_score2=_interopRequireDefault(_score),_comments=require("./../../components/product/comments.js"),_comments2=_interopRequireDefault(_comments),_htmlParser=require("./../../components/htmlParser.js"),_htmlParser2=_interopRequireDefault(_htmlParser),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),ProductDetail=(_dec=(0,_wepyRedux.connect)({shopCartCount:function(e){return e.shopcart.shopCartCount}}))(_class=function(e){function t(){var e,n,r,a;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},r.$repeat={},r.$props={nulldata:{text:"没有该商品数据"},nocomments:{text:"还没有评价"},loadmore:{"xmlns:wx":""},sku:{"xmlns:v-bind":"","v-bind:skudata.sync":"skudata"},score:{class:"score-chart","xmlns:v-bind":"","v-bind:score.sync":"commentScore"},comments:{"v-bind:datalist.sync":"commentList"},htmlParser:{name:"details","v-bind:content.sync":"content"}},r.$events={},r.components={nulldata:_nulldata2.default,nocomments:_nulldata2.default,loadmore:_loadmore2.default,sku:_sku2.default,score:_score2.default,comments:_comments2.default,htmlParser:_htmlParser2.default},r.mixins=[_previewImage2.default],r.data={winWidth:winWidth,preloaded:!1,isloading:!1,activeId:0,previewIndex:0,product:null,content:null,commentScore:0,commentCount:0,commentList:null,skudata:{pid:null,sid:null,type:1,datalist:null,selected:null,skustock:0,skuimage:null,skuprice:"0.00",skucount:1,skutitle:null,skuAttrText:null}},r.methods={onSwiperChange:function(e){this.previewIndex=e.detail.current},addorbuy:function(){this.$broadcast("showSkuPopup",null)},addcart:function(){this.$broadcast("showSkuPopup","addcart")},buynow:function(){this.$broadcast("showSkuPopup","buynow")}},a=n,_possibleConstructorReturn(r,a)}return _inherits(t,e),_createClass(t,[{key:"getProductDetail",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:this.activeId},e.next=3,_utils2.default.request(_api2.default.product.info,{data:t}).then(function(e){var t=e.result;n.product=t,n.content=t.details;var r=_lodash2.default.assign({},n.skudata,{pid:t.id,uid:_wepy2.default.$instance.globalData.uid,datalist:t.skuList,skutitle:t.title,skuprice:t.price,skustock:t.stockCount,skuimage:t.previewList[0]});n.skudata=_lodash2.default.assign({},r,{defaults:r}),n.$apply(),n.$invoke("htmlParser","htmlParserNotice")}).catch(function(e){});case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"getProductComments",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={id:this.activeId},e.next=3,_utils2.default.request(_api2.default.product.comments,{data:t}).then(function(e){var t=e.result;n.commentCount=t.totalCount,n.commentScore=t.totalScore,n.commentList=t.datalist,n.$apply()}).catch(function(e){});case 3:case"end":return e.stop()}},e,this)}));return e}()},{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getProductDetail();case 2:return e.next=4,this.getProductComments();case 4:this.$apply();case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.activeId=t.id||0,this.isShare="true"==t.isShare,e.next=4,this.getInitialData();case 4:this.preloaded=!0,this.$apply();case 6:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("下拉刷新数据"),e.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShareAppMessage",value:function(e){return{path:"/pages/product/detail?id="+this.product.id+"&isShare=true",title:this.product.title+" - "+_wepy2.default.$instance.globalData.shareInfo.title,imageUrl:this.product.previewList[0].image||_wepy2.default.$instance.globalData.shareInfo.imageUrl,success:function(e){},fail:function(e){}}}}]),t}(_wepy2.default.page))||_class;Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(ProductDetail,"pages/product/detail"));