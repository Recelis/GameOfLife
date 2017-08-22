import React, { Component } from 'react';
import Buttons from './Buttons';
import DragAndDrop from './DragAndDrop';

class ControlPanel extends Component{
    render(){
        return(
            <div>
                <Buttons/>
                <DragAndDrop/>
            </div>
        )
    }
}

export default ControlPanel;