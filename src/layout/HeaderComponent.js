import React, { PropTypes } from 'react'
import SearchComponent from './SearchComponent';

const headerStyle = {
  position: 'absolute',
  top: 0,
  borderBottom: '1px solid #bbb',
  height: '80px',
  backgroundColor: '#FFFFFF',
  display: 'table',
  width: '100%', 
}

const logoDivStyle = {
  width: '150px',
  display: 'table-cell',
  verticalAlign: 'middle',
}

const logoStyle = {
  height: '26px',
  lineHeight: '80px',
}

const searchBoxStyle = {
  verticalAlign: 'middle',
  display: 'table-cell',
  textAlign: 'left',
  paddingLeft: '50px',
}

const HeaderComponent = ({  keyword, onSearchClick, onChangeKeyword }) => (
  <div style={headerStyle}>
    <div style={logoDivStyle}>
      <img src="http://cache.hsmoa.com/media/img/web/logo_hsmoa.png" style={logoStyle} alt=''/>
    </div>
    <div style={searchBoxStyle}>
      <SearchComponent keyword={keyword} onChangeKeyword={onChangeKeyword} onSearchClick={onSearchClick} />
    </div>
  </div>
)


HeaderComponent.propTypes = {
  keyword: PropTypes.string,
  onSearchClick: PropTypes.func.isRequired,
  onChangeKeyword: PropTypes.func.isRequired,
}

export default HeaderComponent;
