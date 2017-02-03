import React, { PropTypes } from 'react'

const filterSectionStyle = {
  paddingBottom: '18px',
  borderBottom: 'solid 1px #dddddd',
}
const filterHeaderStyle = {
  fontSize: '15px',
  lineHeight: '19px',
  marginTop: '18px'
}

const ScheduleFilterComponent = ({ filter, onClickCategory, onClickChannel, onClickDay }) => {

  const categories = [ '생활·주방', '가전·디지털', '화장품·미용', '패션·잡화', '유아·아동', '여행·레저', '식품·건강', '보험']
  const channels = [ 'CJ오쇼핑', 'GSSHOP', '홈앤쇼핑', '현대홈쇼핑', '롯데홈쇼핑', 'NS홈쇼핑', '공영홈쇼핑', 'CJ오쇼핑+', 'GS마이샵', '현대홈쇼핑+', 'K쇼핑', '신세계쇼핑', 'W쇼핑', '쇼핑엔T']

  return (
    <div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>방송 날짜</h4>
        <div>
          필터가 들어갈 예정입니다.
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>카테고리</h4>
        <div>
          { categories.map((category, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(evt) => onClickCategory(category, evt.target.checked)}/>
                <span> {category} </span>
              </div>
            ))
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>쇼핑사</h4>
        <div>
          { channels.map((channel, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(evt) => onClickChannel(channel, evt.target.checked)}/>
                <span> {channel} </span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

ScheduleFilterComponent.propTypes = {
  filter: PropTypes.object,
  onClickCategory: PropTypes.func,
  onClickChannels: PropTypes.func,
  onClickDay: PropTypes.func,
}

export default ScheduleFilterComponent;