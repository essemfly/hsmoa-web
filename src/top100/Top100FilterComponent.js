import React, { PropTypes } from 'react'

const filterNavStyle = {
  position: 'fixed',
  textAlign: 'center',
}

const filterSectionStyle = {
  paddingTop: '10px',
  paddingBottom: '5px',
  borderBottom: 'solid 1px #dddddd',
  width: '160px',
}

const categoryBoxStyle = {
  marginTop: '10px',
  marginBottom: '10px',
}

const selectedCategoryStyle = {
  fontSize: '15px',
  color: '#33be9f',
  lineHeight: '19px',
  textAlign: 'center',
}

const categoryTextStyle = {
  fontSize: '15px',
  color: '#444444',
  lineHeight: '19px',
  textAlign: 'center',
}

const Top100FilterComponent = ({ category, onClickCategory }) => {
  
  const categories = [ '전체', '패션', '뷰티', '생활', '가전', '식품']
  return (
    <div style={filterNavStyle}>
      <div style={filterSectionStyle}>
        <div>
          {
            categories.map((cat, index) => (
              <div style={categoryBoxStyle} key={index} onClick={(evt) => onClickCategory(cat)}>
                <span style={category === cat ? selectedCategoryStyle : categoryTextStyle}>{cat}</span>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

Top100FilterComponent.propTypes = {
  category: PropTypes.string,
  onClickCategory: PropTypes.func,
}

export default Top100FilterComponent;