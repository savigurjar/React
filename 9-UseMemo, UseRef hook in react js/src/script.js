import React, { useState, useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

//fun bar bar create nhi hoga kyu ki ab ye global fun h bhar h //or u can use usecallback in use
// function Fibbonaci(n) {
//     if (n <= 1) return n;
//     return Fibbonaci(n - 1) + Fibbonaci(n - 2);
//   }

function App() {
  const [count, setcount] = useState(0);
  const [number, setnumber] = useState("");
  //   const [result, setresult] = useState("");

  const Fibbonaci = useCallback((n) => {
    if (n <= 1) return n;
    return Fibbonaci(n - 1) + Fibbonaci(n - 2);
  },[]); //er hi bar call hoga ab

  const result = useMemo(() => Fibbonaci(number), [number]);
  //   useEffect(() => setresult(Fibbonaci(number)), [number]); //re-render extra krna pdhega
  return (
    <>
      <h1>Counter is : {count}</h1>
      <button onClick={() => setcount(count + 1)}>Increment</button>
      <button onClick={() => setcount(count - 1)}>Decrement</button>

      <div>
        <h2>Fibbonaci number is :{result}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => setnumber(Number(e.target.value))}
        ></input>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
