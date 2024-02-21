import PropTypes from "prop-types";

const RestaurantCard = ({ name, cuisine, rating, img, price, delivery }) => {
  return (
    <div className="w-60 rounded-md p-3 m-1 cursor-pointer hover:scale-95">
      <img src={img} alt={name} className="rounded-2xl w-full" />
      <div className="restaurant-info">
        <h3 className="py-2 font-bold text-xl">{name}</h3>
        <span>
          <span className="bg-green-800 py-1 px-2 rounded-full mb-2">
            &#9733;
          </span>{" "}
          {rating}
        </span>

        <span className="ml-2">&#x2022; {price}</span>
        <br />
        <span className="p-2">&#x2022; {delivery}</span>
        <p className="font-light">{cuisine.slice(0, 3).join(",")}</p>
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
