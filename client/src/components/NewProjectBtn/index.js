import React, { Component } from "react";
// import ProjectCard from "../ProjectCard/index";
import "./style.css";

class NewProjectBtn extends Component {
  startNewProject = event => {
    event.preventDefault(this.props);
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() {
    console.log("Click happened");
  }

  // *** Need to finish writing the function
  // *** that gets a new project card generated once the button is clicked...

  render() {
    return (
      <button className="btn-primary" onClick={this.startNewProject}>
        {" "}
        + Prjkt
      </button>
    );
  }
}
export default NewProjectBtn;
