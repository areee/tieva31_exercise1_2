import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

class App extends Component {



  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 400, padding: 20}}>
          Content
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
