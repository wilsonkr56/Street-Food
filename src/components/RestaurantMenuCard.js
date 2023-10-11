import RestaurantCategory from "./RestaurantCategory";
import React, { useState } from "react";

const RestaurantMenuCard = (props) => {
  // const { menuData } = props;
  // const { name, price, defaultPrice } = menuData?.card?.info;
  const [showIndex, setShowIndex] = useState(null);
  const categories = props.category;
  let i = 0;
  return (
    <div>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={i++}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
