import { CDN_URL } from "../utils/constants";
const CastReview = (props) => {
  const { data } = props;
  const { profile_path } = data;
  console.log(data);
  return (
    <div
      className="cast-card hover:scale-105 hover:transition-all"
      //   onClick={() => onClick(resData)}
    >
      {}
      <img
        className=" h-72 w-[12.5rem] rounded-md hover:cursor-pointer"
        src={CDN_URL + profile_path}
      ></img>
      <div className="content text-lg text-white">
        <h3 className="font-bold">{data.name}</h3>
        <h4 className=" text-sm">{data.character}</h4>
      </div>
    </div>
  );
};

export default CastReview;
