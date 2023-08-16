import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    scales,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        // y: {
        //     grid: {
        //       display: false,
        //     },
        //   },
    },
};
const labels = ["Interviews", "Hirings", "Appraisals", "Inquiries","A", "B"];
const Chart2 = (props) => {
    const { a } = props;
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset',
                data: [8, 13, 5, 9,5,11],
                backgroundColor: '#2C9FE9',
                barThickness: 60,
                maxBarThickness: 65,

            }

        ],
    }
    return (
        <div >
            <Bar options={options} data={data} style={{ height: "370px" }} />
        </div>
    )
}

export default Chart2