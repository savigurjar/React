// create element throght js

const react = {
    createElement: function(tag, style, children) {
        const element = document.createElement(tag);
        element.innerText = children;
        return element;
    }
}

const header1 = react.createElement('h1', {}, "Hello Coder Army");
const header2 = react.createElement('h1', {}, "Hello Coders");

// console.log(header1, header2);



// const header1 = document.createElement('h1');
// header1.innerHTML = "Hello Coder Army";
// header1.style.backgroundColor = "blue";
// header1.style.fontSize = "30px";
// header1.style.color = "white";

// const header2 = document.createElement('h1');
// header2.innerHTML = "Hello Coders";
// header2.style.backgroundColor = "pink";
// header2.style.fontSize = "30px";
// header2.style.color = "black";

const root = document.getElementById('root');
root.append(header1);
root.append(header2);
