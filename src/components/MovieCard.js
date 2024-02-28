import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

const MovieCard = (props) => {
  const { resData, onClick, size, counter } = props;
  const { vote_average, id, poster_path } = resData;

  const release_year = () => {
    var xmas = new Date(resData.release_date);
    return xmas.getFullYear();
  };
  if (resData?.title?.split(" ").length >= 2) {
    var newTitle = resData?.title?.split(" ").slice(0, 2).join(" ") + "...";
  } else {
    var newTitle = resData?.title?.split(" ")[0];
  }

  return (
    <div
      className="movie-card hover:scale-105 hover:transition-all"
      onClick={() => onClick(resData)}
    >
      <img
        className=" h-72 w-[12.5rem] rounded-md hover:cursor-pointer"
        src={
          poster_path
            ? CDN_URL + poster_path
            : "https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-film-icon-in-flat-circle-isolated-on-white-background-vector-illustration-png-image_4981269.png"
        }
      ></img>
      {!counter && (
        <div className="content text-white text-lg">
          <h3 className="font-bold">{newTitle}</h3>
          <h4 className=" text-sm">
            {release_year()} | {vote_average?.toFixed(1)}{" "}
            <FontAwesomeIcon icon={faStar} className=" text-yellow-300" />
          </h4>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
