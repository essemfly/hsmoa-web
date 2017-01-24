import React, { Component } from 'react';
import FlowPlayer from './FlowPlayer';

const navStyle = {
  width: '100%',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table',
  marginRight: 'auto',
  marginLeft: 'auto',
}

class HomeComponent extends Component {
  render() {
    return (
      <div style={navStyle}>
        <div style={{ display: 'table-cell', }}>
          <FlowPlayer src="http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8"/>
        </div>
        <div style={{ width: '110px', height: '100%', display: 'table-cell', verticalAlign: 'top',}}>
          <ul style={{ overflow: 'scroll', height: '100%',}}>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 1 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 2 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 3 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 4 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 5 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 6 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 7 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 8 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 9 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 7 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 8 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 9 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 7 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 8 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 9 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 7 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 8 </li>
            <li style={{ height: '39px', background: '#FFFFFF', lineHeight: '39px', boxShadow: 'inset 0 -1px 0 0 #EEEEEE', }}> 9 </li>
          </ul>
        </div>      
      </div>
    );
  }
}

export default HomeComponent;