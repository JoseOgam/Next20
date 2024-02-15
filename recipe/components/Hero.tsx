"use client";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const apiCall = async () => {
    try {
      const res = await fetch(
        `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "5609c6b61fmsh712758e3c1c2ff6p176cc7jsn14cf0bd40367",
            "X-RapidAPI-Host":
              "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log("fetching...");
  };
  return (
    <div className="hero">
      <div className="flex-col pt-36 items-center padding-x">
        <h1 className="hero__title">Find Recipes quickly and easily!</h1>
        <p className="hero__subtitle items-center justify-center">
          streamline your cooking experience with our effortless recipes
        </p>
        <button onClick={apiCall} className=" rounded bg-blue-800 px-2 py-3">
          Explore Recipes
        </button>
      </div>
    </div>
  );
};

export default Hero;
