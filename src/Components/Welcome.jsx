import React, { Component } from 'react';
class Welcome extends Component {
    goToHomePage = (event) => {
        this.props.history.push('/')
    }

    render() {
        return(
            <div>
                Welcome to Home Page
            <button onClick={this.goToHomePage}></button>
            </div>
        )
    }
}
export default Welcome;