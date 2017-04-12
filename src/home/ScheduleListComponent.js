import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../common'

const sectionStyle = {
  marginTop: '25px',
  textAlign: 'left',
}

const sectionHeaderStyle = {
  fontSize: '18px',
  lineHeight: '21px',
  marginTop: '18px',
  marginBottom: '18px',
}

const productListStyle = {
  position: 'relative',
  maxWidth: '980px',
  minWidth: '780px',
  display: 'table-cell',
}

const productBoxStyle = {
  width: '230px',
  height: '345px',
  position: 'relative',
  float: 'left',
  marginRight: '20px',
  marginBottom: '15px',
  cursor: 'pointer',
}

const productBoxBorderStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  border: '1px solid #000',
  opacity: '0.1'
}

const hiddenStyle = {
  display: 'none',
}

const productImageStyle = {
  width: '230px',
  height: '230px',
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

const productPriceStyle = {
  color: '#ea1b27',
  fontSize: '16px',
  fontWeight: 'bold',
}

const productPriceZeroStyle = {
  fontSize: '15px',
  color: '#888888',
  fontWeight: 'bold',
}

const ScheduleListComponent = ({title, expand, products}) => (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <span> {title} </span>
        <span style={{float: 'right', fontSize: '14px', color: '#8D8D8D',}}> <Link to={expand.link}> {expand.title} 〉</Link></span>
      </div>
      <div style={{display: 'table', width: '1000px',}}>
        <ul style={productListStyle}>
          { products.map((product, index) =>
            <li key={index} style={index < 8 ? productBoxStyle : hiddenStyle }>
              <Link to={`/i/${product.id}`}>
                <img style={productImageStyle} alt='img' src={product.img}/>
                <div style={{padding: '3px 10px'}}>
                  <div>
                    <img style={logoStyle} alt='img' src={'http://m.ui.hsmoa.com/media/logo/logo_' + product.genre2 + '.png'}/>
                    <span style={timeStyle}>{product.start_time} ~ {product.end_time}</span>
                  </div>
                  <div style={titleStyle}>{product.name}</div>
                  <div style={{position: 'absolute', bottom: '9px',}}>
                    { product.price > 0 ?
                      <div style={productPriceStyle}>{formatMoney(product.price)}<span style={{fontSize: '12px'}}>원</span></div> : <div style={productPriceZeroStyle}>상담/렌탈</div>
                    }
                  </div>
                </div>
                <div style={productBoxBorderStyle}></div>
              </Link>
            </li>
            )}
        </ul>
      </div>
    </div>
)

ScheduleListComponent.propTypes = {
    title: PropTypes.string,
    expand: PropTypes.object,
    products: PropTypes.array,
}

export default ScheduleListComponent
