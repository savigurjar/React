const element = React.createElement(
  "h1",
  {
    id: "first",
    className: "firstname",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  "Hello Coder Army"
);
const element2 = React.createElement(
  "h2",
  {
    id: "fst",
    className: "name",
    style: { backgroundColor: "black", fontSize: "30px", color: "pink" },
  },
  "Hello Coders"
);
const div1 = React.createElement("div", {}, [element, element2]);

// document.getElementById("root");
// ReactDOM.render(element,root); // ---2017

// 2018 -> js single threaded ->khdu control le rha react element ko
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
root.render(div1);


