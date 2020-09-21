import React, { Component } from 'react';

class CoordinatesButton extends Component {
    state = {  }

    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }
    render() {
        return (
        <button onClick={this.handleClick}> Coordinates Button </button>
        );
    }
}
 
export default CoordinatesButton;