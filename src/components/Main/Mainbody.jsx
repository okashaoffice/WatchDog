import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import WelcomPopup from "./WelcomPopup";
import StartTracking from "./StartTracking";
function Mainbody() {
  const [isPopup, setIsPopup] = useState(true);
  const countinuebtn = () => {
    setIsPopup((previousState) => !previousState);
  };
  return (
    <div className="bg-black h-full min-h-screen">
      <Nav />
      <h1 className=" font-bold text-8xl items-center text-center pt-16 mob:text-5xl ">
        <span className="watchdogtext">WATCH</span>
        <span className=" dogs text-white">DOGS</span>
      </h1>
      <p className="text-white font-sans text-xl items-center text-center pt-5 mob:text-base">
        We know what you do in the dark..
      </p>
      <div className=" mainarea h-72 mt-12 ">
        <div className=" w-full relative  rounded-md shadow-xl px-28 mob:px-6 pt-28">
          <input
            type="text"
            className="block w-full rounded-md typeaddressfield  py-1.5 pl-7 pr-20  text-white  bg-black placeholder:text-gray-300 focus:border-1  sm:text-md sm:leading-8 "
            placeholder="Type in ETH Address.."
          />
          <div className="absolute genbtn  inset-y-0 mt-28 right-[7rem] flex items-center mob:right-5">
            <button className="text-md p-4 ">Generate</button>
          </div>
        </div>
      </div>
      {isPopup ? <WelcomPopup countinuebtn={countinuebtn} /> : null}
    </div>
  );
}

export default Mainbody;
