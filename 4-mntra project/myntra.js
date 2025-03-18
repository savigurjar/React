import React from "react";
import ReactDOM from "react-dom/client";

// Header Component

// Header Component
function Header() {
  return (
    <div className="header">
      <img className="images"
        src="https://www.epicstuff.com/cdn/shop/products/611S10cWQZL._SL1500__1_1024x1024.jpg?v=1639306611"
        height="80px"
        width="80px"
        alt="Logo"
      />
      <div className="option">
        <button className="btn">RM Style</button>
        <button className="btn">Jin Fashion</button>
        <button className="btn">Suga Vibe</button>
        <button className="btn">J-Hope Trend</button>
        <button className="btn">Jimin Looks</button>
        <button className="btn">V Icon</button>
        <button className="btn">Jungkook Picks</button>
      </div>
      <input className="searchbar" placeholder="🔍Search for BTS-inspired products" />
      <div className="profile">
        <button className="pro">ARMY Profile</button>
        <button className="pro">Bias Wishlist</button>
        <button className="pro">Merch Bag</button>
      </div>
    </div>
  );
}

// // Footer Component
function Footer() {
  return (
    <div className="footer" style={{ textAlign: "center", marginTop: "20px", padding: "10px", background: "#000", color: "white" }}>
      <img 
        src="https://qph.cf2.quoracdn.net/main-qimg-20bf48340b456e8fc73cf802e621d47a-lq"
        alt="BTS Footer Banner"
        style={{ width: "100%", maxWidth: "1000px", height: "300px" }}
      />
      <p>© 2024 ARMY Frames. All Rights Reserved.</p>
    </div>
  );
}


// Card Component
function Card({ frame, offer, image }) {
  return (
    
    <div className="card"
      style={{
        border: "2px solid black",
        padding: "10px",
        textAlign: "center",
        width: "220px",
        borderRadius: "10px",
      }}
    >
      <img src={image} alt={frame} height="300px" width="200px" />
      <div>
        <h2>{frame}</h2>
        <h3>Exclusive for ARMY 💜</h3>
        <h2 style={{ color: "purple" }}>{offer} OFF</h2>
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
      <div className="middle"
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
