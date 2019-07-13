import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card-p">
      <div className="card-body">
<<<<<<< HEAD
        <h5 className="card-title">{props.title}</h5>
        {/* <p className="card-text">This project is the BEEZ KNEEzzz...</p> */}
        <Link to="#" className="card-link">
          Edit
=======
        <h5 className="card-title">Project #1</h5>
        <hr />
        <p className="card-text">project #1 details</p>
        <hr />
        <hr />
        <Link to="#" className="card-link-p">
          Edit/Add/Remove Tasks
>>>>>>> 6f26d99aecd900fa2b65ec3b71fec1a0c7898de3
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
