import React from 'react';

const Footer = () => {
    return (
        <div>
            <div>
                <h1>1. Difference Between State and Props</h1>
                <div>
                    <u>Props:</u>
                    <ol>
                        <li>The data When passed that cannot directly changed(read only).</li>
                        <li>Data passed from one component to another component.</li>
                        <li>Props can be used with state and functional components.</li>
                    </ol>
                </div>
                <div>
                    <u>State:</u>
                    <ol>
                        <li>The data When passed that can directly changed(read and write both).</li>
                        <li>Data passed in same component from different palces.</li>
                        <li>State can be used only with the state components/class component (Before 16.0).</li>
                    </ol>
                </div>
            </div>
            <div>
                <h1>2. How React Works?</h1>
                <div>
                    <p>React is a JavaScript library that creates user interfaces (UIs) in a predictable and efficient way using declarative code. Mainly when we write react coad, it looks like HTML coad. But it is one kind of fake HTML. React replace the fake HTML into a object and then react process the object and give us application React use a lot of component to build the application. In short, Components are the building block of React. React does not commit state changes one after the other if there are multiple state changes. Instead, React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process.</p>
                </div>
                
            </div>
            <div>
                <h1>3. How useState Works?</h1>
                <div>
                    <p>useState is a Hook that allows us to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. The useState hook allows us decleare one or more state variables in function components.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;