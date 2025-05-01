import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
import DineOption from "./Component/DineOption";
import DineOption from "./Component/DineOption";
import Restaurant from "./Component/Restaurant";
function App() {
  return (
    <>
      <Header />
      <FoodOption />
      <GroceryOption />
      <DineOption />
      <Restaurant />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
