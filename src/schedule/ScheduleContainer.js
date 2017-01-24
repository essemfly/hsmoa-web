import { connect } from 'react-redux'
import { searchProducts, changeKeyword } from './actions'
import ScheduleComponent from './ScheduleComponent'

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

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)


export default ScheduleContainer;
