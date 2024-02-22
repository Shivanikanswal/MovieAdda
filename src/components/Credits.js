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
  }, []);

  const fetchCastUrl = async () => {
    const data = await fetch(
      BASE_URL + "/movie/" + movieId + "/credits" + API_KEY
    );
    const jsonData = await data.json();
    setCastData(jsonData?.cast);
  };

  const handleShowModal = (creditData) => {
    setShowCastModal(true);
    setCreditData(creditData);
  };

  return (
    <div className="cast-main">
      <div className="cast-container">
        <div>
          <h1>Top Billed Cast</h1>
          <img src=""></img>
          <div className="credit-container flex flex-wrap justify-center gap-[4.25rem] py-4 px-2 mt-9">
            {castData.map((creditData, index) => {
              return (
                <CastReview
                  creditData={creditData}
                  key={index}
                  onClick={(creditData) => handleShowModal(creditData)}
                />
              );
            })}
            {showCastModal && (
              <PersonModal
                onCloseModal={() => setShowCastModal(false)}
                isShowCastModal={showCastModal}
                creditData={creditData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Credits;
