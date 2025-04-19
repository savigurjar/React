import { useState } from "react";
import { addItems, removeItems } from "./slice2";
import { useDispatch } from "react-redux";
export default function FootCart({ value }) {
  const [incart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (incart) {
      dispatch(removeItems());
      setInCart(false);
    } else {
      dispatch(addItems());
      setInCart(true);
    }
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    width: "180px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#f9f9f9",
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: incart ? "#dc3545" : "#007bff",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={cardStyle}>
      <h1 style={{ fontSize: "20px", marginBottom: "10px" }}>{value.food}</h1>
      <h2 style={{ fontSize: "18px", color: "#555" }}>₹{value.price}</h2>
      <button style={buttonStyle} onClick={handleClick}>
        {incart ? "Remove" : "Add"}
      </button>
    </div>
  );
}
