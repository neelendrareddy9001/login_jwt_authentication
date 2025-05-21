import React from "react";
import Navbar from "../Components/Navbar";
import contactBanner from "../assets/contactBanner.jpg";

const Contact = () => {
  return (
    <>
      <Navbar />
      <section className="section-container mx-auto px-4 smm:px-6 mdd:px-9 lgg:px-12">
        <h1 className="text-center font-semibold mb-4 text-3xl">Contact Us</h1>

        <div className="flex w-[100%] gap-4 mt-16 flex-col smm:flex-row">
          <form className=" px-8 shadow-xl w-full rounded-md py-9 smm:w-[60%]">
            <div className="input-container">
              <div className="flex flex-col ">
                <label
                  htmlFor="name"
                  className="font-semibold text-md ml-1 mb-1"
                >
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
          <div className="contactImg">
            <img
              src={contactBanner}
              alt="contact"
              style={{ width: "600px", height: "400px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
