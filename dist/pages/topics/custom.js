"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,i){function n(r,s){try{var a=e[r](s),o=a.value}catch(t){return void i(t)}if(!a.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}return n("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_input=require("./../../mixins/input.js"),_input2=_interopRequireDefault(_input),_minui=require("./../../mixins/minui.js"),_minui2=_interopRequireDefault(_minui),_common=require("./../../mixins/common.js"),_common2=_interopRequireDefault(_common),_loadmore=require("./../../components/loadmore.js"),_loadmore2=_interopRequireDefault(_loadmore),_selector=require("./../../components/custom/selector.js"),_selector2=_interopRequireDefault(_selector),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),CustomTopics=function(t){function e(){var t,i,n,r;_classCallCheck(this,e);for(var s=arguments.length,a=Array(s),o=0;o<s;o++)a[o]=arguments[o];return i=n=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(a))),n.config={usingComponents:{"wxc-cc":"/packages/@minui/wxc-cc/dist/index","wxc-flex":"/packages/@minui/wxc-flex/dist/index","wxc-avatar":"/packages/@minui/wxc-avatar/dist/index","wxc-elip":"/packages/@minui/wxc-elip/dist/index","wxc-icon":"/packages/@minui/wxc-icon/dist/index","wxc-label":"/packages/@minui/wxc-label/dist/index","wxc-loadmore":"/packages/@minui/wxc-loadmore/dist/index","wxc-abnor":"/packages/@minui/wxc-abnor/dist/index","wxc-countdown":"/packages/@minui/wxc-countdown/dist/index","wxc-counter":"/packages/@minui/wxc-counter/dist/index","wxc-loading":"/packages/@minui/wxc-loading/dist/index","wxc-mask":"/packages/@minui/wxc-mask/dist/index","wxc-dialog":"/packages/@minui/wxc-dialog/dist/index","wxc-popup":"/packages/@minui/wxc-popup/dist/index","wxc-toast":"/packages/@minui/wxc-toast/dist/index"},enablePullDownRefresh:!0},n.$repeat={},n.$props={loadmore:{"xmlns:wx":""},ctselector:{"xmlns:v-bind":"","v-bind:datalist.sync":"currentList","v-bind:checked.sync":"currentData","xmlns:v-on":""}},n.$events={ctselector:{"v-on:on-submit":"onSelectorSubmit"}},n.components={loadmore:_loadmore2.default,ctselector:_selector2.default},n.mixins=[_input2.default,_minui2.default,_common2.default],n.data={preloaded:!1,isloading:!1,materialList:null,shapeList:null,packageList:null,capacityList:null,specList:null,nefiList:null,coverList:null,currentList:null,currentData:null,customInfo:{count:1,material:null,shape:null,package:null,capacity:null,spec:null,nefi:null,cover:null,nefitext:null,covertext:null}},n.computed={unitPrice:function(){try{return this.customInfo.material.price||"0.00"}catch(t){return"0.00"}},totalPrice:function(){try{return(this.unitPrice*this.customInfo.count).toFixed(2)||"0.00"}catch(t){return"0.00"}},optimize:function(){var t=Math.ceil((devWidth-60)/2*winRatio);return t+"x"+t}},n.methods={tap:function(){},onSelectMaterial:function(t){this.materialList=this.materialList.map(function(e){return e.checked=!(e.id!=t.id),e}),this.customInfo.material=this.materialList.find(function(t){return t.checked})},onPickerChange:function(t){var e=t.currentTarget.dataset.name,i=[];switch(e){case"capacity":i=this.capacityList;break;case"spec":i=this.specList}this.customInfo[e]=i[t.detail.value]},onSelectorShow:function(t){switch(this.currentName=t,this.currentData=null,t){case"shape":this.currentList=this.shapeList;break;case"package":this.currentList=this.packageList;break;case"nefi":this.currentList=this.nefiList;break;case"cover":this.currentList=this.coverList}this.currentData=this.customInfo[t],this.$broadcast("showCustomSelector")},onSelectorSubmit:function(t){this.customInfo[this.currentName]=_lodash2.default.cloneDeep(t)},onCounterChange:function(t){var e=t.detail.number;this.customInfo.count=e},onReset:function(){this.materialList=this.materialList.map(function(t){return t.checked=!1,t}),this.shapeList=this.shapeList.map(function(t){return t.checked=!1,t}),this.packageList=this.packageList.map(function(t){return t.checked=!1,t}),this.capacityList=this.capacityList.map(function(t){return t.checked=!1,t}),this.specList=this.specList.map(function(t){return t.checked=!1,t}),this.currentList=null,this.currentData=null,this.customInfo={count:1,material:null,shape:null,package:null,capacity:null,spec:null,nefi:null,cover:null,nefitext:null,covertext:null}},onSubmit:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,i,n,r,s,a,o,c,u,l,p;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(this.customInfo.material){t.next=3;break}return _utils2.default.showToast("请选择茶叶毛料"),t.abrupt("return");case 3:if(this.customInfo.shape){t.next=6;break}return _utils2.default.showToast("请选择压制造型"),t.abrupt("return");case 6:if(this.customInfo.package){t.next=9;break}return _utils2.default.showToast("请选择包装盒"),t.abrupt("return");case 9:if(this.customInfo.capacity){t.next=12;break}return _utils2.default.showToast("请选择容量"),t.abrupt("return");case 12:if(this.customInfo.spec){t.next=15;break}return _utils2.default.showToast("请选择规格"),t.abrupt("return");case 15:if(this.customInfo.nefi){t.next=18;break}return _utils2.default.showToast("请选择内菲"),t.abrupt("return");case 18:if(this.customInfo.nefitext){t.next=21;break}return _utils2.default.showToast("请填写内菲留言"),t.abrupt("return");case 21:if(this.customInfo.cover){t.next=24;break}return _utils2.default.showToast("请选择封面"),t.abrupt("return");case 24:if(this.customInfo.covertext){t.next=27;break}return _utils2.default.showToast("请填写封面留言"),t.abrupt("return");case 27:return e={materialid:this.customInfo.material.id,shapeid:this.customInfo.shape.id,packageid:this.customInfo.package.id,capacityid:this.customInfo.capacity.id,specid:this.customInfo.spec.id,nefiid:this.customInfo.nefi.id,nefitext:this.customInfo.nefitext,coverid:this.customInfo.cover.id,covertext:this.customInfo.covertext,count:this.customInfo.count},i=e.materialid,n=e.shapeid,r=e.packageid,s=e.capacityid,a=e.specid,o=e.nefiid,c=e.coverid,u=_wepy2.default.$instance.globalData.uid,l=""+i+n+r+s+a+o+c+"-"+u,p={id:i,sid:l,uid:u,type:2,cover:this.customInfo.material.cover,title:this.customInfo.material.title,price:this.customInfo.material.price,count:this.customInfo.count,stock:99999,skuAttrText:"压制:"+this.customInfo.shape.title+", 包装:"+this.customInfo.package.title+", 容量:"+this.customInfo.capacity.title+", 规格:"+this.customInfo.spec.title+", 菲页:"+this.customInfo.nefi.title+", 菲页文字:"+this.customInfo.nefitext+", 封面:"+this.customInfo.cover.title+", 封面文字:"+this.customInfo.covertext,custom:e},t.next=34,store.dispatch((0,_actions.addShopCartList)(p)).then(function(t){_wepy2.default.navigateTo({url:"/pages/product/shopcart"})});case 34:case"end":return t.stop()}},t,this)}));return t}()},n.events={showPopupSelect:function(){var t=this.$wxpage.selectComponent(".J_Popup_Select");t&&t.show()},hidePopupSelect:function(){var t=this.$wxpage.selectComponent(".J_Popup_Select");t&&t.hide()}},r=i,_possibleConstructorReturn(n,r)}return _inherits(e,t),_createClass(e,[{key:"getInitialData",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_utils2.default.request(_api2.default.topics.custom).then(function(t){var i=t.result;e.materialList=i.materialList,e.shapeList=i.shapeList,e.packageList=i.packageList,e.capacityList=i.capacityList,e.specList=i.specList,e.nefiList=i.nefiList,e.coverList=i.coverList}).catch(function(t){});case 2:this.$apply();case 3:case"end":return t.stop()}},t,this)}));return t}()},{key:"onLoad",value:function(){function t(t){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getInitialData();case 2:this.preloaded=!0,this.$apply();case 4:case"end":return t.stop()}},t,this)}));return t}()},{key:"onPullDownRefresh",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,this.getInitialData();case 3:_wepy2.default.stopPullDownRefresh();case 4:case"end":return t.stop()}},t,this)}));return t}()}]),e}(_wepy2.default.page);Page(require("./../../npm/wepy/lib/wepy.js").default.$createPage(CustomTopics,"pages/topics/custom"));