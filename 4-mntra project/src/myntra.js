import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

// import {greet as goa ,meet} from "./utils/dummy"; - rename bhi kr skte h

// component or module - headerfun, footerfun
// console.log(arr);
function App() {
  let [A, setA] = useState(arr);
  function sortArr() {
    arr.sort((a, b) => a.price - b.price); //increasing order sort
    // console.log(arr);
    // console.log(A);
    // setA(A);
    setA([...A]); // duplicate bna do , new memory location milegi
  }

  function priceAbove()
  {
    const B = arr.filter((value)=>value.price>499) //value filter krega and arr return krega
    setA(B);
  }
  return (
    <div>
      <Header />

      <button className="bt" onClick={sortArr}>
        Sort by Price
      </button>
      <button className="bt" onClick={priceAbove}>
         Price above 400
      </button>

      <div
        className="middle"
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {A.map((value, index) => (
          <Card
            key={index}
            frame={value.frame}
            offer={value.offer}
            image={value.image}
            price={value.price}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
