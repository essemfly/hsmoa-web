import React, { PropTypes } from 'react'
import { formatMoney, FlowPlayer, redirectProduct, onAirUrls } from '../common'

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

const LiveProductComponent = ({ product }) => {
  const routeName = 'item'

  return (
    <div>
      <FlowPlayer src={onAirUrls[product.genre2]} />
      <div style={productInfoBoxStyle}>
        <div style={productInfoStyle}>
          <div style={{marginBottom: '16px',}}>
            <img style={logoStyle} alt='img' src={`//m.ui.hsmoa.com/media/logo/logo_${product.genre2}.png`}/>
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
