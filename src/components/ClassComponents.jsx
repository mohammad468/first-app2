import React, { Component } from "react";
import "../css/app.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

class ClassComponents extends Component {
  render() {
    return (
      <div>
        <Container className="my-5">
          <Form>
            <Button variant="info" onClick={this.props.sayHi}>
              ClassComponents
            </Button>
            <h5></h5>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ClassComponents;
