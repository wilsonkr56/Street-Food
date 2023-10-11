import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  console.log(items);
  let i = 0;
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          key={i++}
        >
          <div className=" w-9/12">
            <div className=" py-2">
              <span>{item.card.info.name} - </span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className=" text-sm">{item.card.info.description}</p>
          </div>
          <div className=" w-3/12 flex justify-center">
            <div className="absolute">
              <button className="p-1 w-18 h-8 rounded-lg bg-black text-white shadow-lg">
                Add +
              </button>
            </div>
            <img className=" w-36" src={CDN_URL + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
