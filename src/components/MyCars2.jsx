import React, { Component } from "react";
import { Badge } from "react-bootstrap";
// import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

class MyCars2 extends Component {
  render() {
    return (
      <Container>
        <h1>
          this is My Car In component 2<Badge>{this.props.number}</Badge>
        </h1>
      </Container>
    );
  }
}

export default MyCars2;
