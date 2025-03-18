import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import arr from "./utils/dummy";

// import {greet as goa ,meet} from "./utils/dummy"; - rename bhi kr skte h

// component or module - headerfun, footerfun

function App() {
  return (
    <div>
      <Header />
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
        {arr.map((value, index) => (
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
