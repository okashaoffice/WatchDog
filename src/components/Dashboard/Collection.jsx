import React from "react";

const people = [
  {
    name: "Clone X",
    floorPrice: "10.3 ETH",
    profitPerceant: "+34%",
    mint: "3",
    image: "images/dashimags/cc.png",
    verify: "images/dashimags/verify.png",
    profitAmm: " 10ETH",
    total: "12",
  },
  {
    name: "TOSHIES",
    floorPrice: "5.4 ETH",
    profitPerceant: "-12%",
    mint: "1",
    image: "images/dashimags/ee.png",
    verify: "images/dashimags/verify.png",
    profitAmm: "3ETH",
    total: "5",
  },
  {
    name: "Sewer Pass",
    floorPrice: "0.44 ETH",
    profitPerceant: "+11%",
    mint: "7",
    image: "images/dashimags/bb.png",
    verify: "images/dashimags/verify.png",
    profitAmm: "6.5ETH",
    total: "23",
  },
  {
    name: "Bored Ape Yacht Club",
    floorPrice: "0.34 ETH",
    profitPerceant: "-149%",
    mint: "2",
    image: "images/dashimags/dd.png",
    verify: "images/dashimags/verify.png",
    profitAmm: "0.5ETH",
    total: "3",
  },
  {
    name: "Crypto Punks",
    floorPrice: "1.3 ETH",
    profitPerceant: "+22%",
    mint: "1",
    image: "images/dashimags/clonex.png",
    verify: "images/dashimags/verify.png",
    profitAmm: "1.34ETH",
    total: "7",
  },
];
function Collection() {
  return (
    <div className="w-full bg-[#333639] p-4 rounded-2xl mob:overflow-scroll ">
      <div className="flex justify-between mob:flex-col pl-4 pr-8 mob:pl-2 mob:pr-2">
        <h1 className="text-3xl font-bold text-white">NFT Collections</h1>
        <div className="text-sm gap-x-3 text-white flex justify-center mob:flex-col">
          <p>OWNED BY WALLET:</p>
          <p>0x123Hdedhei00012htg...</p>
        </div>
      </div>
      <div className="flex flex-wrap ">
        <table className="w-full  divide-gray-200 bg-[#333639] rounded-lg">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                <span>COLLECTION</span>
              </th>
              <th
                scope="col"
                className="px-12 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                FLOOR PRICE
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                PROFIT
              </th>

              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                MINTED
              </th>
              <th
                scope="col"
                className="px-4 py-3.5 text-left text-sm font-normal text-[#E2E2E2]"
              >
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody className=" bg-[#333639]">
            {people.map((person, index) => (
              <tr className="odd:bg-[#FFFFFF0F]">
                <td className="whitespace-nowrap px-4 py-4 ">
                  <div className="flex items-center gap-x-4">
                    <p className="text-xl font-semibold text-white  ">
                      {index + 1}
                    </p>
                    <div className="h-10 w-10 ">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={person.image}
                        alt=""
                      />
                    </div>
                    <div className=" flex items-center gap-x-1">
                      <div className="text-lg font-semibold text-white">
                        {person.name}
                      </div>
                      <div>
                        <img src={person.verify} alt="" className="h-6" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap px-12 py-4">
                  <div className="text-lg text-white font-semibold">
                    {person.floorPrice}
                  </div>
                  <div
                    className={`text-sm ${
                      index % 2 == 0 ? "text-[#31CF61]" : "text-red-500"
                    }   pl-9 `}
                  >
                    {person.profitPerceant}
                  </div>
                </td>
                <td className="whitespace-nowrap px-4 py-4">
                  <span className="  text-lg text-white  font-semibold ">
                    {person.profitAmm}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4  text-lg text-white font-semibold">
                  {person.mint}
                </td>
                <td className="whitespace-nowrap px-4 py-4 text-lg text-white font-semibold">
                  {person.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Collection;
