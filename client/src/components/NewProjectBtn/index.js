
import React from 'react'

import "./style.css";

function NewProjectBtn(props) {
  return (
    <button className="new-project-btn" {...props}>
      + Project
    </button>
  );
}

export default NewProjectBtn;
