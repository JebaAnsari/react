import React from 'react';
import ReactDOM from 'react-dom/client';

// Declare a functional component
// const Title = () => )
//      <h1>I am title</h1>;  // Add return statement
// );
const Title = () => (
    <h1>I am title</h1>
);


// Or you can use an implicit return if you're using parentheses
// const Title = () => (
//     <h1>I am title</h1>
// );

console.log(Title);
const NewComponent = ()=>(
    <h3>New component without return</h3>
)
const NewComponent1 = () =>{
return <h4>with return statement</h4>

}

const HeadingComponent = () => (
    <div className='home'>
        <Title />
        <NewComponent />
        <NewComponent1 />
        <h1>Hi, I am JSX code in a .tsx file</h1>
        <h2>hello World 🚷s</h2>
    </div>
);

const Heading = () => {
    return <h1>react component</h1>;
};

// Log the component (just for demonstration purposes)
console.log(HeadingComponent);

// Get the root element to mount the React app
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<HeadingComponent />);
