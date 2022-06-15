import React, { Component } from 'react'

export default class extends Component {
    state = {
        user: ""
    }
    handleChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }
    render() {
        return (
            <div>
                {this.state.user}
                <input name="user" onChange={this.handleChange} placeholder="enter your name" />
                <button onClick={this.buttonClick}>submitt
                </button>
            </div>
        )
    }
}
