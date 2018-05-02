/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:38:28
 * @Last Modified by:   denzel
 * @Last Modified time: 2018-05-03 01:30:23
 */

import wepy from 'wepy'
import { createAction } from 'redux-actions'
import types from '../types/shopcart'


export const getShopCart = createAction(types.GET_SHOP_CART, (payload, a, b) => {
    return new Promise( async (resolve, reject) => {
        await syncShopCart()
        resolve(payload)
    })
})

export const addShopCart = createAction(types.ADD_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const syncShopCart = createAction(types.SYNC_SHOP_CART, (payload) => {
    return new Promise(async (resolve, reject) => {
        await request(api.shopcart.infos, { data: payload }).then(({ result }) => {
            resolve(result)
        }).catch(e => { })
    })
})

export const delShopCart = createAction(types.DEL_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const setShopCart = createAction(types.SET_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const checkOneShopCart = createAction(types.CHECK_ONE_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const checkAllShopCart = createAction(types.CHECK_ALL_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const setShopBuyList = createAction(types.SET_BUY_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const getShopBuyList = createAction(types.GET_BUY_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const removeShopBuyList = createAction(types.REMOVE_BUY_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})
