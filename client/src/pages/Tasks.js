// import React, { Component } from "react";
// // import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// // import Jumbotron from "../components/Jumbotron";
// // import API from "../utils/API";
// // import NavBar from "../components/NavBar/NavBar";
// import TaskCard from "../components/TaskCard/index";
// import NewTaskBtn from "../components/NewTaskBtn/index";
// import API from "../utils/API";

// class Tasks extends Component {
//   // state = {
//   //   book: {}
//   // };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   // componentDidMount() {
//   //   console.log("did id make it?:", this.props.userId);
//   //   // const userId = this.props.userId;
//   //   // this.loadTasks(userId);
//   // }

//   // loadTasks = (userId, tasks) => {
//   //   API.getTasks(userId, project)
//   // }

  
//   render() {
//     return (
//       <Container fluid>
//         <NewTaskBtn />
//         <Row>
//           <Col size="md-10">
//             <TaskCard />
//             <TaskCard />
//             <TaskCard />
//           </Col>
//         </Row>
//       </Container>
//     );
//   }
// }

// export default Tasks;


// experiment with redoing font and back end



import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import NavBar from "../components/NavBar/NavBar";
// import TaskCard from "../components/TaskCard/index";
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
    newTasks: [],
    newTaskTitle: '',
    newHours: '',
    newRate: ''
  };

  componentDidMount() {
    this.loadTasks();
  };

  loadTasks = () => {
    API.getTasks()
    .then(res =>
      this.setState({tasks: res.data, hours: '', rate: ''}))
      .catch(err => console.log(err));
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
        }
        )
  };

  handleTaskDelete = (id) => {
    API.deleteTask(id)
      .then(res=> this.loadTasks())
      .catch(err => console.log(err))
  };

  render() {
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
              <TaskCard loadTasks={this.loadTasks} />
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Tasks;
