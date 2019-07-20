import React, { Component } from "react";
import "./style.css";
import API from "../../utils/API";
import firebase from "../../config/fbConfig";

class NewProjectCard extends Component {
  state = {
    title: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleProjectSave = event => {
    event.preventDefault();
    if (!this.state.title) {
      alert("The project needs a title");
    }
    let uid = firebase.auth().currentUser.uid;
    console.log("uid is: ", uid);
    API.createProject(uid, {
      projectName: this.state.title.trim()
    })
      .then(() => {
        this.setState({
          title: ""
        });
        this.props.loadProjects();
      })
      .catch(err => console.log(err));
  };

  render() {
    console.log(this.state.title);
    return (
      <>
        <div className="card-p">
          <div className="card-body">
            <label className="sr-only" htmlFor="project-title-input">
              Project title
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="project-title-input"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </div>
          <span className="card-link-t" onClick={this.handleProjectSave}>
            Save
          </span>
        </div>
      </>
    );
  }
}

export default NewProjectCard;
