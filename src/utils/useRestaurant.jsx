import { useState, useEffect } from "react";

const useRestaurant = (resId) => {
  const [restData, setResData] = useState([]);

  // Get Data From the Api
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
  return restData;
};
export default useRestaurant;
