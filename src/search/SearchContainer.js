import { connect } from 'react-redux'
import { 
  searchKeywordRequested,
  filterLiveStatusChanged,
  filterCategoryChanged,
  filterChannelChanged,
  filterOrderChanged,
  filterPriceRangeChanged
} from './actions'
import SearchComponent from './SearchComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    searchKeyword: state.searchReducer.keyword,
    filter: state.searchReducer.filter,
    totalProductsCount: state.searchReducer.totalProductsCount,
    categories: state.searchReducer.categories,
    channels: state.searchReducer.channels,
    products: state.searchReducer.products,
    relatedTexts: state.searchReducer.relatedTexts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResult: (keyword) => {
      dispatch(searchKeywordRequested(keyword))
    },
    onClickLiveStatus: (filter, source) => {
      dispatch(filterLiveStatusChanged(filter, source))
    },
    onClickCategory: (filter, category, val) => {
      dispatch(filterCategoryChanged(filter, category, val))
    },
    onClickChannel: (filter, channel, val) => {
      dispatch(filterChannelChanged(filter, channel, val))
    },
    onClickListOrder: (filter, type) => {
      dispatch(filterOrderChanged(filter, type))
    },
    onClickPriceRange: (filter) => {
      dispatch(filterPriceRangeChanged(filter))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)


export default SearchContainer;
