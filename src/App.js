import React, { Component } from "react";
import "./css/app.css";
import MyCars from "./components/MyCars";
import MyCars2 from "./components/MyCars2";
class App extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }
  upOne = () => {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  };

  render() {
    return (
      <div>
        <MyCars upOne={this.upOne} number={this.state.number} />
        <MyCars2 number={this.state.number} />
      </div>
    );
  }
}

export default App;
