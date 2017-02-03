import { connect } from 'react-redux'
import { fetchSchedulesRequested, filterCategoryChanged, filterChannelChanged, filterDayChanged, } from './actions'
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
    onClickCategory: (category, val) => {
      dispatch(filterCategoryChanged(category, val))
      // TO BE DEVELOPED
    },
    onClickChannel: (channel, val) => {
      dispatch(filterChannelChanged(channel, val))
      // TO BE DEVELOPED
    },
    onClickDay: (day) => {
      dispatch(filterDayChanged(day))
      // TO BE DEVELOPED
    } 
  }
}

const ScheduleContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleComponent)


export default ScheduleContainer;
