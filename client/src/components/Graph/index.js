import React, { Component } from "react";
import {
  Doughnut
  // Bar
} from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    projectName: "Project Name"
  };
  render() {
    return (
      <div className="chart">
        <Doughnut
          data={this.state.chartData}
          width={100}
          height={50}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Project Name is: " + this.props.Project_Name,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition,
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

//             responsive: [{
//               breakpoint: 480,
//               options: {
//                 chart: {
//                   width: 200
//                 },
//                 legend: {
//                   show: false
//                 }
//               }
//             }],
//             legend: {
//                 position: 'right',
//                 offsetY: 0,
//                 height: 230,
//             }
//           },
//           series= [44, 55, 13, 33],
//         }
//       }

//       appendData () {
//         var arr = this.state.series.slice()
//         arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)

//         this.setState({
//           series: arr
//         })
//       }

//       removeData() {
//         if(this.state.series.length === 1) return

//         var arr = this.state.series.slice()
//         arr.pop()

//         this.setState({
//           series: arr
//         })
//       }

//       randomize() {
//         this.setState({
//           series: this.state.series.map(() => {
//             return Math.floor(Math.random() * (100 - 1 + 1)) + 1
//           })
//         })
//       }

//       reset() {
//         this.setState({
//           series: [44, 55, 13, 33]
//         })
//       }

//       render() {
//         return (

//           <div id="donut">
//             <div className="chart-wrap">
//               <div id="chart">
//                 <ReactApexChart options={this.state.options} series={this.state.series} type="donut" width="380" />
//               </div>
//             </div>
//             <div className="actions">
//               <button onClick={() => this.randomize()}>RANDOMIZE</button>
//               <button onClick={() => this.appendData()}>ADD</button>
//               <button onClick={() => this.removeData()}>REMOVE</button>
//               <button onClick={() => this.reset()}>RESET</button>
//             </div>
//           </div>

//         </div>
//     )

// }
// }
// } */}

export default Chart;
