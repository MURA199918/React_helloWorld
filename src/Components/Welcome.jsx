import React, { Component } from 'react';
class Welcome extends Component {
    goToHomePage = (event) => {
        this.props.history.push('/home')
    }

    render() {
        return(
            <div>
                Welcome Page
            <button onClick={this.goToHomePage}>Go To Home Page</button>
            </div>
        )
    }
}
export default Welcome;