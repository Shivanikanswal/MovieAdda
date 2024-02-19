import React from "react";
import { useLocation } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import { useOutletContext } from "react-router-dom";

const Credits = (props) => {
  //const location = useLocation();
  //const Name = location.state.name;
  console.log(props.castData);
  //const { castData } = props.castData;

  return (
    <div className=" bg-white">
      <div className="cast-container">
        <div>
          <h1>Top Billed Cast</h1>
          <img src=""></img>
          <p>Here is Credits page</p>
        </div>
      </div>
    </div>
  );
};

export default Credits;
