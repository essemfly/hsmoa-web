import React, { PropTypes } from 'react'
import ScheduleFilterComponent from './ScheduleFilterComponent'
import ScheduleListComponent from './ScheduleListComponent'

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}
const leftNavStyle = {
  width: '260px',
  height: '500px',
  marginRight: '30px',
  display: 'table-cell',
  textAlign: 'initial',
}

const scheduleListStyle = {
  display: 'table-cell',
  paddingLeft: '30px',
  paddingBottom: '50px',
}

const ScheduleComponent = ({ filter, schedules, onClickCategory, onClickChannel, onClickDay, selectedDay }) => {
  return (
    <div style={baseStyle}>
      <div style={leftNavStyle}>
        <ScheduleFilterComponent 
          filter={filter}
          onClickCategory={onClickCategory}
          onClickChannel={onClickChannel}
          onClickDay={onClickDay}
          selectedDay={selectedDay}
        />
      </div>
      <div style={scheduleListStyle}>
        <ScheduleListComponent schedules={schedules} />
      </div>
    </div>
  );
}

ScheduleComponent.propTypes = {
  filter: PropTypes.object,
  schedules: PropTypes.object,
  onClickCategory: PropTypes.func,
  onClickChannel: PropTypes.func,
  onClickDay: PropTypes.func,
  selectedDay: PropTypes.number,
}

export default ScheduleComponent;