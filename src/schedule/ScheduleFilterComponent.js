import React, { PropTypes } from 'react'

import ScheduleDateComponent from './ScheduleDateComponent'

const filterNavStyle = {
  position: 'fixed',
  width: 'inherit',
}

const filterSectionStyle = {
  paddingBottom: '18px',
  borderBottom: 'solid 1px #dddddd',
}

const filterHeaderStyle = {
  fontSize: '15px',
  lineHeight: '19px',
  marginTop: '18px',
  marginBottom: '12px',
}

const checkboxStyle = {
  margin: '8px 0',
  fontSize: '13px',
  color: '#8d8d8d',
}

const ScheduleFilterComponent = ({ isOpenCalendar, filter, onClickCategory, onClickChannel, onClickDay, changeDate }) => {
  const categories = [ '생활·주방', '가전·디지털', '화장품·미용', '패션·잡화', '유아·아동', '여행·레저', '식품·건강', '보험']
  const channels = {
    'nsmall': 'NS홈쇼핑',
    'gsshop': 'GSSHOP',
    'hmall': '현대홈쇼핑',
    'hmallplus': '현대홈쇼핑플러스샵',
    'hnsmall': '홈&쇼핑',
    'lottemall': '롯데홈쇼핑',
    'lotteimall': '롯데홈쇼핑',
    'cjmall': 'CJ오쇼핑',
    'gsmyshop': 'GSMYSHOP',
    'kshop': 'K쇼핑',
    'ssgshop': '신세계TV쇼핑',
    'wshop': 'W쇼핑',
    'immall': '아임쇼핑',
    '11st': '11번가',
    'cjmallplus': 'CJ오쇼핑플러스',
    'shopnt': '쇼핑엔T',
    'lotte': '롯데닷컴',
    'ssg': '신세계몰',
    'himart': '하이마트',
    'auction': '옥션',
    'gmarket': 'G마켓'
  }
  
  return (
    <div style={filterNavStyle}>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>방송 날짜</h4>
          <ScheduleDateComponent selectedDate={filter.date} changeDate={changeDate} />
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>카테고리</h4>
        <div>
          { categories.map((category, index) => (
              <div style={checkboxStyle} key={index}>
                <input id={`category${index}`} type="checkbox" onChange={(evt) => onClickCategory(category, evt.target.checked)}/>
                <label htmlFor={`category${index}`}></label>
                <span style={{verticalAlign: 'middle'}}> {category} </span>
              </div>
            ))
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>쇼핑사</h4>
        <div>
          { Object.keys(channels).map((channel, index) => (
              <div style={checkboxStyle} key={index}>
                <input id={`channel${index}`} type="checkbox" onChange={(evt) => onClickChannel(channel, evt.target.checked)}/>
                <label htmlFor={`channel${index}`}></label>
                <span style={{verticalAlign: 'middle'}}> {channels[channel]}</span>
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