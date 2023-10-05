import { CustomButtonProps } from "@/types";
import React from "react";

const CustomButton = ({
  title,
  containerStyles,
  btnType,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`${containerStyles}`}
    >
      {title}{" "}
    </button>
  );
};

export default CustomButton;
