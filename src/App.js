import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

const styles = {
  display: 'inline-block'
}

class App extends Component {



  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 600, margin: 20, padding: 20}}>
          <div style={{styles}}>
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
            <Checkbox />
          </div>
          <div>
            <TextField setValue={0} id="text field 1" />
          </div>
          <div>
          <RaisedButton label="Convert" />
          </div>
          <div>
            <TextField setValue={0} id="text field 2" />
          </div>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
