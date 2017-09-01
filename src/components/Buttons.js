import React, { Component } from 'react';

class Buttons extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <button onClick = {()=>this.props.runButton()}>Run</button>
                <button onClick = {()=>this.props.pauseButton()}>Pause</button>
                <button onClick = {()=>this.props.clearButton()}>Clear</button>
                <button onClick = {()=>this.props.simSpeedButton()}>Simulation Speed</button>
            </div>
        )
    }
}

export default Buttons;