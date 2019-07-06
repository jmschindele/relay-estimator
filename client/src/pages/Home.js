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
          <Jumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
