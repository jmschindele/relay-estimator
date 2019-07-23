import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import API from "../../utils/API";

class NewTaskCard extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    rate: "",
    hours: "",
    total: 0,
    hasChanged: false,
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
      total: hours && rate ? parseInt(hours) * parseInt(rate) : 0,
      hasChanged: true
    });
  };

  handleTaskSave = event => {
    event.preventDefault();
    if (!this.state.rate || !this.state.title || !this.state.hours) {
      alert("Entries cannot be left blank");
    }
    let id = this.props.projectId;
    API.createTask(id, {
      title: this.state.title.trim(),
      rate: this.state.rate,
      hours: this.state.hours
    })
      .then(() => {
        this.setState({
          title: "",
          rate: "",
          hours: "",
          hasChanged: false
        });
        this.props.loadTasks();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <div className="card-t">
          <div className="task-card-body">
            <div className="form-row align-items-center">
              <div className="col-6">
                <label className="sr-only" htmlFor="task-input">
                  Title
                </label>
                <span className="title-header">Title</span>
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
                </label>
                <span className="column-header">Rate</span>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="rate-input"
                  placeholder="$000.00"
                  name="rate"
                  value={this.state.rate}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="col-2">
                <label className="sr-only" htmlFor="hours-input">
                  Hours
                </label>
                <span className="column-header">Hours</span>
                <input
                  type="number"
                  className="form-control mb-2"
                  id="hours-input"
                  placeholder="hours"
                  name="hours"
                  value={this.state.hours}
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
                  value={'$' + this.state.total && '$' + this.state.total}
                />
              </div>
            </div>

            {this.state.hasChanged ? <span className="save-button" onClick={this.handleTaskSave}>
            </span> : null}


          </div>
        </div>
      </>
    );
  }
}
export default NewTaskCard;