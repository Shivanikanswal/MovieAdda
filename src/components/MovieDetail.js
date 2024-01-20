import { CDN_URL } from "../utils/constants";
const MovieDetail = (props) => {
  const { id, poster_path, title, overview, genre_ids } = props.movieDetails;
  console.log(props.movieDetails);
  return (
    <div className="flex p-4">
      <div className="moviePoster w-1/3 mr-6">
        <img src={CDN_URL + poster_path} className="rounded-md"></img>
      </div>
      <div className="movieInfo w-2/3">
        <div className="movieHeader">
          <h1 className="movieTitle text-4xl">{title}</h1>
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
