import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
function NFTPL() {
  function generateDayWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }

  const [isScatter, isScatterSet] = useState({
    series: [
      {
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          5,
          {
            min: 3,
            max: 5,
          }
        ),
      },
      {
        data: generateDayWiseTimeSeries(
          new Date("11 Feb 2017 GMT").getTime(),
          5,
          {
            min: 3,
            max: 5,
          }
        ),
      },
    ],
    options: {
      borderWidth: 0,
      stroke: {
        show: false,
        width: 0,
      },
      legend: {
        show: false,
      },
      colors: ["#F19C44", "#A510FF"],
      chart: {
        height: 350,
        type: "scatter",
        zoom: {
          type: "xy",
        },
        foreColor: "white",
      },
      dataLabels: {
        enabled: false,
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 0,
        max: 5,
        tickAmount: 3,
      },
      markers: {
        strokeWidth: 0,
      },
      fill: {
        opacity: 1,
      },
    },
  });

  return (
    <div className=" bg-[#333639] rounded-lg p-4 TransactionFont">
      <div className="flex justify-between">
        <h1 className="text-xl text-white font-bold pl-5">
          NFT Transactions (Profit / Loss)
        </h1>
        <p className="text-xs pr-5">
          <span className="text-white">3M</span>
          <span className="text-[#BDBBBB]">/6M/12M</span>
        </p>
      </div>
      <p className="text-white font-semibold text-md pl-5 pt-2">Sales</p>
      <div>
        <div id="chart">
          <ReactApexChart
            options={isScatter.options}
            series={isScatter.series}
            type="scatter"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    </div>
  );
}

export default NFTPL;
