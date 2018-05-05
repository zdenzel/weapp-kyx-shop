"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,s){function i(u,a){try{var n=e[u](a),o=n.value}catch(t){return void s(t)}if(!n.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}return i("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _createClass=function(){function t(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,s,i){return s&&t(e.prototype,s),i&&t(e,i),e}}(),_lodash=require("./../../npm/lodash/lodash.js"),_lodash2=_interopRequireDefault(_lodash),_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_utils=require("./../../utils/index.js"),_utils2=_interopRequireDefault(_utils),_api=require("./../../utils/api.js"),_api2=_interopRequireDefault(_api),_wepyRedux=require("./../../npm/wepy-redux/lib/index.js"),_actions=require("./../../store/actions/index.js"),devWidth=750,winWidth=_wepy2.default.getSystemInfoSync().windowWidth,winRatio=winWidth/devWidth,store=(0,_wepyRedux.getStore)(),ProductFilter=function(t){function e(){var t,s,i,u;_classCallCheck(this,e);for(var a=arguments.length,n=Array(a),o=0;o<a;o++)n[o]=arguments[o];return s=i=_possibleConstructorReturn(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(n))),i.props={skudata:{type:Object,default:{},twoWay:!0}},i.data={preloaded:!1,mytype:null,type:null,pid:null,sid:null,datalist:[],selected:[],skustock:0,skuimage:null,skuprice:"0.00",skucount:1,skuAttrText:null},i.computed={optimize:function(){var t=Math.ceil(180*winRatio);return t+"x"+t}},i.events={showSkuPopup:function(t){var e=this.$wxpage.selectComponent(".J_SKU");e&&e.show(),this.type=t||null,this.$apply(),this.onReinit()},hideSkuPopup:function(t){var e=this.$wxpage.selectComponent(".J_SKU");e&&e.hide(),this.type=null,this.$apply()}},i.methods={tap:function(t){},onRadioChange:function(t){var e=t.detail.value,s=t.currentTarget.dataset.key,i=_lodash2.default.cloneDeep(this.datalist)||[];this.datalist=i.map(function(t){return t.id==s&&t.attributes.map(function(t){return t.checked=!(t.id!=e),t}),t});var u=[];i.forEach(function(t){t.attributes.forEach(function(e){e.checked&&u.push({key:t.id,val:e.id,txt:e.attributeName})})}),this.selected=u,this.$apply(),this.skufetch()},onChangeCounter:function(t){this.skucount=t.detail.number||1,this.$apply(),this.sku2data()},onCancel:function(){this.$emit("on-cancel"),this.$emit("hideSkuPopup")},onAddcart:function(){this.mytype="addcart",this.handleSubmit()},onBuynow:function(){this.mytype="buynow",this.handleSubmit()},onSubmit:function(){this.handleSubmit()},onReset:function(t){this.skudata=_lodash2.default.assign({},this.skudata,{datalist:this.skudata.defaults.datalist,selected:this.skudata.defaults.selected,skustock:this.skudata.defaults.skustock,skuimage:this.skudata.defaults.skuimage,skuprice:this.skudata.defaults.skuprice,skucount:this.skudata.defaults.skucount,skuAttrText:this.skudata.defaults.skuAttrText}),this.$apply(),this.$emit("on-reset")}},u=s,_possibleConstructorReturn(i,u)}return _inherits(e,t),_createClass(e,[{key:"handleSubmit",value:function(){var t={id:this.skudata.pid,sid:this.skudata.sid,uid:_wepy2.default.$instance.globalData.uid,type:1,cover:this.skudata.skuimage,title:this.skudata.skutitle,price:this.skudata.skuprice,count:this.skudata.skucount,stock:this.skudata.skustock,skuAttrText:this.skudata.skuAttrText};return this.skudata.skustock?this.datalist&&this.datalist.length&&!t.sid?void _utils2.default.showToast("请选择属性"):this.skudata.skucount?("addcart"!=this.type&&"addcart"!=this.mytype||store.dispatch((0,_actions.addShopCart)(t)).then(function(t){_wepy2.default.navigateTo({url:"/pages/product/shopcart"})}),"buynow"!=this.type&&"buynow"!=this.mytype||store.dispatch((0,_actions.setShopBuyList)(t)).then(function(t){_wepy2.default.navigateTo({url:"/pages/order/confirm"})}),this.$emit("on-submit",t),void this.$emit("hideSkuPopup")):void _utils2.default.showToast("请选择数量"):void _utils2.default.showToast("当前没有库存")}},{key:"skufetch",value:function(){function t(){return e.apply(this,arguments)}var e=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,s,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={},this.selected.forEach(function(t,s){e["cid"+(s+1)]=t.key,e["aid"+(s+1)]=t.val}),s=Object.assign({id:this.pid},e),t.next=5,_utils2.default.request(_api2.default.product.sku,{data:s}).then(function(t){var e=t.result;i.sid=e.id,i.pid=e.productId,i.skustock=e.count,i.skucount=i.skucount||1,i.skuprice=e.price,i.$apply()}).catch(function(t){i.sid=null,i.skustock=0,i.skucount=180,i.$apply()});case 5:this.sku2data();case 6:case"end":return t.stop()}},t,this)}));return t}()},{key:"sku2data",value:function(){try{var t=[];this.selected.forEach(function(e){t.push(e.txt)}),this.skuAttrText=t.join("，")}catch(t){this.sid&&(this.skuAttrText="请选择")}this.skudata=_lodash2.default.assign({},this.skudata,{pid:this.pid,sid:this.sid,datalist:this.datalist,selected:this.selected,skustock:this.skustock,skuimage:this.skuimage,skuprice:this.skuprice,skucount:this.skucount,skuAttrText:this.skuAttrText}),this.$apply()}},{key:"onReinit",value:function(){var t=this;setTimeout(function(){try{var e=[],s=_lodash2.default.cloneDeep(t.skudata.selected),i=_lodash2.default.cloneDeep(t.skudata.datalist);s&&s.forEach(function(t){e=e.concat(t.val)}),t.datalist=i.map(function(t){return t.attributes=t.attributes.map(function(t){return t.checked=!!e.some(function(e){return e==t.id}),t}),t})}catch(t){}t.pid=t.skudata.pid,t.sid=t.skudata.sid,t.skuimage=t.skudata.skuimage,t.skuprice=t.skudata.skuprice,t.skustock=t.skudata.skustock,t.skucount=t.skudata.skucount,t.skuAttrText=t.skudata.skuAttrText,t.preloaded=!0,t.$apply()},1)}},{key:"onLoad",value:function(){this.onReinit()}}]),e}(_wepy2.default.component);exports.default=ProductFilter;