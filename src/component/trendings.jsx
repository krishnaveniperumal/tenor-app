import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import { trendingGifApi } from "../Api/Api";
import "../App.css";

export const TrendingResults = () => {
  const [trendingData, SetTrendingData] = useState([]);

  useEffect(() => {
    (async () => {
      const trendingData = await trendingGifApi();
      SetTrendingData(trendingData);
    })();
  }, []);

  return (
    <div className="container mt-5 pt-5 ">
      <h4>Trending Tenor Searches</h4>
      <Carousel itemsToShow={5} className="pt-3">
        {trendingData.map((item,index) => (
          <Link to={`/search/${item.searchterm}`} className="mx-2 px-2" key={index}>
            <div
              style={{
                backgroundImage: `url(${item.image})`,
                width: "180px",
                height: "90px",
              }}
              className="card"
            ></div>
            <p className="text-capitalize text-dark">{item.searchterm}</p>
          </Link>
        ))}
      </Carousel>
    </div>
  );
};
