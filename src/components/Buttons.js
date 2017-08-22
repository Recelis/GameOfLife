import React, { Component } from 'react';

class Buttons extends Component{
    render(){
        return(
            <div>
                <button>Run</button>
                <button>Pause</button>
                <button>Clear</button>
                <button>Simulation Speed</button>
            </div>
        )
    }
}

export default Buttons;