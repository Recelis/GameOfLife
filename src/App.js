import React, { Component } from 'react';
import './App.css';
import Board from './components/Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game of Life</h1>
        <Board/>
        <p className= "copyRight">Created by Jacky Lui &#169; 2017</p>
      </div>
    );
  }
}

export default App;
