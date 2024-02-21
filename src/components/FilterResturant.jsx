import PropTypes from "prop-types"; // Import PropTypes

const FilterRestaurant = ({ onSearch }) => {
  const handleSearch = () => {
    onSearch();
  };
  return (
    <div className="flex flex-col text-center justify-center my-5 ">
      <div className="text">
        <h1 className="font-bold text-2xl">
          Restaurants with online food delivery in Bhopal
        </h1>
      </div>
      <div className="mt-5">
        <button className="p-2 px-4 bg-green-800 rounded-md ml-2 text-xl">
          Fast Delivery
        </button>
        <button
          className="p-2 px-4 bg-green-800 rounded-md ml-2 text-xl"
          onClick={handleSearch}
        >
          Rating 4.0+
        </button>
        <button className="p-2 px-4 bg-green-800 rounded-md ml-2 text-xl">
          Less Than 300
        </button>
      </div>
    </div>
  );
};
FilterRestaurant.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
export default FilterRestaurant;
