import PropTypes from "prop-types";
import "./RestauratCard.css";
const RestaurantCard = ({ name, cuisine, rating, img, price, delivery }) => {
  return (
    <div className="card">
      <img src={img} alt={name} className="restaurant-img" />
      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>
        <span>
          <span className="star">&#9733;</span> {rating}
        </span>
        <span>&#x2022; {price}</span>
        <span>&#x2022; {delivery}</span>
        <p>{cuisine.slice(0, 3).join(",")}</p>
        {/* <h5 className="restaurant-area">{areaName}</h5> */}
      </div>
    </div>
  );
};

RestaurantCard.propTypes = {
  name: PropTypes.string.isRequired,

  img: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  delivery: PropTypes.string.isRequired,
};

export default RestaurantCard;
