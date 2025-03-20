import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import  Colorful  from "./components/Colorfu";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="counter">
        <h2>Count is : {count}</h2>
        <button className="btn1"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Increment
        </button>
        <button className="btn2"
          onClick={() => {
            setCount(count - 1);
          }}
        >
          Dcrement
        </button>
      </div>

      <Colorful /> 
      
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);

// Bacgorund-color changer
// re-render call the function again
