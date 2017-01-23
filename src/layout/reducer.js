import { SEARCH_PRODUCTS, CHANGE_KEYWORD } from './actions';
const initialState = {
  selectedRoute: 'HOME',
  keyword: '',
}

export const headerReducer = (state= initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      // state.keyword 를 redux-thunk 이용해서 검색한다!
      return {
        ...state
      }
    case CHANGE_KEYWORD:
      return {
        ...state,
        keyword: action.keyword
      }
    default:
      return state
  }
}


