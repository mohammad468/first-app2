import React, { Component } from "react";
import { Badge } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { v4 } from "uuid";

class MyCars extends Component {
  render() {
    return (
      <Container>
        <h1 className="mt-2">
          Number of product is
          <Badge key={v4()} bg="info" className="mx-1">
            {this.props.number}
          </Badge>
        </h1>
        <Button onClick={this.props.upOne}>Up one</Button>
      </Container>
    );
  }
}

export default MyCars;
