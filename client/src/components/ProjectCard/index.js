import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Project title</h5>
        <p className="card-text">This project is the BEEZ KNEEzzz...</p>
        <Link to="#" className="card-link">
          Edit
        </Link>
        <Link to="#" className="card-link">
          View Progress
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
