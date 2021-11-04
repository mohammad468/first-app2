import React, { Component } from "react";
import "./css/app.css";
import MyCars from "./components/MyCars";
class App extends Component {
  render() {
    return (
      <div>
        <MyCars />
      </div>
    );
  }
}

export default App;
