"use client";
import { CustomBtnProps } from "@/types";
import React from "react";

const CustomBtn = ({ title, btnStyles, handleSubmit }: CustomBtnProps) => {
  return (
    <button onSubmit={handleSubmit} className={btnStyles}>
      {title}
    </button>
  );
};

export default CustomBtn;
