import React, { PropTypes } from 'react'
import { Link } from 'react-router'

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
  border: '1px solid #e6e6e6',
  position: 'relative',
  float: 'left',
  marginRight: '20px',
  marginBottom: '15px',
  cursor: 'pointer',
}

const hiddenStyle = {
  display: 'none',
}

const productImageStyle = {
  width: '228px',
  height: '230px',
}

const logoStyle = {
  height: '25px',
  verticalAlign: 'middle',
}

const ScheduleListComponent = ({title, expand, products}) => (
    <div style={sectionStyle}>
      <div style={sectionHeaderStyle}>
        <span> {title} </span>
        <span style={{float: 'right', fontSize: '14px', color: '#8D8D8D',}}> <Link to={expand.link}> {expand.title} ></Link></span>
      </div>
      <div style={{display: 'table', width: '1000px',}}>
        <ul style={productListStyle}>
          { products.map((product, index) => 
            <li key={index} style={index < 8 ? productBoxStyle : hiddenStyle }>
              <img style={productImageStyle} alt='img' src={product.img}/>
              <div style={{paddingLeft: '10px'}}>
                <div>
                  <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + product.genre2 + '.png'}/>
                  <span>{product.start_time} ~ {product.end_time}</span>
                </div>
                <div>{product.simple_name}</div>
                <div>{product.price} 원</div>
              </div>
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