import React, { Component } from "react";
import astronaut from "./astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Astronaut">
          <img src={astronaut} className="App-logo" alt="logo" />
        </div>
        <div className="Textbox">
          <p>
            <font color="white">You are not alone.</font>
          </p>
          <p>
            <font color="white">I'm here for you.</font>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
