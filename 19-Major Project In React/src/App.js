import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import RestaurantMenu from "./Component/RestaurantMenu";
import SearchFood from "./Component/SearchFood";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
          <Route path="/city/delhi/:id" element={<RestaurantMenu />}></Route>
          <Route path="/city/delhi/:id/search" element={<SearchFood />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
