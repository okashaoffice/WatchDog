import React, { useState } from "react";
import Chart from "react-apexcharts";
function Totalbalance() {
  const [isChart, isChartSet] = useState({
    series: [40, 100, 100],
  });
  return (
    <div className=" totalbalance bg-[#333639] w-[50%] mob:w-[100%] rounded-3xl">
      <div className="pt-4 pl-5">
        <p className="text-white text-xl">Total Balance</p>
        <h1 className="text-white text-4xl font-bold ">$101,230</h1>
      </div>
      <div className="donut flex justify-center pt-4">
        <Chart
          options={{
            legend: {
              show: false,
            },
            stroke: {
              width: "0",
            },
            dataLabels: {
              enabled: false,
              formatter: function (val) {
                return val + "%";
              },
            },
            fill: {
              colors: ["#D946AA", "#F19C44", "#A510FF"],
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut: {},
              },
              bar: {
                horizontal: false,
              },
            },
            borderWidth: 0,
          }}
          series={isChart.series}
          type="donut"
          width="380"
        />
      </div>
      <div className="flex  justify-center pt-6 pb-6">
        <div className="flex gap-x-7 mob:gap-x-2">
          <div className="flex gap-x-2 items-center ">
            <span className="h-4 w-4 bg-[#A510FF]"></span>
            <p className="text-white font-medium mob:text-xs">ETH Balance</p>
          </div>
          <div className="flex gap-x-2 items-center ">
            <span className="h-4 w-4 bg-[#D946AA]"></span>
            <p className="text-white font-medium mob:text-xs">Token Balance</p>
          </div>
          <div className="flex gap-x-2 items-center ">
            <span className="h-4 w-4 bg-[#F19C44]"></span>
            <p className="text-white font-medium mob:text-xs">NFT Balance</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Totalbalance;
