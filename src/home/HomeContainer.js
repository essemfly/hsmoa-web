import { connect } from 'react-redux'
import { fetchRequested, changeChannel, } from './actions'
import { fetchSchedulesRequested, } from '../schedule/actions'
import { fetchTop100ProductsRequested, } from '../top100/actions'

import HomeComponent from './HomeComponent'

const mapStateToProps = (state) => {
  return {
    onAir: state.homeReducer.onAirIndex,
    channels: state.homeReducer.channels,
    schedules: state.homeReducer.schedules.length > 0 ? state.homeReducer.schedules[1].data : [],
    top100s: state.homeReducer.top100,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchRequested())
  dispatch(fetchSchedulesRequested())
  dispatch(fetchTop100ProductsRequested())
  return {
    onChangeChannel: (index) => {
      dispatch(changeChannel(index))
    }
  }
}

const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeComponent)


export default HomeContainer;
