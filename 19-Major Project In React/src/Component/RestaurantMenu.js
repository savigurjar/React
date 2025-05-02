import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams(); // useParams must be called at the top

  console.log(id); // You can use this to debug

  const [RestData, setRestData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const cards = data?.data?.cards || [];
        const restaurantCard = cards.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants || [];

        setRestData(data);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
      }
    }

    fetchData();
  }, []);
  console.log(RestData);

  return <h1>Hello Coder Army - Restaurant ID: {id}</h1>;
}
