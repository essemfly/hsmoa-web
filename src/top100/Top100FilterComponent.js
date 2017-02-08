import React, { PropTypes } from 'react'
import cate1 from './images/cate-1@2x.png'
import cate2 from './images/cate-2@2x.png'
import cate3 from './images/cate-3@2x.png'
import cate4 from './images/cate-4@2x.png'
import cate5 from './images/cate-5@2x.png'
import cate6 from './images/cate-6@2x.png'
import cate1_on from './images/cate-1-on@2x.png'
import cate2_on from './images/cate-2-on@2x.png'
import cate3_on from './images/cate-3-on@2x.png'
import cate4_on from './images/cate-4-on@2x.png'
import cate5_on from './images/cate-5-on@2x.png'
import cate6_on from './images/cate-6-on@2x.png'

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

const categoryImageStyle = {
  height: '40px',
  cursor: 'pointer',
}

const Top100FilterComponent = ({ category, onClickCategory }) => {

  const categoryImagesMapper = [ '전체', '패션', '뷰티', '생활', '가전', '식품' ]
  const categories = [ cate1, cate2, cate3, cate4, cate5, cate6 ]
  const categoriesOn = [ cate1_on, cate2_on, cate3_on, cate4_on, cate5_on, cate6_on ]

  return (
    <div style={filterNavStyle}>
      <div style={filterSectionStyle}>
        <div>
          {
            categories.map((cat, index) => (
              <div key={index}>
                {
                  category !== categoryImagesMapper[index] ? 
                  <img style={categoryImageStyle} src={cat} alt='cat' onClick={(evt) => onClickCategory(categoryImagesMapper[index])}/> : 
                  <img style={categoryImageStyle} src={categoriesOn[index]} alt='cat2' onClick={(evt) => onClickCategory(categoryImagesMapper[index])}/>
                }
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