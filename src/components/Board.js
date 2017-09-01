import React, { Component } from 'react';
import Buttons from './Buttons';

class Board extends Component {
    constructor() {
        super();
        let board = [];
        // for (var row = 0; row < 86; row++) {
        //     let arr = [];
        //     for (var column = 0; column < 86; column++) {
        //         arr.push(Math.round(Math.random()));
        //     } board.push(arr);
        // }
        let cleanGrid = Array(86).fill(0);
        for (let ii =0; ii < 86; ii++){
            cleanGrid[ii]=Array(86).fill(0);
        }
        let intervalID = setInterval(() => this.triggerNextGen(), 1000);
        this.state = {
            grid: cleanGrid,
            intervalID: intervalID,
            isRunning: true,
            generation:0,
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
        const readgrid = JSON.parse(JSON.stringify(this.state.grid));
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        // loop over entire board, pass rules 
        for (var row = 0; row < newgrid.length; row++) {
            for (var column = 0; column < newgrid[row].length; column++) {
                // get values of neighbours
                // loop 6 neighbours
                let liveNeigh = 0;
                for (var neighX = row - 1; neighX < row + 2; neighX++) {
                    if (neighX < 0 || neighX >= 86) continue;
                    for (var neighY = column - 1; neighY < column + 2; neighY++) {
                        if (neighY < 0 || neighY >= 86) continue;
                        if (neighX === row && neighY === column) continue; // skip current cell
                        if (readgrid[neighX][neighY] === 1) liveNeigh++;
                    }
                }
                if (readgrid[row][column] === 1) {
                    if (liveNeigh < 2) newgrid[row][column] = 0;
                    else if (liveNeigh === 2 || liveNeigh === 3) continue;
                    else newgrid[row][column] = 0;
                } else {
                    if (liveNeigh === 3) newgrid[row][column] = 1;
                }
            }
        }
        let newGen = this.state.generation;
        newGen++;
        this.setState({
            grid: newgrid,
            generation:newGen,
        })
    }
    renderingGrid() {
        let newgrid = JSON.parse(JSON.stringify(this.state.grid));
        let id = 0;
        const grid = [];
        for (var ii = 3; ii < newgrid.length-3; ii++) {// to add an extra off screen values so that pattern works completely on screen
            const rows = [];
            for (var jj = 3; jj < newgrid[ii].length-3; jj++) {
                rows.push(<Cell key={id} row={ii} column={jj} color={newgrid[ii][jj]} clickedCell={this.clickedCell.bind(this, ii, jj)} />)
                id++;
            } grid.push(<div className="grid" key={ii}>{rows}</div>);
        }
        return grid;
    }
    runButton() {
        if (this.state.isRunning === true) return;
        else {
            let intervalID = setInterval(() => this.triggerNextGen(), 1000);
            this.setState({
                intervalID:intervalID,
                isRunning:true
            })
        }
    }
    clearButton(){
        let cleanGrid = Array(86).fill(0);
        for (let ii =0; ii < 86; ii++){
            cleanGrid[ii]=Array(86).fill(0);
        }
        clearInterval(this.state.intervalID)
        this.setState({
            grid:cleanGrid,
            isRunning:false,
            generation:0,
        })
    }
    pauseButton() {
        clearInterval(this.state.intervalID)
        this.setState({
            isRunning:false
        })
    }
    render() {
        return (
            <div className="game">
                <Buttons
                    runButton={() => this.runButton()}
                    pauseButton={() => this.pauseButton()}
                    clearButton={() => this.clearButton()}
                    simSpeedButton={() => this.simSpeedButton()}
                />
                <p>{this.state.generation}</p>
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