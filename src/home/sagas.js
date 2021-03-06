import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { FETCH_REQUESTED, FETCH_SUCCEEDED, FETCH_FAILED } from './actions'

const getStreamings = () => {
    return axios.get('//rpc.hsmoa.com/tvshop/live/getLiveList?version=7')
      .then(response => {
        return response.data.result.data;
      })
}

function* fetchStreamings(action) {
    try {
        const data = yield call(getStreamings)
        yield put({type: FETCH_SUCCEEDED, data})
    } catch (error) {
        yield put({type: FETCH_FAILED, error})
    }
}

export function* watchStreamings() {
  yield takeEvery(FETCH_REQUESTED, fetchStreamings)
}