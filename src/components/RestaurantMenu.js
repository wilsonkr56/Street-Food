import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const regular = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  // const itemCards =
  //   regular.cards[1]?.card?.card?.itemCards ||
  //   regular.cards[2]?.card?.card?.itemCards;

  const categories = regular.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(category);

  return (
    <div className="menu">
      <div className="m-2 p-2 font-bold text-2xl bg-red-200">
        <h1 className="flex justify-center">{name}</h1>
      </div>
      <div className="m-2 p-2">
        <p className=" text-center font-bold">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2 className="w-6/12 mx-auto font-bold">Menu Items:</h2>
      </div>
      <ul>
        {/* {itemCards.map((item) => (
          <li key={item.card.info.id}> */}
        <RestaurantMenuCard category={categories} />
        {/* </li> */}
        {/* ))} */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
