import React, { Component } from "react";
import { Container } from "react-bootstrap";
import BlogListByAuthor from "../../components/blog/blog-list/blogListByAuthor";
import NavBar from '../../components/navbar'
import jwt_decode from "jwt-decode";

export default class MeStories extends Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
     <>
      <NavBar></NavBar>
      <Container fluid="sm">
        <BlogListByAuthor />
      </Container>
     </>
    );
  }
}
