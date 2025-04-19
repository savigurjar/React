import FootCart from "./FootCart";

const foodItems = [
  { id: 2, food: "Burger", price: "150" },
  { id: 3, food: "Pasta", price: "180" },
  { id: 4, food: "Sushi", price: "300" },
  { id: 5, food: "Tacos", price: "120" },
  { id: 6, food: "Fried Rice", price: "160" },
  { id: 7, food: "Salad", price: "130" },
  { id: 8, food: "Steak", price: "400" },
  { id: 9, food: "Sandwich", price: "100" },
  { id: 10, food: "Noodles", price: "140" },
  { id: 11, food: "Paneer Tikka", price: "220" },
];

export default function Card() {
  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
    padding: "20px",
  };

  return (
    <div style={containerStyle}>
      {foodItems.map((item) => (
        <FootCart key={item.id} value={item} />
      ))}
    </div>
  );
}
