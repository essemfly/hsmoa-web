import React, { PropTypes } from 'react'
import search_icon from './search_icon.png'

const formStyle = {
    textAlign: "right",
}

const searchStyle = {
    height: "37px",
    border: "1px solid #F24040",
    width: "80%",
    padding: "0 15px"
}

const iconDivStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
}

const iconStyle = {
    height: '37px',
    cursor: 'pointer',
}

const SearchComponent = ({ keyword, onSearchClick, onChangeKeyword }) => (
  <div>
    <form onSubmit={onSearchClick} style={formStyle}>
        <input type="text" style={searchStyle} value={keyword} onChange={(evt) => onChangeKeyword(evt.target.value)} />
        <div style={iconDivStyle}>
            <img style={iconStyle} src={search_icon} alt='searchIcon' onClick={onSearchClick}/>
        </div>
    </form>
  </div>
)

SearchComponent.PropTypes = {
  keyword: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
}

export default SearchComponent;
