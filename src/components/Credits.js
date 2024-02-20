import React from "react";
import { useLocation, useParams } from "react-router-dom";
import CastReview from "./CastReview";
import { CDN_URL, BASE_URL, API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";

const Credits = () => {
  const [castData, setCastData] = useState([]);

  const id = useParams();
  const movieId = id.movieId;
  //const location = useLocation();
  //const castData = location.state.castData;
  console.log(movieId);
  useEffect(() => {
    fetchCastUrl();
  }, []);

  const fetchCastUrl = async () => {
    const data = await fetch(
      BASE_URL + "/movie/" + movieId + "/credits" + API_KEY
    );
    const jsonData = await data.json();
    //console.log(jsonData);
    setCastData(jsonData?.cast);
    console.log(castData);
  };
  //console.log(props);
  //const { castData } = props.castData;

  return (
    <div className=" bg-white">
      <div className="cast-container">
        <div>
          <h1>Top Billed Cast</h1>
          <img src=""></img>
          <div>
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
