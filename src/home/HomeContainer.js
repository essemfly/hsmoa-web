import { connect } from 'react-redux'
import { fetchRequested, changeChannel } from './actions'
import HomeComponent from './HomeComponent'

const mapStateToProps = (state) => {
  return {
    onAir: state.homeReducer.onAirIndex,
    channels: state.homeReducer.channels,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchRequested())
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
