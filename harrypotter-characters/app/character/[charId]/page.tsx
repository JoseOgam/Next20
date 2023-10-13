"use client";
import { CustomBtn } from "@/components";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

type params = {
  params: {
    charId: string;
  };
};

const page = ({ params: { charId } }: params) => {
  const [character, setCharacter] = useState([]);
  console.log(character);
  const router = useRouter();

  const fetchChar = async () => {
    try {
      const url = `https://hp-api.onrender.com/api/character/${charId}`;
      const response = await axios.get(url);
      const data = response.data;
      setCharacter(data);
    } catch (e) {
      throw e;
    }
  };
  const handleRoute = () => {
    router.push("/");
  };

  useEffect(() => {
    fetchChar();
  }, []);

  return (
    <div className="grid justify-center items-center pt-16">
      <div>{/* <button onClick={handleRoute}>back</button> */}</div>
      {character.map((char: any, index) => (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-center "
          key={index}
        >
          {char.image ? (
            <Image
              className="h-48 w-full object-contain  md:h-full md:w-48"
              src={char.image}
              alt="Modern building architecture"
              height={118}
              width={118}
            />
          ) : (
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              No Image Found
            </div>
          )}
          <div className="py-10 gap-20">
            <div>Name: {char.name}</div>
            <div>House: {char.house}</div>
            <div>
              Wand: {char.wand.wood} , {char.wand.core}
            </div>
            <div>Actor: {char.actor}</div>
            <div>ancestry: {char.ancestry}</div>
            <CustomBtn
              title="Home Page"
              handleClick={handleRoute}
              btnStyle="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
