import React, { Component } from "react";
import SoundCloudPlayer from "react-player/lib/players/SoundCloud";
import astronaut from "./astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SoundCloudPlayer
          className="react-player"
          url="https://soundcloud.com/not-bees/datewave"
          playing="true"
          loop="true"
        />
        <div className="Astronaut">
          <img src={astronaut} className="App-logo" alt="acfromspace" />
        </div>
        <div className="Textbox">
          <h1>YOU ARE LOVED</h1>
        </div>
      </div>
    );
  }
}

// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
export default App;
