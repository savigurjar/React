import Globe from "../../Global";
import { useContext } from "react";

export default function Third() {
  const { count, setCount } = useContext(Globe); // Accessing global state

  return (
    <>
      <h2>I am printing: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}
