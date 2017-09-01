import React, { Component } from 'react';

class Buttons extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <button className="btn btn-primary" onClick = {()=>this.props.runButton()}>Run</button>
                <button className="btn btn-primary" onClick = {()=>this.props.pauseButton()}>Pause</button>
                <button className="btn btn-primary" onClick = {()=>this.props.clearButton()}>Clear</button>
                <div className = "container">
                    <div className = "rows">
                        <div className = "col-xs-4"><button className="btn btn-primary" onClick = {()=>this.props.simSlower()}>-</button></div>
                        <div className = "col-xs-4"><p>Sim Speed</p></div>
                        <div className = "col-xs-4"><button className="btn btn-primary" onClick = {()=>this.props.simFaster()}>+</button></div>
                    </div>                   
                </div>
            </div>
        )
    }
}

export default Buttons;