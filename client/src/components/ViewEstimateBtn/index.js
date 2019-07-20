import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewEstimateBtn(props) {
  return (
    <span className="view-project-button" {...props} role="button" tabIndex="0">
      <button type="button" class="btn btn-danger">
        View Estimate
      </button>
    </span>
  );
}

export default ViewEstimateBtn;
