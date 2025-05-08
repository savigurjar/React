import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import RestaurantMenu from "./Component/RestaurantMenu";
import SearchFood from "./Component/SearchFood";
import SecondaryHome from "./Component/SecondaryHome";
import { store } from "./Stored/stores";
import Checkout from "./Component/Checkout";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route element={<SecondaryHome />}>
              <Route path="/restaurant" element={<Restaurant />}></Route>
              <Route
                path="/city/delhi/:id"
                element={<RestaurantMenu />}
              ></Route>
              <Route
                path="/city/delhi/:id/search"
                element={<SearchFood />}
              ></Route>
            </Route>
            <Route path="/Checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
