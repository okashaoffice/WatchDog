import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function WelcomPopup({ countinuebtn }) {
  return (
    <div className="w-full bg-[#000000B2] h-full  absolute top-0 left-0 ">
      <div className="loginpagefont absolute top-12 left-[38%] mob:left-12">
        <div className="w-[26rem] bg-white rounded-t-3xl mob:w-[18rem] rounded-b-xl">
          <div className="bg-[#687e81] rounded-t-3xl">
            <img src="images/Dog.png" alt="" />
          </div>
          <div className="rounded-lg">
            <h1 className="text-black  text-xl mob:px-3 px-12 pt-5 font-bold   ">
              Welcome to WatchDogs
            </h1>
            <p className="text-[#727272] text-sm px-12 mob:px-3 pt-4">
              {" "}
              Meet your creative copilot.
            </p>
            <div className="px-12 py-3 mob:px-3">
              <h1 className="text-black font-bold">
                Search and learn with WatchDogs to..
              </h1>
              <ul className="list-disc pl-5">
                <li className="text-sm py-3 mob:py-1  text-[#2B2B2B] font-medium">
                  Search any wallet addresses on the Ethereum blockchain and
                  understand their NFT activity.
                </li>
                <li className="text-sm py-3 mob:py-1 font-medium text-[#2B2B2B]">
                  Create watchlists, track wallet addresses and get notified
                  when trades happen.{" "}
                </li>
                <li className="text-sm py-3 mob:py-1 font-medium text-[#2B2B2B]">
                  Export the wallet data to build your own analysis.{" "}
                </li>
              </ul>
            </div>
            <button
              onClick={countinuebtn}
              className="bg-black rounded-lg mob:px-20 text-sm py-4 px-36 text-white ml-7 mb-1"
            >
              Continue
            </button>
            <p className="text-[#9D9A9E] text-center px-8 text-sm py-2">
              By clicking ‘Continue”, you agree to our
              <Link className="text-[#707070]">terms</Link> and
              <Link className="text-[#707070]"> content policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomPopup;
