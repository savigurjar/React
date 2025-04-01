import React from "react";
import ReactDOM from "react-dom/client";
import Counting from "./component/Counting";
import { Provider } from "react-redux";
import stores from "../Store";
function App() {
  return (
    <>
      <Provider store={stores}>
        <Counting />
      </Provider>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
