// import React, { Component } from "react";
// import { Row, Container } from "../components/Grid";
// import ProjectCard from "../components/ProjectCard/index";
// // import TaskCard from "../components/TaskCard/index";
// import NewProjectBtn from "../components/NewProjectBtn";
// import API from "../utils/API";

// class Projects extends Component {

//   constructor(props) {
//     super(props);

// this.state = {
//   userId: '',
//   titles: [],
//   projectName: ''
// };
// this.handleProject = this.handleProject.bind(ProjectCard)
// };

//   componentDidMount() {
//     console.log("props in mount: ", this.state);
//     const userId = this.props.userId;
//     this.loadProjects(userId);
//   }

//   loadProjects = userId => {
//     API.getUser(userId)
//       .then(res => {
//         let projArr = [];
//         let user = this.props.userId;
//         console.log('props ', this.props)
//         let titlesArr = [];
//         for (let i = 0; i < res.data[0].project.length; i++) {
//           titlesArr.push(res.data[0].project[i].projectName);
//         }
//         this.setState({
//           titles: titlesArr,
//           userId
//         });
//         console.log("res.data = ", res.data[0].project);
//       })
//       .catch(err => console.log(err));
//     };

//       handleProject = (event) => {
//         event.preventDefault();
//         alert('click handled')
//         // this.setState({
//         //   projectName: this.props.title
//         // })
//       }

//   render() {
//     console.log("imported this id: ", this.props.userId);
//     console.log('state 1: ',this.state && 'state 2: ',this.state)
//     return (
//       <Container fluid>
//         <NewProjectBtn />

//         <Row>

//             {this.state.titles && this.state.titles.map((project, i) => (
//               <div className='col-3'>

//               <ProjectCard
//               key={i}
//               title={project}
//               data={this.state.userId}
//               onClick={this.handleProject}
//               />

//               </div>

//             ))}

//             {/* <ProjectCard
//             title={this.state.titles}/> */}
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Projects;

// experimenting with redoing backend... and front end...

import React, { Component } from "react";
import { Row, Container } from "../components/Grid";
import ProjectCard from "../components/ProjectCard";
import NewProjectCard from "../components/ProjectCard/NewProjectCard";
import NewProjectBtn from "../components/NewProjectBtn";
import API from "../utils/API";

class Projects extends Component {
  state = {
    projects: [],
    newProjects: [],
    newProjectTitle: ""
  };

  componentDidMount() {
    this.loadProjects();
  }

  loadProjects = () => {
    API.getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.log(err));
  };

  deleteProject = id => {
    API.deleteProject(id)
      .then(res => this.loadProjects())
      .catch(err => console.log(err));
  };

  loadProjectTasks = id => {
    API.getTasksWhere(id).then(res => console.log(res));
  };

  handleProjectClick = id => {
    this.loadTasks(id);
    console.log(id);
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
