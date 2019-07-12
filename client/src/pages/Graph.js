import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import NavBar from "../components/NavBar/NavBar";
import TaskCardDisplay from "../components/TaskCardDisplay/index";

// import API from "../utils/API";
import {
  Doughnut
  // Bar
} from "react-chartjs-2";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }



  componentDidMount() {
    this.getChartData();

      console.log("Graph page localstorage test : ",localStorage.getItem('User'))
     
  }

  getChartData = () => {

    API.getUsers().then(res => {
      // console.log(res.data[0].project[1].projectInfo.length);
      let taskArr = [];
      for (let i = 0; i < res.data[0].project[1].projectInfo.length; i++) {
        taskArr.push(res.data[0].project[1].projectInfo[i].task);
      }
      // console.log("task array: " + taskArr);
      let values = [];
      let rate = [];
      let hours = [];
      for (let i = 0; i < res.data[0].project[1].projectInfo.length; i++) {
        let newVal = 0;
        let num1 = res.data[0].project[1].projectInfo[i].hours;
        let num2 = res.data[0].project[1].projectInfo[i].rate;
        newVal = num1 * num2;
        rate.push(num1)
        hours.push(num2)
        values.push(newVal);
      }
      // console.log("Values: " + values);


      this.setState({
        chartData: {
          labels: taskArr,
          fontSize: 25,

          // props.chartData
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
    });
  };

  render() {
    return (
      <Container fluid>
    
<Row>
  <Col size='md-6'>
 {/* {console.log( */}
   {this.state.chartData.labels && this.state.chartData.labels.map((project, i) => (
   <TaskCardDisplay
   key={i}
   task={project}
   rate={this.state.chartData.datasets[0].rate[i]}
   hours={this.state.chartData.datasets[0].hours[i]}
   total={this.state.chartData.datasets[0].data[i]}
   />
 )) 
   }


  
  
  </Col>
  <Col size='md-6'>

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
              labels :{
                fontSize: 30
              }
            }
          }}
          />
        </div>
          </Col>
        </Row>

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
