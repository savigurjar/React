import { useDispatch, useSelector } from "react-redux";
import { Increment,Decrement,Reset } from "./Slicer1";
export default function Counting() {
  // jb bhi connect krne ka rhega
  const count = useSelector((state) => state.sliceone.count);
  const dispatch = useDispatch();

  // console.log(Increment()); - Object = sliceone/Increment
  return (
    <>
      <h1>Counter is : {count}</h1>
      <button style={{marginLeft:"10px"}} onClick={() => dispatch(Increment())}>Increment</button>
      <button style={{marginLeft:"10px"}} onClick={() => dispatch(Decrement())}>Decrement</button>
      <button style={{marginLeft:"10px"}} onClick={() => dispatch(Reset())}>Reset</button>
    </>
  );
}
