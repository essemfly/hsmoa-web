import React, { PropTypes, } from 'react'

const dateBoxStyle = {
  width: '100%',
  height: '38px',
  borderRadius: '3px',
  border: '1px solid #cccccc',
  margin: '12px 0',
}

const dateTextStyle = {
  fontSize: '13px',
  lineHeight: '38px',
  paddingLeft: '12px',
}

const ScheduleDateComponent = ({selectedDate, changeDate}) => {
  if (selectedDate.getDate === undefined) {
    return <div></div>
  }

  return (
    <div style={dateBoxStyle} onClick={changeDate}>
      <span style={dateTextStyle}>
        {`${selectedDate.getFullYear()}년 ${selectedDate.getMonth()+1}월 ${selectedDate.getDate()}일`}  
      </span>
    </div>
  )
} 

ScheduleDateComponent.propTypes = {
  selectedDate: PropTypes.object,
  changeDate: PropTypes.func,
}

export default ScheduleDateComponent