import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

/*const styles = {
  display: 'inline-block'
}*/

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '10%'
  },
  paperLeft:{
    flex: 1,
    height: '100%',
    margin: 10,
    textAlign: 'center',
    padding: 10
  },
  paperRight:{
    height: 600,
    flex: 4,
    margin: 10,
    textAlign: 'center',
  }
};

class App extends Component {



  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 400, margin: 20, padding: 20}}>
          <div style={styles.div}>
            <Checkbox id="1" />
            <Checkbox id="2" />
            <Checkbox id="3" />
            <Checkbox id="4" />
            <Checkbox id="5" />
            <Checkbox id="6" />
            <Checkbox id="7" />
            <Checkbox id="8" />
          </div>
          <div style={{textAlign: 'center'}}>
            <TextField setValue={0} id="text field 1" />
          </div>
          <div style={{textAlign: 'center'}}>
          <RaisedButton label="Convert" />
          </div>
          <div style={{textAlign: 'center'}}>
            <TextField setValue={0} id="text field 2" />
          </div>
        </Paper>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
