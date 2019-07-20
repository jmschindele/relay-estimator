import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import DeleteBtn from "../DeleteBtn/index";
import ViewProjectBtn from "../ViewProjectBtn/index";
import ViewEstimateBtn from "../ViewEstimateBtn";

function ProjectCard(props) {
  return (
    <div className="card-p">
      <div className="card-body">
        <DeleteBtn onClick={() => props.handleProjectDelete(props._id)} />
        <h5 className="card-title">{props.title}</h5>
        <hr />
        <ViewProjectBtn onClick={() => props.handleTaskClick(props._id)} />
        <ViewEstimateBtn onClick={() => props.handleEstimateClick(props._id)} />
      </div>
    </div>
  );
}

export default ProjectCard;
