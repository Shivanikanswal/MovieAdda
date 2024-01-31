import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";
import { CDN_URL } from "../utils/constants";

const MovieModal = (props) => {
  const [movieInfo, setMovieInfo] = useState([]);
  const { resData, isShowModal, onCloseModal } = props;
  const { id, backdrop_path } = resData;

  const url = BASE_URL + "/movie/" + id + API_KEY;
  const bgImgUrl = CDN_URL + backdrop_path;
  const style = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.927),rgba(0, 0, 0, 0.5)) , url(${bgImgUrl})`,
  };
  //console.log(url);
  // url(${bgImgUrl})

  const fetchMovieDetail = async () => {
    const movieDetails = await fetch(url);
    const jsonData = await movieDetails.json();
    setMovieInfo(jsonData);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  return (
    <div className="modal flex fixed top-0 left-0 w-full h-full z-[2] justify-center overflow-hidden items-center bg-[rgb(0,0,0,0.75)] backdrop-blur">
      <div
        className="modal-content rounded-2xl m-auto p-5 border border-solid border-[#888] w-4/5 text-white bg-cover bg-center"
        style={style}
      >
        <div className="closeIcon text-right" onClick={onCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <MovieDetail movieInfo={movieInfo} />
      </div>
    </div>
  );
};
export default MovieModal;
