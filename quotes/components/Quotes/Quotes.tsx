import { fetchRandomQuotes } from "@/redux/slice/QuotesSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Quotes = () => {
  const quotes = useSelector((state: any) => state.quotes.quote);

  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomQuotes());
  }, [dispatch]);

  const handleFetchQuote = () => {
    dispatch(fetchRandomQuotes());
  };
  return (
    <div>
      <div>
        <h1> the Quote: {quotes.content}</h1>
        <p>The Author: {quotes.author} </p>
      </div>
      <button onClick={handleFetchQuote}>fetch</button>
    </div>
  );
};

export default Quotes;
