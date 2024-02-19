import { CDN_IMAGE } from "../utils/constant";
import ShimmerUi from "./ShimerUi";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restData = useRestaurant(resId);
  if (restData.length === 0) {
    return <ShimmerUi />;
  }

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
