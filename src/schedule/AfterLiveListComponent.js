import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { formatMoney } from '../common'

const labelStyle = {
  width: '160px',
  height: '30px',
  borderRadius: '36px',
  backgroundColor: '#cccccc',
  marginTop: '20px',
  marginBottom: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const labelTextStyle = {
  color: 'white',
  lineHeight: '30px',
  fontSize: '14px'
}

const productBoxStyle = {
  marginBottom: '10px',
  position: 'relative',
  border:'1px solid rgba(0, 0, 0, 0.1)',
}

const scheduleBoxStyle = {
  width: '100%',
  height: '160px',
  display: 'table',
}

const scheduleImageStyle = {
  width: '160px',
  height: '160px',
  display: 'table-cell',
  position: 'relative',
}

const subScheduleImageStyle = {
  width: '80px',
  height: '80px',
  display: 'table-cell',
  position: 'relative',
}

const scheduleDescStyle = {
  width: '100%',
  verticalAlign: 'top',
  display: 'table-cell',
  padding: '14px 16px 0 16px',
  textAlign: 'initial',
  position: 'relative',
}

const logoStyle = {
  height: '15px',
  verticalAlign: 'inherit',
}

const timeStyle = {
  lineHeight: '16px',
  fontSize: '13px',
  verticalAlign: 'inherit',
  color: '#8d8d8d',
}

const titleStyle = {
  color:'black',
  marginTop: '5px',
  lineHeight: '24px',
  fontSize: '16px',
}

const priceDivStyle = {
  position: 'absolute',
  bottom: '10px',
  lineHeight: '19px',
}

const discountTextStyle = {
  fontSize: '12px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const priceTextStyle = {
  fontSize: '19px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const productPriceZeroStyle = {
  fontSize: '17px',
  color: '#888888',
  fontWeight: 'bold',
}

const subTitleStyle = {
  color:'black',
  lineHeight: '17px',
  fontSize: '14px',
  height: '17px',
  overflow: 'hidden'
}

const subProductBoxStyle = {
  display: 'table',
  width: '100%',
  padding: '10px',
}

const subDiscountTextStyle = {
  fontSize: '10px',
  lineHeight: '11px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const subPriceTextStyle = {
  fontSize: '15px',
  lineHeight: '15px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const subScheduleDescStyle = {
  verticalAlign: 'top',
  display: 'table-cell',
  padding: '11px 16px 0 0',
  textAlign: 'initial',
  position: 'relative',
  borderTop: '1px solid rgba(0, 0, 0, 0.05)'
}

class AfterLiveListComponent extends Component {

  render () {
    return (
    <div ref="schedule">
       {
         this.props.schedules.map((schedule, index) =>
         <div key={index}>
           {
             schedule.data.length > 0 ?
              <div style={labelStyle}> <span style={labelTextStyle}>{schedule.time} (방송예정)</span> </div> : ''
           }
          {
            schedule.data.map((product, productIndex) =>
              <div style={productBoxStyle} key={productIndex}>
                <Link to={`/i/${product.id}`}>
                  <div style={scheduleBoxStyle}>
                    <div style={scheduleImageStyle}>
                      <img style={scheduleImageStyle} src={product.img} alt="productImg"/>
                    </div>
                    <div style={scheduleDescStyle}>
                      <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo/logo_' + product.genre2 + '.png'}/>
                      <span style={timeStyle}> | {product.start_time} ~ {product.end_time} </span>
                      <div style={titleStyle}> {product.name} </div>
                      { product.price > 0 ?
                        <div style={priceDivStyle}>
                          <div style={discountTextStyle}> {formatMoney(product.org_price)}원</div>
                          <div style={priceTextStyle}>{formatMoney(product.price)}<span style={{fontSize: '14px'}}>원</span></div>
                        </div> :
                        <div style={priceDivStyle}><span style={productPriceZeroStyle}> 상담/렌탈 </span></div>
                      }
                    </div>
                  </div>
                </Link>
                {
                  product.same_time_item ?
                    product.same_time_item.map((item, itemIndex) =>
                      <Link to={`/i/${item.id}`} key={itemIndex}>
                        <div style={subProductBoxStyle}>
                            <div style={subScheduleImageStyle}>
                              <img style={subScheduleImageStyle} src={item.img} alt="itemImg"/>
                            </div>
                            <div style={{width:'12px', display:'table-cell'}}></div>
                            <div style={subScheduleDescStyle}>
                              <div style={subTitleStyle}>{item.name}</div>
                              { item.price > 0 ?
                                <div style={priceDivStyle}>
                                  <div style={subDiscountTextStyle}>{formatMoney(item.org_price)}원 </div>
                                  <div style={subPriceTextStyle}>{formatMoney(item.price)}<span style={{fontSize: '11px'}}>원</span> </div>
                                </div> :
                                <div style={priceDivStyle}><span style={{fontSize: '14px', color: '#888888', fontWeight: 'bold',}}> 상담/렌탈 </span></div>
                              }
                            </div>
                        </div>
                      </Link>
                    ) : ''
                }
              </div>
            )
          }
          </div>
        )
      }
    </div>
  );
  }
}

AfterLiveListComponent.propTypes = {
  schedules: PropTypes.array,
}

export default AfterLiveListComponent;
