import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "./Slicer1";

export default function Counting() {
  const count = useSelector((state) => state.sliceone.count); //subscribe into the event
  const dispatch = useDispatch();

  return (
    <>
      <h1>Counter is: {count}</h1>
      <button onClick={() => dispatch(Increment())} style={{ marginLeft: "10px" }}>Increment</button>
      <button onClick={() => dispatch(Decrement())} style={{ marginLeft: "10px" }}>Decrement</button>
      <button onClick={() => dispatch(Reset())} style={{ marginLeft: "10px" }}>Reset</button>
    </>
  );
}
