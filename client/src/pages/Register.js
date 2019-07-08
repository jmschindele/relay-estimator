import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import SignUp from "../components/auth/SignUp";

class Register extends Component {
  state = {
    user: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: ""

    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <SignUp />

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

export default Register;
