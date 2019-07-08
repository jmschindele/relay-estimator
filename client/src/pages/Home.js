import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import NavBar from "../components/NavBar/NavBar";

function Home() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <NavBar />
          <Jumbotron />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
