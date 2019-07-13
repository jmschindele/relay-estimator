import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function TaskCard() {
  return (
    <div className="card-t">
      <div className="card-body">
        <div className="form-row align-items-center">
          <div className="col-6">
            <label className="sr-only" htmlFor="inlineFormInput">
              {" "}
              Name{" "}
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Task"
            />
          </div>
          <div className="col-2">
            <label className="sr-only" htmlFor="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Rate"
            />
          </div>
          <div className="col-2">
            <label className="sr-only" htmlFor="inlineFormInput">
              Name
            </label>
            <input
              type="text"
              className="form-control mb-2"
              id="inlineFormInput"
              placeholder="Hours"
            />
          </div>
          <div className="col-2">
            <label htmlFor="staticTotal" className="col-sm-2 col-form-label">
              Total:
            </label>
            <input
              type="text"
              readOnly
              className="form-control-plaintext"
              id="staticTotal"
              value=""
            />
          </div>
        </div>

        <Link to="#" className="card-link-t">
          Edit |
        </Link>
        <Link to="#" className="card-link-t">
          Save
        </Link>
      </div>
    </div>
  );
}

export default TaskCard;
