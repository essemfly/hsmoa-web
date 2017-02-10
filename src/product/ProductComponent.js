import React, { PropTypes, Component } from 'react'
import Slick from 'react-slick'

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}
const productInfoBoxStyle = {
  height: '320px',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  paddingBottom: '20px',
  display: 'table',
  width: 'inherit',
}

const productImageStyle = {
  width: '300px',
  height: '300px',
  display: 'table-cell',
  position: 'relative',
  marginRight: '30px',
}

const productInfoStyle = {
  display: 'table-cell',
  position: 'relative',
  paddingTop: '20px',
  textAlign: 'left',
  width: '100%',
  verticalAlign: 'top',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
}

const discountTextStyle = {
  fontSize: '15px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const priceTextStyle = {
  fontSize: '24px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const buyButtonStyle = {
  width: '100%',
  textAlign: 'center',
  bottom: '0',
  height: '48px',
  position: 'absolute',
  borderRadius: '3px',
  backgroundColor: '#f24040',
  color: 'white',
  lineHeight: '48px',
  fontSize: '22px',
}

class ProductComponent extends Component {
  constructor(props) {
    super(props);
    this.props.getProductInfo(this.props.productId)

    this.createDetailMarkup = this.createDetailMarkup.bind(this);
  }
    
  createDetailMarkup(rawHtml) {
    return { __html: rawHtml }
  }

  render() {
    console.log(this.props.product)

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

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

    return (
      <div style={baseStyle}>
        <div style={productInfoBoxStyle}>
          <img style={productImageStyle} alt='img' src={this.props.product.img}/>
          <div style={productInfoStyle}>
            <div style={{marginBottom: '20px',}}>
              <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + this.props.product.genre2 + '.png'}/>
              <span style={{fontSize: '14px', lineHeight: '17px', marginLeft: '20px', verticalAlign: 'middle',}}>{this.props.product.start_time} ~ {this.props.product.end_time} </span>
            </div>
            <div style={{fontSize: '18px', lineHeight: '24px', marginBottom: '20px',}}>{this.props.product.name}</div>
            <div style={discountTextStyle}> {this.props.product.org_price}원</div>
            <div style={priceTextStyle}>{this.props.product.price} 원</div>
            <div style={buyButtonStyle}>
              구매하기
            </div>
          </div>
        </div>
        <div style={{ textAlign: 'center',}} dangerouslySetInnerHTML={this.createDetailMarkup(this.props.product ? this.props.product.detail_html : '')} />
      </div>
    )
  }
} 

ProductComponent.propTypes = {
  product: PropTypes.object,
  getProductInfo: PropTypes.func,
}

export default ProductComponent