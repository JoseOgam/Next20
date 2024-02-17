"use client";

import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-col pt-36 items-center padding-x">
        <h1 className="hero__title">Find Recipes quickly and easily!</h1>
        <p className="hero__subtitle items-center justify-center">
          streamline your cooking experience with our effortless recipes
        </p>
        <button className=" rounded bg-blue-800 px-2 py-3">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Hero;
