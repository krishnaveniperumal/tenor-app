import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Results } from "./results";
import { SearchGif } from "./searchGif";
import {searchApi} from "../Api/Api";
import { handleScrollCalculation,Loader } from "../utils/utils";

export const SearchResults = () => {
  const { val } = useParams();
  const [gifResults, setGifResults] = useState([]);
  const [gifResponse, setGifResponse] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const limit = 20;

  const getSearchedGif = async (nextData) => {
    const gifData = await searchApi(nextData, limit, val) ;
    setGifResponse(gifData);
    setGifResults([...gifResults, ...gifData.results]);
    setIsFetching(false);
  };

  const  handleScroll =() => {
    handleScrollCalculation()
    setIsFetching(true);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    getSearchedGif();
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    if (gifResponse.results.length > 0) {
      getSearchedGif(gifResponse.next);
    }
  }, [isFetching, gifResponse.results, gifResponse.next ]);

  return (
    <>
      <SearchGif searchTerm={val} />
      <Results searchTerm={val} searchValue={gifResults} />
      {isFetching && gifResponse.length > 0 && (
        <Loader />
      )}
    </>
  );
};
