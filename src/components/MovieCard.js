import { CDN_URL } from "../utils/constants";

const MovieCard = (props) => {
  const { resData } = props;
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
    <div className="movie-card">
      <img
        className=" h-72 w-52 rounded-md hover:cursor-pointer"
        src={CDN_URL + poster_path}
        //onClick={<MovieModal />}
      ></img>
      <div className="content text-white text-lg">
        <h3>{newTitle}</h3>
        <h4>{year}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
