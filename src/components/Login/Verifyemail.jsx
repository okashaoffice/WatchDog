import React from "react";
import { Link } from "react-router-dom";

function Verifyemail() {
  return (
    <div className="  bg-white h-screen flex items-center justify-center">
      <div>
        <div className="flex justify-center">
          <img className="h-14 relative bottom-20" src="images/logo.png" alt="Your Company" />
        </div>
        <div className="text-center">
          <h1 className="text-xl font-bold ">Verify your email</h1>
          <p className="text-[#3C3A3A] font-semibold ">We sent an emai to </p>
          <p className="text-[#3C3A3A] font-semibold">
            romain.bernus@gmail.com
          </p>
          <p className="text-[#3C3A3A] font-semibold pb-8">
            Click the link inside to get started.{" "}
          </p>
          <Link to="/" className="text-[#A445C6] font-semibold mt-12">
            Resend email
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Verifyemail;
