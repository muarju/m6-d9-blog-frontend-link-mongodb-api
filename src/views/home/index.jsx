import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";
import NavBar from '../../components/navbar'
import jwt_decode from "jwt-decode";

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const token = localStorage.getItem('token');
    let userDatails;
    if(token){
      userDatails=jwt_decode(token)
    }
    
    
    return (
     <>
      <NavBar></NavBar>
      <Container fluid="sm">
        {token ? <h1 className="blog-main-title">Welcome Back, {userDatails.name}!</h1> : <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>}
        
        <BlogList />
      </Container>
     </>
    );
  }
}
