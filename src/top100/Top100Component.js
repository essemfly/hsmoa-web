import React, { Component } from 'react';

const navStyle = {
  width: '100%',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table',
  marginRight: 'auto',
  marginLeft: 'auto',
}

class Top100Component extends Component {
  render() {
    return (
      <div style={navStyle}>
        Top 100 page 입니다.
      </div>
    );
  }
}

export default Top100Component;