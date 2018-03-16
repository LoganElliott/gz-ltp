import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import App from './App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

const muiTheme = getMuiTheme({
  ...darkBaseTheme,
  fontFamily: 'Gotham-Bold',
  palette: {
    primary1Color: '#EDD94F',
    textColor: '#FFF'
  }
});

ReactDOM.render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <App />
  </MuiThemeProvider>
  , document.getElementById('root'));
