"use client";
import React, { useEffect } from "react";

const SectionWrapper = (Component, idName) => {
  return (props) => {
    useEffect(() => {
      console.log(`Component ${Component.name} mounted`);
    }, []);
    return <Component id={idName} {...props} />;
  };
};

export default SectionWrapper;
