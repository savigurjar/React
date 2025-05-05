import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selected, setselected] = useState(null);

  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((items) => (
            <MenuCard key={items?.title} menuItems={items}></MenuCard>
          ))}
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="w-full ">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  if(selected=='veg'){
    return(
        <>

        </>
    )
  }
  if(selected=='nonveg'){
    return(
        <>
        
        </>
    )
  }

  return (
    <>
      <div>
        <div className="w-[80%] mt-20 mb-20">
          <button
            className={`text-2xl py-2 px-8 border rounded-2xl ${
              selected == "veg" ? "bg-green-600" : "bg-gray-300"
            }`}
            onClick={() => setselected(selected == "veg" ? null : "veg")}
          >
            Veg
          </button>
          <button
            className={`text-2xl py-2 px-4 ml-3 border rounded-2xl ${
              selected == "nonveg" ? "bg-red-500" : "bg-gray-300"
            }`}
            onClick={() => setselected(selected == "nonveg" ? null : "nonveg")}
          >
            Non-Veg
          </button>
        </div>
        <div className="w-full">
          <div className="flex justify-between w-full">
            <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
            <button
              className="text-5xl font-bold mr-20"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? "^" : "˯"}
            </button>
          </div>
          <div>
            {menuItems?.itemCards?.map((items) => (
              <RestInfo
                key={items?.card?.info?.id}
                restData={items?.card?.info}
              ></RestInfo>
            ))}
          </div>
          <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
        </div>
      </div>
    </>
  );
}
