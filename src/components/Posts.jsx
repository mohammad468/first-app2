import React, { Component } from "react";
import { Badge, Container } from "react-bootstrap";
// import axios from "axios";

class Posts extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Container className="border border-primary rounded p-2 m-2">
          <h5>
            my posts: <Badge>{this.props.id}</Badge>
          </h5>
          <div key={this.props.id}>
            <span className="my-2 text-primary">
              <Badge bg="info">{this.props.title}</Badge>
            </span>
          </div>
        </Container>
      </div>
    );
  }
}

export default Posts;
