import React, { Component } from "react";
import "../css/app.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";

class ClassComponents extends Component {
  constructor() {
    super();
    this.state = {
      paragraph: "text 1",
    };
  }
  clickHandler = () => {
    this.setState({
      paragraph: "text 2",
    });
  };

  render() {
    return (
      <div>
        <Container className="my-5">
          <Button variant="info" onClick={this.clickHandler}>
            ClassComponents
          </Button>
          <p className="text-primary">{this.state.paragraph}</p>
        </Container>
      </div>
    );
  }
}

export default ClassComponents;
