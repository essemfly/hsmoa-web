import { 
    FETCH_TOP100_SUCCEEDED,
    FETCH_TOP100_FAILED,
} from './actions'

const initialState = {
  category: '전체',
  products: [],
}

export const top100Reducer = (state= initialState, action) => {
  switch (action.type) {
    case FETCH_TOP100_SUCCEEDED:
      return { ...state, products: action.data, category: action.category }
    case FETCH_TOP100_FAILED:
      return { ...state }
    default:
      return state
  }
}


