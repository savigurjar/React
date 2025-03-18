import React from "react";
import ReactDOM from "react-dom/client";

// Header Component

// Header Component
function Header() {
  return (
    <div className="header">
      <img
        src="https://www.epicstuff.com/cdn/shop/products/611S10cWQZL._SL1500__1_1024x1024.jpg?v=1639306611"
        height="80px"
        width="80px"
        alt="Logo"
      />
      <div className="option">
        <button>RM Style</button>
        <button>Jin Fashion</button>
        <button>Suga Vibe</button>
        <button>J-Hope Trend</button>
        <button>Jimin Looks</button>
        <button>V Icon</button>
        <button>Jungkook Picks</button>
      </div>
      <input placeholder="Search for BTS-inspired products" />
      <div className="profile">
        <button>ARMY Profile</button>
        <button>Bias Wishlist</button>
        <button>Merch Bag</button>
      </div>
    </div>
  );
}

// // Footer Component
// function Footer() {
//   return (
//     <div className="footer">
//       <p>© 2024 ARMY Frames. All Rights Reserved.</p>
//     </div>
//   );
// }

// Card Component
function Card({ frame, offer, image }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        textAlign: "center",
        width: "220px",
        background: "#f9f9f9",
        borderRadius: "10px",
      }}
    >
      <img src={image} alt={frame} height="300px" width="200px" />
      <div>
        <h2>{frame}</h2>
        <h3>Exclusive for ARMY 💜</h3>
        <h2 style={{ color: "red" }}>{offer} OFF</h2>
        <button
          style={{
            padding: "5px 10px",
            background: "purple",
            color: "white",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          🛒 Shop Now
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
    <div>
      <Header />
      <div
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
      {/* <Footer /> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
