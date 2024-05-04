import { MouseEventHandler } from "react";

export interface CustomBtnProp {
  title: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnStyle?: String;
}
