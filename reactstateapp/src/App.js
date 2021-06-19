// import logo from './logo.svg';
import React from "react";
import './App.css';
import NewComp from "./Components/NewComp";

class App extends React.Component {
  style = {
    fontstyle: "Bold",
    color: "teal"
  }
  render() {
    return (
      <div className="App">
        <h1 style={this.style}>Welcome</h1>
        <NewComp />
      </div>
    );
  }
}

export default App;
