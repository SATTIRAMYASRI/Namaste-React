//const heading = React.createElement("h1", {id:"heading"}, "This is my first react code"); // this will be in the form of object
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading)// render is responsible for coverting object into html tags(browser lang)

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      background: "blue",
    },
    className: "title"
  },
  "heading"
);
const heading1 = React.createElement(
  "h1",
  {
    id: "title",
  },
  "heading1"
);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading, heading1]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(container);