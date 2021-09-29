import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import axios from 'axios'
import jwt_decode from "jwt-decode";


const BlogListByAuthor = () => {
  const [post, setPosts] = useState();
  const token = localStorage.getItem('token');
  let userDatails;
  if(token){
    userDatails=jwt_decode(token)
  }
  useEffect(() => {
    getPost()
  }, [])
  
  const getPost = async () =>{
    const response=await axios.get(`${process.env.REACT_APP_API_URL}/blogPosts/me/`+userDatails.id);
    setPosts(response.data)
  }
  return (
    <>
    <Row>
      {post &&  post.sort((a,b) => a.createdAt <  b.createdAt? 1 : -1).map((post) => (
        <Col md={4} style={{ marginBottom: 50 }}>
          <BlogItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
    </>
  );
}

export default BlogListByAuthor;
