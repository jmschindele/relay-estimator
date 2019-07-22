import React, { Component } from "react";
import { Col, Row} from "../components/Grid";
import TaskCardDisplay from "../components/TaskCardDisplay";
import TaskCard from "../components/TaskCard";
import NewTaskBtn from "../components/NewTaskBtn/index";
import API from "../utils/API";
import firebase from "../config/fbConfig";
import ViewEstimateBtn from '../components/ViewEstimateBtn';
import { Link } from "react-router-dom";

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
  this.props.history.push(`/estimate/${projectId}`)
}


handleRedirect = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.loadTasks()
    } else {
      this.props.history.push('/')
    }
  })
}

  loadTasks = () => {

    let id = this.props.match.params.projectId;
    
    API.getTasks(id)
      .then(res => {
        
        this.setState({ pulledTasks: res.data.tasks, hours: "", rate: "", newTasks: null });
        this.getTaskNames();
      })
      .catch(err => console.log(err));
  };

  getTaskNames = () => {
    let tasks = [];
    this.state.pulledTasks.map((task, i) => {
      
      API.getTasksWhere(task).then(res => {
        tasks.push(res.data);
        
        this.setState({
          tasks
        });
      });
    });
  };

  deleteTask = id => {
    API.deleteTask(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  appendTaskCard = () => {
    this.setState({
      newTasks: <TaskCard
      projectId={this.props.match.params.projectId}
      loadTasks={this.loadTasks}
      />
    });
  };

  handleTaskDelete = id => {
    API.deleteTask(id)
      .then(res => this.loadTasks())
      .catch(err => console.log(err));
  };

  render() {
    
    return (
      <div className='container'>
        <NewTaskBtn onClick={this.appendTaskCard} />
        <Row>
          <Col size="md-12">
            {this.state.newTasks}
            {this.state.tasks.map(
              task =>
                task && (
                  <>
                    <TaskCardDisplay
                      key={task._id}
                      _id={task._id}
                      task={task.title}
                      rate={task.rate}
                      hours={task.hours}
                      handleTaskDelete={this.handleTaskDelete}
                    />
                  </>
                )
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/projects">Back to Projects</Link>
            <ViewEstimateBtn
                onClick={() => this.handleEstimateClick()} />
          </Col>
        </Row>
      </ div>
    );
  }
}

export default Tasks;
