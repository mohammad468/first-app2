import React, { Component } from "react";
import "./css/app.css";
import { Button } from "react-bootstrap";

class Car extends Component {
  constructor() {
    super();
    this.state = {
      name: "benz",
      speed: "280km",
    };
  }

  changeHandler = () => {
    this.setState({
      name: "BMW",
      speed:"400km"
    });
  };

  render() {
    return (
      <div>
        <div className="container mt-5">
          <p>
            the model of car is {this.state.name} , the highest speed of my car
            is {this.state.speed}
          </p>
        </div>
        <div className="container">
          <Button onClick={this.changeHandler}>Change</Button>
        </div>
      </div>
    );
  }
}

export default Car;
