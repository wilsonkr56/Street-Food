import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg h-20 sm:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className=" w-32 h-full " src={LOGO_URL}></img>
      </div>
      <div className="flex items-center " style={{ textDecoration: "none" }}>
        <ul className="flex p-4 m-4">
          <li className="px-4 ">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className=" px-4">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="relative">
            <Link to="/cart">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="text-black-500 px-4 font-bold text-2xl"
              />
              <span className="absolute bottom-4 right-0 bg-slate-300 rounded-full text-red-950">
                {cartItems.length}
              </span>
            </Link>
          </li>
          <li className=" px-4">
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
          <li>
            <h1 className=" font-bold">{loggedInUser}</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
