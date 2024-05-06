import React from "react";
import { Link } from "react-router-dom";
function StartTracking({ countinuebtn }) {
  return (
    <div>
      <div className="w-full bg-[#000000B2] h-full  absolute top-0 left-0 ">
        <div className="loginpagefont absolute top-12 left-[38%] mob:left-12">
          <div className="w-[28rem] bg-white rounded-t-3xl mob:w-[18rem] rounded-b-xl">
            <div className="bg-[#687e81] rounded-t-3xl">
              <img src="images/startingtrack.png" alt="" />
            </div>
            <div className="rounded-lg ">
              <div className="flex justify-center gap-x-2 items-center pt-6">
                <span className=" loginbtn w-4 h-4"></span>
                <p className="text-black text-base">10</p>
              </div>
              <h1 className="text-black  text-base  px-8 pt-5 font-medium   ">
                You get 50 free credits during your first month, and 15 free
                credits will refill every month after that.
              </h1>
              <div className="px-8 py-3 mob:px-3">
                <h1 className="text-black font-medium">
                  You can always buy additional credits.{" "}
                  <Link className="text-black font-semibold">Learn more</Link>
                </h1>
              </div>
              <button
                onClick={countinuebtn}
                className="bg-[#5D5C5E] rounded-lg mob:px-20 text-sm py-4 px-24 text-white ml-9 mb-6"
              >
                Start tracking with WatchDogs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartTracking;
