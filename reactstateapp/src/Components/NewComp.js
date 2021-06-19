import React, { Component } from 'react';
import BellA from "./bellA.png";
import BellB from "./bellB.png";

export class NewComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: "Subscribe to my Application",
            sub: "Subcribe",
            imageURL: BellB
        }
    }

    style = {
        fontstyle: "Bold",
        color: "purple"
    }
    ButtonChange = () => {
        this.setState({
            message: "Click the bell icon to get Update!",
            sub: "Subscribed"
        });
    }
    ImageChange = () => {
        this.setState({
            imageURL: BellA,
            message: "Thank You! Wecome to our Application!"
        });
    }

    render() {
        return (
            <div className="App">
                <h3 style={this.style}>{this.state.message}</h3>
                <button onClick={this.ButtonChange}>{this.state.sub}</button>
                <p />
                <img style={{ width: "30px", height: "30px" }}
                    src={this.state.imageURL}
                    onClick={this.ImageChange}
                    alt="" />
            </div>
        )
    }
}

export default NewComp
