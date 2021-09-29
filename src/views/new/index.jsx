import React,{useState} from "react";
import "react-quill/dist/quill.snow.css";
import axios from 'axios'
import ReactQuill from "react-quill";
import { Container, Form, Button,Alert } from "react-bootstrap";
import "./styles.css";
import NavBar from '../../components/navbar'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const NewBlogPost= () => {
  const history = useHistory();
  const token = localStorage.getItem('token');
  const authorDetails = jwt_decode(token)
  const authorId = authorDetails.id
  const [isValid, setIsValid] = useState(false);
  const [isError, setIsError] = useState(false);
  const [blogpostImage, setBlogpostImage] = useState(null);
  const [post, setPost] = useState({
      category:"",
      title: "",
      readTime : {
        value: "2",
        unit: "Minutes"
      },
      author : `${authorId}`,
      content: ""
    });

    function handleChange(value, bodyContent) {
      setPost({
        ...post, [bodyContent]: value
        
      });
    }

    function handleBlogCover(file) {
      let form = new FormData()
      form.append('cover', file)
      setBlogpostImage(form);
    }

    const onSubmit = async e => {
      e.preventDefault();
      const response= await axios.post(`${process.env.REACT_APP_API_URL}/blogPosts`, post, {
        headers: {
          authorization: token,
        }
      }).catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            if(error.response.status===400 || 500){
              setIsError(true)
              setTimeout(() => {
                  setIsError(false)
              }, 3000)
            }
            console.log(error.response.headers);
          }
    });
    if(response){
       //post success without image
      const blogPostID= response.data._id
      console.log(blogPostID)
    
        const addImageResponse= await axios.put(`${process.env.REACT_APP_API_URL}/blogPosts/coverUpdate/`+blogPostID, blogpostImage)
        if(addImageResponse){
          //post success with image
          setIsValid(true)
            setTimeout(() => {
              setIsValid(false)
              history.push("/new");
            }, 3000)
        }
      
      
    }
  }
  return (
    <>
    <NavBar></NavBar>
    <Container className="new-blog-container">
      <h3>Add New Blog Post</h3>
    {isValid 
      ? <Alert variant="success">Your post added successfully</Alert>
      : <></>
      }
      <Form className="mt-5" onSubmit={e => onSubmit(e)}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" value={post.title} onChange={e => handleChange(e.target.value, 'title')} size="lg" placeholder="Title" required/>
        </Form.Group>
        <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select" onChange={e => handleChange(e.target.value, 'category')} name="category" >
            <option value="Technology">Technology</option>
            <option value="Data Science">Data Science</option>
            <option value="Programming">Programming</option>
            <option value="Freelancing">Freelancing</option>
            <option value="Tutorial">Tutorial</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="blog-content" className="mt-3">
          <Form.Label>Blog Content</Form.Label>
          <ReactQuill
            className="new-blog-content"
            name="content"
            value={post.content}
            onChange={(value) => handleChange(value, 'content')}
            required
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Cover</Form.Label><br></br>
          <Form.File
              id="cover"
              label="Blog Cover"
              onChange={(e) => handleBlogCover(e.target.files[0])}
              required
            />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{ marginLeft: "1em" }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
    </>
  );
    
}
export default NewBlogPost