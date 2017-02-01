import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { FETCH_TOP100_REQUESTED, FETCH_TOP100_SUCCEEDED, FETCH_TOP100_FAILED } from './actions'

const getTop100Products = () => {
    return axios.get('http://rpc.hsmoa.com/popular_entity/getList?page=1&num=20')
        .then(response => {
            return response.data.result.data;
        })
}

function* fetchTop100(action) {
    try {
        const data = yield call(getTop100Products)
        yield put({type: FETCH_TOP100_SUCCEEDED, data})
    } catch (error) {
        yield put({type: FETCH_TOP100_FAILED, error})
    }
}

export function* watchTop100() {
    yield takeEvery(FETCH_TOP100_REQUESTED, fetchTop100)
}
