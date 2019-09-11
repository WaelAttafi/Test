import React, { Component } from "react";
import axios from "axios";
import img from "../blog.jpg";

export default class UserPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts/").then(res => {
      this.setState({ posts: res.data });
    });
  }

  render() {
    let id = this.props.match.params.userId;

    return (
      <div className=" pt-3 container">
        <h1 style={{ textAlign: "center" }}>User Posts</h1>
        <div className="posts-container container ">
          {this.state.posts
            .filter(el => el.userId == id)
            .map(el => (
              <div key={el.id} class="w-25 ml-2 mt-3 card">
                <img src={img} className="card-img-top" alt="post" />
                <div className="card-body">
                  <h6 className="card-title">{el.title}</h6>
                  <p className="card-text">{el.body}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
