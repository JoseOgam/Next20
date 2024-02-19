"use client";
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

type params = {
  params: {
    recipeId: String;
  };
};

const RecipeId = ({ params: recipeId }: params) => {
  const [recipe, setRecipe] = useState([]);
  console.log(recipe);

  const options = {
    headers: {
      "X-RapidAPI-Key": "5609c6b61fmsh712758e3c1c2ff6p176cc7jsn14cf0bd40367",
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  const fetchRecipe = async () => {
    try {
      const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=pasta&cuisine=italian/${recipeId}`;
      const response = await axios.get(url, options);
      const parseData = response.data.results;
      setRecipe(parseData);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div>
      <div>
        {recipe.map((item: any, index: any) => (
          <div>
            {item.image ? (
              <div>
                <Image
                  alt="detailed image"
                  src={item.image}
                  width={200}
                  height={200}
                  className=" rounded"
                />
              </div>
            ) : (
              <div>
                <h1>NO IMAGE FOUND</h1>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeId;
