import React, { Component } from 'react';
import gzLogo from './images/icons/GZ-logo.png';
import './App.css';
import Goals from './Goals';
import Projects from './Projects';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    const styles = {
      container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '50px 50px',
      },
      emailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '20px',
      },
      checkbox: {
        maxWidth: '500px'
      },
      submitLabel: {
        fontSize: '24px',
      }
    };

    return (
      <div className="App" style={styles.container}>
        <img src={gzLogo} alt='Generation Zero Logo'/>
        <div>
          Auckland Council is consulting of their plans for our city over the next 10 years. This is chance once every 3 years where we get to put forward our vision to shape the future of our city. We’ve made it really easy for you to submit on key issues, just follow our form below.
        </div>
        <div style={styles.emailContainer}>
          <TextField
            floatingLabelText="First Name"
          />
          <TextField
            floatingLabelText="Last Name"
          />
          <TextField
            floatingLabelText="Enter email"
          />
            <TextField
              floatingLabelText="Local Board (if known)"
            />
            <Checkbox
              label='Do you want to receive email updates from Generation Zero?'
              style={styles.checkbox}
            />
        </div>
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
      </div>
    );
  }
}

export default App;
