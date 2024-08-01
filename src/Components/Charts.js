import React from "react";
import Data from "./dummyData.json";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

function Charts() {
  return (
    <>
      {/* Heading of Line chart */}
      <h1 className="heading">Line Chart</h1>
      {/* Line chart */}
      <div className="line_charts">
        <Line
          options={{
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: "Medals Won",
                },
              },
              x: {
                beginAtZero: true,

                min: 0,
                title: {
                  display: true,
                  text: "Years",
                },
              },
            },

            plugins: {
              legend: {
                labels: {
                  boxWidth: 12,
                },
              },
            },
          }}
          data={{
            labels: Data.map((dummyData) => dummyData.Year),
            datasets: [
              {
                label: "Medals Won by India in Olympics",
                data: Data.map((dummyData) => dummyData.Medals),
                backgroundColor: "#064ff0",
                borderColor: "#064ff0",
              },
            ],
          }}
          width={300}
          height={200}
        />
      </div>
    </>
  );
}

export default Charts;
