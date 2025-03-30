import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./component/Home";
import Main from "./component/Main";
import Body from "./component/Body";
function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      
      </nav>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route index element={<Main/>}></Route>
          <Route path="Body" element={<Body/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
