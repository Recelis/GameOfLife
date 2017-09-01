import React, { Component } from 'react';
import Buttons from './Buttons';

class Board extends Component {
    constructor() {
        super();
        let board = [];
        for (var row = 0; row < 80; row++) {
            let arr = [];
            for (var column = 0; column < 80; column++) {
                arr.push(Math.round(Math.random()));
            } board.push(arr);
        }
        let intervalID = setInterval(() => this.triggerNextGen(), 1000);
        this.state = {
            grid: board,
            intervalID:intervalID,
            isRunning:true,
        };
    }

    clickedCell(ii, jj) {
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        newgrid[ii][jj] = newgrid[ii][jj] ? 0 : 1;
        this.setState({
            grid: newgrid,
        })
    }
    triggerNextGen() {
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        // loop over entire board, pass rules 
        for (var row = 0; row < newgrid.length; row++) {
            for (var column = 0; column < newgrid[row].length; column++) {
                // get values of neighbours
                // loop 6 neighbours
                let liveNeigh = 0;
                for (var neighX = row - 1; neighX < row + 2; neighX++) {
                    if (neighX < 0 || neighX >= 80) continue;
                    for (var neighY = column - 1; neighY < column + 2; neighY++) {
                        if (neighY < 0 || neighY >= 80) continue;
                        if (newgrid[neighX][neighY] === 1) liveNeigh++;
                    }
                }
                if (newgrid[row][column] === 1){
                    if (liveNeigh < 2) newgrid[row][column] = 0;
                    else if (liveNeigh === 2 || liveNeigh === 3) continue;
                    else newgrid[row][column] = 0; 
                } else{
                    if (liveNeigh === 3) newgrid[row][column] = 1;
                }
            }
        }
        this.setState({
            grid: newgrid,
        })
    }
    renderingGrid() {
        let newgrid = JSON.parse(JSON.stringify(this.state.grid));
        let id = 0;
        const grid = [];
        for (var ii = 0; ii < newgrid.length; ii++) {
            const rows = [];
            for (var jj = 0; jj < newgrid[ii].length; jj++) {
                rows.push(<Cell key={id} row={ii} column={jj} color={newgrid[ii][jj]} clickedCell={this.clickedCell.bind(this, ii, jj)} />)
                id++;
            } grid.push(<div className="grid" key={ii}>{rows}</div>);
        }
        return grid;
    }
    runButton(){
        alert("runbutton pressed!");
        // if (this.state.isRunning === true) return;
        // else {
        //     let intervalID = setInterval(() => this.triggerNextGen(), 1000);
        //     this.setState({
        //         intervalID:intervalID,
        //         isRunning:true
        //     })
        // }
    }
    pauseButton(){

    }
    render() {
        return (
            <div className = "game">
                <Buttons
                runButton = {()=>this.runButton()}
                pauseButton = {()=>this.pauseButton()}
                clearButton = {()=>this.clearButton()}
                simSpeedButton = {()=>this.simSpeedButton()}
                />
                <div className="gridSizes">
                    {this.renderingGrid()}
                </div>
            </div>
        )
    }
}

function Cell(props) {
    if (props.color === 0) {
        return <span className="emptyCell"><button className="cellButton" onClick={() => props.clickedCell(props.row, props.column)}></button></span>
    }
    return <span className="liveCell"><button className="cellButton" onClick={() => props.clickedCell()}></button></span>
}

export default Board;