import { useState, useEffect } from "react";
import { CDN_IMAGE } from "../utils/contact";
import ShimmerUi from "./ShimerUi";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restData, setResData] = useState([]);
  const { resId } = useParams();
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2579017&lng=77.4633851&restaurantId=${resId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch menu data");
      }
      const result = await response.json();

      const menuItems = result.data;
      setResData(menuItems);
    };

    fetchMenu();
  }, [resId]);

  if (restData.length === 0) {
    return <ShimmerUi />;
  }
  console.log(
    restData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[4].card.card
      .itemCards[0].card.info.name
  );
  return (
    <div>
      <div>
        <h1>Restaurant id : {resId}</h1>
        <h1>{restData.cards[0].card.card.info.name}</h1>
        <img
          src={CDN_IMAGE + restData.cards[0].card.card.info.cloudinaryImageId}
          alt=""
        />
        <h1>{restData.cards[0].card.card.info.areaName}</h1>
        <h1>{restData.cards[0].card.card.info.city}</h1>
        <h1>{restData.cards[0].card.card.info.avgRating} * </h1>
        <h1>{restData.cards[0].card.card.info.costForTwoMessage}</h1>
      </div>
      <div>
        <h1>Menu - </h1>
        <ul>
          {Object.values(
            restData.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card
              .card.itemCards
          ).map((item) => (
            <li key={item.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
