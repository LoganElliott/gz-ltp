import React, { Component } from 'react';
import './App.css';
import Goals from './Goals';
import Projects from './Projects';

import RaisedButton from 'material-ui/RaisedButton';
import Footer from './Footer';
import UserInformation from "./UserInformation";

class App extends Component {
  render() {
    const styles = {
      title: {
        fontSize: '24px',
        color: '#E8DAD8'
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 50px',
      },

      submitLabel: {
        fontSize: '24px',
      }
    };

    return (
      <div className="App" style={styles.container}>
        <div style={styles.title}>
          <h1>Long Term Plan 2018 </h1>
          <h2>- Fund Our City- </h2>
        </div>
        <div>
          Auckland Council is consulting of their plans for our city over the next 10 years. This is chance once every 3 years where we get to put forward our vision to shape the future of our city. We’ve made it really easy for you to submit on key issues, just follow our form below.
        </div>
        <UserInformation/>
        <Goals/>
        <Projects/>
        <div>
          <div>
            <RaisedButton
              label={'Submit!'}
              labelStyle={styles.submitLabel}
              backgroundColor={'rgb(103, 189, 176)'}
            />
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
