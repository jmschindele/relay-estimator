import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import NavBar from "../components/NavBar/NavBar";
// import TaskCard from "../components/TaskCard/index";
import Chart from "../components/Graph";
// import API from "../utils/API";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      chardData: {}
    };
  }

  // state = {
  //   chartData: {}
  // }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentWillMount() {
    this.getChartData();
  }

  getChartData = () => {

    // API.getUsers().then(res => {
    //   console.log(res.data[0].project[0].projectInfo.length);
    //   let taskArr = [];
    //   for (let i = 0; i < res.data[0].project[0].projectInfo.length; i++) {
    //     taskArr.push(res.data[0].project[0].projectInfo[i].task);
    //   }
    //   console.log("task array: " + taskArr);
    //   let values = [];
    //   for (let i = 0; i < res.data[0].project[0].projectInfo.length; i++) {
    //     let newVal = 0;
    //     let num1 = res.data[0].project[0].projectInfo[i].hours;
    //     let num2 = res.data[0].project[0].projectInfo[i].rate;
    //     newVal = num1 * num2;
    //     values.push(newVal);
    //   }
    //   console.log("Values: " + values);


      this.setState({
        chartData: {
          labels: taskArr ? taskArr : ['task'],
          fontSize: 25,

          // props.chartData
          datasets: [
          {
            label: "Tasks",
            data: values ? values : [1],
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
    // });
    // console.log("chart data: " + this.state.chartData.datasets);
  };

  render() {
    return (
      <Container fluid>
        <NavBar />
        <div>{/* <TaskCard /> */}</div>
        <div className="App">
          <Chart
            chartData={this.state.chartData && this.state.chartData}
            Project_Name="Jimmy's Site"
            legendPosition="top"
          />
        </div>
        {/* );
  }
} */}
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
