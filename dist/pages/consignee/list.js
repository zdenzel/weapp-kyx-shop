"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(r,i){try{var o=t[r](i),s=o.value}catch(e){return void n(e)}if(!o.done)return Promise.resolve(s).then(function(e){a("next",e)},function(e){a("throw",e)});e(s)}return a("next")})}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../config/api.js"),_api2=_interopRequireDefault(_api),_nulldata=require("./../../components/nulldata.js"),_nulldata2=_interopRequireDefault(_nulldata),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),AddressList=function(e){function t(){var e,n,a,r;_classCallCheck(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=a=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),a.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},a.$repeat={},a.$props={nulldata:{},loadmore:{"xmlns:wx":""}},a.$events={},a.components={nulldata:_nulldata2.default,loadmore:_loadmore2.default},a.data={preloaded:!1,isloading:!1,isOpt:null,selectId:0,defaultId:0,limit:10,totalPage:1,currentPage:1,consigneeList:null},a.methods={tapDefault:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("tapDefault"),t){e.next=3;break}return e.abrupt("return");case 3:if(this.defaultId!=t){e.next=5;break}return e.abrupt("return");case 5:return n={id:t},_wepy2.default.showLoading(),e.next=9,_utils2.default.request(_api2.default.consignee.default,{data:n,method:"post"}).then(function(e){e.result;_wepy2.default.hideLoading();try{a.consigneeList.map(function(e){return e.isDefault=!1,e.id==t&&(e.isDefault=!0,a.defaultId=e.id),e})}catch(e){}}).catch(function(e){_wepy2.default.hideLoading(),_utils2.default.showToast(e.message)});case 9:this.$apply();case 10:case"end":return e.stop()}},e,this)}));return e}(),tapDelete:function(e){var t=this;console.log("tapDelete");var n={id:e};_wepy2.default.showModal({content:"确定要删除吗？"}).then(function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(r){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(!r.confirm){a.next=5;break}return _wepy2.default.showLoading(),a.next=4,_utils2.default.request(_api2.default.consignee.delete,{data:n}).then(function(n){n.result;_wepy2.default.hideLoading();try{var a=t.consigneeList.findIndex(function(t){return t.id==e});t.consigneeList.splice(a,1)}catch(e){}}).catch(function(e){_wepy2.default.hideLoading(),_utils2.default.showToast(e.message)});case 4:t.$apply();case 5:case"end":return a.stop()}},a,t)}));return function(e){return a.apply(this,arguments)}}())},tapSelect:function(e){console.log("tapSelect"),this.isOpt&&(_wepy2.default.setStorageSync("__SELECTED_CONSIGNEE__",e),_wepy2.default.navigateBack())},tapEdit:function(e){console.log("tapEdit"),_wepy2.default.navigateTo({url:"/pages/consignee/edit?id="+e})}},r=n,_possibleConstructorReturn(a,r)}return _inherits(t,e),_createClass(t,[{key:"getInitialData",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){var n,a,r=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.currentPage,t?n=this.currentPage+1:(this.consigneeList=null,this.totalPage=1,n=1),a={page:n,limit:this.limit},console.log("getInitialData",a),this.isloading=!0,e.next=7,_utils2.default.request(_api2.default.consignee.list,{data:a}).then(function(e){var a=e.result;console.log("成功了",a),r.consigneeList=t?_lodash2.default.concat(r.consigneeList,a.datalist):_lodash2.default.cloneDeep(a.datalist),r.totalPage=a.totalPage,r.currentPage=n}).catch(function(e){});case 7:this.isloading=!1,this.$apply();case 9:case"end":return e.stop()}},e,this)}));return e}()},{key:"onLoad",value:function(){function e(e){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.isOpt=t.isOpt,this.selectId=t.sid;case 2:case"end":return e.stop()}},e,this)}));return e}()},{key:"onShow",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getInitialData();case 2:this.preloaded=!0,this.$apply();case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"onReachBottom",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("上拉加载更多"),!(this.currentPage>=this.totalPage)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.getInitialData("loadmore");case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"onPullDownRefresh",value:function(){function e(){return t.apply(this,arguments)}var t=_asyncToGenerator(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("下拉刷新数据"),_wepy2.default.stopPullDownRefresh(),e.next=4,this.getInitialData();case 4:case"end":return e.stop()}},e,this)}));return e}()}]),t}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(AddressList,"pages/consignee/list"));