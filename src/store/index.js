/*
 * @Author: zdenzel
 * @Date:   2018-03-14 23:19:32
 * @Last Modified by:   zdenzel
 * @Last Modified time: 2018-03-15 00:19:02
 */

import { createStore, applyMiddleware, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
// import devToolsEnhancer from '../utils/remote-redux-devtools.js'
import rootReducer from './reducers'

export default function configStore() {
    const store = createStore(rootReducer, compose(
        applyMiddleware(promiseMiddleware),
        // devToolsEnhancer({
        //     hostname: 'localhost',
        //     port: 8888,
        //     secure: false
        // })
    ))
    return store
}
