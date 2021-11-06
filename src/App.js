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

  deletePost = (id) => {
    // console.log("deletePost");
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => console.log("delete", response));
  };

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
        <SendPost />
        {this.state.postData.map((post) => (
          <Posts
            key={post.id}
            deletePost={() => this.deletePost(post.id)}
            id={post.id}
            title={post.title}
          />
        ))}
      </div>
    );
  }
}

export default App;
