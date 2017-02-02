import React, { PropTypes } from 'react'
import SearchComponent from './SearchComponent';
import { Link } from 'react-router'

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
  padding: '7px',
}

const searchBoxStyle = {
  verticalAlign: 'middle',
  display: 'table-cell',
  textAlign: 'left',
  paddingLeft: '50px',
}

const HeaderComponent = ({ keyword, onSearchClick, onChangeKeyword }) => (
    <div style={headerLayoutStyle}>
      <div style={headerStyle}>
        <div style={logoDivStyle}>
          <Link to="/">
            <img src="http://thum.buzzni.com/unsafe/796x0/smart/https://s3-ap-northeast-1.amazonaws.com/media.buzzni.net/2017/02/02/1486012060_5c44528e1780990fa619531a4b20c0c8.png" style={logoStyle} alt=''/>
          </Link>
        </div>
        <div style={navStyle}>
          <span className={window.location.pathname === '/' ? 'active' : ''} style={navItemStyle}><Link to="/">홈</Link></span>
          <span className={window.location.pathname === '/schedule' ? 'active' : ''} style={navItemStyle}><Link to="/schedule">편성표</Link></span>
          <span className={window.location.pathname === '/top' ? 'active' : ''} style={navItemStyle}><Link to="/top">TOP100</Link></span>
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
