"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

type params = {
  params: {
    charId: string;
  };
};

const page = ({ params: { charId } }: params) => {
  const [character, setCharacter] = useState([]);
  console.log(character);

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

  useEffect(() => {
    fetchChar();
  }, []);

  return <div>page</div>;
};

export default page;
