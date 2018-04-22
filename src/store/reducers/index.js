/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:22:47
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-15 00:23:03
 */

import { combineReducers } from 'redux'

import catalog from './catalog'
import shopcart from './shopcart'

export default combineReducers({
    catalog,
    shopcart
})
