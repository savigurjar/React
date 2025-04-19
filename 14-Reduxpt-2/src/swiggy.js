import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Header from "./compo Swi/Header";
import Card from "./compo Swi/Card";
import stored from "./compo Swi/stored";

function App() {
  return (
    <>
      <Provider store={stored}>
        <Header />
        <Card />
      </Provider>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
