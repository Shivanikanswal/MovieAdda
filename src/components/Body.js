import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const Body = () => {
  const [listOfMovies, setListOfMovies] = useState([]);
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
  return (
    <div className="mainbody">
      <div className="movie-container">
        <div className="flex flex-wrap justify-center gap-5 py-4 px-2 mt-9">
          {listOfMovies.map((movieData) => {
            return <MovieCard resData={movieData} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Body;
