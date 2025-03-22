import React, { use, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("KIMTAEHYUNG");
  const [length,setLength] = useState(10);

  return (
    <>
      <h1>Password is : {password}</h1>
      <div className="psd">
        <input type="range" min={7} max={70}></input>
        <label>Length : ({length}) </label>

        <input type="checkbox"></input>
        <label> Number </label>

        <input type="checkbox"></input>
        <label> Character </label>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PasswordGenerator />);
