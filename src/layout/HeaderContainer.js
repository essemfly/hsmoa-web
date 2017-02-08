import { connect } from 'react-redux'
import { searchProducts, changeKeyword } from './actions'
import HeaderComponent from './HeaderComponent'

const mapStateToProps = (state) => {
  return {
    route: state.routing.locationBeforeTransitions.pathname,
    keyword: state.headerReducer.searchKeyword,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchClick: () => {
      dispatch(searchProducts())
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
