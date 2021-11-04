import React, { Component } from "react";
import "./css/app.css";
import { Button } from "react-bootstrap";
class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    let text;
    if (this.state.isLoggedIn) {
      text = <h1>welcome</h1>;
    } else {
      text = <Button>Login</Button>;
    }
    return <div>{text}</div>;
  }
}

export default App;
