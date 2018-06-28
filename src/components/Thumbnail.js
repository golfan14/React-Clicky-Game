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
        this.setState({ clicked: true })
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