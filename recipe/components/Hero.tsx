"use client";

import { fetchRecipes, getRecipes } from "@/services/redux/slice";
import Image from "next/image";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Hero = () => {
  const { recipes, status, error } = useSelector((state: any) => state.recipes);
  const dispatch = useDispatch();
  const recipeUrl =
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "5609c6b61fmsh712758e3c1c2ff6p176cc7jsn14cf0bd40367",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const recipeApiUrl = async () => {
    try {
      const response = await fetch(recipeUrl, options);
      const parseData = await response.json();
      console.log(parseData);
      dispatch(getRecipes(parseData));
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    recipeApiUrl();
    // dispatch(fetchRecipes() as any);
  }, []);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
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
      <div>
        <div>
          {recipes.map((item: any, index: Number) => (
            <div key={item.id}>
              <div>
                {item.image ? (
                  <Image src="" alt="char images" height={118} width={118} />
                ) : (
                  <div>NO IMAGE FOUND </div>
                )}
                <div>
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
