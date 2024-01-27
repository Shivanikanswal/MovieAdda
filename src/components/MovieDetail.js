import { CDN_URL } from "../utils/constants";
const MovieDetail = (props) => {
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

  // const bgImgUrl = CDN_URL + backdrop_path;
  //console.log(movieInfo);

  function toHoursAndMinutes(runtime) {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;

    return hours + "h " + minutes + "m";
  }

  //console.log(toHoursAndMinutes(runtime));
  return (
    <div className="flex p-4">
      <div className="moviePoster w-1/3 mr-6">
        <img src={CDN_URL + poster_path} className="rounded-md"></img>
      </div>
      <div className="movieInfo w-2/3">
        <div className="movieHeader">
          <h1 className="movieTitle text-4xl font-bold mb-1">
            {original_title}(2023)
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
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
