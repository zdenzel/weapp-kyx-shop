"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_wepy=require("./../../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_reduxActions=require("./../../npm/redux-actions/lib/index.js"),_catalog=require("./../types/catalog.js"),_catalog2=_interopRequireDefault(_catalog),initState={catalogList:[]},reducers=(0,_reduxActions.handleActions)(_defineProperty({},_catalog2.default.GET_CATALOG_LIST,function(e,t){var r=(t.type,t.payload);return _extends({},e,{catalogList:r||[]})}),initState);exports.default=reducers;