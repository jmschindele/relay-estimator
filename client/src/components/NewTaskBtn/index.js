import React from 'react';
// import ProjectCard from "../ProjectCard/index";
import "./style.css";

function NewTaskBtn(props) {

    return (
      <button className="new-task-btn" {...props}>
        {" "}
        + Task
      </button>
    );
  
}
export default NewTaskBtn;
