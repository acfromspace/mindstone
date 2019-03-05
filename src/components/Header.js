import React, { Component } from "react";
import astronaut from "../images/astronaut.svg";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src={astronaut} className="App-logo" alt="acfromspace" />
      </div>
    );
  }
}
