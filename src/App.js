import React, { Component } from 'react';
import { LeftNavs, Headers } from './layout';
import './App.css';

const bodyStyle = {
  marginTop: '80px',
  display: 'table',
  width: '100%',
}

class App extends Component {
  render() {
    return (
      <div className="App" style={{height: "100%"}}>
        <Headers />
        <div style={bodyStyle}>
          <LeftNavs />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
