import React, { Component } from "react";
import ReactPlayer from "react-player";
import SpotifyPlayer from "react-spotify-player";
import astronaut from "./images/astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    // size may also be a plain string using the presets 'large' or 'compact'
    const size = {
      width: 300,
      height: 500,
    };
    const view = "list"; // or 'coverart'
    const theme = "black"; // or 'white'
    return (
      <div className="Main">
        <div className="Header">
          <img src={astronaut} className="App-logo" alt="acfromspace" />
        </div>
        <div className="Players">
          <ReactPlayer
            url={["https://soundcloud.com/acfromspace/sets/roxanne"]}
            width="300px"
            height="500px"
          />
          <ReactPlayer
            url={["https://soundcloud.com/acfromspace/sets/roxanne"]}
            width="300px"
            height="500px"
          />
          <ReactPlayer
            url={["https://soundcloud.com/acfromspace/sets/roxanne"]}
            width="300px"
            height="500px"
          />
          <SpotifyPlayer
            uri="spotify:user:1252712964:playlist:0XVxReRFFUe7Z5DFYPdOSU"
            size={size}
            view={view}
            theme={theme}
          />
          <SpotifyPlayer
            uri="spotify:user:1252712964:playlist:0XVxReRFFUe7Z5DFYPdOSU"
            size={size}
            view={view}
            theme={theme}
          />
          <SpotifyPlayer
            uri="spotify:user:1252712964:playlist:0XVxReRFFUe7Z5DFYPdOSU"
            size={size}
            view={view}
            theme={theme}
          />
        </div>
        <div className="Footer">
          <h1>YOU ARE LOVED</h1>
        </div>
      </div>
    );
  }
}

export default App;
