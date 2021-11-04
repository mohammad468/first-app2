import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { v4 } from "uuid";

class MyCars extends Component {
  constructor() {
    super();
    this.state = {
      Cars: [
        { id: "1", name: "Benz" },
        { id: "2", name: "BMW" },
        { id: "3", name: "Hyundai Santa Fe" },
        { id: "4", name: "Samand" },
      ],
    };
  }
  render() {
    return (
      <div>
        <h1>My Cars:</h1>
        {this.state.Cars.map((car) => (
          <Badge key={v4()} bg="info" className="mx-1">
            {car.name}
          </Badge>
        ))}
      </div>
    );
  }
}

export default MyCars;
