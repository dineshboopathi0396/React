import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("Regular Component Render")
        return (
            <div>
                I am a Regular Component {this.props.name}.
            </div>
        )
    }
}

export default RegComp
