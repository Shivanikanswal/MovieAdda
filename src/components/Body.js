import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieModal from "./MovieModal";
import { BASE_URL } from "../utils/constants";
import { API_KEY } from "../utils/constants";

const Body = (props) => {
  const { searchResults } = props;
  const [listOfMovies, setListOfMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [resData, setResData] = useState([]);

  //console.log(searchResults);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const movieData = await fetch(BASE_URL + "/movie/popular" + API_KEY);
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
        <div className="flex flex-wrap justify-center gap-[4.25rem] py-4 px-2 mt-9">
          {searchResults.length > 0
            ? searchResults.map((resData, index) => {
                return (
                  <MovieCard
                    key={index}
                    resData={resData}
                    onClick={(resData) => handleShowModal(resData)}
                  />
                );
              })
            : listOfMovies.map((resData, index) => {
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
