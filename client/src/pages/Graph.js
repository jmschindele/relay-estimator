import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
import NavBar from "../components/NavBar/NavBar";
import Chart from "../components/Graph/index";

class Graph extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentWillMount() {
    this.getChartData();
  }
  getChartData() {
    // ajax call can go here.
    this.setState({
      chartData: {
        labels: [
          "Design",
          "Proofs",
          "Final Proof Edits",
          "Client Side Functionality",
          "Database Setup",
          "Final Payment"
        ],
        fontSize: 25,

        // props.chartData
        datasets: [
          {
            label: "Tasks",
            data: [1000, 500, 1000, 2000, 500, 2500],
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
  }

  render() {
    return (
      <Container fluid>
        <NavBar />

        <div className="App">
          <Chart
            chartData={this.state.chartData}
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
