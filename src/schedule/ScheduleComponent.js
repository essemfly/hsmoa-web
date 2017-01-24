import React, { Component } from 'react';

const navStyle = {
  width: '100%',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table',
  marginRight: 'auto',
  marginLeft: 'auto',
}

class ScheduleComponent extends Component {
  render() {
    return (
      <div style={navStyle}>
        편성표 페이지 입니다.
      </div>
    );
  }
}

export default ScheduleComponent;