import { API_KEY, BASE_URL, CDN_URL, VIDEO_URL } from "../utils/constants";
import Credits from "./Credits";
import { useState, useEffect } from "react";
import { Link, json, useParams } from "react-router-dom";
const MovieDetail = (props) => {
  const { movieInfo, onClick } = props;
  const [key, setKey] = useState("");
  const [crewData, setCrewData] = useState([]);

  const [streamers, setStreamers] = useState([]);

  console.log(movieInfo);

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
    if (id) fetchVideo();
  }, [id]);

  useEffect(() => {
    if (id) fetchStreamers();
  }, []);

  useEffect(() => {
    if (id) fetchCrewUrl();
  }, [id]);
  const fetchCrewUrl = async () => {
    const data = await fetch(BASE_URL + "/movie/" + id + "/credits" + API_KEY);
    const jsonData = await data.json();
    setCrewData(jsonData?.crew);
    //console.log(jsonData?.crew);
  };

  const fetchStreamers = async () => {
    const streamingUrlData = await fetch(
      BASE_URL + "/movie/" + id + "/watch/providers" + API_KEY
    );
    const jsonUrlData = await streamingUrlData.json();
    setStreamers(jsonUrlData?.results?.IN);
  };
  const fetchVideo = async () => {
    const videoData = await fetch(
      BASE_URL + "/movie/" + id + "/videos" + API_KEY
    );
    const jsonVideoData = await videoData.json();
    if (jsonVideoData?.results.length > 0) {
      jsonVideoData?.results.map((data, index) => {
        if (data.type === "Trailer") {
          setKey(data.key);
        }
      });
    }
  };
  // console.log(crewData);
  const directorInfo = crewData?.filter(
    (element) => element.job === "Director"
  );

  const producerInfo = crewData?.filter(
    (element) => element.job === "Screenplay"
  );

  if (directorInfo.length) var directorsName = directorInfo[0].name;
  if (producerInfo.length) var producerName = producerInfo[0].name;

  console.log(directorsName);

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

  return (
    <div className="flex p-4">
      <div className="moviePoster w-1/3 mr-6">
        <img
          src={
            poster_path
              ? CDN_URL + poster_path
              : "https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-film-icon-in-flat-circle-isolated-on-white-background-vector-illustration-png-image_4981269.png"
          }
          className="rounded-md"
        ></img>
      </div>
      <div className="movieInfo w-2/3">
        <div className="movieHeader mb-4">
          <h1 className="movieTitle text-4xl font-bold mb-1">
            {original_title}({release_year})
          </h1>
          <p className="movieGenre">
            {release_date} | {genreArray} | {toHoursAndMinutes(runtime)}
          </p>
        </div>
        <div className=" mb-2">
          <p className=" italic">{tagline}</p>
        </div>
        <div className="mb-5">
          <button
            className="btn border border-white w-[20%] rounded-lg p-1 mt-3 mr-2"
            onClick={() => callTrailer()}
          >
            Watch Trailer
          </button>
          <button className="btn border border-white w-[20%] rounded-lg p-1 mt-3 ml-4">
            <Link to={"/credits/" + id} key={id} onClick={props.onClick}>
              Credits
            </Link>
          </button>
        </div>
        <div className="movieDescription mb-5">
          <h3 className="text-[21px] font-bold">Overview</h3>
          <p>{overview}</p>
        </div>
        <div className="mt-3 flex">
          <div className="directing-cew pr-16">
            <p className=" font-semibold">{directorsName}</p>
            <p className="italic text-sm">Director</p>
          </div>
          {producerInfo.length > 0 && (
            <div className="producing-crew">
              <p className=" font-semibold">{producerName}</p>
              <p className="italic text-sm">Screenplay</p>
            </div>
          )}
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
