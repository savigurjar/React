import Third from "./Third";
import Globe from "../../Global";
import { useContext } from "react";

export default function Second() {
  const { count, setCount } = useContext(Globe); // Using Context API

  return (
    <>
      <h2>How are you?</h2>
      <Third />
    </>
  );
}
