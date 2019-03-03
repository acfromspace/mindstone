import React, { Component } from "react";
// import ReactPlayer from "react-player";
import SpotifyPlayer from "react-spotify-player";
import astronaut from "./images/astronaut.svg";
import "./App.css";

class App extends Component {
  render() {
    const uniqueTitle = "unique";
    const width = "300";
    const height = "500";
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
          <iframe
            title={uniqueTitle}
            width={width}
            height={height}
            src="https://www.youtube.com/embed/dOFsCX72jyU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <iframe
            title={uniqueTitle}
            width={width}
            height={height}
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/204382042&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          />
          <iframe
            title={uniqueTitle}
            src="https://open.spotify.com/embed/user/1252712964/playlist/1su6mhUPJxkVvwhmBAwpPj"
            width={width}
            height={height}
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
          <SpotifyPlayer
            uri="spotify:user:1252712964:playlist:0XVxReRFFUe7Z5DFYPdOSU"
            size={size}
            view={view}
            theme={theme}
          />
          <SpotifyPlayer
            uri="spotify:user:spotify:playlist:37i9dQZF1DWTTHy0vndijk"
            size={size}
            view={view}
            theme={theme}
          />
        </div>
        <div className="Footer">
          <h1>"YOU ARE FILLED WITH DETERMINATION"</h1>
        </div>
      </div>
    );
  }
}

export default App;
