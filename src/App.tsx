import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WithoutProp from './WithoutProp';
import WithProp from './WithProp';
import WithState from './WithState';


class App extends Component{
  render(){
  return (
    <div className = "App">
    <WithoutProp/>
    <WithProp name = "Ashwini" lastName = "Gawade">
    </WithProp>
    <WithProp name = "Priyanka" lastName = "Ambwane">
    </WithProp>
    <WithState/>
    </div>
  );
}
}

export default App;
