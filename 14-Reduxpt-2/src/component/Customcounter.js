import { useState } from "react";
import { useDispatch } from "react-redux";
import { CustomIncreaser } from "./Slicer1";

export default function Customcounter() {
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(CustomIncreaser(Number(number)));
    setNumber("");
  }

  return (
    <>
      <input
        type="number"
        placeholder="Enter number"
        min="1"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        style={{ marginLeft: "10px", height: "25px" }}
        onClick={handleClick}
      >
        Submit
      </button>
    </>
  );
}
