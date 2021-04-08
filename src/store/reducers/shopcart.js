/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:23:42
 * @Last Modified by:   denzel
 * @Last Modified time: 2018-06-03 17:29:57
 */

import _ from 'lodash'
import wepy from 'wepy'
import { handleActions } from 'redux-actions'
import types from '../types/shopcart'

const initState = {
    shopCartData: [],
    shopCartList: [],
    shopBuyList: [],
    shopBuyConsignee: null,
    shopBuyType: 1,
    isSelectedAll: false,
    totalAmount: 0,
    shopCartCount: 0,
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
    [types.GET_SHOP_CART_LIST](state, { type, payload }) {
        // let shopCartData = Array.from(new Set(wepy.getStorageSync(types.SHOP_CART_LIST) || []))
        let shopCartData = Array.from(new Set(payload || []))
        let shopCartList = Array.from(new Set(shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)))
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)
        let shopCartCount = shopCartList.length

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount, shopCartCount }
    },
    [types.SET_SHOP_CART_LIST](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        let itemdata = Object.assign({}, payload || {})
        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == wepy.$instance.globalData.uid && item.id == payload.id && item.sid == payload.sid) {
                    item = Object.assign({}, itemdata, {isSelected:!!itemdata.count})
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)
        let shopCartCount = shopCartList.length

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount, shopCartCount }
    },
    [types.DEL_SHOP_CART_LIST](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            let index = shopCartData.findIndex(item => item.id == payload.id && item.uid == wepy.$instance.globalData.uid && item.sid == payload.sid)
            shopCartData.splice(index, 1)
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)
        let shopCartCount = shopCartList.length

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount, shopCartCount }
    },
    [types.ADD_SHOP_CART_LIST](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        try {
            if(payload && payload.constructor == Object){
                let exist = shopCartData.find(item => item.id == payload.id && item.uid == wepy.$instance.globalData.uid && item.sid == payload.sid)
                if (exist) {
                    shopCartData = shopCartData.map(item => {
                        if(item.id == payload.id && item.uid == wepy.$instance.globalData.uid && item.sid == payload.sid){
                            item.isSelected = true
                            let count = item.count + payload.count
                            item.count = item.stock > count ? count : item.stock;
                        }
                        return item
                    })
                } else {
                    shopCartData.push(Object.assign({}, payload, {isSelected: true}))
                }
            }
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)
        let shopCartCount = shopCartList.length

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount, shopCartCount }
    },
    [types.CHECK_SHOP_CART_ONE](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()

        try {
            shopCartData = shopCartData.map(item => {
                if (item.uid == wepy.$instance.globalData.uid && item.id == payload.id && item.sid == payload.sid) {
                    item.isSelected = !item.isSelected
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)
        let isSelectedAll = getSelectStatus(shopCartList)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.CHECK_SHOP_CART_ALL](state, { type, payload }) {
        let shopCartData = state.shopCartData.concat()
        let isSelectedAll = !state.isSelectedAll

        try {
            shopCartData = shopCartData.map(item => {
                if (item.stock && item.uid == wepy.$instance.globalData.uid) {
                    item.isSelected = isSelectedAll
                }
                return item
            })
        } catch (e) {}

        let shopCartList = shopCartData.filter(item => item.uid == wepy.$instance.globalData.uid)
        let totalAmount = getTotalAmount(shopCartList)

        wepy.setStorageSync(types.SHOP_CART_LIST, shopCartData)

        return { ...state, shopCartData, shopCartList, isSelectedAll, totalAmount }
    },
    [types.SET_SHOP_BUY_LIST](state, { type, payload }) {
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
            wepy.setStorageSync(types.SHOP_BUY_LIST, shopBuyList)
            return { ...state, shopBuyList, shopBuyList }
        }
        
        let shopCartList = state.shopCartList.concat()

        try {
            shopBuyList = shopCartList.filter(item => item.isSelected)
            shopBuyType = (shopBuyList[0].type == 3) ? 2 : 1;
        } catch (e) {}

        wepy.setStorageSync(types.SHOP_BUY_LIST, shopBuyList)

        return { ...state, shopBuyList, shopBuyType }
    },
    [types.GET_SHOP_BUY_LIST](state, { type, payload }) {
        let shopBuyList = wepy.getStorageSync(types.SHOP_BUY_LIST) || state.shopBuyList.concat()
        let totalAmount = getTotalAmount(shopBuyList)
        let shopBuyType = (shopBuyList[0].type == 3) ? 2 : 1;
        return { ...state, totalAmount, shopBuyList, shopBuyType }
    },
    [types.DEL_SHOP_BUY_LIST](state, { type, payload }) {
        let shopBuyList = []
        let shopBuyType = 1
        wepy.setStorageSync(types.SHOP_BUY_LIST, shopBuyList)

        return { ...state, shopBuyList, shopBuyType }
    },
    [types.SET_SHOP_BUY_CONSIGNEE](state, { type, payload }) {
        let shopBuyConsignee = Object.assign({}, payload)

        return { ...state, shopBuyConsignee }
    },
    [types.GET_SHOP_BUY_CONSIGNEE](state, { type, payload }) {
        let shopBuyConsignee = payload ? Object.assign({}, payload) : null

        return { ...state, shopBuyConsignee }
    },
    [types.DEL_SHOP_BUY_CONSIGNEE](state, { type, payload }) {
        let shopBuyConsignee = null

        return { ...state, shopBuyConsignee }
    },

}, initState);

export default reducers;
