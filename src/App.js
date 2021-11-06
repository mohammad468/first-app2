import React, { Component } from "react";
import "./css/app.css";
// import { Badge, Container } from "react-bootstrap";
import axios from "axios";
import Posts from "./components/Posts";
import SendPost from "./components/SendPost";
class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        postData: response.data,
      });
    });
  }
  render() {
    return (
      <div>
        <SendPost/>
        {this.state.postData.map((post) => (
          <Posts key={post.id} id={post.id} title={post.title} />
        ))}
      </div>
    );
  }
}

export default App;
