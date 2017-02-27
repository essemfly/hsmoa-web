import React from 'react';
import footer_appstore from './images/footer_appstore.png';
import footer_googleplay from './images/footer_googleplay.png';
import footer_background from './images/footer_background.png';

const footerStyle = {
  bottom: '0',
  width: '100%',
  display: 'table',
  background: 'black',
  height: '237px',
  position: 'relative',
  zIndex: '9'
}

const backgroundContainerStyle = {
  backgroundImage: 'url(' + footer_background + ')',
  marginRight: 'auto',
  marginLeft: 'auto',
  height: '237px',
  maxWidth: '1200px',
}

const containerStyle = {
  color: 'white',
  maxWidth: '980px',
  minWidth: '780px',
  marginRight: 'auto',
  marginLeft: 'auto',
  height: 'inherit',
}

const headStyle = {
  textAlign: 'left',
  paddingTop: '40px',
  paddingBottom: '35px',
}

const textStyle = {
  fontSize: '12px',
  textAlign: 'left',
  opacity: '0.8'
}

const linkTextStyle = {
  fontSize: '14px',
  lineHeight: '30px',
  color: 'white',
  float: 'right',
}

const FooterComponent = () => (
  <div style={footerStyle}>
    <div style={backgroundContainerStyle}>
      <div style={containerStyle}>
        <div style={headStyle}>
          <img style={{height: '26px',}} src='http://thum.buzzni.com/unsafe/250x0/smart/https://s3-ap-northeast-1.amazonaws.com/media.buzzni.net/2017/02/02/1486012024_efe1c7ce9614b65ca1631bba2a1dc925.png' alt="bgImg"/>
          <div style={linkTextStyle}>
            <a href='mailto:hsmoa@buzzni.com'><span>제휴/광고안내</span></a>
            <span style={{margin: '0 15px',}}> | </span>
            <a href='https://buzzni.com/service?from=hsmoa.com' target='_blank'><span>(주)버즈니 홈페이지</span></a>
            <span style={{margin: '0 15px',}}> | </span>
            <a href='https://www.facebook.com/homeshoppingmoa' target='_blank'><span>홈쇼핑모아 페이스북</span></a>
          </div>
        </div>
        <div>
          <img src={footer_googleplay} style={{float: 'right', marginLeft: '10px',}} alt="bgImg"/>
          <img src={footer_appstore} style={{float: 'right',}} alt="bgImg"/>
          <div style={textStyle}>
            홈쇼핑모아는 상품에 직접 관여하지 않으며<br/>
            상품 주문 배송 및 환불의 의무와 책임은 각 판매업체에 있습니다.<br/>
            <br/>
            Copyright 2014 by BUZZNI All Right Reserved<br/>
            고객센터: hsmoa@buzzni.com
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default FooterComponent;
