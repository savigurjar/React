import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./component/Stores";
import Counting from "./component/Counting";

function App() {
  return (
    <Provider store={store}>
      <Counting />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
