import { imageGridCards } from "../utils/Fooddata";
import FoodCard from "./FoodCard";
export default function FoodOption(){
return(
    <>
    <div className="w-[80%] container mx-auto flex flex-wrap gap-10 mt-15">
    {
        imageGridCards.map((fooddata)=><FoodCard key={fooddata.id} fooddata={fooddata}/>)
    }
    </div>
    
    </>
)
}