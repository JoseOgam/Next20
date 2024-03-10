"use client";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
    // try {
    //   inputRef.current.focus();
    //   console.log("it works irregardless");
    // } catch (error) {
    //   console.log(error);
    // }
    emailjs
      .sendForm("service_6826yht", "template_0alm1gn", form.current, {
        publicKey: "Jj5mlgavv2HP8O5hL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" max-w-md w-full">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-white flex flex-col px-6 py-6"
        >
          <label>Name</label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none resize-none"
            name="message"
          />
          <input className=" bg-rose-700 rounded" type="submit" value="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
