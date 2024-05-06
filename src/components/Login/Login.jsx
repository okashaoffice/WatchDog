import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

function Loginpage() {
  return (
    <div className="bg-white loginpagefont">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="images/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-10 mb-3 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4">
            <div>
              <div class="form-group ">
                <input
                  type="text"
                  id="username"
                  name="username"
                  class="form-input"
                  placeholder=" "
                  required
                  autoComplete="email"
                />
                <label for="username" class="form-label">
                  Email address
                </label>
              </div>
            </div>
            <div>
              <Link to="/Signin">
                <button
                  type="submit"
                  className="flex w-full justify-center loginbtn  px-3 py-1.5 text-md leading-8 text-white shadow-sm  "
                >
                  Continue
                </button>
              </Link>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/Signin"
                className="font-semibold leading-6 text-[#9C41BD] hover:text-indigo-500"
              >
                Log in
              </Link>
            </p>
            <div className="bg-[#5B5959] h-[0.5px] text-center">
              <span className=" relative  bottom-[0.70rem] bg-white px-4 text-[#565555]">
                OR
              </span>
            </div>
            <div>
              <button className="flex w-full  px-3 py-1.5 text-md leading-8 text-black shadow-sm border-2 border-[#d1cbcb] items-center gap-x-3">
                {" "}
                <FcGoogle className="text-xl" />
                Continue with Google
              </button>
            </div>
            <div>
              <button className="flex w-full  px-3 py-1.5 text-md leading-8 text-black shadow-sm border-2 border-[#d1cbcb] items-center gap-x-4">
                {" "}
                <img src="images/microsoft.png" alt="" className="h-5" />
                Continue with Microsoft Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
