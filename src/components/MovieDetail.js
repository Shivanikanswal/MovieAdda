import { CDN_URL } from "../utils/constants";
import Credits from "./Credits";
import { useState } from "react";
import { Link } from "react-router-dom";
const MovieDetail = (props) => {
  // const [creditValue, setCreditValue] = useState(false);
  const { movieInfo } = props;
  const genresList = movieInfo?.genres?.map((genre) => genre.name);
  const {
    poster_path,
    overview,
    original_title,
    runtime,
    release_date,
    tagline,
  } = movieInfo;
  const genreArray = genresList?.join(",");
  var date = new Date(release_date);
  var release_year = date.getFullYear();

  // const bgImgUrl = CDN_URL + backdrop_path;
  console.log(movieInfo);

  function toHoursAndMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return hours + "h " + minutes + "m";
  }

  // const callCredits = () => {
  // setCreditValue(true);
  // console.log("heeloo");
  // };

  //console.log(toHoursAndMinutes(runtime));
  return (
    <div className="flex p-4">
      <div className="moviePoster w-1/3 mr-6">
        <img src={CDN_URL + poster_path} className="rounded-md"></img>
      </div>
      <div className="movieInfo w-2/3">
        <div className="movieHeader">
          <h1 className="movieTitle text-4xl font-bold mb-1">
            {original_title}({release_year})
          </h1>
          <p className="movieGenre">
            {release_date} | {genreArray} | {toHoursAndMinutes(runtime)}
          </p>
        </div>
        <div>
          <p className=" italic">{tagline}</p>
        </div>
        <div className="movieDescription">
          <h3 className="text-[21px] font-bold">Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <button className="btn border border-white w-[20%] rounded-lg p-1 mt-3 mr-2">
            Watch Trailer
          </button>
          <button className="btn border border-white w-[20%] rounded-lg p-1 mt-3">
            <Link to={"/credits"}>Credits</Link>
          </button>
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
