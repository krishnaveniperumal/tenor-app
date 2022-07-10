import React, { useState, useEffect } from "react";
import { TrendingResults } from "./trendings";
import { SearchGif } from "./searchGif";
import { Results } from "./results";
import { featuredGifApi } from "../Api/Api";
import { handleScrollCalculation,Loader } from "../utils/utils";
import "../App.css";

export const FeaturedGif = () => {
  const [gifResults, setGifResults] = useState([]);
  const [gifResponse, setGifResponse] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const limit = 20;

  const getGif = async (nextData) => {
    const gifData = await featuredGifApi(nextData, limit)
    setGifResponse(gifData);
    setGifResults([...gifResults, ...gifData.results]);
    setIsFetching(false);
  };

  const handleScroll =() => {
    handleScrollCalculation()
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getGif()
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    if (gifResponse.results.length > 0) {
      getGif(gifResponse.next)
    }
  }, [gifResponse.next, gifResponse.results, isFetching]);

  return (
    <>  
      <SearchGif />
      <TrendingResults />
      <Results data={gifResults} />
      {isFetching && gifResponse.length > 0 && (
        <Loader />
      )}
    </>
  );
};
