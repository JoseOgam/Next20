"use client";
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
  const handleClick = () => {
    router.push("/");
  };

  useEffect(() => {
    fetchChar();
  }, []);

  return (
    <div className="grid justify-center items-center pt-10">
      <div>
        <button onClick={handleClick}>back</button>
      </div>
      {character.map((char: any, index) => (
        <div key={index}>
          {char.image ? (
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
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
          <div>
            <div>Name: {char.name}</div>
            <div>House: {char.house}</div>
            <div>
              Wand: {char.wand.wood} , {char.wand.core}
            </div>
            <div>Actor: {char.actor}</div>
            <div>ancestry: {char.ancestry}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default page;
