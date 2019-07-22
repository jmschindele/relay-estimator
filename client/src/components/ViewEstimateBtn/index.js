import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewEstimateBtn(props) {
  return (
    <span className="view-estimate-button text-center" {...props} role="button" tabIndex="0">
        {/* <span className='view-estimate-button-text'> */}
          View
          {/* </span> */}
    </span>
  );
}

export default ViewEstimateBtn;
