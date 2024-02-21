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

  console.log(
    restData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards[1]?.card?.info?.name
  );
  const {
    name,
    areaName,
    costForTwoMessage,
    cuisines,
    avgRating,
    feeDetails,
    cloudinaryImageId,
  } = restData.cards[2].card.card.info;

  return (
    <div>
      <div>
        <h1>{name}</h1>
        <p>{cuisines.join(",")}</p>
        <img src={CDN_IMAGE + cloudinaryImageId} alt="" />
        <p>{areaName}</p>
        <p>{costForTwoMessage}</p>
        <p>{avgRating}</p>
        <p>{feeDetails.message}</p>
      </div>
      <div>
        <h1>Menu - </h1>
        <ul>
          {restData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.map(
            (item, index) => (
              <li key={index}>{item?.card?.info?.name}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
