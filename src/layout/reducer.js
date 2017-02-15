import { SEARCH_PRODUCTS, CHANGE_KEYWORD } from './actions';
const initialState = {
  selectedRoute: 'HOME',
  keyword: '',
}

export const headerReducer = (state= initialState, action) => {
  switch (action.type) {
    case SEARCH_PRODUCTS:
      return { ...state }
    case CHANGE_KEYWORD:
      return { ...state, keyword: action.keyword }
    default:
      return { ...state }
  }
}
