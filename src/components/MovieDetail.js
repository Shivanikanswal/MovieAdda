import { CDN_URL } from "../utils/constants";
const MovieDetail = (props) => {
  const { id, backdrop_path, title, overview, genre_ids } = props.movieDetails;
  return (
    <div className="movieInfo flex">
      <div className="moviePoster">
        <img src={CDN_URL + backdrop_path}></img>
      </div>
      <div className="movieInfo">
        <div className="movieHeader">
          <h1 className="movieTitle text-3xl">{title}</h1>
          <p className="movieGenre">{}</p>
        </div>
        <div className="movieDescription">
          <h3 className="text-lg">Description</h3>
          <p>{overview}</p>
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
