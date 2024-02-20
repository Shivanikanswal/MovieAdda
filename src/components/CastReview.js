const CastReview = (props) => {
  const { data } = props;
  //console.log(data.name);
  return (
    <div
      className="cast-card"
      //   onClick={() => onClick(resData)}
    >
      {}
      <img className=" h-72 w-[12.5rem] rounded-md hover:cursor-pointer"></img>
      <div className="content text-lg">
        <h3 className="font-bold">{data.name}</h3>
        <h4 className=" text-sm"></h4>
      </div>
    </div>
  );
};

export default CastReview;
