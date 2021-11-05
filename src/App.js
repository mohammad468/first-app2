import React, { Component } from "react";
import "./css/app.css";
import { Button, Badge, Container } from "react-bootstrap";
class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }
  getPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          postData: json,
        })
      );
  }
  render() {
    return (
      <Container>
        <Button onClick={this.getPost}>Get post</Button>
        <h1>my posts:</h1>
        {this.state.postData.map((post) => (
          <div yey={post.id}>
            <Badge>{post.id}</Badge>
            <span className="ms-1">{post.title}</span>
          </div>
        ))}
      </Container>
    );
  }
}

export default App;
