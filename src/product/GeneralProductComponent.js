import React, { PropTypes } from 'react'
import Slider from 'react-slick'

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

  return (
    <div style={productInfoBoxStyle}>
      <div style={containerStyle}>        
        <Slider {...slickSettings}>
          {
            product.img_list.map((img, index) =>
              <div key={index} className='hoit'>
                <img style={{width: '300px',}}src={`${img}`} alt={`product${index}`} />
              </div>  
            )
          }
        </Slider>
      </div>
      <div style={productInfoStyle}>
        <div style={{marginBottom: '20px',}}>
          <img style={logoStyle} alt='img' src={`http://cache.m.ui.hsmoa.com/media/logo3/logo_${product.genre2}.png`}/>
          <span style={{fontSize: '14px', lineHeight: '17px', marginLeft: '20px', verticalAlign: 'middle',}}>{product.start_time} ~ {product.end_time} </span>
        </div>
        <div style={{fontSize: '18px', lineHeight: '24px', marginBottom: '20px',}}>{product.name}</div>
        <div style={discountTextStyle}> {product.org_price}원</div>
        <div style={priceTextStyle}>{product.price} 원</div>
        <div style={buyButtonStyle}>
          구매하기
        </div>
      </div>
    </div>
  )
}

GeneralProductComponent.propTypes = {
  product: PropTypes.object,
}

export default GeneralProductComponent