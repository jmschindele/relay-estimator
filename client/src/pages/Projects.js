import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard/index";
// import TaskCard from "../components/TaskCard/index";
import NewProjectBtn from "../components/NewProjectBtn";
import API from "../utils/API"

class Projects extends Component {

  state = {
    titles: []
  };

  componentDidMount() {
    console.log('props in mount: ',this.props.userId)
    const userId = this.props.userId;
    this.loadProjects(userId);
  }

  loadProjects = (userId) => {
    API.getUser(userId)
      .then(res => {
        // let projArr = [];
        // let user = this.props.userId;
        // console.log('props ', this.props)
        let titlesArr = [];
        for (let i =0; i < res.data[0].project.length; i++ ){
          titlesArr.push(res.data[0].project[i].projectName)
        }
        this.setState({
          titles: titlesArr
        })
        console.log('res.data  = ',res.data[0].project)
      }
      )
      .catch(err => console.log(err));
  };

  render() { 

    console.log('imported this id: ',this.props.userId);

    return (
      <Container fluid>
     
        
        <NewProjectBtn />

        <Row>

            {this.state.titles && this.state.titles.map((project, i) => (
              
              <ProjectCard
              key={i}
              title={project}
              />
            ))}
            {/* <ProjectCard 
            title={this.state.titles}/> */}

        </Row>
      </Container>
    );
  }
}

export default Projects;
