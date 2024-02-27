import { useEffect, useState } from "react";
import { BASE_URL, API_KEY, CDN_URL } from "../utils/constants";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const PersonDetail = (props) => {
  const [personBiography, setPersonBiography] = useState();
  const [smallMovieCard, setSmallMovieCard] = useState([]);
  const [showMovieModal, setShowMovieModal] = useState(false);
  const [resData, setResData] = useState([]);

  const { original_name, id, profile_path, known_for_department } =
    props.creditData;

  const fetchPersonDetail = async () => {
    const personData = await fetch(BASE_URL + "/person/" + id + API_KEY);
    const jsonData = await personData.json();
    setPersonBiography(jsonData?.biography);
  };

  const fetchPersonCredits = async () => {
    const urlData = await fetch(
      BASE_URL + "/person/" + id + "/movie_credits" + API_KEY
    );
    const jsonUrlData = await urlData.json();
    setSmallMovieCard(jsonUrlData?.cast?.splice(0, 5));
  };

  useEffect(() => {
    fetchPersonCredits();
  }, []);
  useEffect(() => {
    fetchPersonDetail();
  }, []);

  const handleShowModal = (resData) => {
    setShowMovieModal(true);
    setResData(resData);
  };
  return (
    <div className="flex p-4">
      <div className="w-1/3 mr-6">
        <img src={CDN_URL + profile_path} className="rounded-md"></img>
      </div>
      <div className="w-2/3">
        <div className="cast-header">
          <h1 className="text-4xl font-bold mb-1">{original_name}</h1>
        </div>
        <div className="about-cast overflow-auto h-60 mb-1">
          <h3 className="text-[21px] font-bold">About</h3>
          <p>{personBiography}</p>
        </div>
        <div className="flex gap-x-1">
          {smallMovieCard?.map((resData, index) => (
            <MovieCard
              resData={resData}
              key={index}
              size={"small"}
              counter={true}
              onClick={(resData) => handleShowModal(resData)}
            />
          ))}

          {showMovieModal && (
            <MovieModal
              onCloseModal={() => setShowMovieModal(false)}
              showMovieModal={showMovieModal}
              resData={resData}
              onClick={(resData) => props.onClickMovie(resData)}
            />
          )}
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default PersonDetail;
