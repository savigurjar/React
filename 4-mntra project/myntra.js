import React from "react";
import ReactDOM from "react-dom/client";

// header
// body
// footer

function Card() {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFa8cfz7IB99tC6GvaM_xyTWMmPdvTnAgAXA&s"
        alt="Card Image"
        height="300px"
        width="200px"
      />
      <div style={{ textAlign: "center" }}>
        <h1>Photo Frame</h1>
        <h1>Exclusive for ARMY</h1>
        <h2>70% off</h2>
        <h3>Shop Now</h3>
      </div>
    </div>
  );
}

function App() {
  return (
    // header
    // body
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
      <Card frame="Photo Frame" offer="20-70off"/>
    </div>
    // footer
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
