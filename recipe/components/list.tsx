"use client";
import { fetchRecipes } from "@/services/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

const List = () => {
  const { recipes, status, error } = useSelector((state: any) => state.recipes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes() as any);
  }, []);
  if (status === "loading") {
    return <div className=" font-extrabold text-blue-700">Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className=" justify-center items-center pt-5">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 items-center justify-evenly">
          {recipes.map((item: any, index: Number) => (
            <div key={item.id}>
              <div>
                <Link href={`recipe/${item.id}`}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt="recipesImages"
                      height={200}
                      width={200}
                      className=" rounded object-contain"
                    />
                  ) : (
                    <div>NO IMAGE FOUND </div>
                  )}
                  <div>
                    <p>{item.title}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
