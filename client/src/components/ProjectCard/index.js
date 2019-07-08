import React from "react";
import { Link } from "react-router-dom";
// import { Card } from "boostrap";

// let styles = {
//     cardStyle : {
//       “width”: “18rem”,
//       “background”: “red”
//     }
//    }

function ProjectCard() {
  return (
    <div
      className="card"
      // style="width: 18rem;"
    >
      <div className="card-body">
        <h5 className="card-title">Project title</h5>
        <h6 className="card-subtitle mb-2 text-muted">Project subtitle</h6>
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
