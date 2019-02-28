import React, { Component } from "react";
import ReactPlayer from "react-player";
import astronaut from "./astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://soundcloud.com/not-bees/datewave"
            playing
            loop
          />
        </div>
        <div className="Astronaut">
          <img src={astronaut} className="App-logo" alt="logo" />
        </div>
        <div className="Textbox">
          <p>
            <font color="#D1BEE5">You are not alone.</font>
          </p>
          <p>
            <font color="#D1BEE5">I'm here for you.</font>
          </p>
        </div>
      </div>
    );
  }
}

// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
export default App;
