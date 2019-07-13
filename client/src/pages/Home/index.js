import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import SignOutBtn from "../../components/SignOutBtn/index";
import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron />
            {/* <SignOutBtn /> */}
          </Col>
        </Row>
      </Container>
    );
  }
}
