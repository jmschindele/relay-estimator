import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewTasksBtn(props) {
  return (
    <span className="view-tasks-button text-center" {...props} role="button" tabIndex="0">
        Edit
    </span>
  );
}

export default ViewTasksBtn;
