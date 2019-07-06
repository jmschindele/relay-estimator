import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import NavBar from "../components/NavBar/NavBar";
import ProjectCard from "../components/ProjectCard/index";

class Projects extends Component {
  // state = {
  //   book: {}
  // };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc

  render() {
    return (
      <Container fluid>
        <NavBar />
        <Row>
          <Col size="md-3">
            <ProjectCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Projects;
