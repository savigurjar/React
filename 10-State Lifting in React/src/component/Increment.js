 function Increment({counts,setcount}) {
  return (
    <>
      <h2>Counter is : {counts}</h2>
      <button onClick={()=>setcount(counts+1)}>Increment</button>
    </>
  );
}

// import React, { useState } from "react";
//  function Increment() {
//     const [count, setCount] = useState(0);
//   return (
//     <>
//       <h2>Counter is : {count}</h2>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//     </>
//   );
// }
export default Increment;
