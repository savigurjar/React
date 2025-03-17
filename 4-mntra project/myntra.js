import React from "react";
import ReactDOM from "react-dom/client";

// header
// body
// footer

// Card Component
function Card({ frame, offer, image }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        textAlign: "center",
        width: "220px",
      }}
    >
      <img src={image} alt={frame} height="300px" width="200px" />
      <div>
        <h2>{frame}</h2>
        <h3>Exclusive for ARMY</h3>
        <h2 style={{ color: "red" }}>{offer} OFF</h2>
        <button
          style={{
            padding: "5px 10px",
            background: "purple",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
    </div>
  );
}
const arr = [
  {
    frame: "Photo Frame",
    offer: "20-70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNyKW-mM5QoDFCinUaqJaa0uR8OU9-GT8UQ&s",
  },
  {
    frame: "V-Frame",
    offer: "70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkH1UseyNERHGMLd4LyOru2dtYOWzDUINuQ&s",
  },
  {
    frame: "BTS Frame",
    offer: "60-70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pf84FWakat6WzCqHdiF5M-bIS8gHFLUzZg&s",
  },
  {
    frame: "Tae Frame",
    offer: "30-70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pf84FWakat6WzCqHdiF5M-bIS8gHFLUzZg&s",
  },
  {
    frame: "Tata Frame",
    offer: "70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkH1UseyNERHGMLd4LyOru2dtYOWzDUINuQ&s",
  },
];
function App() {
  return (
    // header
    // body
    <div
      style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      {/* <Card
        frame="Photo Frame"
        offer="20-70%"
       
      />
      <Card
        frame="V-Frame"
        offer="70%"
       
      />
      <Card
        frame="BTS Frame"
        offer="60-70%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNyKW-mM5QoDFCinUaqJaa0uR8OU9-GT8UQ&s"
      />
      <Card
        frame="Tae Frame"
        offer="30-70%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYkH1UseyNERHGMLd4LyOru2dtYOWzDUINuQ&s"
      />
      <Card
        frame="Tata Frame"
        offer="70%"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6pf84FWakat6WzCqHdiF5M-bIS8gHFLUzZg&s"
      /> */}

      {arr.map((value, index) => (
        <Card frame={value.frame} offer={value.offer} image={value.image} />
      ))}
    </div>
    // footer
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
