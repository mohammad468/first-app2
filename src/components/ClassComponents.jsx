import React, { Component } from "react";
import "../css/app.css";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";

class ClassComponents extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      option: "option2",
    };
  }
  clickHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  changeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  };
  selectHandler = (event) => {
    this.setState({
      option: event.target.value,
    });
    console.log(event.target.value);
  };
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state.text);
    console.log(this.state.option);
  };
  render() {
    return (
      <div>
        <Container className="my-5">
          <Form>
            <Button variant="info" onClick={this.clickHandler}>
              ClassComponents
            </Button>
            <Form.Control
              type="text"
              onChange={this.changeHandler}
              value={this.state.text}
              placeholder="Enter Text"
              className="my-3"
            />
            <p variant="primary" onClick={this.clickHandler}>
              {this.state.text}
            </p>
            <Form.Select
              value={this.state.option}
              onChange={this.selectHandler}
            >
              <option value="option1">option 1</option>
              <option value="option2">option 2</option>
              <option value="option3">option 3</option>
              <option value="option4">option 4</option>
            </Form.Select>
            <Button
              variant="info"
              type="submit"
              className="my-3"
              onClick={this.submitHandler}
            >
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default ClassComponents;
