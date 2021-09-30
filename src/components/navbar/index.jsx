import React,{useState} from "react";
import { Container,FormControl, Navbar,Nav, Button,Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles.css";



const NavBar =() => {
  const history= useHistory()
  const [isValid, setIsValid] = useState(false);
  const token = localStorage.getItem('token');
  console.log()
    return (
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to="/">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <div> <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form></div>
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >

          {token===null 
            ? 
          <Button as={Link} to="/login" className="navbar-button bg-dark" size="lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Add Post
          </Button>
            :
            <Button as={Link} to="/new" className="navbar-button bg-dark" size="lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
              <path d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z" />
            </svg>
            Add Post
          </Button>
            }

          {token===null 
            ? 
            
            
            <Button
            as={Link}
            to="/login"
            className="navbar-button login bg-dark"
            size="lg"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M13.655 9H6.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V15c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V10c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237 1.123 1.123 0 00-.45-.128zm.012-1H6.333C4.5 8 4.5 10 4.5 10v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2v-5c0-2-1.833-2-1.833-2zM6.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clipRule="evenodd"/>
            </svg>
            Login
          </Button>
          
            : 
            <Button
            as={Link}
            to="/logout"
            className="navbar-button login bg-dark"
            size="lg"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M13.655 9H6.333c-.264 0-.398.068-.471.121a.73.73 0 00-.224.296 1.626 1.626 0 00-.138.59V15c0 .342.076.531.14.635.064.106.151.18.256.237a1.122 1.122 0 00.436.127l.013.001h7.322c.264 0 .398-.068.471-.121a.73.73 0 00.224-.296 1.627 1.627 0 00.138-.59V10c0-.342-.076-.531-.14-.635a.658.658 0 00-.255-.237 1.123 1.123 0 00-.45-.128zm.012-1H6.333C4.5 8 4.5 10 4.5 10v5c0 2 1.833 2 1.833 2h7.334c1.833 0 1.833-2 1.833-2v-5c0-2-1.833-2-1.833-2zM6.5 5a3.5 3.5 0 117 0v3h-1V5a2.5 2.5 0 00-5 0v3h-1V5z" clipRule="evenodd"/>
            </svg>
            Logout
          </Button>
            }
          
        </Nav>
        
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  
}

export default NavBar;