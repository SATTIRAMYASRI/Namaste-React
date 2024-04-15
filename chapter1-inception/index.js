const heading = React.createElement("h1", {id:"heading"}, "This is my first react code"); // this will be in the form of object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading)// render is responsible for coverting object into html tags(browser lang)