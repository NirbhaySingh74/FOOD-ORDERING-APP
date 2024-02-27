import { CDN_IMAGE } from "../utils/constant";
import ShimmerUi from "./ShimerUi";
import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";

import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dispatch = useDispatch();
  const restData = useRestaurant(resId);
  const addFoodItems = (item) => {
    dispatch(addItem(item));
    console.log("clicked!");
  };
  if (restData.length === 0) {
    return <ShimmerUi />;
  }

  const discounts =
    restData?.cards[2]?.card?.card?.info?.aggregatedDiscountInfoV2
      ?.descriptionList;
  const recommendedItems =
    restData.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(recommendedItems);
  const {
    name,
    areaName,

    avgRating,

    totalRatingsString,
  } = restData.cards[2].card.card.info;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className=" ">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">{name}</h1>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{name}</h3>
              <p className="text-gray-600">{areaName}</p>
            </div>
          </div>
          <div className="flex items-center shadow-xl	 p-4 rounded-md">
            <div className="mr-4">
              <h4 className="text-lg font-semibold  text-green-500  p-4">
                ⭐ {avgRating}
              </h4>
              <p className="text-[#3D9B6D]">({totalRatingsString})</p>
            </div>
          </div>
        </div>
        <p className="relative my-4">
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black bg-opacity-50"></span>
        </p>
      </header>
      {/* Offer section */}
      <div className="p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Discounts</h2>
        <div className="flex gap-14">
          {discounts.map((discount, index) => (
            <div
              key={index}
              className="bg-white rounded-md shadow-sm p-2 border-2 py-2  px-4"
            >
              <p className="text-sm">{discount.meta.split(" | ")[0]}</p>
              <p className="text-sm">{discount.meta.split(" | ")[1]}</p>
            </div>
          ))}
        </div>
      </div>
      <p className="relative my-4">
        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-black bg-opacity-50"></span>
      </p>

      {/* Recommended Section */}
      <div className="mt-8">
        <h1 className="text-xl font-semibold mb-4">
          Recommended ({recommendedItems.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={CDN_IMAGE + item.card.info.imageId}
                alt={item.card.info.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{item.card.info.name}</h2>
                {item.card.info.price && (
                  <p className="text-gray-600">
                    ₹ {(item.card.info.price / 100).toFixed(2)}
                  </p>
                )}
                {/* Rupee symbol and price */}
                <button
                  className="mt-2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                  onClick={() => addFoodItems(item?.card)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
