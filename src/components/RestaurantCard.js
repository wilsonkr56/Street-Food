import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  // const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[280px] rounded-lg shadow-2xl hover:bg-gray-200">
      <img
        className=" h-64 w-full rounded-lg"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.slice(0, 2).join(", ")},...</h4>
      <h4
        style={
          avgRating < 4
            ? { backgroundColor: "red" }
            : { backgroundColor: "#00b359", color: "black" }
        }
        className=" flex rounded-md w-12 text-s px-1"
      >
        <FontAwesomeIcon icon={faStar} className="text-white text-xs mt-1.5" />
        <span className="mx-1 text-white">{avgRating}</span>
      </h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      {/* <h4>User Name: {loggedInUser}</h4> */}
    </div>
  );
};

// Higher Order component
// input - RestaurantCard => RestaurantCardPromoted

// export const withPromotedLabel = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <label>Promoted</label>
//         <RestaurantCard {...props} />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
