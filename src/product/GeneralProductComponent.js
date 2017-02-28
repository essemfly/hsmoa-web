import React, { PropTypes } from 'react'
import Slider from 'react-slick'
import { formatMoney, redirectProduct } from '../common'

const productInfoBoxStyle = {
  height: '320px',
  borderBottom: '1px solid rgba(0,0,0,0.1)',
  paddingBottom: '20px',
  display: 'table',
  width: 'inherit',
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
  width: '100%',
  textAlign: 'center',
  bottom: '0',
  height: '48px',
  position: 'absolute',
  borderRadius: '3px',
  backgroundColor: '#f24040',
  color: 'white',
  lineHeight: '48px',
  fontWeight: 'bold',
  fontSize: '22px',
}

const slickSettings = {
  dots: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
};

const containerStyle = {
  position: 'relative',
  marginRight: '30px',
  width: '300px',
  overflow: 'hidden',
  height: '300px',
  color: '#333',
  className: 'hoit'
}

const GeneralProductComponent = ({ product }) => {
  if (Object.keys(product).length === 0) {
    return <div></div>
  }
  
  const routeName = 'item'

  return (
    <div style={productInfoBoxStyle}>
      <div style={containerStyle}>
        <Slider {...slickSettings}>
          {
            product.img_list.length > 0 ? 
              product.img_list.map((img, index) =>
                <div key={index} className='hoit'>
                  <img style={{width: '300px',}}src={`${img}`} alt={`product${index}`} />
                </div>
              ) : <div></div>
          }
        </Slider>
      </div>
      <div style={productInfoStyle}>
        <div style={{marginBottom: '16px',}}>
          <img style={logoStyle} alt='img' src={`http://cache.m.ui.hsmoa.com/media/logo/logo_${product.genre2}.png`}/>
          <span style={{fontSize: '14px', lineHeight: '20px', color: '#ccc', margin: '0 5px', verticalAlign: 'middle',}}> | </span>
          <span style={{fontSize: '14px', lineHeight: '20px', color: '#aaa', verticalAlign: 'middle',}}>{product.start_time} ~ {product.end_time} </span>
        </div>
        <div style={{fontSize: '18px', lineHeight: '24px', marginBottom: '20px', color:'black'}}>{product.name}</div>
        {
          product.price > 0 ?
          <div>
            <div style={discountTextStyle}> {formatMoney(product.org_price)}원</div>
            <div style={priceTextStyle}>{formatMoney(product.price)}<span style={{fontSize: '16px'}}>원</span></div>
          </div> :
          <div>
            <div style={{fontSize: '24px', color: '#888888', fontWeight: 'bold',}}> 상담/렌탈 </div>
          </div>
        }
        <a target='_blank' href={redirectProduct(routeName, product.id, product.url)}>
          <div style={buyButtonStyle}>
            구매하기
          </div>
        </a>
      </div>
    </div>
  )
}

GeneralProductComponent.propTypes = {
  product: PropTypes.object,
}

export default GeneralProductComponent
