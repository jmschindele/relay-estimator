// import React from "react";
// import { Link } from "react-router-dom";
// import "./style.css";
// import DeleteBtn from "../DeleteBtn/index";
// import ViewTasksBtn from "../ViewTasksBtn/index";
// import ViewEstimateBtn from "../ViewEstimateBtn";

// function ProjectCard(props) {
//   return (
//     <div className="project-card">
//       <span className="card-title h1">{props.title}</span>
//       <span className="card-body">
//         <div className="row">
//         <div className='col-sm-12'>
//           <div className='display-box'>
//           </div>
//         </div>
//         </div>
//         {/* <hr /> */}
//         <div className="row display-match">

//           <div className="col-sm-4">
//             <ViewEstimateBtn
//               onClick={() => props.handleEstimateClick(props._id)}
//             />
//           </div>
//           <div className="col-sm-4">
//             <ViewTasksBtn onClick={() => props.handleTaskClick(props._id)} />
//           </div>

//           <div className="col-sm-4">
//             <DeleteBtn onClick={() => props.handleProjectDelete(props._id)} />
//          </div>
//         </div>
//       </span>
//     </div>
//   );
// }

// export default ProjectCard;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DeleteBtn from "../DeleteBtn/index";
import ViewTasksBtn from "../ViewTasksBtn/index";
import ViewEstimateBtn from "../ViewEstimateBtn";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBoxImage: ""
    };
  }

  // handleOnMouseEnterTask = event => {

  // }

  render() {
    return (
      <div className="project-card">
        <span className="card-title h1">{this.props.title}</span>
        <span className="card-body">
          <div className="row">
            <div className="col-sm-12">
              <div className="display-box">
                {this.state.displayBoxImage ? (
                  <img src={this.state.displayBoxImage} />
                ) : <span className="card-title h1">Select An <br /> Option Below</span>}
              </div>
            </div>
          </div>
          {/* <hr /> */}
          <div className="row display-match">
            <div className="col-sm-4">
              <ViewEstimateBtn
                onClick={() => this.props.handleEstimateClick(this.props._id)}
                onMouseEnter={() =>
                  this.setState({ displayBoxImage: "/project_background.png" })
                }
                onMouseLeave={() => this.setState({ displayBoxImage: "" })}
              />
            </div>
            <div className="col-sm-4">
              <ViewTasksBtn
                onClick={() => this.props.handleTaskClick(this.props._id)}
                onMouseEnter={() =>
                  this.setState({ displayBoxImage: "https://image.shutterstock.com/image-vector/pencil-flat-icon-single-high-600w-737037337.jpg" })
                }
                onMouseLeave={() => this.setState({ displayBoxImage: "" })}
              />
            </div>

            <div className="col-sm-4">
              <DeleteBtn
                onClick={() => this.props.handleProjectDelete(this.props._id)}
                onMouseEnter={() => this.setState({displayBoxImage: './delete-icon.png'})}
                onMouseLeave={() => this.setState({displayBoxImage: ''})}
              />
            </div>
          </div>
        </span>
      </div>
    );
  }
}

export default ProjectCard;
