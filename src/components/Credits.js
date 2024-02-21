import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CastReview from "./CastReview";
import { CDN_URL, BASE_URL, API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";

const Credits = () => {
  const [castData, setCastData] = useState([]);

  const id = useParams();
  const movieId = id.movieId;
  useEffect(() => {
    fetchCastUrl();
  }, []);

  const fetchCastUrl = async () => {
    const data = await fetch(
      BASE_URL + "/movie/" + movieId + "/credits" + API_KEY
    );
    const jsonData = await data.json();
    setCastData(jsonData?.cast);
  };

  return (
    <div className="cast-main">
      <div className="cast-container">
        <div>
          <h1>Top Billed Cast</h1>
          <img src=""></img>
          <div className="credit-container flex flex-wrap justify-center gap-[4.25rem] py-4 px-2 mt-9">
            {castData.map((data, index) => {
              return <CastReview data={data} key={index} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
