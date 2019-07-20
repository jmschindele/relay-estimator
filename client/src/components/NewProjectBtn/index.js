
import React from 'react'

import "./style.css";

function NewProjectBtn(props) {
  return (
    <button className="btn-2" {...props}>
      + Project
    </button>
  );
}

export default NewProjectBtn;
