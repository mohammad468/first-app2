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
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>hello Mohammad</h1>
        </div>
      );
    } else {
      return (
        <div>
          <Button>Login</Button>
        </div>
      );
    }
  }
}

export default App;
