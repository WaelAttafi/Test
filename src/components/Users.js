import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "../user.jpg";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ users: res.data });
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "#f7f7f757" }} className="mt-2">
        <h1 style={{ textAlign: "center" }} className="p-3">
          Users List
        </h1>
        <div className="contaner row justify-content-around">
          {this.state.users.map(el => (
            <div key={el.id} className="profile-card col-5">
              <div className="w-100 user-card-header"></div>
              <img className="rounded-circle " src={img} alt="user"></img>
              <div className="user-name">{el.name}</div>
              <div className="user-profession p-4">{el.email}</div>
              <div>Work at : {el.company.name}</div>
              <Link to={"/" + el.id} className="btn btn-primary  m-3">
                See Posts
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Users;
