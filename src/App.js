import React, {Component} from 'react';
import './App.css';
import Char from './Char'

class App extends Component{
  state={
    text:"hello"
  }
  render(){
  return(
    <div className="App">
      <header className="App-header"/>
      
      <input type="text" value=""/>
      <Char text={this.state.text}/>
    </div>
  );
}
}

export default App;

