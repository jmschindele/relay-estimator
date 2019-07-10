import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import SignIn from "../components/auth/SignIn";
import firebase from "../config/fbConfig";

class Login extends Component {
  state = {
    user: {
      userName: "",
      password: ""
    }
  };

  currentUser = firebase.auth().currentUser ? firebase.auth().currentUser.email : 'jeff';
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <SignIn />
{this.currentUser ? console.log(this.currentUser) : console.log('no user')}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
