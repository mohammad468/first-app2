import React, { Component } from "react";
import { Badge } from "react-bootstrap";

class MyCars extends Component {
  constructor() {
    super();
    this.state = {
      Cars: ["Benz", "BMW", "Santafe", "Samand"],
    };
  }
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.Cars.map((car) => (
          <Badge bg="info" className="mx-1">
            {car}
          </Badge>
        ))}
      </div>
    );
  }
}

export default MyCars;
