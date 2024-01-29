import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center pb-7">
      <h2>Contact</h2>
      <div className="flex items-center justify-center flex-col py-8 space-y-2">
        <form className="flex flex-col bg-transparent space-y-5">
          <input
            type="text"
            placeholder="name"
            className=" p-3 bg-zinc-600 rounded border-black focus:border-teal-700 text-white"
          />
          <input
            type="email"
            placeholder="email"
            className="p-3 bg-zinc-600 rounded border-black focus:border-teal-700 text-white"
          />
          <textarea
            placeholder="type message here..."
            className="p-3 bg-zinc-600 rounded border-black focus:border-teal-700 text-white resize-none"
          />
        </form>
        <button className=" px-4 py-2 bg-cyan-200 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
