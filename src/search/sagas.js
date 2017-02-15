import axios from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { SEARCH_KEWORD_REQUESTED, SEARCH_KEWORD_SUCCEEDED, SEARCH_KEWORD_FAILED } from './actions'

const getSearchResult = (keyword) => {
    return axios.get(`http://rpc.hsmoa.com/search/tvshopSearch`, {
        params: {
            page: 1,
            num: 30,
            is_web:1,
            source: 'meta',
            query: keyword,
            order: '',
            price_min: '',
            price_max: '',
            ncate1: '',
            ncate2: '',
            ncate3: '',
            ncate4: '',
            genre2: '',
        }})
        .then(response => {
            return response.data.result;
        })
}

const getRelevantText = (keyword) => {
    return axios.get(`http://rpc.hsmoa.com/search/relatequery`, {
        params: {
            query: keyword
        }})
        .then(response => {
            return response.data.result;
        })
}
function* searchKeyword(action) {
    try {
        const [products, relatedTexts] = yield [
            call(getSearchResult, action.keyword),
            call(getRelevantText, action.keyword)
        ]

        yield put({
            type: SEARCH_KEWORD_SUCCEEDED, result: products, relatedTexts: relatedTexts, keyword: action.keyword
        })
        yield browserHistory.push(`/search/${action.keyword}`)
        
    } catch (error) {
        yield put({type: SEARCH_KEWORD_FAILED, error})
    }
}

export function* watchSearch() {
    yield takeEvery(SEARCH_KEWORD_REQUESTED, searchKeyword)
}
