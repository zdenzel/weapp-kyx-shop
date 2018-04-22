
import wepy from 'wepy'
import { handleActions } from 'redux-actions'

import types from '../types/catalog'

const initState = {
    catalogList: []
}

//list
const reducers = handleActions({
    [types.GET_CATALOG_LIST](state, { type, payload }) {
        let catalogList = payload || []
        return { ...state, catalogList }
    }

}, initState);

export default reducers;