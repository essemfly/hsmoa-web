import React, { PropTypes } from 'react';
import { Icon } from 'antd';

const searchStyle = {
    height: "37px",
    border: "1px solid #F24040",
    width: "50%",
    padding: "0 15px"
}
const iconSpanStyle = {
    padding: "11px",
    backgroundColor: "#F24040",
    cursor: "pointer",
}

const iconStyle = {
    fontSize: "17px",
    color: "white",
}

const SearchComponent = ({ keyword, onSearchClick, onChangeKeyword }) => (
  <form onSubmit={onSearchClick}>
    <input type="text" style={searchStyle} value={keyword} onChange={(evt) => onChangeKeyword(evt.target.value)} />
    <span style={iconSpanStyle} onClick={onSearchClick}>
      <Icon type="search" style={iconStyle} />
    </span>
  </form>
)

SearchComponent.PropTypes = {
  keyword: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
}

export default SearchComponent;
