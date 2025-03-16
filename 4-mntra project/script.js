import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(element1);

// jsx : js expression((output lakr de) -> statement nhi likh skte 
// function greet(name)
// {
//     return <h2>ok ji {name}</h2>
// }
// root.render(greet("savi"));

// function ke name ka first letter capital hona chahiye - user defined - jsx rules
//props = agrument pass kr rhe ho as a object
function Geet(props)
{
    return <h2>byyy yrr {props.name} {props.age}</h2>
}
const ele2 = <Geet name="sviii" age="20"/>
root.render(ele2);