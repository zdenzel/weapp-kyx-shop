/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:38:28
 * @Last Modified by:   denzel
 * @Last Modified time: 2018-05-05 17:01:58
 */

import wepy from 'wepy'
import { createAction } from 'redux-actions'
import types from '../types/shopcart'
import utils from '@/utils'
import api from '@/utils/api'

export const getShopCartList = createAction(types.GET_SHOP_CART_LIST, payload => new Promise(resolve => {
    let shopCartData = Array.from(new Set(wepy.getStorageSync(types.SHOP_CART_LIST) || []))
    let userCartData = Array.from(new Set(shopCartData.filter(n => n.uid == wepy.$instance.globalData.uid)))
    let data = {
        data: userCartData.map( ({id, sid, type}) => ({ id, sid, type }))
    }
    utils.request(api.shopcart.infos, { data, method: 'post' }).then(({ result }) => {
        try{
            shopCartData = shopCartData.map(item => {
                let oitem = Object.assign({notice:null}, item)
                let index = result.findIndex(n=>n.id==item.id)
                let nitem = Object.assign({}, result[index])
                let notice = []
                // if(nitem.isFreeShipping){ notice.push('免邮');}
                if(!nitem.stock){ notice.push('没有库存');}
                if(index > -1){
                    oitem = Object.assign({}, oitem, nitem, {
                        count: nitem.stock > oitem.count ? oitem.count : nitem.stock,
                        notice: notice ? notice.join('，') : null,
                        isSelected: nitem.stock && oitem.count ? oitem.isSelected : false,
                    })
                }
                return oitem
            })
        }catch(e){
            console.log(e)
        }
        resolve(shopCartData)
    }).catch(e => { })
}))

export const addShopCartList = createAction(types.ADD_SHOP_CART_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const delShopCartList = createAction(types.DEL_SHOP_CART_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const setShopCartList = createAction(types.SET_SHOP_CART_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const checkShopCartOne = createAction(types.CHECK_SHOP_CART_ONE, payload => new Promise(resolve => {
    resolve(payload)
}))

export const checkShopCartAll = createAction(types.CHECK_SHOP_CART_ALL, payload => new Promise(resolve => {
    resolve(payload)
}))

export const setShopBuyList = createAction(types.SET_SHOP_BUY_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const getShopBuyList = createAction(types.GET_SHOP_BUY_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const delShopBuyList = createAction(types.DEL_SHOP_BUY_LIST, payload => new Promise(resolve => {
    resolve(payload)
}))

export const setShopBuyConsignee = createAction(types.SET_SHOP_BUY_CONSIGNEE, payload => new Promise(resolve => {
    wepy.setStorageSync(types.SHOP_BUY_CONSIGNEE, payload)
    resolve(payload)
}))

export const getShopBuyConsignee = createAction(types.GET_SHOP_BUY_CONSIGNEE, payload => new Promise(async (resolve) => {
    let consignee = wepy.getStorageSync(types.SHOP_BUY_CONSIGNEE) || null
    if(!consignee){
        await utils.request(api.consignee.default).then(({result})=>{
            consignee = result
        }).catch(e=>{})
    }
    wepy.setStorageSync(types.SHOP_BUY_CONSIGNEE, consignee)
    resolve(consignee)
}))

export const delShopBuyConsignee = createAction(types.DEL_SHOP_BUY_CONSIGNEE, payload => new Promise(resolve => {
    wepy.setStorageSync(types.SHOP_BUY_CONSIGNEE, null)
    resolve(payload)
}))
