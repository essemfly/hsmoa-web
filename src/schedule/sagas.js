import axios from 'axios'
import { call, put } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga/effects'
import { FETCH_SCHEDULES_REQUESTED, FETCH_SCHEDULES_SUCCEEDED, FETCH_SCHEDULES_FAILED } from './actions'

const getSchedules = (date) => {
    if (date) {
        date = date.toISOString().split('T')[0].split('-').join('')
    }
    return axios.get(`http://rpc.hsmoa.com/tvshop/live/getTimeGroupList?is_web=1&version=7&sep=1&date=${date}`)
        .then(response => {
            return response.data.result.data;
        })
}

function* fetchSchedules(action, payload) {
    try {
        const data = yield call(getSchedules, action.date)
        yield put({type: FETCH_SCHEDULES_SUCCEEDED, data, date: action.date})
    } catch (error) {
        yield put({type: FETCH_SCHEDULES_FAILED, error})
    }
}

export function* watchSchedules() {
    yield takeEvery(FETCH_SCHEDULES_REQUESTED, fetchSchedules)
}