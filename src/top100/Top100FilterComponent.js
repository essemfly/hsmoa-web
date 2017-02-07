import React, { PropTypes } from 'react'

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

const Top100FilterComponent = ({ category, products, changeCategory }) => {
  
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
          여기에 카테고리들이 들어갑니다.
        </div>
      </div>
    </div>
  );
}

Top100FilterComponent.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
  changeCategory: PropTypes.func,
}

export default Top100FilterComponent;