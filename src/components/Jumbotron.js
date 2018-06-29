import React from 'react';

const Jumbotron = props => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Memory Game</h1>
                <p className="lead">Click on a picture to earn points, but don't click the same one twice!</p>
                <h5 className="float-right">Current Score: {props.currentscore} | High Score: {props.highscore}</h5>
            </div>
        </div>
    )
}



export default Jumbotron;



