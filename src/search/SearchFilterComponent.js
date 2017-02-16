import React, { PropTypes } from 'react'
import search_tab_1 from './images/search-tab-1@2x.png'
import search_tab_2 from './images/search-tab-2@2x.png'
import search_tab_3 from './images/search-tab-3@2x.png'
import search_tab_1_on from './images/search-tab-1-on@2x.png'
import search_tab_2_on from './images/search-tab-2-on@2x.png'
import search_tab_3_on from './images/search-tab-3-on@2x.png'

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

const categoryImageStyle = {
  height: '40px',
  cursor: 'pointer',
  verticalAlign: 'top',
}


const SearchFilterComponent = ({ categories, channels, filter, onClickCategory, onClickChannel, onClickLiveStatus }) => {
  if (categories.length < 1) {
    return <div></div>
  }

  const channelMappers = {
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
        <div style={{paddingTop: '10px',}}>
          {
            filter.source === '' ?
            <img style={categoryImageStyle} src={search_tab_1_on} alt='tab1' onClick={() => onClickLiveStatus(filter)}/> :
            <img style={categoryImageStyle} src={search_tab_1} alt='tab1' onClick={() => onClickLiveStatus(filter)}/>
          }
          {
            filter.source === 'future' ?
            <img style={categoryImageStyle} src={search_tab_2_on} alt='tab2' onClick={() => onClickLiveStatus(filter, 'future')}/> :
            <img style={categoryImageStyle} src={search_tab_2} alt='tab2' onClick={() => onClickLiveStatus(filter, 'future')}/>
          }
          {
            filter.source === 'past' ?
            <img style={categoryImageStyle} src={search_tab_3_on} alt='tab3' onClick={() => onClickLiveStatus(filter, 'past')}/> :
            <img style={categoryImageStyle} src={search_tab_3} alt='tab3' onClick={() => onClickLiveStatus(filter, 'past')}/>
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>카테고리</h4>
        <div>
          { categories.map((category, index) => (
              <div style={checkboxStyle} key={index}>
                <input type="radio" name="category" onChange={(evt) => onClickCategory(filter, category, evt.target.checked)}/>
                <span> {category.ncate3} </span>
              </div>
            ))
          }
        </div>
      </div>
      <div style={filterSectionStyle}>
        <h4 style={filterHeaderStyle}>쇼핑사</h4>
        <div>
          { channels.map((channel, index) => (
              <div style={checkboxStyle} key={index}>
                <input type="checkbox" onChange={(evt) => onClickChannel(filter, channel, evt.target.checked)}/>
                <span> {channelMappers[channel.key]}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

SearchFilterComponent.propTypes = {
  filter: PropTypes.object,
  categories: PropTypes.array,
  channels: PropTypes.array,
  onClickCategory: PropTypes.func,
  onClickChannels: PropTypes.func,
  onClickDay: PropTypes.func,
}

export default SearchFilterComponent;