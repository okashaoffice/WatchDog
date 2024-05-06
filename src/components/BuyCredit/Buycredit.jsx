import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function Buycredit() {
  const [isadd, isaddSet] = useState(0);

  return (
    <div className="h-70  bg-white rounded-lg p-20 ">
      <div>
        <h1 className="text-black text-lg font-bold pb-4 flex justify-center">
          Buy credits
        </h1>
      </div>
      <div className="grid justify-center items-center gap-y-4">
        <div className="flex justify-center">
          <div className="bg-black h-12 w-12 rounded-full "></div>
        </div>
        <h1 className="text-black text-md font-semibold">115 credits</h1>
        <p className="text-black text-sm font-semibold justify-center flex">
          $15 USD
        </p>
        <div className="flex gap-x-3 items-center text-center ">
          <button
            className="text-3xl font-semibold"
            onClick={() => isaddSet((isadd) => isadd - 1)}
          >
            -
          </button>
          <p className="border-2 rounded-md w-8 items-center text-center h-8  ">
            {isadd}
          </p>
          <button
            className="text-3xl font-semibold"
            onClick={() => isaddSet((isadd) => isadd + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-x-1 pt-2">
        <Link to="/">
          <button className="bg-gray-300 text-white h-9 w-20 rounded-lg">
            Cencel
          </button>
        </Link>

        <Link to="/order">
          <button className="h-9 w-64 bg-black text-white rounded-md">
            Continue
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Buycredit;
