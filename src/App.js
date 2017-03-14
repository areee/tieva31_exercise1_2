import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

let result = "123";

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '10%'
  },
};

class App extends Component {

constructor(){
  super();
  this.state={
    cb1checked: 0,
    cb2checked: 0,
    cb3checked: 0,
    cb4checked: 0,
    cb5checked: 0,
    cb6checked: 0,
    cb7checked: 0,
    cb8checked: 0,
    tf1: "",
    tf2: "",
  }
}

updateTf1 = (event) => {

}

updateTf2 = (event) => {
  
}

useCb1 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb1checked: 1,
    tf1: result,
  });
  }else{
    this.setState({
    cb1checked: 0,
  });
  }
}

useCb2 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb2checked: 1,
  });
  }else{
    this.setState({
    cb2checked: 0,
  });
  }
}

useCb3 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb3checked: 1,
  });
  }else{
    this.setState({
    cb3checked: 0,
  });
  }
}

useCb4 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb4checked: 1,
  });
  }else{
    this.setState({
    cb4checked: 0,
  });
  }
}

useCb5 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb5checked: 1,
  });
  }else{
    this.setState({
    cb5checked: 0,
  });
  }
}

useCb6 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb6checked: 1,
  });
  }else{
    this.setState({
    cb6checked: 0,
  });
  }
}

useCb7 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb7checked: 1,
  });
  }else{
    this.setState({
    cb7checked: 0,
  });
  }
}

useCb8 = (event, isChecked) => {
  if(isChecked){
    this.setState({
    cb8checked: 1,
  });
  }else{
    this.setState({
    cb8checked: 0,
  });
  }
}

convert = (event) => {

}

  render() {

    return (
      <MuiThemeProvider>
        <Paper style={{width: 400, margin: 20, padding: 20}}>
          <div style={styles.div}>
            <Checkbox id="cb 1" onCheck={this.useCb1} />
            <Checkbox id="cb 2" onCheck={this.useCb2} />
            <Checkbox id="cb 3" onCheck={this.useCb3} />
            <Checkbox id="cb 4" onCheck={this.useCb4} />
            <Checkbox id="cb 5" onCheck={this.useCb5} />
            <Checkbox id="cb 6" onCheck={this.useCb6} />
            <Checkbox id="cb 7" onCheck={this.useCb7} />
            <Checkbox id="cb 8" onCheck={this.useCb8} />
          </div>
          <div style={{textAlign: 'center'}}>
            <TextField value={this.state.tf1} id="tf 1" />
          </div>
          <div style={{textAlign: 'center'}}>
          <RaisedButton label="Convert" onClick={this.convert} />
          </div>
          <div style={{textAlign: 'center'}}>
            <TextField value={this.state.tf2} id="tf 2" />
          </div>
        </Paper>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
