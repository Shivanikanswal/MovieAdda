import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faS } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const MovieCard = (props) => {
  const { resData, onClick } = props;
  const { vote_average, id, poster_path, release_date } = resData;

  //console.log(resData);

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
        <h4 className=" text-sm">
          {year} | {vote_average.toFixed(1)}{" "}
          <FontAwesomeIcon icon={faStar} className=" text-yellow-300" />
        </h4>
      </div>
    </div>
  );
};

export default MovieCard;
