
import React from 'react'

import "./style.css";

function NewProjectBtn(props) {

  return(
    <button className='btn-primary' {...props}>
      + Project
    </button>
  )
}

export default NewProjectBtn;