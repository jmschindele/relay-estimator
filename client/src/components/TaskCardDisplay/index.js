import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function TaskCardDisplay(props) {
  return (
    <div className="card-tcd">
      <div className="card-body">
        <div className="row">
          <div className="col-3 task-title">
            <span>{props.task}</span>
          </div>
          <div className="col-3 text-center">
            <span className="task-heading">
              RATE
              <br />
            </span>{" "}
            <span className="task-result text-center">${props.rate}</span>
          </div>
          <div className="col-3 text-center">
            <span className="task-heading">
              HOURS
              <br />
            </span>{" "}
            <span className="task-result text-center">{props.hours}</span>
          </div>
          <div className="col-3 text-center">
            <span className="task-result">$</span>{" "}
            <span className="task-result text-center">{props.total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskCardDisplay;
