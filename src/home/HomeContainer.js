import { connect } from 'react-redux'
import { searchProducts, changeKeyword } from './actions'
import HomeComponent from './HomeComponent'

const mapStateToProps = (state) => {
  return {
    onAir: state.homeReducer.onAirIndex,
    channels: state.homeReducer.channels,
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

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)


export default HomeContainer;
