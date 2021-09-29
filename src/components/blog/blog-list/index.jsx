import React, {useState, useEffect} from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
import axios from 'axios'

const BlogList = () => {
  const [post, setPosts] = useState();

  useEffect(() => {
    getPost()
  }, [])
  
  const getPost = async () =>{
    const response=await axios.get(`${process.env.REACT_APP_API_URL}/blogPosts/`);
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

export default BlogList;
