import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { GET_PRODUCT_REQUESTED, GET_PRODUCT_SUCCEEDED, GET_PRODUCT_FAILED } from './actions'

const getProduct = (productId) => {
    return axios.get(`//rpc.hsmoa.com/entity/getInfo?entity_id=${productId}`)
        .then(response => {
            return response.data.result;
        })
}

function* getProductInfo(action, payload) {
    try {
        const data = yield call(getProduct, action.productId)
        yield put({type: GET_PRODUCT_SUCCEEDED, data, date: action.date})
    } catch (error) {
        yield put({type: GET_PRODUCT_FAILED, error})
    }
}

export function* watchProductInfo() {
    yield takeEvery(GET_PRODUCT_REQUESTED, getProductInfo)
}