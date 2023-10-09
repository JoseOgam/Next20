import { fetchChar, getCharacters } from "@/services/redux/slice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Characters = () => {
  const characters = useSelector((state: any) => state.characters);
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
  return <div>Characters</div>;
};

export default Characters;
