import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../common'
import liveOverlayImage from './images/live-overlay.png'

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
  fontSize: '14px'
}

const scheduleBoxStyle = {
  width: '790px',
  height: '160px',
  marginBottom: '10px',
  display: 'table',
  position: 'relative'
}

const scheduleBoxBorderStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  border: '1px solid #000',
  opacity: '0.1'
}

const scheduleImageStyle = {
  width: '160px',
  height: '160px',
  display: 'table-cell',
  position: 'relative',
}

const scheduleLiveOverlayStyle = {
  position: 'absolute',
  left: 0,
  top: 0,
  width: '160px',
  height: '160px',
}

const scheduleDescStyle = {
  width: '100%',
  verticalAlign: 'top',
  display: 'table-cell',
  padding: '14px 16px 0 16px',
  textAlign: 'initial',
  position: 'relative',
}

const logoStyle = {
  height: '20px',
  verticalAlign: 'middle',
}

const timeStyle = {
  lineHeight: '15px',
  verticalAlign: 'middle',
  color: '#e2001e',
}

const titleStyle = {
  marginTop: '5px',
  lineHeight: '24px',
  fontSize: '16px',
  color: '#000000',
}

const priceDivStyle = {
  position: 'absolute',
  bottom: '11px',
  lineHeight: '19px',
}

const discountTextStyle = {
  fontSize: '12px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const priceTextStyle = {
  fontSize: '19px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const productPriceZeroStyle = {
  fontSize: '17px',
  color: '#888888',
  fontWeight: 'bold',
}

const LiveListComponent = ({ schedules }) => {
  return (
    <div>
      {
        schedules.length > 0 ?
          <div style={labelStyle}> <span style={labelTextStyle}>현재 생방송</span> </div> : ''
      }
      {
        schedules.map((schedule, index) =>
        <Link to={`/i/${schedule.id}`} key={index}>
          <div style={scheduleBoxStyle}>
              <div style={scheduleImageStyle}>
                <img style={scheduleImageStyle} src={schedule.img} alt="productImg"/>
                <img style={scheduleLiveOverlayStyle} src={liveOverlayImage} alt="productImg"/>
              </div>
              <div style={scheduleDescStyle}>
                <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo/logo_' + schedule.genre2 + '.png'}/>
                <span style={{margin:'0 9px',color:'#ccc',lineHeight: '15px'}}>|</span>
                <span style={timeStyle}>현재방송중</span>
                <div style={titleStyle}> {schedule.name} </div>
                { schedule.price > 0 ?
                  <div style={priceDivStyle}>
                    <div style={discountTextStyle}> {formatMoney(schedule.org_price)}원</div>
                    <div style={priceTextStyle}> {formatMoney(schedule.price)}<span style={{fontSize: '14px'}}>원</span></div>
                  </div> :
                  <div style={priceDivStyle}><span style={productPriceZeroStyle}> 상담/렌탈 </span></div>
                }
              </div>
              <div style={scheduleBoxBorderStyle}></div>
          </div>
        </Link>
        )
      }
    </div>
  );
}

LiveListComponent.propTypes = {
  schedules: PropTypes.array,
}

export default LiveListComponent;
