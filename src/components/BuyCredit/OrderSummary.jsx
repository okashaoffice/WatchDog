import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";

function OrderSummary() {
  return (
    <div className="flex justify-center pt-12">
      <div className="w-1/4 p-4 border-2 rounded-lg mob:w-full">
        <div className="flex items-center gap-x-3 pt-4">
          <Link to="/buycredits">
            <FaArrowLeft />
          </Link>
          <h1 className="text-lg font-bold">Order summary</h1>
        </div>
        <div className="flex justify-between border-b-2 pb-3 pt-8">
          <p className="text-sm text-gray-500">Description</p>
          <p className="text-sm text-gray-500">Amount</p>
        </div>
        <div className="flex justify-between pt-3 border-b-2 pb-3">
          <p className="text-black text-base font-semibold">115 credits</p>
          <p className="text-black font-semibold text-base">$15.00 USD</p>
        </div>
        <div>
          <div>
            <div className="flex gap-x-3 justify-end items-center pt-3 ">
              <p className="text-sm text-gray-500">Estimated tax</p>
              <p className="text-black text-end text-base font-semibold ">
                $0.00 USD
              </p>
            </div>
            <div className="flex gap-x-3 justify-end items-center pt-3">
              <p className="text-sm text-gray-500 ">Estimated total</p>
              <p className="text-black text-base font-semibold ">$15.00 USD</p>
            </div>
          </div>
        </div>
        <p className="text-slate-500 pt-4">
          Paid credits will expire one year from today <br />
          Terms
        </p>
        <h1 className="text-lg font-bold text-black pt-12">Payment method</h1>
        <div className=" flex items-center  justify-between p-2 border-2 rounded-md w-96 mt-4">
          <div>
            <p className="text-black text-lg ">Visa***4176</p>
            <p className="text-gray-300 text-base">Expire 09/2026</p>
          </div>
          <IoIosArrowForward />
        </div>
        <div className="flex justify-end gap-x-3 items-center pt-6">
          <FaPlus />
          <h1 className="text-black font-semibold text-base">
            Add payment method
          </h1>
        </div>
        <div>
          <div className="flex justify-center gap-x-7 pt-6">
            <Link to="/buycredits">
              <button className="bg-gray-300 text-black h-9 w-20 rounded-lg font-semibold">
                Back
              </button>
            </Link>
            <button className="h-9 w-64 bg-black text-white font-semibold rounded-md">
              Continue Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
