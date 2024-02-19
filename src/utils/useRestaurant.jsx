import { useState, useEffect } from "react";
import { MENU_API } from "./constant";
const useRestaurant = (resId) => {
  const [restData, setResData] = useState([]);

  // Get Data From the Api
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(`${MENU_API}${resId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch menu data");
    }
    const result = await response.json();

    const menuItems = result.data;
    setResData(menuItems);
  };
  return restData;
};
export default useRestaurant;
