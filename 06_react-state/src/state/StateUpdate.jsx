import React from "react";


// This component demonstrates how to update state using a functional approach
// It uses the useState hook to manage the count state
// The increment function updates the count by using the previous state value
// This ensures that the state update is based on the most recent value, which is important in cases where multiple updates might occur in quick succession
// The component re-renders whenever the state is updated, displaying the current count
function StateUpdate() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>State Update Example</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default StateUpdate;