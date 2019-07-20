import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class TaskCard extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    rate: "",
    hours: "",
    total: 0
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    let hours, rate;

    //check what name is
    if (name === "hours") {
      hours = value;
      rate = this.state.rate;
    } else if (name === "rate") {
      rate = value;
      hours = this.state.hours;
    }
    
    this.setState({
      [name]: value,
      total: hours && rate ? parseInt(hours) * parseInt(rate) : 0
    });
  };

  handleTaskSave = event => {
    event.preventDefault();
    if (!this.state.rate || !this.state.title || !this.state.hours) {
      alert("Entries cannot be left blank");
    }
    //need to set this to be current project id
    let id = this.props.projectId;
    // console.log('task props',this.props.projectId)
    API.createTask(id, {
      title: this.state.title.trim(),
      rate: this.state.rate,
      hours: this.state.hours
    })
      .then(() => {
        this.setState({
          title: "",
          rate: "",
          hours: ""
        });
        this.props.loadTasks();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="card-t">
          <div className="card-body">
            <div className="form-row align-items-center">
              <div className="col-6">
                <label className="sr-only" htmlFor="task-input">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="task-input"
                  placeholder="Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="rate-input">
                  <span className="h3">Rate</span>
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="rate-input"
                  placeholder="Rate"
                  name="rate"
                  value={this.state.rate}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="hours-input">
                  Hours
                </label>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="hours-input"
                  placeholder="Hours"
                  name="hours"
                  value={this.state.hours}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label
                  htmlFor="staticTotal"
                  className="col-sm-2 col-form-label"
                >
                  Total
                </label>
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticTotal"
                  value={this.state.total && this.state.total}
                />
              </div>
            </div>
            {/* 
            <Link to="#" className="card-link-t">
              Edit |
            </Link> */}
            {/* <Link to="#" className="card-link-t"> */}
            <span className="card-link-t" onClick={this.handleTaskSave}>
              Save
            </span>
            {/* </Link> */}
          </div>
        </div>
      </>
    );
  }
}
export default TaskCard;
