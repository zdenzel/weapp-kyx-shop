/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:38:28
 * @Last Modified by:   denzel
 * @Last Modified time: 2018-04-06 00:09:51
 */

import wepy from 'wepy'
import { createAction } from 'redux-actions'

import types from '../types/catalog'

import api from '@/config/api'
import utils from '@/utils'


export const getCatalogList = createAction(types.GET_CATALOG_LIST, (payload) => {
    return new Promise((resolve, reject) => {
        utils.request(api.catalog.list).then(({status, result}) => {
            resolve(result)
        }).catch(({ result }) => {
            reject(result)
        });
    })
})