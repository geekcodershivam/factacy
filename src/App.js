import React, { Component } from 'react';
import Chart from './components/Chart';
import Header from './components/Header';
import Api from './Api';
import MakeDataSet from './data';
import './App.css';

class App extends Component {
  state = {
    exportSeries: {},
    importSeries: {},
    tradeSeries: {},
    tradeDeficitSeries: {},
    details: {},
  };

  async componentDidMount() {
    const response = await Api.get('/3be6c19d-7ae5-4f84-950c-5b4ab4b22537');

    let exportSeries = MakeDataSet(response['data']['exportSeries']);
    let importSeries = MakeDataSet(response['data']['importSeries']);
    let tradeSeries = MakeDataSet(response['data']['tradeSeries']);

    let tradeDeficitSeries = MakeDataSet(
      response['data']['tradeDeficitSeries']
    );

    let obj = {};

    obj['productName'] = response['data']['productName'];
    obj['gst'] = response['data']['gst'];
    obj['startYear'] = response['data']['startYear'];
    obj['endYear'] = response['data']['endYear'];
    obj['currentYearAggregatedValue'] =
      response['data']['currentYearAggregatedValue'];
    obj['previoudYearAggregatedValue'] =
      response['data']['previoudYearAggregatedValue'];

    this.setState({
      details: obj,
      exportSeries: exportSeries,
      importSeries: importSeries,
      tradeSeries: tradeSeries,
      tradeDeficitSeries: tradeDeficitSeries,
    });
  }

  render() {
    return (
      <div className="container">
        <Header details={this.state.details} />
        <div className="item sidebar">
          <Chart
            className="chart"
            type="Radar"
            title={'Trade Deficit Series'}
            series={this.state.tradeDeficitSeries}
          />
        </div>
        <div className="item content-1">
          <Chart
            className="chart"
            type="Bar"
            title={'Trade Series'}
            series={this.state.tradeSeries}
          />
        </div>
        <div className="item content-2">
          <Chart
            className="chart"
            type="Radar"
            title={'Export Series'}
            series={this.state.exportSeries}
          />
        </div>
        <div className="item content-3">
          <Chart
            className="chart"
            type="Line"
            title={'Import Series'}
            series={this.state.importSeries}
          />
        </div>
      </div>
    );
  }
}

export default App;
