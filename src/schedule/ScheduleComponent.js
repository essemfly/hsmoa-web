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
}

const scheduleListStyle = {
  height: '1500px',
  display: 'table-cell',
  paddingLeft: '30px',
}

const ScheduleComponent = ({ filter, schedules, onClickCategory, onClickChannels, onClickDay }) => {
  return (
    <div style={baseStyle}>
      <div style={leftNavStyle}>
        <ScheduleFilterComponent />
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
  onClickChannels: PropTypes.func,
  onClickDay: PropTypes.func,
}

export default ScheduleComponent;