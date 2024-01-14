import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";

const Body = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [resData, setResData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=a34b3f8b17f2cd887f4d28e55e96402b"
    );
    const jsonData = await movieData.json();
    setListOfMovies(jsonData?.results);
  };
  const handleShowModal = (resData) => {
    setShowModal(true);
    setResData(resData);
  };
  //console.log(listOfMovies);
  return (
    <div className="mainbody">
      <div className="movie-container">
        <div className="flex flex-wrap justify-center gap-5 py-4 px-2 mt-9">
          {listOfMovies.map((resData, index) => {
            return (
              <MovieCard
                key={index}
                resData={resData}
                onClick={(resData) => handleShowModal(resData)}
              />
            );
          })}
          {showModal && (
            <MovieModal
              onCloseModal={() => setShowModal(false)}
              isShowModal={showModal}
              resData={resData}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Body;
