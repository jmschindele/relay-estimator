import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import DeleteBtn from "../DeleteBtn/index";

function TaskCardDisplay(props) {
  return (
    <div className="card-tcd">
      <div className="card-body">
        <div className="row">
          <div className="col-2" />
          <div className="col-8 task-title">
            <div className="text-center mx-auto">
              <span>{props.task}</span>
            </div>
          </div>
          <div className="col-2">
            <DeleteBtn onClick={() => props.handleTaskDelete(props._id)} />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-4 text-center">
            <span className="task-heading">
              RATE
              <br />
            </span>{" "}
            <span className="task-result text-center">${props.rate}</span>
          </div>
          <div className="col-4 text-center">
            <span className="task-heading">
              HOURS
              <br />
            </span>{" "}
            <span className="task-result text-center">{props.hours}</span>
          </div>
          <div className="col-4 text-center">
            <span className="task-result-title">TOTAL</span>{" "}
            <span className="task-result text-center">
              ${parseInt(props.hours) * parseInt(props.rate)}
            </span>
          </div>
          {/* <DeleteBtn onClick={() => props.handleTaskDelete(props._id)} /> */}
        </div>
      </div>
    </div>
  );
}

export default TaskCardDisplay;
