import React, { Component } from "react";
import "../style/App.css";
export default class Players extends Component {
  render() {
    const uniqueTitle = "uniqueTitle";
    const width = "300";
    const height = "500";
    return (
      <div className="Players">
        <iframe
          title={uniqueTitle}
          src="https://open.spotify.com/embed/user/1252712964/playlist/1su6mhUPJxkVvwhmBAwpPj"
          width={width}
          height={height}
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          title={uniqueTitle}
          src="https://open.spotify.com/embed/user/1252712964/playlist/0XVxReRFFUe7Z5DFYPdOSU"
          width={width}
          height={height}
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <iframe
          title={uniqueTitle}
          src="https://open.spotify.com/embed/user/1252712964/playlist/37i9dQZF1DWTTHy0vndijk"
          width={width}
          height={height}
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
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
          width={width}
          height={height}
          src="https://www.youtube.com/embed/qK9OLRbAW30"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <iframe
          title={uniqueTitle}
          width={width}
          height={height}
          src="https://www.youtube.com/embed/tokEzJSW9HU"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
}
