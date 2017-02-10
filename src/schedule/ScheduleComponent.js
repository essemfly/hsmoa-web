import React, { PropTypes } from 'react'
import ScheduleFilterComponent from './ScheduleFilterComponent'
import ScheduleListComponent from './ScheduleListComponent'
import ScheduleCalendarComponent from './ScheduleCalendarComponent'
import date_popup_img from './images/popup-dates.png'

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}
const leftNavStyle = {
  width: '160px',
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

const calendarStyle = {
  width: '300px',
  height: '150px',
  position: 'fixed',
  zIndex: '9999',
  backgroundImage: `url(${date_popup_img})`,
}

const ScheduleComponent = 
({ filter, isOpenCalendar, schedules, onClickCategory, onClickChannel, onClickDay, changeDate }) => {
  return (
    <div style={baseStyle}>
      <div style={leftNavStyle}>
        <ScheduleFilterComponent 
          filter={filter}
          isOpenCalendar={isOpenCalendar}
          onClickCategory={onClickCategory}
          onClickChannel={onClickChannel}
          onClickDay={onClickDay}
          changeDate={changeDate}
        />
      </div>
      { isOpenCalendar ? 
        <div style={calendarStyle}>
          <ScheduleCalendarComponent selectedDate={filter.date} onClickDay={onClickDay} />
        </div> : ''
      }
      <div style={scheduleListStyle}>
        <ScheduleListComponent schedules={schedules} />
      </div>
    </div>
  );
}

ScheduleComponent.propTypes = {
  isOpenCalendar: PropTypes.bool,
  filter: PropTypes.object,
  schedules: PropTypes.object,
  onClickCategory: PropTypes.func,
  onClickChannel: PropTypes.func,
  onClickDay: PropTypes.func,
  changeDate: PropTypes.func,
}

export default ScheduleComponent;