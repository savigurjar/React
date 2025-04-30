import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Component/Header";
import FoodOption from "./Component/FoodOption";
import GroceryOption from "./Component/GroceryOption";
function App() {
  return (
    <>
      <Header />
      <FoodOption />
      <GroceryOption/>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
