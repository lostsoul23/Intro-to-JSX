// var React = require("react"); // Inside 'react' module, there is something called 'bable'
// // which is a compiler for javascript that takes in next gen JS and compile it down to a version
// // that every browser can understand. Eg: compiling JSX to plain old vanilla JS
// var ReactDOM = require("react-dom");

// better way: we are able to modularize the dependencies much better (meaning ?????)
// and the code is also better organized
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

// Plain  old vanilla JS
var h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";
document.getElementById("root").appendChild(h1);
