import React, { Component } from 'react';
import FlowPlayer from './FlowPlayer';

const navStyle = {
  width: '60%',
  marginRight: 'auto',
  marginLeft: 'auto',
  height: 'inherit',
}


class HomeComponent extends Component {
  render() {
    return (
      <div style={navStyle}>
        나는 홈화면이라 해
        <FlowPlayer src="http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8"/>
      </div>
    );
  }
}

export default HomeComponent;
