import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

class SendPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  postHandler = () => {
    const { title, body } = this.state;
    const data = {
      title: title,
      body: body,
    };
    axios
      .post("https://jsonplaceholder.typicode.com/posts", { data })
      .then((response) => console.log(response));
  };

  render() {
    return (
      <Container>
        <Form>
          <Form.Control
            type="text"
            value={this.state.title}
            onChange={this.changeHandler}
            placeholder="Enter Title"
            className="my-2"
            name="title"
          />
          <Form.Control
            type="text"
            value={this.state.body}
            onChange={this.changeHandler}
            placeholder="Enter Body"
            className="my-2"
            name="body"
          />
          <Button variant="primary" className="my-2" onClick={this.postHandler}>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default SendPost;
