import React, { Component } from "react";
import { Col, Row } from "../../components/Grid";
import TaskCard from "../../components/TaskCard";
import NewTaskBtn from "../../components/NewTaskBtn/index";
import API from "../../utils/API";
import firebase from "../../config/fbConfig";
// import ViewEstimateBtn from "../components/ViewEstimateBtn";
// import { Link } from "react-router-dom";
import NewTaskCard from "../../components/NewTaskCard";
import './style.css'

class Tasks extends Component {
  state = {
    tasks: [],
    hours: "",
    rate: "",
    pulledTasks: [],
    newTasks: [],
    newTaskTitle: "",
    newHours: "",
    newRate: ""
  };

  componentDidMount() {
    this.handleRedirect();
  }

  handleEstimateClick = projectId => {
    projectId = this.props.match.params.projectId;
    this.props.history.push(`/estimate/${projectId}`);
  };

  handleProjectsClick = () => {
    this.props.history.push('/projects')
  }

  handleRedirect = () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.loadTasks();
      } else {
        this.props.history.push("/");
      }
    });
  };

  loadTasks = () => {
    let id = this.props.match.params.projectId;
    API.getTasks(id)
      .then(res => {
        this.setState({
          pulledTasks: res.data.tasks,
          hours: "",
          rate: "",
          newTasks: null
        });
        this.getTaskNames();
      })
      .catch(err => console.log(err));
  };

  getTaskNames = () => {
    let tasks = [];
    this.state.pulledTasks.map((task, i) => {
      API.getTasksWhere(task).then(res => {
        tasks.push(res.data);
        this.setState({tasks});
      });
      return tasks;
    });
  };

  deleteTask = id => {
    API.deleteTask(id).catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  appendTaskCard = () => {
    this.setState({
      newTasks: (
        <NewTaskCard
          projectId={this.props.match.params.projectId}
          loadTasks={this.loadTasks}
        />
      )
    });
  };

  handleTaskDelete = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <Row>
          <Col size="md-12">
        <NewTaskBtn onClick={this.appendTaskCard} />
            {this.state.newTasks}
            {this.state.tasks.map(
              task =>
                task && (
                  <div key={task._id}>
                    <TaskCard
                      key={task._id}
                      _id={task._id}
                      title={task.title}
                      rate={task.rate}
                      hours={task.hours}
                      total={parseInt(task.hours) * parseInt(task.rate)}
                      handleTaskDelete={this.handleTaskDelete}
                      projectId={this.props.match.params.projectId}
                    />
                  </div>
                )
            )}
          </Col>
        </Row>
        <div className='row'>
          <div className="col-12 text-center">
            {/* <Link to="/projects"></Link> */}
            <span onClick={() => this.handleEstimateClick()} className='lower-nav-btn'>View Your Estimate →</span>
            <span onClick={() => this.handleProjectsClick()} className='lower-nav-btn'>← Back to Projects</span>
            {/* <ViewEstimateBtn onClick={() => this.handleEstimateClick()} /> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
