import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";

// component or module - headerfun, footerfun

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
  {
    frame: "Photo Frame",
    offer: "20-70%",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNyKW-mM5QoDFCinUaqJaa0uR8OU9-GT8UQ&s",
  },
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
];

// footer

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
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
