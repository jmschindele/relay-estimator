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
    total: 0,
    hasChanged: false
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
      total:
        hours && rate
          ? parseInt(hours) * parseInt(rate)
          : hours
          ? parseInt(hours) * this.props.rate
          : rate
          ? parseInt(rate) * this.props.hours
          : 0,
      hasChanged: true
    });
  };

  handleTaskUpdate = event => {
    event.preventDefault();
    let id = this.props._id;
    API.updateTask(id, {
      title: this.state.title ? this.state.title.trim() : this.props.title,
      rate: this.state.rate ? this.state.rate : this.props.rate,
      hours: this.state.hours ? this.state.hours : this.props.hours
    })
      .then(() => this.setState({ hasChanged: false }))
      .then(() => API.getTasks())
      .then(res =>
        this.setState({ title: "", rate: "", hours: "", hasChanged: false })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="card-t">
          <div className="task-card-body">
            <div className="form-row align-items-center">
              <div className="col-6">
                <label className="sr-only" htmlFor="task-input" />
                <span className="column-header">Title</span>
                <input
                  type="text"
                  className="form-control mb-2"
                  id="task-input"
                  placeholder="Title"
                  name="title"
                  value={this.state.hasChanged ? this.state.title : this.props.title}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="rate-input" />
                <span className="column-header">Rate</span>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="rate-input"
                  placeholder="$000.00"
                  name="rate"
                  value={this.state.hasChanged ? this.state.rate : this.props.rate}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="hours-input" />
                <span className="column-header">Hours</span>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="hours-input"
                  placeholder="hours"
                  name="hours"
                  value={this.state.hasChanged ? this.state.hours : this.props.hours}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label
                  // className="col-sm-2 col-form-label"
                  className="sr-only"
                  htmlFor="staticTotal"
                />
                <span className="column-header">Total</span>
                <input
                  type="text"
                  readOnly
                  placeholder="Total"
                  // className="form-control-plaintext"
                  className="form-control mb-2"
                  id="static-total"
                  value={
                    this.state.total !== 0
                      ? "$" + this.state.total
                      : "$" + this.props.total
                  }
                />
              </div>
            </div>
            {/* { this.state.title && this.state.title !== this.props.title || this.state.rate && this.state.rate !== this.props.rate || this.state.hours && this.state.hours !== this.props.hours ? <>
            <span className="save-button" onClick={this.handleTaskUpdate}>
            </span>
            </>: <span className='delete-button-icon' onClick={() => this.props.handleTaskDelete(this.props._id)}>
            </span>
            } */}
            {this.state.hasChanged && this.state.hasChanged ? (
              <>
                <span className="save-button" onClick={this.handleTaskUpdate} />
              </>
            ) : (
              <span
                className="delete-button-icon"
                onClick={() => this.props.handleTaskDelete(this.props._id)}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
export default TaskCard;
