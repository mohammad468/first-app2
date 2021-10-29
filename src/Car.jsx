import React, { Component } from "react";

class Car extends Component {
  render() {
    return (
      <div>
        <p className="container">
          the model of car is {this.props.model} , the color of my car is{" "}
          {this.props.color}
          <span> {this.props.children}</span>
        </p>
      </div>
    );
  }
}

export default Car;
