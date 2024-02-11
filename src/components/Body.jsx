import { useEffect, useState } from "react";
import "./RestauratCard.css";
import { CDN_IMAGE } from "../utils/contact";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import ShimerUi from "./ShimerUi";

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
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D18.5204303%26lng%3D73.8567437%26page_type%3DDESKTOP_WEB_LISTING"
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
      // console.log(list);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  console.log(allRestaurants);

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

  return (
    <div>
      <Search onSearch={handleSearch} onClear={handleClear} />
      {loading ? (
        <ShimerUi />
      ) : (
        <div className="restaurant-card">
          {filterData.map((item, index) => {
            return (
              <div key={index}>
                {/* <img
                src={url + item.info.cloudinaryImageId}
                alt={name}
                className="restaurant-img"
              />
              <div className="restaurant-info">
                <h4 className="restaurant-name">{item.info.name}</h4>
                <h6 className="restaurant-area">{item.info.areaName}</h6>
              </div> */}
                <RestaurantCard
                  name={item.info.name}
                  cuisine={item.info.cuisines}
                  rating={item.info.avgRating}
                  img={CDN_IMAGE + item.info.cloudinaryImageId}
                  price={item.info.costForTwo}
                  delivery={item.info.sla.deliveryTime + " min"}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
