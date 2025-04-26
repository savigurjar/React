import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./component/Add";
function App() {
  const [language, setlanguage] = useState(["TS", "JS", "Java"]);

  function handleClick() {
    setlanguage(["C++", ...language]);
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {language.map((value, index) => (
          //   <Add key={index} value={value}></Add>
          <Add value={value} key={value}></Add> //by default bhi index basis pr kr dega
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Add languages</button>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
