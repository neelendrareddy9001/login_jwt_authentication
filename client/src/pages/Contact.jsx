import React from "react";
import Navbar from "../Components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="section-container bg-blue-500 max-w-md mx-auto rounded-xl p-8 mt-20">
        <h1 className="text-center font-semibold mb-4 text-xl">Contact Us</h1>

        <form>
          <div className="input-container">
            <div className="flex flex-col ">
              <label htmlFor="name" className="font-semibold text-md ml-1 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="py-2 px-4 rounded-md w-full outline-none"
              />
            </div>
            <div className="flex flex-col mt-3 ">
              <label
                htmlFor="email"
                className="font-semibold text-md ml-1 mb-1"
              >
                Email Address
              </label>
              <input
                type="text"
                placeholder="Enter your eamil"
                className="py-2 px-4 rounded-md w-full outline-none"
              />
            </div>
            <div className="flex flex-col mt-3 ">
              <label
                htmlFor="password"
                className="font-semibold text-md ml-1 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="py-2 px-4 rounded-md w-full outline-none"
              />
            </div>
            <div className="flex flex-col mt-3 ">
              <label
                htmlFor="confirmPassword"
                className="font-semibold text-md ml-1 mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="py-2 px-4 rounded-md w-full outline-none"
              />
            </div>
          </div>
          <button className="px-8 py-2 bg-green-400 rounded-md text-white mt-[1rem]">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
