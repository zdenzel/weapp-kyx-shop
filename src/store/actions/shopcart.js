/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:38:28
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-18 13:47:26
 */

import wepy from 'wepy'
import { createAction } from 'redux-actions'
import types from '../types/shopcart'


export const getShopCart = createAction(types.GET_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
    })
})

export const addShopCart = createAction(types.ADD_SHOP_CART, (payload) => {
    return new Promise((resolve, reject) => {
        resolve(payload)
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
