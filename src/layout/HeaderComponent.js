import React, { PropTypes } from 'react'
import SearchComponent from './SearchComponent';

const headerLayoutStyle = {
  width: '100%',
  borderBottom: '1px solid #bbb',
  position: 'absolute',
  top: 0,
  height: '80px',
  backgroundColor: '#FFFFFF',
}

const headerStyle = {  
  display: 'table',
  width: '100%',
  maxWidth: '980px',
  minWidth: '780px',
  height: '80px',
  marginRight: 'auto',
  marginLeft: 'auto',
  verticalAlign: 'middle'
}

const logoDivStyle = {
  width: '150px',
  display: 'table-cell',
  verticalAlign: 'middle',
}

const logoStyle = {
  float: 'left',
  height: '26px',
  lineHeight: '80px',
}

const navStyle = {
  paddingLeft: '15px',
  verticalAlign: 'middle',
  display: 'table-cell',
  textAlign: 'left',
}

const navItemStyle = {
  margin: '0 15px',
  fontSize: '17px',
  fontWeight: 'bold',
}

const searchBoxStyle = {
  verticalAlign: 'middle',
  display: 'table-cell',
  textAlign: 'left',
  paddingLeft: '50px',
}

const HeaderComponent = ({  keyword, onSearchClick, onChangeKeyword }) => (
  <div style={headerLayoutStyle}>
    <div style={headerStyle}>
      <div style={logoDivStyle}>
        <img src="http://cache.hsmoa.com/media/img/web/logo_hsmoa.png" style={logoStyle} alt=''/>
      </div>
      <div style={navStyle}>
        <span style={navItemStyle}>홈</span>
        <span style={navItemStyle}>편성표</span>
        <span style={navItemStyle}>TOP100</span>
      </div>
      <div style={searchBoxStyle}>
        <SearchComponent keyword={keyword} onChangeKeyword={onChangeKeyword} onSearchClick={onSearchClick} />
      </div>
    </div>
  </div>
)


HeaderComponent.propTypes = {
  keyword: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
}

export default HeaderComponent;