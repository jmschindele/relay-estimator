import React, { Component } from "react";
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
    this.handleRedirect();
  }

  handleRedirect = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loadProjects()
      } else {
        this.props.history.push('/')
      }
    })
  }

  getProjectNames = () => {
    let projects = [];
    this.state.pulledProjects.map((project, i) =>
      API.getProject(project).then(res => {
        
        projects.push(res.data);
        this.setState({ projects });
      })
    );
    
  };

  loadProjects = () => {
    let id = firebase.auth().currentUser.uid;
    // let id = "3FPDyy58KaOY0Aw3qw4UNoAMsD03";
    API.getProjects(id)
      .then(res => {
        
        this.setState({ pulledProjects: res.data[0].project,
        newProjects: null });
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
    console.log('load project tasks id: ',id)
    this.props.history.push(`/tasks/${id}`);
  };

  loadProjectEstimate = id => {
    this.props.history.push(`/estimate/${id}`);
  };

  handleTaskClick = id => {
    this.loadProjectTasks(id);
  };

  handleEstimateClick = id => {
    this.loadProjectEstimate(id);
  };

  handleProjectDelete = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  appendProjectCard = () => {
    this.setState({
      // newProjects: this.state.newProjects.concat(<NewProjectCard />)
      newProjects: <NewProjectCard loadProjects={this.loadProjects} />
    });
  };

  render() {
    
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
        <NewProjectBtn onClick={this.appendProjectCard} />
        </div>
        </div>
        <div className='row'>
          {this.state.newProjects}
          {this.state.projects &&
            this.state.projects.map(
              (project, i) =>
                project && (
                  <div className="col-4" key={project._id}>
                    <ProjectCard
                      
                      _id={project._id}
                      title={project.projectName}
                      handleProjectDelete={this.handleProjectDelete}
                      handleTaskClick={this.handleTaskClick}
                      handleEstimateClick={this.handleEstimateClick}
                    />
                    </div>
                )
            )}
        </div>
      </div>
    );
  }
}

export default Projects;
