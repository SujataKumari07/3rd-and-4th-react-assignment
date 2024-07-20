import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales Data',
        data: [40, 35, 38, 30],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="line-chart" style={{ width: '100%', height: '400px' }}>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineChart;

