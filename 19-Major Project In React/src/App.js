import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Component/Home";
import Restaurant from "./Component/Restaurant";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/restaurant" element={<Restaurant />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
