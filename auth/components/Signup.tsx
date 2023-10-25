import React from "react";

const Signup = () => {
  return (
    <section className="flex justify-center items-center  pt-24">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="w-full md:w-full px-3 mb-6 md:mb-0">
          <input
            placeholder="form"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="form"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>

        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="form"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <div className="w-full md:w-full px-3 mb-6 md:mb-0 pt-3">
          <input
            placeholder="form"
            className="appearance-none block w-full bg-gray-200
             text-gray-700 border border-gray-200 rounded py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
          />
        </div>
        <div className="flex justify-center items-center md:w-full pt-3">
          <button
            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
