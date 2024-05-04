import { MouseEventHandler } from "react";

export interface CustomBtnProp {
  title: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnStyle?: String;
}

export interface AppState {
  quote: [] | string | null; // Assuming quote is a string
  status: "idle" | "loading" | "succeeded" | "failed"; // Status can have these values
  error: string | undefined | null; // Assuming error is a string
}
