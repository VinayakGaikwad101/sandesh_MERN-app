import React from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {
  const [inputs, SetInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleCheckBoxChange = (gender) => {
    SetInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto text-white">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="sandesh-text text-3xl font-semibold text-center">
          Sign Up to use Sandesh
        </h1>

        <form onSubmit={handleSubmit}>
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
              value={inputs.fullName}
              onChange={(e) => {
                SetInputs({
                  ...inputs,
                  fullName: e.target.value,
                });
              }}
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
              value={inputs.username}
              onChange={(e) => {
                SetInputs({ ...inputs, username: e.target.value });
              }}
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
              value={inputs.password}
              onChange={(e) => {
                SetInputs({ ...inputs, password: e.target.value });
              }}
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
              value={inputs.confirmPassword}
              onChange={(e) => {
                SetInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
          </div>

          <GenderCheckbox
            onCheckBoxChange={handleCheckBoxChange}
            selectedGender={inputs.gender}
          />
          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-300 mt-2 inline-block text-white"
          >
            Already have an account?
          </Link>

          <div>
            <button
              className="btn btn-block btn-sm mt-2 bg-gray-800 text-white hover:text-black border-slate-700"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
