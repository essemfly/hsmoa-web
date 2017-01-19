import React, { Component } from 'react';
import Search from './Search';

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

class Headers extends Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
  }

  search(val) {
    // API CALL TO this.state.searchKeyword 
    console.log(val);
  }

  render() {
    return (
      <div style={headerStyle}>
        <div style={logoDivStyle}>
          <img src="http://cache.hsmoa.com/media/img/web/logo_hsmoa.png" style={logoStyle} alt=''/>
        </div>
        <div style={searchBoxStyle}>
            <Search />
        </div>
      </div>
    );
  }
}

export default Headers;
