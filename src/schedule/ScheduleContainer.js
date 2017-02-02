import { connect } from 'react-redux'
import { fetchSchedulesRequested } from './actions'
import ScheduleComponent from './ScheduleComponent'

const mapStateToProps = (state) => {
  return {
    filter: state.scheduleReducer.filter,
    schedules: state.scheduleReducer.filteredSchedules,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchSchedulesRequested())
  return {
    onClickCategory: (index) => {
      // TO BE DEVELOPED
    },
    onClickChannels: (index) => {
      // TO BE DEVELOPED
    },
    onClickDay: (day) => {
      // TO BE DEVELOPED
    } 
  }
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)


export default ScheduleContainer;
