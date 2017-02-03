import React, { PropTypes } from 'react'

const labelStyle = {
  width: '160px',
  height: '30px',
  borderRadius: '36px',
  backgroundColor: '#8d8d8d',
  marginTop: '20px',
  marginBottom: '10px',
  marginRight: 'auto',
  marginLeft: 'auto',
}

const labelTextStyle = {
  color: 'white',
  lineHeight: '30px',
}

const scheduleBoxStyle = {
  width: '690px',
  height: '160px',
  border: '1px solid #e5e5e5',
  marginBottom: '10px',
  display: 'table',
}

const scheduleImageStyle = {
  width: '160px',
  height: '160px',
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
  marginTop: '5px',
  lineHeight: '24px',
  fontSize: '16px',
}

const priceDivStyle = {
  position: 'absolute',
  bottom: '11px',
}

const discountTextStyle = {
  fontSize: '13px',
  color: '#aaaaaa',
  fontWeight: 'bold',
  textDecoration: 'line-through',
}

const priceTextStyle = {
  fontSize: '20px',
  color: '#ea1b27',
  fontWeight: 'bold',
}

const AfterLiveListComponent = ({ schedules }) => {
  return (
    <div>
       { 
         schedules.map((schedule, index) => 
         <div key={index}>
          <div style={labelStyle}> <span style={labelTextStyle}>{schedule.time} (방송예정)</span> </div>
          {
            schedule.data.map((product, productIndex) => 
              <div style={scheduleBoxStyle} key={productIndex}>
                <div style={scheduleImageStyle}>
                  <img style={scheduleImageStyle} src={product.img} alt="productImg"/>
                </div>
                <div style={scheduleDescStyle}>
                  <img style={logoStyle} alt='img' src={'http://cache.m.ui.hsmoa.com/media/logo3/logo_' + product.genre2 + '.png'}/> 
                  <span style={timeStyle}> | {product.start_time} ~ {product.end_time} </span>
                  <div style={titleStyle}> {product.name} </div>
                  <div style={priceDivStyle}> 
                    <div style={discountTextStyle}> {product.org_price}원</div>
                    <div style={priceTextStyle}> {product.price}<span style={{fontSize: '14px'}}>원</span></div> 
                  </div>
                </div>
              </div>
            )
          }
          </div>
        )
      }
    </div>
  );
}

AfterLiveListComponent.propTypes = {
  schedules: PropTypes.array,
}

export default AfterLiveListComponent;

