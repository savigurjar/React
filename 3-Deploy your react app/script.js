import React from "react";
import ReactDOM from "react-dom/client";

// const element = React.createElement(
//     "h1",
//     {
//       id: "first",
//       className: "firstname",
//       style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
//     },
//     "Hello Coder Army"
//   );
//   const element2 = React.createElement(
//     "h2",
//     {
//       id: "fst",
//       className: "name",
//       style: { backgroundColor: "black", fontSize: "30px", color: "pink" },
//     },
//     "Hello Coders"
//   );
//   const div1 = React.createElement("div", {}, [element, element2]);

// document.getElementById("root");
// ReactDOM.render(element,root); // ---2017

// 2018 -> js single threaded ->khdu control le rha react element ko
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element);
// root.render(div1);

//   jsx : javascript xml
// html jaisa code javascript me likh skte h
// / React.createElement = react element(js object) after render => html file

const root = ReactDOM.createRoot(document.getElementById("root"));
// const newEle = <h1>OnePiece</h1>;
// root.render(newEle);

// javascript expression
const names = "tae";
const obj = {
  name : "v",
  age : 30
}
const obj2 ={
  backgroundColor : "black",
  color:"pink"
}

// react component
// type : class based , function based 
// 2 : function 
function greet()
{
  return <h1>or kese ho</h1>
};

const newe = greet();

// react element
const ele = (
  <>
    <h1 className="heading">hii {names}</h1>
    <h2 id="head2">byy {obj.age}</h2>
    <h3 money="hii">by</h3>
    <h3 money={34}>y</h3>
    <h3 style={obj2}>yoo</h3>
  </>
);
root.render(ele);
root.render(newe);
