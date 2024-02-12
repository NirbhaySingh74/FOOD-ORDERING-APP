import { useEffect, useState } from "react";
import "./RestauratCard.css";
import { CDN_IMAGE } from "../utils/contact";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import ShimerUi from "./ShimerUi";
import { Link } from "react-router-dom";
const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState(null);
  const [notFound, setNotFound] = useState(false); // New state for not found message

  useEffect(() => {
    getRestaurants();
  }, []);

  // Api
  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2682323&lng=77.4780844&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      let list =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (list === undefined) {
        list =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
      }
      setAllRestaurants(list);
      setFilterData(list);
      setLoading(false);
      // console.log(json);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  // console.log(allRestaurants);

  const handleSearch = (inputText) => {
    if (!inputText) {
      setFilterData(allRestaurants);
      setNotFound(false);
    } else {
      const filteredRestaurent = allRestaurants.filter((user) =>
        user.info.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilterData(filteredRestaurent);
      // Set not found message based on the search results
      setNotFound(filteredRestaurent.length === 0);
    }
  };

  const handleClear = () => {
    setFilterData(allRestaurants);
    setNotFound(false);
  };
  if (notFound) {
    return (
      <>
        <Search onSearch={handleSearch} onClear={handleClear} />
        <h4 style={{ color: "red", textAlign: "center" }}>No items found.</h4>
      </>
    );
  }
  console.log(filterData);
  return (
    <div>
      <Search onSearch={handleSearch} onClear={handleClear} />
      {loading ? (
        <ShimerUi />
      ) : (
        <div className="restaurant-card">
          {filterData.map((item) => {
            return (
              <Link to={"/restaurant/" + item.info.id} key={item.info.id}>
                <RestaurantCard
                  name={item.info.name}
                  cuisine={item.info.cuisines}
                  rating={item.info.avgRating}
                  img={CDN_IMAGE + item.info.cloudinaryImageId}
                  price={item.info.costForTwo}
                  delivery={item.info.sla.deliveryTime}
                />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
