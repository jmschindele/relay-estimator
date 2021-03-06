// import React from "react";
// // import { Link } from "react-router-dom";
// import "./style.css";

// function TaskCardDisplay(props) {
//   return (
//     <div className="card-tcd">
//       <div className="task-card-body">
//         <div className="row">
//           <div className="col-12 task-title">
//               <span>{props.task}</span>
//           </div>
//         </div>
//         <br />
//         <div className="row">
//           <div className="col-4 text-center">
//             <span className="task-heading">
//               RATE
//               <br />
//             </span>{" "}
//             <span className="task-result text-center">${props.rate}</span>
//           </div>
//           <div className="col-4 text-center">
//             <span className="task-heading">
//               HOURS
//               <br />
//             </span>
//             <span className="task-result text-center">{props.hours}</span>
//           </div>
//           <div className="col-4 text-center">
//             <span className="task-result-title">TOTAL</span>{" "}
//             <span className="task-result text-center">
//               ${parseInt(props.hours) * parseInt(props.rate)}
//             </span>
//           </div>
//           {/* <DeleteBtn onClick={() => props.handleTaskDelete(props._id)} /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TaskCardDisplay;

import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function TaskCardDisplay(props) {
  return (
    <div className="card-tcd">
      <div className="task-card-body">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-12 task-title">
                <span>{props.task}</span>
              </div>
            </div>

          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col-12'>
          <span className="line-total text-right">
              ${parseInt(props.hours) * parseInt(props.rate)}
          </span>
            </div>
          </div>
          <div className="row">
              <div className="col-12 text-right">
                <span className='underline'>
                <span className="task-heading">RATE </span>
                <span className="graph-task-result text-center">${props.rate}</span>
                </span>
                <span className='underline'>
                <span className="task-heading">HOURS </span>
                <span className="graph-task-result text-center">{props.hours}</span>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default TaskCardDisplay;
