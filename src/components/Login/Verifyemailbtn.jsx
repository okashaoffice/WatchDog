import React from "react";

function Verifyemailbtn() {
  return (
    <div className="px-80 py-36">
      <div className="flex gap-x-3 ">
        <img src="images/logo.png" alt="" className="h-8" />
        <h1 className="text-xl font-bold">WatchDogs</h1>
      </div>
      <div className=" ">
        <div>
          <h1 className="text-2xl font-bold pt-4">Verify your email address</h1>
          <p className="text-[#3C3A3A] pt-4 text-sm">
            To continue setting up your WatchDogs account, please verify that
            this <br /> is your email address.
          </p>
          <button className="text-white  loginbtn w-72 h-14 mt-6 ">
            Verify email address
          </button>
          <p className="text-[#949292] text-sm pt-4">
            This link will expire in 5 days. If you did not make this request,
            please disregard this email. <br /> For help, contact us through our{" "}
            <span className="underline text-[#4D5EF4]">Help center</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Verifyemailbtn;
