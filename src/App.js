import React from "react";
import Users from "./components/Users";
import UserPosts from "./components/UserPosts";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Users} />
        <Route path="/:userId" component={UserPosts} />
      </div>
    </BrowserRouter>
  );
}

export default App;
