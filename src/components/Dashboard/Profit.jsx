import React from "react";

const Account = [
  {
    accimg: "images/dashimags/clonex.png",
    name: "Clone X #10098",
    hour: "12 hours ago",
    amm: "6.9 ETH",
  },
  {
    accimg: "images/dashimags/bb.png",
    name: "Clone X #19340",
    hour: "10 days ago",
    amm: "5.35 ETH",
  },
  {
    accimg: "images/dashimags/aa.png",
    name: "CryptoPunks #124",
    hour: "78 days ago",
    amm: "75.4 ETH",
  },
  {
    accimg: "images/dashimags/bb.png",
    name: "BAYC #14563",
    hour: "90 days ago",
    amm: "32 ETH",
  },
  {
    accimg: "images/dashimags/aa.png",
    name: "Clone X #10098",
    hour: "12 hours ago",
    amm: "6.9 ETH",
  },
];

function Profit() {
  return (
    <div className="bg-[#333639] w-[50%] mob:w-[100%] rounded-3xl mob:mt-4">
      <div className="p-4 pl-8">
        <div className="flex  items-center justify-between ">
          <h1 className="text-white font-bold text-2xl">
            Actual Profitability
          </h1>
          <p className="text-xs">
            <span className="text-white">3M</span>
            <span className="text-[#BDBBBB]">/6M/12M</span>
          </p>
        </div>
        <h1 className="text-[#2DE93F] text-4xl font-bold pb-6">+ $20,457</h1>
        <div className="h-72 overflow-auto mb-14 pr-4">
          {Account.map((acc) => {
            return (
              <div className=" flex justify-between mt-1 hover:bg-[#787a7b] hover:rounded-lg hover:cursor-pointer px-2 py-2 ">
                <div className="flex gap-x-8  justify-center items-center ">
                  <img src={acc.accimg} alt="" className="h-12  " />
                  <div>
                    <h1 className="text-white text-md font-semibold">
                      {acc.name}
                    </h1>
                    <p className="text-[#F19C44] text-sm">{acc.hour}</p>
                  </div>
                </div>
                <h1 className="text-white font-semibold text-md text-right">
                  {acc.amm}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Profit;
