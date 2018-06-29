import React from 'react';

class Thumbnail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicked: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        //get value of clicked for this component
        //check to see if clicked is true or false
        //if clicked is false, then it's successful
            //change click to true, call successful click fn and pass true as the argument
        //if clicked is true, this is not successful
            //reset card state
        let state = {...this.state}    
        let success;
        if (state.clicked) {
            success = false;

        } else {
            success = true;
            this.setState({ clicked: true })
        }   
        this.props.successfulClickFn(success)
    }


    render() {
        return (
            <div onClick={this.handleClick}>
                <img src={this.props.image} alt={this.props.name} className="img-thumbnail" />
            </div>
        )
    }
}


export default Thumbnail;