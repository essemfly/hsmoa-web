import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../common'

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
  height: '410px',
  position: 'relative',
  float: 'left',
  marginLeft: '20px',
  marginBottom: '20px',
  cursor: 'pointer',
}

const productImageStyle = {
  width: '248px',
  height: '250px',
}

const logoStyle = {
  height: '20px',
  verticalAlign: 'middle',
}

const timeStyle = {
  color: '#8d8d8d',
  fontSize: '12px',
  float: 'right',
}

const titleStyle = {
  fontSize: '15px',
  lineHeight: '22px',
  height: '44px',
  color:'black',
  marginTop:'2px',
  overflow: 'hidden',
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
              <div style={{border: '1px solid #e6e6e6', height: '370px', position: 'relative',}}>
                <Link to={`/i/${product.id}`}>
                  <img style={productImageStyle} alt='img' src={product.img}/>
                  <div style={{padding: '5px 10px'}}>
                    <div>
                      <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo/logo_' + product.genre2 + '.png'}/>
                      <span style={timeStyle}>{product.date.toString().slice(-2)}일 {product.start_time} 방송</span>
                    </div>
                    <div style={titleStyle}>{product.name}</div>
                    <div style={{position: 'absolute', bottom: '8px'}}>
                      { product.price > 0 ?
                        <div style={priceTextStyle}>{formatMoney(product.price)}<span style={{fontSize: '14px'}}>원</span></div> : <div style={{fontSize: '15px', color: '#888888'}}> 상담/렌탈 </div>
                      }
                    </div>
                  </div>
                </Link>
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
