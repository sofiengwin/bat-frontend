import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

const Charted = () => {
  const [chartData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Weeks",
        data: [1000, 1000, 800, 1200, 1200, 400, 800],
        backgroundColor: [
          "violet",
          "purple",
          "teal",
          "orangered",
          "linen",
          "cyan",
          "gold",
        ],
      },
    ],
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "20.1875em",
        marginBottom: "5em",
      }}
    >
      <Bar
        data={chartData}
        options={{
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                barThickness: 20,
              },
            ],
          },
        }}
      ></Bar>
    </div>
  );
};

export default Charted;
