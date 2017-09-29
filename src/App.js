import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Character from './containers/Character'
import Jeopardy from './containers/Jeopardy' //we're renaming the defualt export from the Jeopardy container to Jeopardy even tho when we export it we're calling it Questions


class App extends Component {
  render() {
    return (
      <div>
        <Jeopardy />
        <Character />
      </div>
    );
  }
}

export default App;
