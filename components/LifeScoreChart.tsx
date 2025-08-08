'use client';

import { useEffect, useState } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function LifeScoreChart() {
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('lifescore');
    if (stored) setData(JSON.parse(stored));
  }, []);

  const chartData = {
    labels: data.map((_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'LifeScore',
        data,
        borderColor: 'rgb(59,130,246)',
        backgroundColor: 'rgba(59,130,246,0.5)',
      },
    ],
  };

  return <Line data={chartData} />;
}
