import { MouseEventHandler } from "react";

export interface CustomBtnProp {
  title: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnStyle?: String;
}

export interface AppState {
  quote: [] | string | null | undefined; // Assuming quote is a string
  status: "idle" | "loading" | "succeeded" | "failed"; // Status can have these values
  error: string | undefined | null; // Assuming error is a string
}

export interface QuoteData {
  _id: Number;
  content: String | [];
  author: String;
  tags: String;
  authorSlug: String;
  length: Number;
  dateAdded: Date;
  dateModified: Date;
}
