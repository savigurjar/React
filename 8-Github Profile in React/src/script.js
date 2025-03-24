import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Main from "./component/Main";

console.log("hii");
function GitHubProfile() {
  //header
  //body: 15 card  show krege
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GitHubProfile />);
