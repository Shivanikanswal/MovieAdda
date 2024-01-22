import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";

const MovieModal = (props) => {
  const { resData, isShowModal, onCloseModal } = props;
  const { id } = resData;

  const url = BASE_URL + "/movie/" + id + API_KEY;

  return (
    <div className="modal flex fixed top-0 left-0 w-full h-full z-[2] justify-center overflow-hidden items-center bg-[rgb(0,0,0,0.75)] backdrop-blur">
      <div className="modal-content rounded-2xl bg-[#fefefe] m-auto p-5 border border-solid border-[#888] w-4/5">
        <div className="closeIcon text-right" onClick={onCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <MovieDetail movieDetails={resData} />
      </div>
    </div>
  );
};
export default MovieModal;
