"use client";
import React from "react";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div>
        <h1 className=" font-extrabold text-rose-600">Overview</h1>
        <p className=" font-extrabold items-center py-16">
          I am Software developer majoring in front end development, I've been
          studying this art for five years now currently i am open to
          opportunities
        </p>
      </div>
      <ul></ul>
    </div>
  );
};

export default SectionWrapper(About, "about");
