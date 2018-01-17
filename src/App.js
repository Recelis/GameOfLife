import React, { Component } from 'react';
import './App.css';
import Board from './components/Board';
import github from "./img/github.png";

class App extends Component {
  openWindow(){
    window.open("https://github.com/Recelis/gameoflife",'_blank');
  }

  render() {
    return (
      <div className="App">
        <h1 className = "title">Game of Life</h1>
        <Board/>
        <p className= "copyRight">Created by Jacky Lui &#169; 2017
          <span><button onClick = {()=>this.openWindow()}className = "github"><img className = "github" src = {github}></img></button></span>
        </p>
      </div>
    );
  }
}

export default App;
