import React, { Component } from "react";
import "./css/app.css";
import { Button } from "react-bootstrap";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      number: 0,
    };
  }

  upOne = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <h1>{this.state.number}</h1>
        </div>
        <div className="container">
          <Button onClick={this.upOne}>Change</Button>
        </div>
      </div>
    );
  }
}

export default Car;
