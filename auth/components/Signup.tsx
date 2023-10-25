"use client";
import React from "react";
import { CustomBtn } from ".";

const Signup = () => {
  const handleSubmitUsers = () => {};
  return (
    <section className="flex justify-center items-center  pt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
          <input
            placeholder="your name"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            required
          />
        </div>
        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="your mail"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="email"
            required
          />
        </div>

        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="password"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            required
          />
        </div>
        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="confirm password"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="password"
            required
          />
        </div>
        <div className="flex justify-center items-center md:w-full pt-3">
          {/* <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
             text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign Up
          </button> */}
          <CustomBtn
            title="signup"
            btnStyles="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none
             text-white font-bold py-2 px-4 rounded"
            handleSubmit={handleSubmitUsers}
          />
        </div>
      </form>
    </section>
  );
};

export default Signup;
