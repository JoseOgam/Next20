"use client";
import { fetchRecipes } from "@/services/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

const List = () => {
  const { recipes, status, error } = useSelector((state: any) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes() as any);
  }, []);
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className=" pt-5">
        <div className="flex items-center justify-center">
          {recipes.map((item: any, index: Number) => (
            <div key={item.id}>
              <div>
                {item.image ? (
                  <Image
                    src={item.image}
                    alt="recipesImages"
                    height={118}
                    width={118}
                    className=" object-contain"
                  />
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

export default List;
