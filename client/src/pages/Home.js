import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NavBar from "../components/NavBar/NavBar";
import SignOutBtn from "../components/SignOutBtn";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <NavBar />
          <Jumbotron />
          <SignOutBtn />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
