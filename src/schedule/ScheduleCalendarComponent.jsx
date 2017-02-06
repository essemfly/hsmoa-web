import React, { PropTypes } from 'react'

const calendarTableStyle = {
  width: '100%',
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


const ScheduleCalendarComponent = ({onClickDay}) => {
  const daysToShown = 21
  const startDay = new Date()
  const today = new Date().getDate()
  startDay.setDate(today -  startDay.getDay() - 7)

  const dates = []
  const dateList = []
  let dateListJSX = []

  for (let i=0; i<daysToShown; i++) {
    let tempDate = {
      date: startDay.getDate(),
      full: startDay.toISOString(),
    }
    dateListJSX.push(
      <td style={dateTextStyle} key={i} onClick={(evt) => 
      onClickDay(tempDate.full)}>
      <div style={ tempDate.date === today ? todayStyle: tempDate.date === 8 ? selectedDayStyle:{}}>{tempDate.date}</div>
      </td>
    )
    if (dateListJSX.length % 7 === 0) {
      dateList.push(
        <tr key={startDay.toString()}>{dateListJSX}</tr>
      )
      dateListJSX = []
    }
  
    startDay.setDate(startDay.getDate() + 1)
  }
  console.log(dates);
  

  return (
    <table style={calendarTableStyle}>
      <tbody>
        {dateList}
      </tbody>
    </table>
  );
}

ScheduleCalendarComponent.propTypes = {
  onClickDay: PropTypes.func,
}

export default ScheduleCalendarComponent;