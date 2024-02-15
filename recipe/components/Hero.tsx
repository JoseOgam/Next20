"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 pt-36  padding-x">
        <h1 className="hero__title">Find Recipes quickly and easily!</h1>
        <p className="hero__subtitle">
          streamline your cooking experience with our effortless recipes
        </p>
        <button className=" rounded bg-blue-800 px-2 py-3">
          Explore Recipes
        </button>
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero3.png"
            alt="hero image"
            fill
            className=" object-contain pt-6"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
