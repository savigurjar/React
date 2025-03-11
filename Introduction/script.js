// create element throght js
// const sty = { fontSize: "30px", backgroundColor: "blue", color: white };
const react = {
  createElement: function (tag, styles, children) {
    const element = document.createElement(tag);
    element.innerText = children;
    for (let key in styles) {
      element.style[key] = styles[key];
    }
    return element;
  },
};

const reactDOM = {
    render: function(element,root)
    {
        root.append(element);
    }
}

const header1 = react.createElement(
  "h1",
  {
    fontSize: "30px",
    backgroundColor: "blue",
    color:" white",
  },
  "Hello Coder Army"
);
const header2 = react.createElement(
  "h1",
  {
    fontSize: "20px",
    backgroundColor: "black",
    color: "white",
  },
  "Hello Coders"
);

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

const root = document.getElementById("root");
// root.append(header1);
// root.append(header2);

// reactDOM.render(header1,document.getElementById('root'));
// reactDOM.render(header2,document.getElementById('root'));
// or 
reactDOM.render(header1,root);
reactDOM.render(header2,root);
