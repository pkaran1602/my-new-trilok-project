import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Chart = (props) => {
  const { allTrips, onGoing, completed, cancelled}  = props;

     const data = {
        labels: ["Interviews",  "Hirings", "Appraisals", "Inquiries"],
        datasets: [
          {
            label: '# of Votes',
            data: [2, 3, 5, 6],
            backgroundColor: [
              'rgba(8, 244, 241, 0.8)',
              'rgba(8, 244, 45, 0.8)',
              'rgba(8, 15, 244, 0.8)',
              'rgba(247, 21, 13, 0.8)'
            ],
            borderWidth: 1,
          },
        ],
      };
    return <PolarArea data={data} />;
}

export default Chart