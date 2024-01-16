import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";

const MovieModal = (props) => {
  const { resData, isShowModal, onCloseModal } = props;
  const { id } = resData;

  const url =
    "https://api.themoviedb.org/3/movie/" +
    id +
    "?api_key=a34b3f8b17f2cd887f4d28e55e96402b";

  return (
    <div
      className="modal"
      style={{
        display: "flex",
        position: "fixed",
        zIndex: 2,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backdropFilter: "blur(0.5rem)",
        background: "rgba(0, 0, 0, 0.75)",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        className="modal-content"
        style={{
          background: "#fefefe",
          margin: "auto",
          padding: "20px",
          border: "1px solid #888",
          width: "80%",
        }}
      >
        <div className="closeIcon" onClick={onCloseModal}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <MovieDetail movieDetails={resData} />
      </div>
    </div>
  );
};
export default MovieModal;
