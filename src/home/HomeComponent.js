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

const productListStyle = {
  position: 'relative',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table-cell',
}

const productBoxStyle = {
  width: '230px',
  height: '345px',
  border: '1px solid #e6e6e6',
  position: 'relative',
  float: 'left',
  marginRight: '20px',
  marginBottom: '15px',
}

const hiddenStyle = {
  display: 'none',
}

const productImageStyle = {
  width: '230px',
  height: '230px',
}

const HomeComponent = ({ channels, onAir, schedules, top100s, onChangeChannel }) => {
  return (
  <div style={baseStyle}>
    <div style={videoSectionStyle}>
      <div style={playerStyle}>
        <FlowPlayer src={ channels.length > 0 ? channels[onAir].ios_video : 'http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8'} />
      </div>
      <div style={channelsStyle}>
        <ul style={channelsListStyle}>
          { channels.map((channel, index) => 
            <li style={onAir === index ? activeListStyle : listStyle} key={index} onClick={() => onChangeChannel(index)}>
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
      <div style={{display: 'table', width: '1000px',}}>
        <ul style={productListStyle}>
          { schedules.map((schedule, index) => 
            <li key={index} style={index < 8 ? productBoxStyle : hiddenStyle }>
              <img style={productImageStyle} alt='img' src={schedule.img}/>
              <div style={{paddingLeft: '10px'}}>
                <div>
                  <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + schedule.genre2 + '.png'}/>
                  <span>{schedule.start_time} ~ {schedule.end_time}</span>
                </div>
                <div>{schedule.simple_name}</div>
                <div>{schedule.price} 원</div>
              </div>
            </li>
            )}
        </ul>
      </div>
    </div>
  </div>
)}

HomeComponent.propTypes = {
  channels: PropTypes.array,
  onAir: PropTypes.number,
  schedules: PropTypes.array,
  top100s: PropTypes.array,
  onChangeChannel: PropTypes.func,
}

export default HomeComponent;