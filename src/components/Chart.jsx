import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  options: {
    legend: {
        position: "bottom"
    }
},
  datasets: [
    {
        label: "Field Moisture",
        backgroundColor: "#00b251",
        borderColor: "#00b251",
        data: [0, 10, 35, 25, 0, 50, 20],
    },
    {
      label: "Min Requirement",
      backgroundColor: "#9593ac",
      borderWidth: 2,
      borderColor: "#9593ac",
      data: [10, 10, 10, 10, 10, 10, 10],
      pointRadius: 0, 
    },
    {
        label: "Max Requirement",
        backgroundColor: "#f72a37",
        borderWidth: 2,
        borderColor: "#f72a37",
        data: [30, 30, 30, 30, 30, 30, 30],
        pointRadius: 0, 
      },
  ],
};

const LineChart = () => {
  return (
    <div className="p-3 rounded-3xl shadow-lg">
      <Line data={data} />
    </div>
  );
};

export default LineChart;