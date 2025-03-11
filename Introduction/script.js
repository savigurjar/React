// create element throght js

const header1 = document.createElement('h1');
header1.innerHTML = "Hello Coder Army";
header1.style.backgroundColor = "blue";
header1.style.fontSize = "30px";
header1.style.color = "white";

const header2 = document.createElement('h1');
header2.innerHTML = "Hello Coders";
header2.style.backgroundColor = "pink";
header2.style.fontSize = "30px";
header2.style.color = "black";

const root = document.getElementById('root');
root.append(header1);
root.append(header2);
