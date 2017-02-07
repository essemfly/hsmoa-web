import React, { PropTypes } from 'react'
import Top100FilterComponent from './Top100FilterComponent'
import Top100ListComponent from './Top100ListComponent'

const baseStyle = {
  width: '100%',
  maxWidth: '980px',
  marginRight: 'auto',
  marginLeft: 'auto',
  display: 'table',
}
const leftNavStyle = {
  width: '260px',
  height: '500px',
  marginRight: '30px',
  display: 'table-cell',
  textAlign: 'initial',
}

const scheduleListStyle = {
  display: 'table-cell',
  paddingLeft: '30px',
  paddingBottom: '50px',
}

const Top100Component = ({ category, products, changeCategory }) => {
  return (
    <div style={baseStyle}>
      <div style={leftNavStyle}>
        <Top100FilterComponent 
          category={category}
          changeCategory={changeCategory}
        />
      </div>
      <div style={scheduleListStyle}>
        <Top100ListComponent products={products} />
      </div>
    </div>
  );
}

Top100Component.propTypes = {
  category: PropTypes.string,
  products: PropTypes.array,
  changeCategory: PropTypes.func,
}

export default Top100Component;