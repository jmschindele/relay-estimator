import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard/index";
import TaskCard from "../components/TaskCard/index";
import NewProjectBtn from "../components/NewProjectBtn";

class Projects extends Component {

  render() {
    return (
      <Container fluid>

        
        <NewProjectBtn />

        <Row>
          <Col size="md-3">
            <ProjectCard />
          </Col>
        </Row>
        <Row>
          <TaskCard />
        </Row>
      </Container>
    );
  }
}

export default Projects;
