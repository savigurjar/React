// Restaurant.jsx
import { useState, useEffect } from "react";
import RestCard from "./RestCard"; 
import Shimmer from "./Shimmer";
export default function Restaurant() {
  const [RestData, setRestData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI =
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const cards = data?.data?.cards || [];
        const restaurantCard = cards.find(
          (card) =>
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        setRestData(restaurants);
      } catch (error) {
        console.error("Error fetching restaurant data:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  
  if (RestData.length === 0) {
    return <Shimmer/>
  }

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {RestData.map((restInfo) => (
        <RestCard key={restInfo?.info?.id || restInfo?.info?.name} restInfo={restInfo} />
      ))}
    </div>
  );
}
