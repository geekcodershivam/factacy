import React from 'react';
import { Line, Bar, Radar, Pie } from 'react-chartjs-2';

function Chart(props) {
  const graphType = function () {
    let type = props.type;
    if (type === 'Bar') return <Bar data={props.series} options={options} />;
    else if (type === 'Radar')
      return <Radar data={props.series} options={options} />;
    else if (type === 'Line')
      return <Line data={props.series} options={options} />;
    else if (type === 'Pie')
      return <Pie data={props.series} options={options} />;
  };

  const options = {
    scales: {
      x: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },

      y: {
        title: {
          font: {
            size: 12,
            weight: 'bold',
          },
        },

        ticks: {
          beginAtZero: true,
          font: {
            size: 12,
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: props.title,
        padding: {
          top: 10,
          bottom: 22,
        },
        font: {
          size: 18,
          weight: 'bold',
        },
        color: 'black',
      },
    },
  };

  return graphType();
}
export default Chart;
