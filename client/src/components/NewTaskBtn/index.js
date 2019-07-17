// import React, { Component } from "react";
// // import ProjectCard from "../ProjectCard/index";
// import "./style.css";

// class NewTaskBtn extends Component {
//   // startNewTask = event => {
//   //   event.preventDefault(this.props);
//   //   this.handleClick = this.handleClick.bind(this);
//   // };
//   handleClick() {
//     console.log("Click happened");
//   }

//   // *** Need to finish writing the function
//   // *** that gets a new project card generated once the button is clicked...

//   render() {
//     return (
//       <button className="btn-primary" onClick={this.handleClick()}>
//         {" "}
//         + Tsk
//       </button>
//     );
//   }
// }
// export default NewTaskBtn;


//experimenting still

import React from 'react';
// import ProjectCard from "../ProjectCard/index";
import "./style.css";

function NewTaskBtn(props) {

    return (
      <button className="btn-primary" {...props}>
        {" "}
        + Task
      </button>
    );
  
}
export default NewTaskBtn;
