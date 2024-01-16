import { CDN_URL } from "../utils/constants";
import MovieModal from "./MovieModal";
import { useState } from "react";

const MovieCard = (props) => {
  const { resData, onClick } = props;
  const { title, id, poster_path, release_date } = resData;

  const xmas = new Date(resData.release_date);
  const year = xmas.getFullYear();

  //var release_date_new = resData.release_date.getYear();
  if (resData.title.split(" ").length >= 2) {
    var newTitle = resData.title.split(" ").slice(0, 2).join(" ") + "...";
  } else {
    var newTitle = resData.title.split(" ")[0];
  }

  return (
    <div
      className="movie-card hover:scale-105 hover:transition-all"
      onClick={() => onClick(resData)}
    >
      <img
        className=" h-72 w-[12.5rem] rounded-md hover:cursor-pointer"
        src={CDN_URL + poster_path}
      ></img>
      <div className="content text-white text-lg">
        <h3>{newTitle}</h3>
        <h4 className=" text-sm">{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
