import { connect } from 'react-redux'
import { fetchSchedulesRequested, filterCategoryChanged, filterChannelChanged, } from './actions'
import ScheduleComponent from './ScheduleComponent'

const mapStateToProps = (state) => {
  return {
    filter: state.scheduleReducer.filter,
    schedules: state.scheduleReducer.filteredSchedules,
    selectedDay: state.scheduleReducer.selectedDay,
  }
}

const mapDispatchToProps = (dispatch) => {
  dispatch(fetchSchedulesRequested())
  return {
    onClickCategory: (category, val) => {
      dispatch(filterCategoryChanged(category, val))
    },
    onClickChannel: (channel, val) => {
      dispatch(filterChannelChanged(channel, val))
    },
    onClickDay: (day) => {
      let newDate = new Date(day)
      dispatch(fetchSchedulesRequested(newDate))
    } 
  }
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)


export default ScheduleContainer;
