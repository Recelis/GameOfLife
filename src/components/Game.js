import React, { Component } from 'react';
import ControlPanel from './ControlPanel'
import Board from './Board'

class Game extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="game">
                <ControlPanel/>
                <Board/>
            </div>
        )
    }
}

export default Game;