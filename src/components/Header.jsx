import { useSelector } from "react-redux";
import logo from "../assets/Swiggy.png";
import { Link } from "react-router-dom";
// import { useContext } from "react";
// import UserContext from "../utils/UserContext";
const Header = () => {
  // const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between shadow-2xl py-5">
      <div>
        <Link to="/">
          {" "}
          <img className="w-20 mx-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="">
        <ul className="flex justify-center mt-5 gap-x-9 mx-16 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <Link to="/checkout">
            <li>Cart({cartItems.length})</li>
          </Link>
          {/* <li>
            <Link to="/instamart">Instamart</Link>
          </li> */}
          {/* {user.name} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
