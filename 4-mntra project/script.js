import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element1);

// jsx : js expression((output lakr de) -> statement nhi likh skte 
function greet(name)
{
    return <h2>ok ji {name}</h2>
}
root.render(greet("savi"));