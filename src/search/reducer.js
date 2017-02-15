import { 
    SEARCH_KEWORD_SUCCEEDED,
    SEARCH_KEWORD_FAILED,
} from './actions'

const initialState = {
  keyword: '',
  filter: {
    selectedCategories: [],
    selectedChannel: [],
    priceRange: {
      start: 0,
      end: 999999,
    },
  },
  totalProductsCount: 0,
  categories: [],
  channels: [],
  products: [],
  relatedTexts: {
    count: 0,
    data: [],
  },
}

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_KEWORD_SUCCEEDED:
      return { 
        ...state,
        keyword: action.keyword,
        filter: {
          selectedCategories: [],
          selectedChannel: [],
          priceRange: {
            start: 0,
            end: 999999,
          }
        },
        totalProductsCount: action.result.count,
        categories: action.result.filter_category,
        channels: action.result.site_aggs,
        products: action.result.data,
        relatedTexts: action.relatedTexts,
      }
    case SEARCH_KEWORD_FAILED:
      return { ...state }
    default:
      return state
  }
}


