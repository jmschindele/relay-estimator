import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

import TaskCardDisplay from "../components/TaskCardDisplay/index";
import "./Graph/style.css";

import {
  Doughnut
  // Bar
} from "react-chartjs-2";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
      tasks: [],
      hours: "",
      rate: "",
      pulledTasks: []
    };
  }

  componentDidMount() {
    this.getChartData();
  }

  getTaskNames = () => {
    this.state.pulledTasks.map((task, i) => {
      API.getTasksWhere(task)
        .then(res => {
          this.setState({
            tasks: this.state.tasks.concat(res.data)
          });
        })
        .then(res => {
          this.updateChart();
        });
    });
  };

  updateChart = () => {
    let taskArr = [];
    let titles = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      taskArr = this.state.tasks;
      titles.push(this.state.tasks[i].title)
    }
    console.log('titles = ',titles)
    let values = [];
    let rate = [];
    let hours = [];

    for (let i = 0; i < taskArr.length; i++) {
      let newVal = 0;
      let num1 = parseFloat(taskArr[i].hours);
      let num2 = parseFloat(taskArr[i].rate);
      newVal = num1 * num2;
      rate.push(num1);
      hours.push(num2);
      values.push(newVal);
    }

    this.setState({
      chartData: {
        labels: titles,
        fontSize: 25,

        datasets: [
          {
            label: {
              fontSize: 20
            },
            data: values,
            rate,
            hours,
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgda(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    });
  };

  getChartData = () => {
    let id = this.props.match.params.projectId;
    API.getTasks(id).then(res => {
      this.setState({ pulledTasks: res.data.tasks, hours: "", rate: "" });
      this.getTaskNames();
      let taskArr = [];
      for (let i = 0; i < this.state.tasks.length; i++) {
        taskArr.push(i);
      }
    });
  };

  render() {
    // console.log(this.state)
    return (
      <Container fluid>
        <div className="chart-flex">
          <div>
            {this.state.tasks &&
              this.state.tasks.map((task, i) => (
                <TaskCardDisplay
                  key={i}
                  task={task.title}
                  rate={task.rate}
                  hours={task.hours}
                />
              ))}
          </div>

          <div className="App">
            <Doughnut
              data={this.state.chartData}
              width={100}
              height={50}
              options={{
                title: {
                  display: this.state.displayTitle,
                  text: "Project Name is: " + this.state.Project_Name,
                  fontSize: 25
                },
                legend: {
                  display: true,
                  position: "bottom",
                  labels: {
                    
                    fontSize: 30
                  }
                }
              }}
            />

            <div className="overlay">$25</div>
          </div>
        </div>
        <Row>
          <Col size="md-2">
            <Link to="/">Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Graph;
