import axios from 'axios'
import { takeEvery, call, put } from 'redux-saga/effects'
import { browserHistory } from 'react-router'
import { 
    SEARCH_KEWORD_REQUESTED, 
    SEARCH_KEWORD_SUCCEEDED, 
    SEARCH_KEWORD_FAILED,
    FILTER_CHANGE_REQUESTED,
    FILTER_CHANGE_SUCCEEDED,
    FILTER_CHANGE_FAILED, 
} from './actions'

const getSearchResult = (keyword) => {
    return axios.get(`http://rpc.hsmoa.com/search/tvshopSearch`, {
        params: {
            page: 1,
            num: 30,
            is_web:1,
            source: 'meta',
            query: keyword,
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

const refreshSearchResult = (filter) => {
    return axios.get(`http://rpc.hsmoa.com/search/tvshopSearch`, {
        params: {
            page: filter.page,
            num: 30,
            is_web:1,
            source: filter.source,
            query: filter.keyword,
            order: filter.order,
            price_min: filter.priceRange.start,
            price_max: filter.priceRange.end,
            ncate1: filter.selectedCategory.ncate1,
            ncate2: filter.selectedCategory.ncate2,
            ncate3: filter.selectedCategory.ncate3,
            ncate4: filter.selectedCategory.ncate4,
            genre2: filter.selectedChannels.join(','),
        }})
        .then(response => {
            return response.data.result;
        })
}

function* searchFilter(action) {
    try {
        const products = yield call(refreshSearchResult, action.filter)
        
        yield put({type: FILTER_CHANGE_SUCCEEDED, result: products, filter: action.filter,})
        
    } catch (error) {
        yield put({type: FILTER_CHANGE_FAILED, error})
    }
}

export function* watchSearchRefresh() {
    yield takeEvery(FILTER_CHANGE_REQUESTED, searchFilter)
}
