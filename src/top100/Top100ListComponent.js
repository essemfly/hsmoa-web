import React, { PropTypes } from 'react'

const sectionStyle = { 
  marginTop: '10px',
  textAlign: 'left',
}

const productListStyle = {
  position: 'relative',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table-cell',
}

const productBoxStyle = {
  width: '250px',
  height: '400px',
  position: 'relative',
  float: 'left',
  marginLeft: '20px',
  marginBottom: '15px',
  cursor: 'pointer',
}

const productImageStyle = {
  width: '248px',
  height: '250px',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
}

const priceTextStyle = {
  fontSize: '18px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const rankingStyle = {
  fontSize: '20px',
  display: 'block',
  textAlign: 'center',
  color: '#33be9f',
  borderBottom: '2px solid #32be9f',
  width: '34px',
}

const Top100ListComponent = ({ products }) => (
    <div style={sectionStyle}>
      <div style={{display: 'table', width: '810px',}}>
        <ul style={productListStyle}>
          { products.map((product, index) => 
            <li key={index} style={productBoxStyle}>
              <div style={{height: '40px'}}>
                <span style={rankingStyle}>{index + 1}</span>
              </div>
              <div style={{border: '1px solid #e6e6e6', height: '360px',}}>
                <img style={productImageStyle} alt='img' src={product.img}/>
                <div style={{paddingLeft: '10px'}}>
                  <div>
                    <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + product.genre2 + '.png'}/>
                    <span style={{float:'right', marginRight: '10px', lineHeight: '26px',}}>{product.start_time} 방송</span>
                  </div>
                  <div>{product.name}</div>
                  <div style={priceTextStyle}>{product.price} 원</div>
                </div>
              </div>
            </li>
            )}
        </ul>
      </div>
    </div>
)

Top100ListComponent.propTypes = {
    products: PropTypes.array,
}

export default Top100ListComponent