import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [numberchange, setNumber] = useState(false);
  const [characterchange, setCharacter] = useState(false);

  function generatePsd() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberchange) {
      str += "0123456789";
    }
    if (characterchange) {
      str += "~!@#$%^&*(){}:?|";
    }

    let pass = "";
    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }
    setPassword(pass);
  }

  useEffect(() => {
    generatePsd();
  }, [length,numberchange,characterchange]);

  return (
    <>
      <h1>Password is : {password}</h1>
      <div className="psd">
        <input
          type="range"
          min={7}
          max={30}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        ></input>
        <label>Length : ({length}) </label>

        <input
          type="checkbox"
          defaultChecked={numberchange}
          onChange={() => setNumber(!numberchange)}
        ></input>
        <label> Number </label>

        <input
          type="checkbox"
          defaultChecked={characterchange}
          onChange={() => setCharacter(!characterchange)}
        ></input>
        <label> Character </label>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<PasswordGenerator />);
