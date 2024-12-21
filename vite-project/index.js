import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement('div',{id:"parent"},
    [
       React.createElement('h1',{},"I am a text of first div"),
       React.createElement('h2',{},"i ama subpart of first div") 
    ],
    [
        React.createElement('h1',{},"i am atext of second div"),
        React.createElement('h3',{},"I ama a smaller element")
    ]
)
    

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);