// Card Component
function Card({ frame, offer, image ,price}) {
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
          <h2 style={{ color: "black" }}>Price: ₹{price}</h2>
        </div>
      </div>
    );
  }
  export default Card;