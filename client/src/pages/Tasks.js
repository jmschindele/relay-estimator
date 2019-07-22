import React, { Component } from "react";
import { Col, Row} from "../components/Grid";
import TaskCardDisplay from "../components/TaskCardDisplay";
import TaskCard from "../components/TaskCard";
import NewTaskBtn from "../components/NewTaskBtn/index";
import API from "../utils/API";
import firebase from "../config/fbConfig"

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
        
        this.setState({ pulledTasks: res.data.tasks, hours: "", rate: "" });
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
      newTasks: this.state.newTasks.concat(<TaskCard />)
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
                    {/* <DeleteBtn onClick={() => this.handleTaskDelete(task._id)} /> */}
                  </>
                )
            )}
            {this.state.newTasks.map((newTask,i) => (
              <TaskCard
                key={i}
                projectId={this.props.match.params.projectId}
                loadTasks={this.loadTasks}
              />
            ))}
          </Col>
        </Row>
      </ div>
    );
  }
}

export default Tasks;
