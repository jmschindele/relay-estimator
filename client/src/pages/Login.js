import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import SignIn from "../components/SignIn";

class Login extends Component {
  state = {
    user: {
      userName: "",
      password: ""
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <SignIn />

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
