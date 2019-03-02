import React, { Component } from "react";
import ReactPlayer from "react-player";
import SpotifyPlayer from "react-spotify-player";
import astronaut from "./images/astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: "100%",
      height: 300,
    };
    const view = "list"; // or 'coverart'
    const theme = "black"; // or 'white'
    return (
      <div className="App">
        {/* <ReactPlayer
          className="react-player"
          playing="true"
          url={[
            "https://soundcloud.com/not-bees/datewave",
          ]}
        /> */}
        <div className="Astronaut">
          <img src={astronaut} className="App-logo" alt="acfromspace" />
        </div>
        <div className="Textbox">
          <SpotifyPlayer
            uri="spotify:user:1252712964:playlist:0XVxReRFFUe7Z5DFYPdOSU"
            size={size}
            view={view}
            theme={theme}
          />
          <h1>YOU ARE LOVED</h1>
        </div>
      </div>
    );
  }
}

export default App;
