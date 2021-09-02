import React from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/login";
import SignUp from "./components/login/signup"
import Home from "./views/home";
import Blog from "./views/blog";
import NewBlogPost from "./views/new";
import { BrowserRouter, Route } from "react-router-dom";
import Logout from "./components/login/logout";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route exact path="/logout" component={Logout} />
      <Route path="/signup" exact component={SignUp} />
      <Route path="/blog/:id" exact component={Blog} />
      <Route path="/new" exact component={NewBlogPost} />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
