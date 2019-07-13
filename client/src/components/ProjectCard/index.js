import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard() {
  return (
    <div className="card-p">
      <div className="card-body">
        <h5 className="card-title">Project #1</h5>
        <hr />
        <p className="card-text">project #1 details</p>
        <hr />
        <hr />
        <Link to="#" className="card-link-p">
          Edit/Add/Remove Tasks
        </Link>
        <hr />
        <hr />
        <Link to="/estimate" className="card-link-p">
          View Graph/Breakdown
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
