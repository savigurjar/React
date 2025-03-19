import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
  //   let count = 0;
  let [count, setCount] = useState(0); //it will return arr , and a function jiska name as u want
  function increment() {
    count = count + 1;
    setCount(count);
    console.log("count value : ", count);
    // document.querySelector('h1').innerText = `Count is ${count}`;
  }
  function decrement() {
    // count = count - 1;
    setCount(count-1);
    // document.querySelector('h1').innerText = `Count is ${count}`;
  }
  return (
    <div className="first">
      <h1>Count is: {count}</h1>
      <button className="btn" onClick={increment}>
        Increment {count}
      </button>
      <button className="btn" onClick={decrement}>
        Decrement {count}
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
