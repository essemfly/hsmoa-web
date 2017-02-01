import React, { PropTypes } from 'react';
import FlowPlayer from './FlowPlayer';

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const videoSectionStyle = {
  width: '100%',
  minWidth: '780px',
  display: 'table',
}
const activeListStyle = {
  height: '39px',
  background: '#FFFFFF',
  lineHeight: '39px',
  boxShadow: 'inset 0 -1px 0 0 #EEEEEE',
  borderRight: '4px solid #EA1B27',
  backgroundColor: '#F7F7F7',
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

const playerStyle = {
  display: 'table-cell',
  border: '1px solid #dddddd',
  background: 'black',
}

const channelsStyle = {
  width: '110px',
  height: '100%',
  display: 'table-cell',
  verticalAlign: 'top',
  border: '1px solid #dddddd'
}

const channelsListStyle = {
  overflow: 'scroll',
  height: '100%',
}

const sectionStyle = { 
  marginTop: '25px',
  textAlign: 'left',
}

const sectionHeaderStyle = {
  fontSize: '18px',
  lineHeight: '21px',
  marginTop: '18px',
  marginBottom: '18px',
}


const HomeComponent = ({ channels, onAir, onChangeChannel }) => {
  return (
  <div style={baseStyle}>
    <div style={videoSectionStyle}>
      <div style={playerStyle}>
        <FlowPlayer src={ channels.length > 0 ? channels[onAir].ios_video : 'http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8'} />
      </div>
      <div style={channelsStyle}>
        <ul style={channelsListStyle}>
          { channels.map((channel, index) => 
            <li style={onAir === index ? activeListStyle :listStyle} key={index} onClick={() => onChangeChannel(index)}>
              <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_big_' + channel.crawl_site + '.png'}/>
            </li>)
          }
        </ul>
      </div>      
    </div>
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <span> 다음 방송예정 </span>
        <span style={{float: 'right', fontSize: '14px', color: '#8D8D8D',}}>전체 편성표 보기 ></span>
      </div>
      <div>
        
      </div>
      
    </div>
    <div style={sectionStyle}>
      TOP 100 보기 
    </div>
  </div>
)}

HomeComponent.propTypes = {
  onAirIndex: PropTypes.number,
  channels: PropTypes.array,
}

export default HomeComponent;