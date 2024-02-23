import { useEffect, useState } from "react";
import { BASE_URL, API_KEY, CDN_URL } from "../utils/constants";

const PersonDetail = (props) => {
  const [personBiography, setPersonBiography] = useState();
  //console.log(props);
  const { original_name, id, profile_path, known_for_department } =
    props.creditData;

  console.log(id);
  const fetchPersonDetail = async () => {
    const personData = await fetch(BASE_URL + "/person/" + id + API_KEY);
    const jsonData = await personData.json();
    //console.log(jsonData?.biography);
    setPersonBiography(jsonData?.biography);
  };
  useEffect(() => {
    fetchPersonDetail();
  }, []);
  return (
    <div className="flex p-4">
      <div className="w-1/3 mr-6">
        <img src={CDN_URL + profile_path} className="rounded-md"></img>
      </div>
      <div className="w-2/3">
        <div className="cast-header">
          <h1 className="text-4xl font-bold mb-1">{original_name}</h1>
        </div>
        <div className="about-cast">
          <h3 className="text-[21px] font-bold">About</h3>
          <p>{personBiography}</p>
        </div>
        <div>
          <button className="btn border border-white w-[20%] rounded-lg p-1 mt-3">
            {/* <Link to={"/cast/" + id} key={id}> */}
            {/* See more of {original_name} */}
            {/* </Link> */}
          </button>
        </div>
        <div className="movieCast"></div>
      </div>
    </div>
  );
};

export default PersonDetail;
