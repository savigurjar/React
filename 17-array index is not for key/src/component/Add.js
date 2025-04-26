import { useState } from "react";

export default function Add({ value }) {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        {value} is: {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>Vote</button>
    </>
  );
}
