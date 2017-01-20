import React, { Component } from 'react';
import { Header } from './layout';
import './App.css';

const bodyStyle = {
  paddingTop: '80px',
  display: 'table',
  width: '100%',
  height: 'inherit',
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div style={bodyStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
