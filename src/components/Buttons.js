import React, { Component } from 'react';

class Buttons extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <button className="button" onClick = {()=>this.props.runButton()}>Run</button>
                <button className="button" onClick = {()=>this.props.pauseButton()}>Pause</button>
                <button className="button" onClick = {()=>this.props.clearButton()}>Clear</button>
                <div className = "container">
                    <div className = "rows">
                        <span><button className="button" onClick = {()=>this.props.simSlower()}>-</button></span>
                        <span>Sim Speed</span>
                        <span><button className="button" onClick = {()=>this.props.simFaster()}>+</button></span>
                    </div>                   
                </div>
            </div>
        )
    }
}

export default Buttons;