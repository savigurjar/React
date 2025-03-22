import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Pgenerator from "./components/Pgenerator";

function Main()
{
  return(
    <Pgenerator/>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
