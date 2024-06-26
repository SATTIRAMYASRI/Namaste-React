//const heading = React.createElement("h1", {id:"heading"}, "This is my first react code"); // this will be in the form of object
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading)// render is responsible for coverting object into html tags(browser lang)

// Manipulate the HTML DOM using React

// Create nested React Elements

import React from 'react'
import ReactDOM from 'react-dom/client'

const heading=<h1>Ramya sri</h1>

const Heading=()=><h1>Hello</h1>

const HeadingComponent=()=>{
  return <div>
    <h1>Functional Components</h1>
    <Heading/>
    <Heading></Heading>
    {Heading()}
  </div>
}
const react=ReactDOM.createRoot(document.getElementById("root"));

react.render(<HeadingComponent/>)
