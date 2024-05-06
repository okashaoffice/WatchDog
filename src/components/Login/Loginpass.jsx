import React from 'react'

function Loginpass() {
  return (
    <div>
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
                  Password
                </label>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center loginbtn  px-3 py-1.5 text-md leading-8 text-white shadow-sm  "
              >
                Continue
              </button>
            </div>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-[#9C41BD] hover:text-indigo-500"
              >
                Log in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Loginpass