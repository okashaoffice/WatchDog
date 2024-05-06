import React from "react";
import Nav from "../Navbar/Nav";
import Totalbalance from "../Dashboard/Totalbalance";
import Profit from "../Dashboard/Profit";
import Collection from "../Dashboard/Collection";
import NFTPL from "./NFTPL";
import Transaction from "../Dashboard/Transaction";
function Dash() {
  return (
    <div className="bg-black">
      <Nav />
      <div>
        <h1 className=" font-semibold text-7xl items-center text-center pt-16 mob:text-4xl dashfrontfont text-white">
          WatchDogs
        </h1>
        <div className="  h-48  ">
          <div className=" w-full relative  rounded-md shadow-xl px-28 mob:px-6 pt-16">
            <input
              type="text"
              className="block w-full rounded-md typeaddressfield  py-1.5 pl-7 pr-20  text-white  bg-black placeholder:text-gray-300 focus:border-1  sm:text-md sm:leading-8 "
              placeholder="Type in ETH Address.."
            />
            <div className="absolute genbtn  inset-y-0 mt-[4rem] right-[7rem] flex items-center mob:right-5">
              <button className="text-md p-4 ">Generate</button>
            </div>
          </div>
        </div>
        <div className="flex gap-x-4 pl-14 items-center mob:pl-6 ">
          <p className="text-white text-xl font-semibold mob:text-lg">
            Address:
          </p>
          <p className="text-[#B8B6B9] text-xl mob:text-lg">
            0x123Hdedhei0001223332dju
          </p>
        </div>
      </div>
      <div className=" p-4  mob:w-full ">
        <div className=" flex mob:block gap-x-2  px-6 mob:px-0">
          <Totalbalance />
          <Profit />
        </div>
        <div className="px-6 pt-2 mob:px-0">
          <Collection />
        </div>
        <div className="px-6 pt-2 mob:px-0">
          <NFTPL />
        </div>
        <div className="px-6 pt-2 mob:px-0">
          <Transaction />
        </div>
      </div>
    </div>
  );
}

export default Dash;
