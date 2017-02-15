import { connect } from 'react-redux'
import { searchProducts, changeKeyword } from './actions'
import HeaderComponent from './HeaderComponent'

const mapStateToProps = (state, ownProps) => {
  return {
    route: state.routing.locationBeforeTransitions.pathname,
    keyword: state.headerReducer.keyword,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: (keyword) => {
      dispatch(searchProducts(keyword))
    },
    onChangeKeyword: (keyword) => {
      dispatch(changeKeyword(keyword))
    }
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent)


export default HeaderContainer;
