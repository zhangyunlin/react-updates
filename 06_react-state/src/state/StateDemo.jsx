import React, {useState} from 'react';

// functional component is stateless by default
// we can use useState hook to add state to a functional component
// useState returns an array with two elements: the current state and a function to update it
// state is initialized to the value passed to useState
// the function to update state can be called with a new value to update the state
// the component will re-render when the state is updated

// state is local to the component and does not affect other components
// props are used to pass data from parent to child components
function StateDemo() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>State Management Demo</h1>
            <p>current count is {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default StateDemo;