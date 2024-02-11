import logo from "../assets/Swiggy.png";
import { Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
