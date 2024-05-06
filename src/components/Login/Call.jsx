import React from "react";
import { Link, NavLink } from "react-router-dom";
function Call() {
  return (
    <div>
      <div className="bg-white loginpagefont">
        <div className="flex min-h-full flex-1 flex-col p-24 justify-center mob:p-12">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
            <img
              className="mx-auto h-10 w-auto"
              src="images/logo.png"
              alt="Your Company"
            />
            <h2 className="mt-10 mb-3 text-center text-3xl font-bold leading-9 mob:pt-12 text-gray-900 mob:text-xl">
              What should we call you?
            </h2>
          </div>

          <div className=" sm:mx-auto sm:w-full sm:max-w-sm pt-4">
            <form className=" px-6">
              <div className="flex justify-between gap-x-3">
                <div class="form-group ">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-input rounded-sm"
                    placeholder=" "
                    required
                    autoComplete="email"
                  />
                  <label for="username" className="form-label items-center">
                    First Name
                  </label>
                </div>
                <div>
                  <div class="form-group ">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      class="form-input rounded-sm"
                      placeholder=" "
                      required
                      autoComplete="email"
                    />
                    <label for="username" class="form-label">
                      Last Name
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center loginbtn  px-3 py-1.5 text-md rounded-sm leading-8 text-white shadow-sm  "
                >
                  Continue
                </button>
              </div>
              <p className="mt-10 text-center text-sm text-gray-500">
                By clicking ‘Continue”, you agree to our{" "}
                <Link className="font-semibold leading-6 text-[#9C41BD] ">
                  Terms
                </Link>{" "}
                and confrim you’re 18 years or older.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Call;
