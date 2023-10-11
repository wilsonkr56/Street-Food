import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg hover:bg-gray-200">
      <img className=" rounded-lg" src={CDN_URL + cloudinaryImageId} />
      <h3 className=" font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User Name: {loggedInUser}</h4>
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
