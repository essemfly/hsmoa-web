import { connect } from 'react-redux'
import { searchProducts, changeKeyword } from './actions'
import Top100Component from './Top100Component'

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

const Top100Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Top100Component)


export default Top100Container;
