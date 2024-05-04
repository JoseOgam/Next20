import { CustomBtnProp } from "@/types";
import React from "react";

const CustomBtn = ({ title, handleClick, btnStyle }: CustomBtnProp) => {
  return (
    <div>
      <button className={`${btnStyle}`} onClick={handleClick}>
        {title}
      </button>
    </div>
  );
};

export default CustomBtn;
