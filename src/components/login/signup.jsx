import React, {useState } from "react";
import { Row, Col,Container,Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios'
import NavBar from '../navbar'

const SignUp= ()=> {

    const [isValid, setIsValid] = useState(false);
    const [isError, setIsError] = useState(false);
    const [user, setUser] = useState({
        name:"",
        email: "",
        password: "",
        role: 2,
        avatar: `https://ui-avatars.com/api/?name=${name}`,
      });
      const { name, email, password } = user;
      const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value, avatar:  `https://eu.ui-avatars.com/api/?name=${name}` });
      };

    const onSubmit = async e => {
    e.preventDefault();
    const response= await axios.post(`${process.env.REACT_APP_API_URL}/authors`, user).catch(function (error) {
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
      
        if(!response){
            //showing error alert
        console.log(response)
        }else{
            setIsValid(true)
            setTimeout(() => {
                setIsValid(false)
            }, 3000)
        }
    }
 
    return (
      <>
      <NavBar></NavBar>
      <Container>
          <Row >
          <Col></Col>
          <Col md={4} style={{marginTop:60, marginBottom:50}}>
            <form  onSubmit={e => onSubmit(e)}>
                <h2>Sign Up</h2>
                {isValid 
                    ? <Alert variant="success">Your account created successfully, you can login now</Alert>
                    : <></>
                }
                {isError 
                    ? <Alert variant="danger">Something Wrong, Please try again</Alert>
                    : <></>
                }
            <div className="form-group">
                <label htmlFor="exampleInputEmail">Name</label>
                <input type="text" name="name" onChange={e => onInputChange(e)} className="form-control" id="exampleInputEmail" placeholder="Enter Name" required/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name="email" onChange={e => onInputChange(e)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div className="form-group mb-2">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" name="password"  onChange={e => onInputChange(e)} className="form-control" id="exampleInputPassword1" placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary mb-2">Sing Up</button>
            </form>
            <p text-align="center">Already have an account? <Link to='/login'>Login</Link></p>
          </Col>
          <Col></Col>
      </Row>
      </Container>
      </>
    );
  
}
export default SignUp;