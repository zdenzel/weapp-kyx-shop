/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:23:42
 * @Last Modified by:   denzel
 * @Last Modified time: 2018-04-20 01:42:41
 */

import _ from 'lodash'
import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import types from '../types/shopcart'

const SHOP_BUY_LIST = 'SHOP_BUY_LIST'
const SHOP_CART_LIST = 'SHOP_CART_LIST'

const initState = {
    shopCartData: [],
    shopCartList: [],
    shopBuyList: [],
    shopBuyType: 1,
    isSelectedAll: false,
    totalAmount: 0,
}

const getSelectStatus = (state) => {
    try {
        return state.every(n => n.isSelected == true)
    } catch (e) {}
}
const getTotalAmount = (state) => {
    try {
        let totalAmount = 0
        state.forEach(item => {
            let itemPrice = Number(item.price) != NaN ? Number(item.price) : 0
            let itemCount = Number(item.count) != NaN ? Number(item.count) : 0
            if (item.isSelected) {
                totalAmount = totalAmount + itemPrice * itemCount
            }
        })
        return totalAmount.toFixed(2)
    } catch (e) {}
}

//list
const reducers = handleActions({
    [types.GET_SHOP_CART](state, { type, payload }) {
        let shopCartData = Array.from(new Set(wepy.getStorageSync(SHOP_CART_LIST) || []))
        let shopCartList = Array.from(new Set(shopCartData.filter(item => item.uid == payload.uid)))
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.SET_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid && item.id == payload.id && item.sid == payload.sid) {
                    item = payload
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.DEL_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            let index = shopCartData.findIndex(item => item.id == payload.id && item.uid == payload.uid && item.sid == payload.sid)
            shopCartData.splice(index, 1)
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.ADD_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        try {
            if(payload.constructor == Object){
                let exist = shopCartData.find(item => item.id == payload.id && item.uid == payload.uid && item.sid == payload.sid)
                if (exist) {
                    shopCartData = shopCartData.map(item => {
                        if(item.id == payload.id && item.uid == payload.uid && item.sid == payload.sid){
                            item.isSelected = true
                            item.count = item.count + payload.count
                        }
                        return item
                    })
                } else {
                    shopCartData.push(Object.assign({}, payload, {isSelected: true}))
                }
            }
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.CHECK_ONE_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid && item.id == payload.id && item.sid == payload.sid) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.CHECK_ALL_SHOP_CART](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        let isSelectedAll = !state.isSelectedAll

        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == payload.uid) {
                    item.isSelected = isSelectedAll
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == payload.uid)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.SET_BUY_LIST](state, { type, payload }) {
        let shopBuyList = state.shopBuyList.concat()
        let shopBuyType = state.shopBuyType;
        if(payload){
            if(payload.constructor == Object){
                shopBuyList = [Object.assign({}, payload, {isSelected: true})]
                shopBuyType = (payload.type == 3) ? 2 : 1;
            } else if(payload.constructor == Array){
                shopBuyList = payload.map(n => {
                    n.isSelected = true;
                    return n
                })
                shopBuyType = (shopBuyList[0].type == 3) ? 2 : 1;
            }
            wepy.setStorageSync(SHOP_BUY_LIST, shopBuyList)
            return { ...state, shopBuyList, shopBuyList }
        }
        
        let shopCartList = state.shopCartList.concat()

        try {
            shopBuyList = shopCartList.filter(item => item.isSelected)
            shopBuyType = (shopBuyList[0].type == 3) ? 2 : 1;
        } catch (e) {}

        wepy.setStorageSync(SHOP_BUY_LIST, shopBuyList)

        return { ...state, shopBuyList, shopBuyType }
    },
    [types.GET_BUY_LIST](state, { type, payload }) {
        let shopBuyList = wepy.getStorageSync(SHOP_BUY_LIST) || state.shopBuyList.concat()
        let totalAmount = getTotalAmount(shopBuyList)
        let shopBuyType = (shopBuyList[0].type == 3) ? 2 : 1;
        return { ...state, totalAmount, shopBuyList, shopBuyType }
    },
    [types.REMOVE_BUY_LIST](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        let shopBuyList = []
        let uid = null

        try {
            state.shopBuyList.forEach(buy => {
                let index = shopCartData.findIndex(cart => cart.id == buy.id && cart.uid == buy.uid && cart.sid == buy.sid)
                console.log(index)
                if(index > -1){
                    uid = shopCartData[index].uid
                    shopCartData.splice(index, 1)
                }
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)
        wepy.setStorageSync(SHOP_CART_LIST, shopCartData)
        wepy.setStorageSync(SHOP_BUY_LIST, shopBuyList)

        return { ...state, shopCartData, shopCartList, shopBuyList, isSelectedAll, totalAmount }
    },

}, initState);

export default reducers;
