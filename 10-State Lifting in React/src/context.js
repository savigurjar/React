import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Second from "./component/Second";
import Globe from "../Global";

function Main() {
  const [count, setCount] = useState(0); // State management in parent

  return (
    <>
      <Globe.Provider value={{ count, setCount }}> 
        <h1>Parent Counter is: {count}</h1> 
        <Second />
      </Globe.Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
