import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Increment from "./component/Increment";
import Decrement from "./component/Decrement";

// state lifting
function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Parent Counter is: {count}</h1>

      <Increment counts={count} setcount={setCount}/>
      {/* count ko as a props bhej rhe h */}

      <Decrement counts={count} setcount={setCount}/>

    </>
  );
}


// function Main() {
  

//   return (
//     <>
//       <h1>Hello coder Army</h1>
//       <Increment/>
      
//       <Decrement/>

//     </>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
