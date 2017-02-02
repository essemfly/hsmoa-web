import React, { PropTypes } from 'react'

const labelStyle = {
  width: '160px',
  height: '30px',
  borderRadius: '36px',
  backgroundColor: '#f54650',
  marginTop: '20px',
  marginBottom: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const labelTextStyle = {
  color: 'white',
  lineHeight: '30px',
}

const scheduleBoxStyle = {
  width: '690px',
  height: '160px',
  border: '1px solid #e5e5e5',
  marginBottom: '10px',
  display: 'table',
}

const scheduleImageStyle = {
  width: '160px',
  height: '160px',
  display: 'table-cell',
  position: 'relative',
}

const scheduleDescStyle = {
  width: '100%',
  verticalAlign: 'top',
  display: 'table-cell',
  padding: '14px 16px',
}

const logoStyle = {
  height: '15px',
}

const ScheduleListComponent = ({ schedules }) => {
  if (!schedules.hasOwnProperty('live')) {
    return <div></div>
  }

  return (
    <div>
      <div style={labelStyle}> <span style={labelTextStyle}>현재 생방송</span> </div>
       { 
         schedules.live[0].data.map((schedule, index) => 
          <div style={scheduleBoxStyle} key={index}>
            <img style={scheduleImageStyle} src={schedule.img} alt="productImg"/>
            <div style={scheduleDescStyle}>
              <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + schedule.genre2 + '.png'}/>
            </div>
          </div>  
        )
      }
      
    </div>
  );
}

ScheduleListComponent.propTypes = {
  schedules: PropTypes.object,
}

export default ScheduleListComponent;

