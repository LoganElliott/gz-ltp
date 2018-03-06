import React, { Component } from 'react';
import gzLogo from './images/icons/GZ-logo.png';
import './App.css';
import Goals from './Goals';
import FundingChips from './FundingChips';

class App extends Component {
  render() {
    const container = {
      margin: '50px 50px',
    };

    return (
      <div className="App" style={container}>
        <img src={gzLogo}/>
        <h1>
          Long Term Plan Submission
        </h1>
        <Goals/>
        <FundingChips/>
      </div>
    );
  }
}

export default App;
