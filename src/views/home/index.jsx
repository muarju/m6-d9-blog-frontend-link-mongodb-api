import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";
import NavBar from '../../components/navbar'

export default class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    const name = localStorage.getItem('name');
    return (
     <>
      <NavBar></NavBar>
      <Container fluid="sm">
        {name ? <h1 className="blog-main-title">Welcome Back, {name}!</h1> : <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>}
        
        <BlogList />
      </Container>
     </>
    );
  }
}
