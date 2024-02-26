import { useEffect, useState } from "react";

import { CARD_API, CDN_IMAGE } from "../utils/constant";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import ShimerUi from "./ShimerUi";
import { Link } from "react-router-dom";
import FilterRestaurant from "./FilterResturant";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterData, setFilterData] = useState(null);
  const [notFound, setNotFound] = useState(false); // New state for not found message
  const isOnline = useOnline();
  useEffect(() => {
    getRestaurants();
  }, []);

  // Api
  async function getRestaurants() {
    try {
      const data = await fetch(CARD_API);
      const json = await data.json();
      let list =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setAllRestaurants(list);
      setFilterData(list);
      setLoading(false);
      console.log(json);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  }

  const handleFilterWithStar = () => {
    const filterRest = allRestaurants.filter(
      (restaurant) => restaurant.info.avgRating >= 4.0
    );
    setFilterData(filterRest);
    console.log(filterRest);
    console.log("clicked");
  };

  const handleSearch = (inputText) => {
    if (!inputText) {
      setFilterData(allRestaurants);
      setNotFound(false);
    } else {
      const filteredRestaurent = allRestaurants.filter((user) =>
        user.info.name.toLowerCase().includes(inputText.toLowerCase())
      );
      setFilterData(filteredRestaurent);

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

  if (!isOnline) {
    return <h1>😞Please check your internet connection</h1>;
  }

  return (
    <div>
      <Search onSearch={handleSearch} onClear={handleClear} />
      <FilterRestaurant onSearch={handleFilterWithStar} />
      {loading ? (
        <ShimerUi />
      ) : (
        <div className=" w-auto flex flex-wrap items-center justify-center self-stretch">
          {filterData.map((item) => {
            return (
              <Link to={`restaurants/${item.info.id}`} key={item.info.id}>
                <RestaurantCard
                  name={item.info.name}
                  cuisine={item.info.cuisines}
                  rating={item.info.avgRatingString}
                  img={CDN_IMAGE + item.info.cloudinaryImageId}
                  price={item.info.costForTwo}
                  delivery={item.info.sla.slaString}
                  areaName={item.info.areaName}
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
