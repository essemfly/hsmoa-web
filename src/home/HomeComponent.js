import React, { PropTypes } from 'react'
import ScheduleListComponent from './ScheduleListComponent'
import Top100ListComponent from './Top100ListComponent'
import buy_button from './images/buy_button.png'
import detail_button from './images/detail_button.png'
import { Link } from 'react-router'
import { formatPhone, FlowPlayer, redirectProduct } from '../common'

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
  height: '35px',
  background: '#FFFFFF',
  lineHeight: '35px',
  boxShadow: 'inset 0 1px 0 0 #EEEEEE, inset -4px 0 0 0 #EA1B27',
  backgroundColor: '#F7F7F7',
}

const listStyle = {
  height: '35px',
  background: '#FFFFFF',
  lineHeight: '35px',
  boxShadow: 'inset 0 1px 0 0 #EEEEEE',
  cursor: 'pointer',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
}

const playerStyle = {
  display: 'table-cell',
  background: 'black',
  position: 'relative',
}

const channelsStyle = {
  width: '110px',
  height: '100%',
  display: 'table-cell',
  verticalAlign: 'top',
  borderRight: '1px solid #cccccc',
  borderBottom: '1px solid #cccccc'
}

const channelsListStyle = {
  overflow: 'scroll',
  height: '100%',
}

const videoMarkerStyle = {
  zIndex: '100',
  width: '100%',
  height: '50px',
  background: '#44464c',
  color: 'white',
  position: 'absolute',
  bottom: '0',
}

const videoMarkerTextStyle = {
  lineHeight: '50px',
  fontSize: '18px',
  float: 'left',
  paddingLeft: '20px',
}

const markerImageStyle = {
  float:'right',
  height: '40px',
  margin: '5px',
}

const HomeComponent = ({ channels, onAir, schedules, top100s, onChangeChannel }) => {
  if (channels.length < 1) {
    return <div style={baseStyle}/>
  }

  const routeName = 'home'

  return (
  <div style={baseStyle}>
    <div style={videoSectionStyle}>
      <div style={playerStyle}>
        <div style={videoMarkerStyle}>
          <span style={videoMarkerTextStyle}>
           { channels[onAir].ars.length > 0 ?
              '자동 ' + formatPhone(channels[onAir].ars) + '	　	상담 ' + formatPhone(channels[onAir].call) : '' }
          </span>
          <a target="_blank" href={redirectProduct(routeName, channels[onAir].id, channels[onAir].url)}>
            <img style={markerImageStyle} src={buy_button} alt="구매하기"/>
          </a>
          <Link to={`/i/${channels[onAir].id}`}>
            <img style={markerImageStyle} src={detail_button} alt="상세보기"/>
          </Link>
        </div>
        <FlowPlayer src={channels[onAir].ios_video} />
      </div>
      <div style={channelsStyle}>
        <ul style={channelsListStyle}>
          { channels.map((channel, index) =>
            <li style={onAir === index ? activeListStyle : listStyle} key={index} onClick={() => onChangeChannel(index)}>
              <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo/logo_big_' + channel.crawl_site + '.png'}/>
            </li>)
          }
        </ul>
      </div>
    </div>
    <ScheduleListComponent
      title={'다음 방송예정'}
      expand={{title: '전체 편성표보기', link: '/schedule'}}
      products={schedules}
    />
    <Top100ListComponent
      title={'오늘의 인기상품'}
      expand={{title: 'TOP100 보기', link: '/top'}}
      products={top100s}
    />
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
