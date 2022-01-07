import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Total Profit',
      tension: 0.3,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Total Order',
      tension: 0.3,
      data: labels.map(() => faker.datatype.number({ min: 50, max: 100 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const LineChart = () => {
  return <Line data={data}></Line>
}

export default LineChart;