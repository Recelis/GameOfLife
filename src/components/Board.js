import React, { Component } from 'react';

class Board extends Component{
    constructor(){
        super();
        let board =[];
        for (var row =0; row < 80; row++){
            let arr = [];
            for (var column =0; column < 120; column++){
                arr.push(Math.round(Math.random()));
            } board.push(arr);
        }
        this.state= {
            grid: board,
        }; 
    }

    clickedCell(ii,jj){
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        newgrid[ii][jj] = newgrid[ii][jj]?0:1;
        this.setState({
            grid:newgrid,
        })
    }    
    renderingGrid(){
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        let id = 0;
        const grid = [];
        for (var ii =0; ii < this.state.grid.length; ii++){
            const rows = [];
            for (var jj =0; jj<this.state.grid[ii].length; jj++){
                rows.push(<Cell key = {id} row = {ii} column = {jj} color = {newgrid[ii][jj]} clickedCell = {this.clickedCell.bind(this,ii,jj)}/>)
                id++;
            } grid.push(<div className="grid" key = {ii}>{rows}</div>);
        }
        return grid;
    }
    render(){
        return(
            <div className="gridSizes">
                {this.renderingGrid()}
            </div>
        )
    }
}

function Cell (props){
    if (props.color === 0){
        return <span className = "emptyCell"><button className="cellButton" onClick = {()=>props.clickedCell(props.row, props.column)}></button></span> 
    }
    return <span className = "liveCell"><button className="cellButton" onClick = {()=>props.clickedCell()}></button></span>     
}

export default Board;