import {
    SEARCH_KEWORD_SUCCEEDED,
    SEARCH_KEWORD_FAILED,
    FILTER_CHANGE_SUCCEEDED,
    FILTER_CHANGE_FAILED,
} from './actions'

const initialState = {
  filter: {
    page: 1,
    keyword: '',
    selectedCategory: {},
    selectedChannel: [],
    priceRange: {
      start: 0,
      end: 0,
    },
    order: '',
    source: ''
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
        filter: {
          page: 1,
          keyword: action.keyword,
          selectedCategory: {},
          selectedChannels: [],
          priceRange: {
            start: 0,
            end: 0,
          },
          order: '',
          source: '',
        },
        totalProductsCount: action.result.count,
        categories: action.result.filter_category,
        channels: action.result.filter.filter_genre2,
        products: action.result.data,
        relatedTexts: action.relatedTexts,
      }
    case SEARCH_KEWORD_FAILED:
      return { ...state }
    case FILTER_CHANGE_SUCCEEDED:
      return {
          ...state,
          filter: action.filter,
          totalProductsCount: action.result.count,
          products: action.result.data,
        }
    case FILTER_CHANGE_FAILED:
      return { ...state }
    default:
      return { ...state }
  }
}
