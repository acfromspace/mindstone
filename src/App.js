import React, { Component } from "react";
import "./App.css";

import Header from "./components/Header.js";
import Players from "./components/Players.js";
import Footer from "./components/Footer.js";
class App extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <Players />
        <Footer />
      </div>
    );
  }
}

export default App;
