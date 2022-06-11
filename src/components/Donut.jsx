import React from "react";
import Chart from "react-apexcharts";

const Donut = () => {
  let series = [8, 20, 35, 21, 16];
  let title = ["20대", "30대", "40대", "50대", "60대 이상"];
  let chartOptions = {
    // labels: series.map((val, i) => `${title[i]} ${val}%`),
    labels: title,
    dataLabels: {
      enabled: true,
      enabledOnSeries: undefined,
      formatter: function(val, opts) {
        return val;
      },
      textAnchor: "middle",
      distributed: false,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontSize: "14px",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontWeight: "300",
        colors: ["white", "white"],
      },
      background: {
        enabled: true,
        foreColor: "black",
        padding: 4,
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "black",
        opacity: 0.9,
        dropShadow: {
          enabled: false,
          top: 1,
          left: 1,
          blur: 1,
          color: "#000",
          opacity: 0.45,
        },
      },
      dropShadow: {
        enabled: false,
        top: 1,
        left: 1,
        blur: 1,
        color: "#000",
        opacity: 0.45,
      },
    },
  };
  return (
    <div>
      <Chart options={chartOptions} series={series} type="donut" width="500" />
    </div>
  );
};

export default Donut;
