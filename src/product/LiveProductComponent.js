import React, { PropTypes } from 'react'
import { formatMoney, FlowPlayer, redirectProduct } from '../common'

const productInfoBoxStyle = {
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  paddingBottom: '20px',
  display: 'table',
  width: '100%',
}

const productInfoStyle = {
  display: 'inline-block',
  position: 'relative',
  paddingTop: '20px',
  textAlign: 'left',
  width: '100%',
  verticalAlign: 'top',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
  marginTop: '-3px'
}

const discountTextStyle = {
  fontSize: '15px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const priceTextStyle = {
  fontSize: '24px',
  lineHeight: '24px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const buyButtonStyle = {
  width: '50%',
  textAlign: 'center',
  display: 'inline-block',
  height: '48px',
  borderRadius: '3px',
  backgroundColor: '#f24040',
  color: 'white',
  lineHeight: '48px',
  fontSize: '22px',
  verticalAlign: 'top'
}

const videoUrls = {
  cjmall: "http://cjmall.live.cdn.visioncloud.co.kr/cjmalllive/stream2/playlist.m3u8",
  gsshop: "http://livem.gsshop.com/gsshop_hd/_definst_/gsshop_hd.stream/playlist.m3u8",
  hnsmall: "http://s33.qtcdn.co.kr/media/liveM3U8/idx/88679292/enc/365888297/playlist.m3u8",
  hmall: "http://123.111.139.103:1935/live/ngrp:hmall.stream_mobile/playlist.m3u8",
  lottemall: "http://mohlslive.lotteimall.com/live/livestream/lotteimalllive_mp4.m3u8",
  nsmall: "http://livestream.nsmall.com/IPHONE/nsmallMobile.m3u8",
  immall: "http://shoppingflv.x-cdn.com/mshoplive/_definst_/live1.stream/playlist.m3u8",
  cjmallplus: "http://cjoshoppingplus.live.cdn.visioncloud.co.kr/cjosplus/live5/playlist.m3u8",
  gsmyshop: "http://livem.gsshop.com/gsmyshop_sd/_definst_/gsmyshop_sd.stream/playlist.m3u8",
  hmallplus: "http://edge1.everyon.tv/etv1sb/phd1215/playlist.m3u8",
  kshop: "http://cdnwow.kshop.co.kr:8080/livetv/Stream1/playlist.m3u8",
  ssgshop: "http://cdnwow.kshop.co.kr:8080/livetv/Stream1/playlist.m3u8",
  wshop: "http://wshopping.live.cdn.cloudn.co.kr/wlive/_definst_/wshopping.stream/playlist.m3u8",
  shopnt: "http://114.108.31.24/live/10012.m3u8",
}

const LiveProductComponent = ({ product }) => {
  const routeName = 'item'

  return (
    <div>
      <FlowPlayer src={videoUrls[product.genre2]} />
      <div style={productInfoBoxStyle}>
        <div style={productInfoStyle}>
          <div style={{marginBottom: '16px',}}>
            <img style={logoStyle} alt='img' src={`http://cache.m.ui.hsmoa.com/media/logo/logo_${product.genre2}.png`}/>
            <span style={{fontSize: '14px', lineHeight: '20px', color: '#ccc', margin: '0 5px', verticalAlign: 'middle',}}> | </span>
            <span style={{fontSize: '14px', lineHeight: '20px', color: '#aaa', verticalAlign: 'middle',}}>{product.start_time} ~ {product.end_time} </span>
          </div>
          <div style={{fontSize: '18px', color:'black', lineHeight: '24px', marginBottom: '24px',}}>{product.name}</div>
          { product.price > 0 ?
            <div style={{width:'50%', display: 'inline-block'}}>
              <div style={discountTextStyle}> {formatMoney(product.org_price)}원</div>
              <div style={priceTextStyle}>{formatMoney(product.price)}<span style={{fontSize: '16px'}}>원</span></div>
            </div> :
            <div style={{width:'50%', display: 'inline-block'}}>
              <div style={{fontSize: '24px', color: '#888888', fontWeight: 'bold',}}>상담/렌탈</div>
            </div>
          }
          <a target='_blank' href={redirectProduct(routeName, product.id, product.url)}>
            <div style={buyButtonStyle}>구매하기</div>
          </a>
        </div>
      </div>
    </div>
  )
}

LiveProductComponent.propTypes = {
  product: PropTypes.object,
}

export default LiveProductComponent
