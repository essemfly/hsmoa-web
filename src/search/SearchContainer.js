import { connect } from 'react-redux'
import { searchKeywordRequested } from './actions'
import SearchComponent from './SearchComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    searchKeyword: state.headerReducer.keyword,
    filter: state.searchReducer.filter,
    totalProductsCount: state.searchReducer.totalProductsCount,
    categories: state.searchReducer.categories,
    channels: state.searchReducer.channels,
    products: state.searchReducer.products,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSearchResult: (keyword) => {
      dispatch(searchKeywordRequested(keyword))
    }
  }
}

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchComponent)


export default SearchContainer;
