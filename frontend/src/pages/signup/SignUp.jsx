import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-white">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="sandesh-text text-3xl font-semibold text-center">
          Sign Up to use Sandesh
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">
                Full Name
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text text-gray-100">
                Username
              </span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
              placeholder="johndoe"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered  h-10 bg-gray-800 text-white"
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text text-white">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10 bg-gray-800 text-white"
            />
          </div>

          <GenderCheckbox />
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:text-black border-slate-700">
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
