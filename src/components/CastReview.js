import { CDN_URL } from "../utils/constants";
const CastReview = (props) => {
  const { creditData, onClick } = props;
  const { profile_path } = creditData;
  return (
    <div
      className="cast-card hover:scale-105 hover:transition-all"
      onClick={() => onClick(creditData)}
    >
      {}
      <img
        className=" h-72 w-[12.5rem] rounded-md hover:cursor-pointer"
        src={
          profile_path
            ? CDN_URL + profile_path
            : "https://www.sdm-chatsworth.hk/wp-content/uploads/2017/12/blank-person-male.png"
        }
      ></img>
      <div className="content text-lg text-white">
        <h3 className="font-bold">{creditData.name}</h3>
        <h4 className=" text-base">{creditData.character}</h4>
      </div>
    </div>
  );
};

export default CastReview;
