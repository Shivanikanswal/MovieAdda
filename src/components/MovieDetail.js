import { API_KEY, BASE_URL, CDN_URL, VIDEO_URL } from "../utils/constants";
import Credits from "./Credits";
import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
const MovieDetail = (props) => {
  const { movieInfo } = props;
  //const [castData, setCastData] = useState([]);
  const [key, setKey] = useState("");

  // const movieId = useParams();

  const {
    poster_path,
    overview,
    id,
    original_title,
    runtime,
    release_date,
    tagline,
  } = movieInfo;

  useEffect(() => {
    fetchVideo();
  }, [id]);

  const fetchVideo = async () => {
    const videoData = await fetch(
      BASE_URL + "/movie/" + id + API_KEY
      //https://api.themoviedb.org/3/movie/{movie_id}/videos
    );
    const jsonVideoData = await videoData.json();
    console.log(jsonVideoData);
    //setCastData(jsonVideoData?.credits?.cast);
    if (jsonVideoData?.videos?.results.length > 0) {
      jsonVideoData?.videos?.results.map((data, index) => {
        if (data.type === "Trailer") {
          setKey(data.key);
        }
      });
    }
  };
  //console.log(castData);

  const genresList = movieInfo?.genres?.map((genre) => genre.name);
  const genreArray = genresList?.join(",");
  var date = new Date(release_date);
  var release_year = date.getFullYear();
  const trailerUrl = VIDEO_URL + key;

  function toHoursAndMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return hours + "h " + minutes + "m";
  }

  const callTrailer = () => {
    location.href = trailerUrl;
  };

  //console.log(movieInfo?.id);
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
          <button
            className="btn border border-white w-[20%] rounded-lg p-1 mt-3 mr-2"
            onClick={() => callTrailer()}
          >
            Watch Trailer
          </button>
          <button className="btn border border-white w-[20%] rounded-lg p-1 mt-3">
            <Link to={"/credits/" + id} key={id}>
              Credits
            </Link>
          </button>
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
