"use client";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesStatistics = () => {
  const series = [
    {
      name: "Income",
      type: "column",
      data: [66, 85, 50, 105, 65, 74, 70, 105, 100, 125, 85, 110],
    },
    {
      name: "Profit",
      type: "line",
      data: [45, 52, 38, 45, 19, 23, 20, 30, 25, 35, 28, 40],
    },
    {
      name: "Sales",
      type: "line",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 60, 50, 55],
    },
  ];

  const options = {
    chart: {
      height: 300,
      type: "line" as const,
      toolbar: { show: false },
    },

    stroke: {
      width: [0, 3, 3],
    },

    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 4,
      },
    },

    colors: ["#8E54E9", "#F5BB74", "#4ADE80"],

    dataLabels: {
      enabled: false,
    },

    grid: {
      show: true,
      borderColor: "#f1f1f1",
      strokeDashArray: 4,
    },

    yaxis: {
      min: 0,
      max: 160,
      tickAmount: 4, // creates 40,80,120...
    },

    xaxis: {
      categories: [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
      ],
    },

    legend: {
      position: "top" as const,
    },
  };

  return (
    <div className="bg-white shadow p-4 rounded-lg mt-4">
        <h2 className="text-xl font-semibold py-2 px-2">Sales Statistics</h2>
      <Chart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default SalesStatistics;
