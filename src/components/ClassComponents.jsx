import React, { Component } from "react";
import "../css/app.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

class ClassComponents extends Component {
  clickHandler = () => {
    alert("ClassComponents");
  };

  render() {
    return (
      <div>
        <Container className="my-5">
          <Button variant="info" onClick={this.clickHandler}>
            ClassComponents
          </Button>
        </Container>
      </div>
    );
  }
}

export default ClassComponents;
