import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";
import "../ref.css";
function Main() {
  const [count, setcount] = useState(0);
  let money = useRef(0);
  console.log(money.current); //direct access nhi kr skte q ki useref ek object dega uske under key me store rhti h value
  return (
    <>
      <h1>Count is : {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>

      <h1>Money is : {money.current}</h1>
      <button
        onClick={() => {
          money.current = money.current + 1;
          console.log(money);
        }}
      >
        Increment
      </button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
