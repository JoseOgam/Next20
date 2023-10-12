import { CustomBtnProps } from "@/types";
import React from "react";

const CustomBtn = ({ title, handleClick, btnStyle }: CustomBtnProps) => {
  return (
    <button className={`${btnStyle}`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default CustomBtn;
