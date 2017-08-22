import React, { Component } from 'react';

class DragAndDrop extends Component{
    render(){
        return(
            <div>
                <SingleBlock/>
                <FreeDraw/>
                <StillLifeForms/>
                <Oscillators/>
                <SpaceShips/>
                <Methuselahs/>
                <InfiniteGrowth/>
            </div>
        )
    }
}

function SingleBlock(){
    return(
        <div><p>SB</p></div>
    )
}

function FreeDraw(){
    return(
        <div><p>FD</p></div>
    )
}

function StillLifeForms(){
    return(
        <div><p>SLF</p></div>
    )
}

function Oscillators(){
    return(
        <div><p>O</p></div>
    )
}

function SpaceShips(){
    return(
        <div><p>SS</p></div>
    )
}

function Methuselahs(){
    return(
        <div><p>M</p></div>
    )
}

function InfiniteGrowth(){
    return(
        <div><p>IG</p></div>
    )
}

export default DragAndDrop;