import React, { Component } from "react";
import "./css/app.css";
import ClassComponents from "./components/ClassComponents";
class App extends Component {
  constructor() {
    super();
    this.state = {
      text: "HI MOHAMMAD",
    };
  }
  sayHi = () => {
    console.log(this.state.text);
  };
  render() {
    return (
      <div>
        <ClassComponents sayHi={this.sayHi} />
      </div>
    );
  }
}

export default App;
