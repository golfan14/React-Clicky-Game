import React from 'react';

class Jumbotron extends React.Component {
    state = {
        currentscore: 0,
        highscore: 0,
    }

    

    render () {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Memory Game</h1>
                    <p className="lead">Click on a picture to earn points, but don't click the same one twice!</p>
                    <h5 className="float-right">Current Score: | High Score: </h5>
                </div>
            </div>
        )
    }
}


export default Jumbotron;



