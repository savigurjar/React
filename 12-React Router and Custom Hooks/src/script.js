import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "./component/Home";
import Main from "./component/Main";
import Body from "./component/Body";
import Github from "./component/Github";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Github" style={{ marginLeft: "10px" }}>Github</Link> {/* ✅ Must pass a valid username */}
        </nav>

        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Main />} />
            <Route path="Body" element={<Body />} />
          </Route>
          <Route path="/Github/:name" element={<Github />} /> {/* ✅ Dynamic Route */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
