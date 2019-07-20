import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import TaskCardDisplay from "../components/TaskCardDisplay"
import TaskCard from "../components/TaskCard";
import NewTaskBtn from "../components/NewTaskBtn/index";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn"

class Tasks extends Component {

  state = {
    tasks: [],
    hours: '',
    rate: '',
    pulledTasks: [],
    newTasks: [],
    newTaskTitle: '',
    newHours: '',
    newRate: ''
  };

  componentDidMount() {
    this.loadTasks();
  };

  loadTasks = () => {
    //need to set this id to be current project id
    // let id = '5d322f94cedbde02d99f0443'
    let id = this.props.match.params.projectId;
    console.log(this.props.match.params.projectId)
    API.getTasks(id)
    .then(res =>{
      console.log(res.data.tasks)
      this.setState({pulledTasks: res.data.tasks, hours: '', rate: ''})
      this.getTaskNames();
    })
      .catch(err => console.log(err));
  };

  getTaskNames = () => {
    this.state.pulledTasks.map((task, i) => {
    // console.log('getTaskNames task',task)
    API.getTasksWhere(task).then(res => {
      console.log('getTaskNames res',res.data)
      this.setState({
        tasks: this.state.tasks.concat(res.data)
      })
    })
  })
  }

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
        }
        )
  };

  handleTaskDelete = (id) => {
    API.deleteTask(id)
      .then(res=> this.loadTasks())
      .catch(err => console.log(err))
  };

  render() {
    // console.log('state: ',this.state)
    return (
      <Container fluid>
        <NewTaskBtn onClick={this.appendTaskCard}/>
        <Row>
          <Col size="md-10">
            {this.state.tasks.map(task => (
              <>
              <TaskCardDisplay key={task._id} task={task.title} rate={task.rate} hours={task.hours}/>
              <DeleteBtn onClick={() => this.handleTaskDelete(task._id)} />
              </>
              ))
            }
            {this.state.newTasks.map(newTask =>
              <TaskCard projectId={this.props.match.params.projectId} loadTasks={this.loadTasks} />
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
