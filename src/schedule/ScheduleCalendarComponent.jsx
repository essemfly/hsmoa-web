import React, { PropTypes } from 'react'

const calendarTableStyle = {
  width: '100%',
  marginTop: '8px',
}

const dateTextStyle = {
  fontSize: '13px',
  padding: '4.9px 5.7px',
  textAlign: 'center',
  cursor: 'pointer',
}

const todayStyle = {
  width: '30px',
  height: '30px',
  lineHeight: '26px',
  border: '1px solid #32be9f',
  borderRadius:'15px',
}

const selectedDayStyle = {
  width: '30px',
  height: '30px',
  backgroundColor: '#40d0b0',
  lineHeight: '28px',
  color: 'white',
  borderRadius: '15px',
}

const saturdayStyle = {
  color: '#4a90e2',
}

const sundayStyle = {
  color: '#f3616a',
}

const dimStyle = {
  opacity: 0.4,
}

const ScheduleCalendarComponent = ({selectedDate, onClickDay}) => {

  if (selectedDate.getDate === undefined) {
    return <div></div>
  }

  const daysToShown = 21
  const startDay = new Date()
  const today = startDay.getDate()
  const userSelectedDate = new Date(selectedDate)

  let dayDifference = today-startDay.getDay() -7
  startDay.setDate(dayDifference)
  dayDifference -= today

  const dateList = []
  let dateListJSX = []

  for (let i=0; i<daysToShown; i++) {
    let tempDate = {
      date: startDay.getDate(),
      full: startDay.toISOString(),
      day: startDay.getDay(),
    }

    dateListJSX.push(
      <td style={dateTextStyle} key={i} onClick={(evt) => 
      onClickDay(tempDate.full)}>
        <div style={Object.assign(
          tempDate.date === today ? todayStyle : {},
          tempDate.date === userSelectedDate.getDate() ? selectedDayStyle:{},
          tempDate.day === 0 ? sundayStyle:{},
          tempDate.day === 6 ? saturdayStyle:{},
          Math.abs(dayDifference) > 7 ? dimStyle:{},
          )
          }>
          {tempDate.date}
        </div>
      </td>
    )
    if (dateListJSX.length % 7 === 0) {
      dateList.push(
        <tr key={startDay.toString()}>{dateListJSX}</tr>
      )
      dateListJSX = []
    }
  
    startDay.setDate(startDay.getDate() + 1)
    dayDifference += 1
  }
  

  return (
    <table style={calendarTableStyle}>
      <tbody>
        <tr>
          <td style={dateTextStyle}>일</td>
          <td style={dateTextStyle}>월</td>
          <td style={dateTextStyle}>화</td>
          <td style={dateTextStyle}>수</td>
          <td style={dateTextStyle}>목</td>
          <td style={dateTextStyle}>금</td>
          <td style={dateTextStyle}>토</td>
        </tr>
        {dateList}
      </tbody>
    </table>
  );
}

ScheduleCalendarComponent.propTypes = {
  selectedDate: PropTypes.object,
  onClickDay: PropTypes.func,
}

export default ScheduleCalendarComponent;