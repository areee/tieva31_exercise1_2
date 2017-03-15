import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper'
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import RaisedButton from 'material-ui/RaisedButton'

var result = "00000000";
var result2 = "xxxxxx";
/*let index = 0;*/

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 20,
    width: '10%'
  },
};

/*function replaceAt(str, index, character) {
    return str.substr(0, index) + character + str.substr(index+character.length);
}*/

/*function setCharAt(str,index,chr) {
    return str.substr(0,index) + chr + str.substr(index+1);
}*/

String.prototype.replaceAt=function(index, char) {
    var a = this.split("");
    a[index] = char;
    return a.join("");
}


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
    tf1: result,
    tf2: "",
  }
}

updateTf1 = (event) => {

}

updateTf2 = (event) => {
  
}

useCb1 = (event, isChecked) => {
  if(isChecked){
    /*result = this.props.tf1;*/
    /*result = replaceAt(result, 1,"1");*/
    /*result = this.substr(0, 0) + "1" + this.substr(0+"1".length);*/
    /*result = "asdf";*/
    /*result = setCharAt(result,0,'1');*/
    
    result = result.replaceAt(0, "1");
    this.setState({
    cb1checked: 1,
    tf1: result,
  });
  }else{
    result = result.replaceAt(0, "0");
    this.setState({
    cb1checked: 0,
    tf1: result,
  });
  }
}

useCb2 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(1, "1");
    this.setState({
    cb2checked: 1,
    tf1: result,
  });
}else{
  result = result.replaceAt(1, "0");
    this.setState({
      cb2checked: 0,
      tf1: result,
  });
  }
}

useCb3 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(2, "1");
    this.setState({
      cb3checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(2, "0");
    this.setState({
      cb3checked: 0,
      tf1: result,
  });
  }
}

useCb4 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(3, "1");
    this.setState({
      cb4checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(3, "0");
    this.setState({
      cb4checked: 0,
      tf1: result,
  });
  }
}

useCb5 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(4, "1");
    this.setState({
      cb5checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(4, "0");
    this.setState({
      cb5checked: 0,
      tf1: result,
  });
  }
}

useCb6 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(5, "1");
    this.setState({
      cb6checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(5, "0");
    this.setState({
      cb6checked: 0,
      tf1: result,
  });
  }
}

useCb7 = (event, isChecked) => {
  if(isChecked){
    result = result.replaceAt(6, "1");
    this.setState({
      cb7checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(6, "0");
    this.setState({
      cb7checked: 0,
      tf1: result,
  });
  }
}

useCb8 = (event, isChecked) => {
  result = result.replaceAt(7, "1");
  if(isChecked){
    this.setState({
      cb8checked: 1,
      tf1: result,
  });
  }else{
    result = result.replaceAt(7, "0");
    this.setState({
      cb8checked: 0,
      tf1: result,
  });
  }
}

convert = (event) => {
  result2 = parseInt(result,2);
  this.setState({
      tf2: result2,
  });
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
            <TextField value={this.state.tf1} id="tf 1"/>
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
