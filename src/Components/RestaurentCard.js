import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  // ({resData}) this is the another way of writing props this is called destructured
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla ,costForTwo} = resData?.info;
  return (
    <div className="p-4 m-4 w-[210px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold p-4 ">{name} </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{"Star " + avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{"Delivery-Time " + sla.slaString}</h4>
    </div>
  );
};
export default RestaurentCard;
