import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtnIcon(props) {
  return (
    <span className="delete-button-icon text-center" {...props} role="button" tabIndex="0">
        <img src='/delete-small.png' className='delete-btn-icon' />
    </span>
  );
}

export default DeleteBtnIcon;
