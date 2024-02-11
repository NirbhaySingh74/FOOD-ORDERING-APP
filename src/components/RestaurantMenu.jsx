import { useState, useEffect } from "react";

const RestaurantMenu = () => {
  const [restData, setResData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.2579017&lng=77.4633851&restaurantId=585068&catalog_qa=undefined&submitAction=ENTER"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch menu data");
        }
        const result = await response.json();
        console.log(result); // Log the entire result object
        // Your existing code to set the menu items...
        const menuItems =
          result?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR
            ?.cards?.[3]?.card?.card?.itemCards;
        setResData(menuItems);
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };

    fetchMenu();
  }, []);

  if (restData === null) {
    return <h1 style={{ marginTop: "10px" }}>Loading</h1>;
  }

  return (
    <div>
      {restData.map((item, index) => (
        <ul key={index}>
          <li>
            {item?.card?.info?.name} - {item?.card?.info?.price / 100} RS
          </li>
        </ul>
      ))}
    </div>
  );
};

export default RestaurantMenu;
