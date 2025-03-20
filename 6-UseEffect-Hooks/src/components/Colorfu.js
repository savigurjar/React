import React, { useState, useEffect } from "react";

 function Colorful()
{
    const [color, setColor] = useState("black");
    console.log("render");
  //   document.body.style.backgroundColor = color;
  useEffect(() => {
    console.log("useeffect executed");
    document.body.style.backgroundColor = color; //ye statement ab tbhi chlegi jb color change ho
  }, [color]);

  return (
    <>
      <h1>Backgorund Color Changer</h1>
      <div className="dbtn">
        <button
          style={{ backgroundColor: "red " }}
          onClick={() => setColor("red")} //call back function
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "violet " }}
          onClick={() => setColor("violet")}
        >
          Violet
        </button>
        <button
          style={{ backgroundColor: "green " }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "orange " }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "grey " }}
          onClick={() => setColor("grey")}
        >
          Grey
        </button>
      </div>
    </>
  );

}
export default React.memo(Colorful); //parent ke upr jo bhi change ho rha vo es children pr ni aaye

