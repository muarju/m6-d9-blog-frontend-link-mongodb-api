import React, { useState,useEffect } from "react";
import { Container, Image } from "react-bootstrap";
import { withRouter } from "react-router";
import BlogAuthor from "../../components/blog/blog-author";
import "./styles.css";
import NavBar from '../../components/navbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom';


const Blog = (props) => {

  const { id } = props.match.params;
  const history = useHistory();
  const [posts, setPosts] = useState();

  useEffect(() => {
    getPost()
  }, [])
  
  const getPost = async () =>{
    const response=await axios.get(`${process.env.REACT_APP_API_URL}/blogPosts/`+id);
    if(response){
      setPosts(response.data)
    }else{
      history.push('/404')
    }
  }
console.log(posts)
 


      return (
        <>
        <NavBar></NavBar>
        <div className="blog-details-root">
         {posts &&  <Container>
            <Image className="blog-details-cover" src={posts.cover} fluid />
            <h1 className="blog-details-title">{posts.title}</h1>

            <div className="blog-details-container">
              <div className="blog-details-author">
                <BlogAuthor {...posts.author} />
              </div>
              <div className="blog-details-info">
                <div>{posts.createdAt}</div>
                <div>{`${posts.readTime.value} ${posts.readTime.unit} read`}</div>
              </div>
            </div>

            <div dangerouslySetInnerHTML={{ __html: posts.content }}></div>
          </Container>}
        </div>
        </>
      );
  }

export default withRouter(Blog);
