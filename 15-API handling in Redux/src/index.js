import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import stores from "./component/Store";
import { Provider } from "react-redux";
import Coincreate from "./component/Coincreate";

function App() {
  return (
    <>
      <Provider store={stores}>
        <Coincreate/>
      </Provider>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
// function Fetchuser() {
//   useEffect(async () => {
//     dispatch(LoadingData(true));
//     try {
//       const response = await fetch("Github ApI url : ");
//       const da = await response.json();
//       dispatchUpdateData(da);
//     } catch (error) {
//       dispatch(ErrorDta("Error Occured"));
//     }
//   });
// }
