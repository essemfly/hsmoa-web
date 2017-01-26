import React, { PropTypes } from 'react';
import FlowPlayer from './FlowPlayer';

const navStyle = {
  width: '100%',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const listStyle = {
  height: '39px',
  background: '#FFFFFF',
  lineHeight: '39px',
  boxShadow: 'inset 0 -1px 0 0 #EEEEEE',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
}

const HomeComponent = ({ channels, onAir }) => (
  <div style={navStyle}>
    <div style={{ display: 'table-cell', }}>
      <FlowPlayer src="http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8"/>
    </div>
    <div style={{ width: '110px', height: '100%', display: 'table-cell', verticalAlign: 'top',}}>
      <ul style={{ overflow: 'scroll', height: '100%',}}>
        { channels.map((channel) => 
          <li style={listStyle} key={channel.id}>
            <img style={logoStyle} src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_big_' + channel.crawl_site + '.png'}/>
          </li>)

        }
      </ul>
    </div>      
  </div>
)

HomeComponent.propTypes = {
  onAirIndex: PropTypes.number,
  channels: PropTypes.array,
}

export default HomeComponent;