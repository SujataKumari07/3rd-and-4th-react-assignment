import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart() {
  const data = {
    labels: ['January', 'February', 'March', 'April'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(54, 162, 235, 0.8)',
        hoverBorderColor: 'rgba(54, 162, 235, 1)',
        data: [40, 35, 38, 30],
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
    <div className="bar-chart" style={{ width: '100%', height: '400px' }}>
      <h2>Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;



