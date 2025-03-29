import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./component/Home";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";
import Detail from "./component/Detail";
import Zero from "./component/Zero";
import Hello from "./component/Hello";
import Hii from "./component/Hii";

function Main() {
  return (
    <BrowserRouter>
      {/* Header */}
      <nav>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/Contact" style={{ marginRight: "10px" }}>Contact</Link>
        <Link to="/Dashboard" style={{ marginRight: "10px" }}>Dashboard</Link>
        <Link to="/Detail" style={{ marginRight: "10px" }}>Detail</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Detail" element={<Detail />}>
          <Route index element={<Zero />} />
          <Route path="Hello" element={<Hello />} />
          <Route path="Hii" element={<Hii />} />
        </Route>
      </Routes>
      {/* Footer */}  
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
