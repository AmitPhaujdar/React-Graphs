import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './components/Chart';

class App extends Component {
  constructor() {
    super();
    this.state = {
      chartData: {},
    };
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData() {
    // Ajax calls here
    this.setState({
      chartData: {
        labels: [
          'USA',
          'Spain',
          'Italy',
          'UK',
          'Germany',
          'France',
          'Russian Federation',
          'Turkey',
          'Iran',
          'Brazil',
        ],
        datasets: [
          {
            label: 'Population',
            data: [
              1067127,
              215216,
              207428,
              177458,
              161703,
              128722,
              124054,
              122392,
              95646,
              85380,
            ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(115, 169, 12, 0.3)',
              'rgba(155, 199, 132, 0.6)',
              'rgba(55, 109, 32, 0.6)',
              'rgba(90, 48, 124, 0.2)',
            ],
          },
        ],
      },
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div class="Content">
            <h1>Covid Dashboard</h1>
          </div>
        </div>
        <Chart chartData={this.state.chartData} legendPosition="bottom" />
      </div>
    );
  }
}

export default App;
