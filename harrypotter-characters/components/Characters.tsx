"use client";
import { fetchChar, getCharacters } from "@/services/redux/slice";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Characters = () => {
  const characters = useSelector((state: any) => state.characters.characters);
  const dispatch = useDispatch();
  console.log(characters);

  const fetchChar = async () => {
    try {
      const url = `https://hp-api.onrender.com/api/characters`;
      const response = await fetch(url, {
        method: "GET",
      });
      const parseRes = await response.json();
      dispatch(getCharacters(parseRes));
    } catch (e) {}
  };

  useEffect(() => {
    fetchChar();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 justify-center items-center ">
      {characters.map((item: any, index: Number) => (
        <div key={item.id}>
          <div className="flex justify-center items-center rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <Link href={`/character/${item.id}`}>
              {item.image ? (
                <Image
                  src={item.image}
                  alt="char images"
                  height={118}
                  width={118}
                />
              ) : (
                <div className=" font-bold">No image Found</div>
              )}
              <div>
                <p>{item.name} </p>
                <p>{item.dateOfBirth} </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;