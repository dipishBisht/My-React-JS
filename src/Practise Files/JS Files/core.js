import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(    //# It is a React Element (a normal js object)
    "h1", { id: "heading" }, //# Attributes
    "Hello World");      //# Childrens

//# react.createElement (bts) - It creates a javascript object for us 
//? props - childrens + attributes are known as props

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  //# render - It takes that javscipt obejct and creates h1 of it and put in the dom


/*
<div id="parent">
    <div id="child">
        <h1>Heading</h1>     //* lets create this structure with react
        <h1>Another Heading</h1>
    </div>
</div>
*/

const h = React.createElement("h1", {}, "heading");
const h2 = React.createElement("h1", {}, "heading 2");                  //# core react in js file
const child = React.createElement("div", { id: "child" }, [h, h2]);     //# it is little messy 
const parent = React.createElement("div", { id: "parent" }, child);     //# so we will use jsx to make it simple


root.render(parent)  //# previous data will get replaced which is inside root element