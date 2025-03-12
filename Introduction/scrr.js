const element = React.createElement("h1",{},"Hello Coder Army");

// document.getElementById("root");
// ReactDOM.render(element,root); // ---2017

// 2018 -> js single threaded ->khdu control le rha react element ko
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);