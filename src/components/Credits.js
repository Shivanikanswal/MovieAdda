import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PersonModal from "./PersonModal";
import CastReview from "./CastReview";
import { CDN_URL, BASE_URL, API_KEY } from "../utils/constants";
import { useState, useEffect } from "react";

const Credits = () => {
  const [castData, setCastData] = useState([]);
  const [creditData, setCreditData] = useState([]);
  const [showCastModal, setShowCastModal] = useState(false);

  const id = useParams();
  const movieId = id.movieId;
  useEffect(() => {
    fetchCastUrl();
  }, [movieId]);

  const fetchCastUrl = async () => {
    const data = await fetch(
      BASE_URL + "/movie/" + movieId + "/credits" + API_KEY
    );

    const jsonData = await data.json();
    console.log(jsonData);
    setCastData(jsonData?.cast);
  };

  const handleShowCastModal = (creditData) => {
    setShowCastModal(true);
    setCreditData(creditData);
  };

  function onClickMovie(creditData) {
    setShowCastModal(false);
  }

  return (
    <div className="cast-main">
      <div className="cast-container">
        <div>
          <h1>Top Billed Cast</h1>
          <div className="credit-container flex flex-wrap justify-center gap-[4.25rem] py-4 px-2 mt-9">
            {castData.map((creditData, index) => {
              return (
                <CastReview
                  creditData={creditData}
                  key={index}
                  onClick={(creditData) => handleShowCastModal(creditData)}
                />
              );
            })}
            {showCastModal && (
              <PersonModal
                onClosePersonModal={() => setShowCastModal(false)}
                isShowCastModal={showCastModal}
                creditData={creditData}
                onClickMovie={(creditData) => onClickMovie(creditData)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
