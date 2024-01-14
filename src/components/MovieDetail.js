const MovieDetail = (props) => {
  const movieDetail = props;
  console.log(movieDetail);
  return (
    <div>
      <div className="moviePoster"></div>
      <div className="movieInfo">
        <div className="movieHeader">
          <h1 className="movieTitle">This is movie title</h1>
          <p className="movieGenre">Romance, Thriller</p>
        </div>
        <div className="movieDescription">
          <h3>Description</h3>
          <p>After the birth of ...</p>
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default MovieDetail;
