import React, { PropTypes } from 'react'
import starOff from './images/star-off@2x.png'
import starOn from './images/star-on@2x.png'
import { formatMoney, redirectSearch } from '../common'

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
  height: '18px',
  verticalAlign: 'middle',
}

const timeStyle = {
  color: '#8d8d8d',
  fontSize: '12px',
  float: 'right',
}

const priceTextStyle = {
  fontSize: '18px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const SearchListComponent = ({ products }) => {
  if (products.length < 1) {
    return <div style={{ fontSize: '15px', lineHeight: '20px', padding: '40px 0 80px'}}>검색 결과가 없습니다.<br/>다른 조건으로 다시 검색해주세요.</div>
  }

  const routeName = 'search'

  return (
    <div style={sectionStyle}>
      <div style={{display: 'table', width: '810px',}}>
        <ul style={productListStyle}>
          { products.map((product, index) =>
            <li key={index} style={productBoxStyle}>
              <div style={{border: '1px solid #e6e6e6', height: '380px', position: 'relative',}}>
                <a target='_blank' href={redirectSearch(routeName, product.genre2, product.goods_id, product.url)}>
                  <img style={productImageStyle} alt='img' src={product.img}/>
                  <div style={{padding: '2px 10px'}}>
                    <div>
                      <img style={logoStyle} alt='img' src={'http://m.ui.hsmoa.com/media/logo/logo_' + product.genre2 + '.png'}/>
                      {
                        product.date > 0 ?
                        <span style={timeStyle}>{product.date.toString().slice(-2)}일 {product.start_time} 방송</span> : ''
                      }
                    </div>
                    <div style={{ fontSize: '15px', lineHeight: '20px', height: '40px', overflow: 'hidden', margin: '3px 0', color:'black'}}>{product.name}</div>
                    { product.review_rate > 0 ?
                      <span style={{paddingRight: '7px'}}>
                        {
                          [...Array(5)].map((x, i) =>
                          i < Math.round(product.review_rate) ?
                          <img key={i} style={{height: '13px',verticalAlign: 'top',marginTop:'1px'}} src={starOn} alt={`star${i}`} />:
                          <img key={i} style={{height: '13px',verticalAlign: 'top',marginTop:'1px'}} src={starOff} alt={`star${i}`} />
                        )}
                        <span></span>
                      </span> : ''
                    }
                    {
                      product.review_num > 0 ?
                      <span style={{  fontSize: '12px', color: '#8d8d8d', }}>리뷰 {formatMoney(product.review_num)}</span> : ''
                    }
                    <div style={{position: 'absolute', bottom: '9px', lineHeight: '19px',}}>
                      {
                        product.price > 9 ?
                        <div style={priceTextStyle}>{formatMoney(product.price)}<span style={{fontSize:'14px'}}>원</span></div> : <div style={{fontSize: '17px', color: '#888888', fontWeight: 'bold',}}> 상담/렌탈 </div>
                      }
                    </div>
                  </div>
                </a>
              </div>
            </li>
            )}
        </ul>
      </div>
    </div>
  );
}

SearchListComponent.propTypes = {
  schedules: PropTypes.object,
}

export default SearchListComponent;
