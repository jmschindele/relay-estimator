import React from 'react';
// import ProjectCard from "../ProjectCard/index";
import "./style.css";

function NewTaskBtn(props) {

    return (
      <button className="btn-primary" {...props}>
        {" "}
        + Task
      </button>
    );
  
}
export default NewTaskBtn;
