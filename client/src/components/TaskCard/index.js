import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function TaskCard() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="form-row align-items-center">
          <div className="col-6">
            <label className="sr-only" for="inlineFormInput">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Task Name"
            />
          </div>
          <div class="col-2">
            <label class="sr-only" for="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Hours"
            />
          </div>
          <div class="col-2">
            <label class="sr-only" for="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Rate"
            />
          </div>
          <div class="col-2">
            <label class="sr-only" for="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              class="form-control mb-2"
              id="inlineFormInput"
              placeholder="Total"
            />
          </div>
        </div>

        <Link to="#" className="card-link">
          Edit
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
