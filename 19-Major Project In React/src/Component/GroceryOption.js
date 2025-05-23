import { GrocerGridCard } from "../utils/Grocery";
import GrocerCard from "./GrocerCard";
export default function GroceryOption() {
  return (
    <>
      <div className="mt-20 w-[80%] container mx-auto flex flex-col">
        <h1 className="font-bold text-xl">Shop Groceries on Instamart </h1>
        <div className="w-[80%] container mx-auto flex flex-nowrap overflow-x-auto gap-10 mt-15">
          {GrocerGridCard.map((fooddata) => (
            <GrocerCard key={fooddata.id} fooddata={fooddata} />
          ))}
        </div>
      </div>
    </>
  );
}
