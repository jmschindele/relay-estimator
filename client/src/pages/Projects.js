import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import NewProjectCard from "../components/ProjectCard/NewProjectCard";
import NewProjectBtn from "../components/NewProjectBtn";
import API from "../utils/API";
import firebase from "../config/fbConfig";

class Projects extends Component {
  state = {
    projects: [],
    pulledProjects: [],
    newProjects: [],
    newProjectTitle: ""
  };

  componentDidMount() {
    this.loadProjects();
  }

  getProjectNames = () => {
    // alert('fire');
    this.state.pulledProjects.map((project, i) =>
      API.getProject(project).then(res => {
        this.setState({
          projects: this.state.projects.concat(res.data)
        });
      })
    );
  };

  loadProjects = () => {
    // let id = firebase.auth().currentUser.uid;
    let id = "3FPDyy58KaOY0Aw3qw4UNoAMsD03";
    API.getProjects(id)
      .then(res => {
        this.setState({ pulledProjects: res.data[0].project });
        this.getProjectNames();
      })
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  loadProjectTasks = id => {
    this.props.history.push(`/tasks/${id}`);
  };

  handleProjectClick = id => {
    console.log("id = ", id);
    this.loadProjectTasks(id);
  };

  handleProjectDelete = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  appendProjectCard = () => {
    this.setState({
      newProjects: this.state.newProjects.concat(<NewProjectCard />)
    });
  };

  render() {
    console.log(this.state);
    return (
      <Container fluid>
        <NewProjectBtn onClick={this.appendProjectCard} />

        <Row>
          {this.state.projects &&
            this.state.projects.map((project, i) => (
              <div className="col-3">
                <ProjectCard
                  key={project._id}
                  _id={project._id}
                  title={project.projectName}
                  handleProjectDelete={this.handleProjectDelete}
                  handleProjectClick={this.handleProjectClick}
                />
              </div>
            ))}
          {this.state.newProjects.map(newProjects => (
            <NewProjectCard loadProjects={this.loadProjects} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default Projects;
