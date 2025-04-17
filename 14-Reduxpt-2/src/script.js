import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./component/Stores";
import Counting from "./component/Counting";
import { reactSlicer } from "./component/Slicer1";
import Customcounter from "./component/Customcounter";

function App() {
  console.log(reactSlicer);
  return (
    <Provider store={store}>
      <Counting />
      <br></br>
      <br></br>
      <br></br>
      <Customcounter/>
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
