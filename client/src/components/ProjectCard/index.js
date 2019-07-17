import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function ProjectCard(props) {
  console.log('props from projectCard component: ',props)
  return (
    <div className="card-p">
      <div className="card-body">
      <h5 className="card-title">{props.title}</h5>
        <hr />
        <p className="card-text">project #1 details</p>
        <hr />
        <hr />
          <button onClick={props.handleProject}>Edit/Add/Remove Tasks</button>
        <hr />
        <hr />
        <Link to="/estimate" className="card-link-p" data={props.data}>
  
          <button onClick={props.handleProject}>View Graph/Breakdown</button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
