import React, { useState } from "react";
import { Row, Col,Container,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import NavBar from '../navbar'

const Login = () => {
    const history = useHistory();
    const [isValid, setIsValid] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: ""
      });
      const { email, password } = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
      };

    const onSubmit = async e => {
    e.preventDefault();
    const response= await axios.post(`${process.env.REACT_APP_API_URL}/authors/login/`, user);
    const data=response.data
        if(data==="authentication failed"){
        setIsValid(true) //showing error alert
        console.log(data)
        }else{
            localStorage.setItem('token', data);
            history.push("/");
        }
    }
    return (
      <>
      <NavBar></NavBar>
      <Container>
          <Row >
          <Col></Col>
          <Col md={4} style={{marginTop:80, marginBottom:80}}>
            <form onSubmit={e => onSubmit(e)}>
                <h2>Login</h2>
                {isValid 
            ? <Alert variant="danger">Email or Password invalid</Alert>
            : <></>
            }
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" name="email" onChange={e => onInputChange(e)} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group mb-2">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" name="password" onChange={e => onInputChange(e)} class="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
            <p text-align="center">Don't have an account? <Link to='/signup'>Sign Up</Link></p>
          </Col>
          <Col></Col>
      </Row>
      </Container>
      </>
    );
}
export default Login;