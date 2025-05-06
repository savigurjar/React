import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Link } from "react-router";

export default function RestaurantMenu() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const [restData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        const cards = data?.data?.cards || [];
        const regularMenu =
          cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

        const filteredData = regularMenu.filter(
          (item) => "title" in item?.card?.card
        );

        setRestData(filteredData);
      } catch (error) {
        console.error("Failed to fetch restaurant data:", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <>
      <div className="w-[80%] mx-auto mt-20 mb-8 ">
        <Link to={`/city/delhi/${id}/search`}>
        <p className="w-full text-center py-6 bg-gray-200 text-2xl rounded-2xl">
          Search for Dishes
        </p></Link>
      </div>

      <div className="w-[80%] mx-auto mt-20 mb-8 flex gap-4">
        <button
          className={`text-2xl py-2 px-8 border rounded-2xl ${
            selected === "veg" ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "veg" ? null : "veg")}
        >
          Veg
        </button>
        <button
          className={`text-2xl py-2 px-6 border rounded-2xl ${
            selected === "nonveg" ? "bg-red-500 text-white" : "bg-gray-300"
          }`}
          onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
        >
          Non-Veg
        </button>
      </div>

      <div className="w-[80%] mx-auto">
        {restData.map((item) => (
          <MenuCard
            key={item?.card?.card?.title}
            menuItems={item?.card?.card}
            foodselected={selected}
          />
        ))}
      </div>
    </>
  );
}
