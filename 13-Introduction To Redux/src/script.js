import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./component/Counting";
function App() {
  return (
    <>
      <Counting />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
