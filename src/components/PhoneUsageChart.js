import React from 'react';
import '../App.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const PhoneUsageChart = () => {
  const labels = Array.from({ length: 24 }, (_, i) => `${i.toString().padStart(2, '0')}:00`);

  const data = {
    labels,
    datasets: [
      {
        label: 'Phone Usage (seconds)',
        data: [3600, 2700, 5400, 0, 1800, 0, 1200, 3600, 7200, 3600, 1800, 2400, 6000, 4500, 3600, 2400, 1800, 3600, 5400, 7200, 1800, 0, 3600, 5400],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div className='phone-usage'>
      <Line data={data} />
    </div>
  );
};

export default PhoneUsageChart;
