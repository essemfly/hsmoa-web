import React, { Component } from 'react';
import { LeftNavs, Headers } from './layout';
import './App.css';

const bodyStyle = {
  paddingTop: '80px',
  display: 'table',
  width: '100%',
  height: '100%',
}

class App extends Component {
  render() {
    return (
      <div className="App">
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
