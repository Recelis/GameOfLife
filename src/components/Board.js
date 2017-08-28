import React, { Component } from 'react';

class Board extends Component{
    constructor(){
        super();
        const columns = Array(120).fill(0);
        this.state= {
            grid: Array(80).fill(columns),
        }; 
    }
    renderingGrid(){
        const newgrid = JSON.parse(JSON.stringify(this.state.grid));
        let id = 0;
        const grid = [];
        for (var ii =0; ii < this.state.grid.length; ii++){
            const rows = [];
            for (var jj =0; jj<this.state.grid[ii].length; jj++){
                rows.push(<Cell key = {id} color = {newgrid[ii][jj]}/>)
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
        return <span className = "emptyCell"></span> 
    }
    return <span className = "liveCell"></span>     
}

export default Board;