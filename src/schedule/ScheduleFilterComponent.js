import React, { PropTypes } from 'react'
import ScheduleCalendarComponent from './ScheduleCalendarComponent'

const filterNavStyle = {
  position: 'fixed',
}

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
    'shopnt': '쇼핑엔T'
  }

  return (
    <div style={filterNavStyle}>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>방송 날짜</h4>
        <div>
          <ScheduleCalendarComponent selectedDay={filter.date} onClickDay={onClickDay} />
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
          { Object.keys(channels).map((channel, index) => (
              <div key={index}>
                <input type="checkbox" onChange={(evt) => onClickChannel(channel, evt.target.checked)}/>
                <span> {channels[channel]}</span>
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