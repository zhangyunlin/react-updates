import React from 'react'

export default function FormDom() {

    const nameRef = React.useRef(null);
    const passwordRef = React.useRef(null);

    const handleSubmit = () => {
        // Access the input value using the ref
        const nameValue = nameRef.current.value;
        const passwordValue = passwordRef.current.value;
        console.log(`Input submitted: ${nameValue}, Password: ${passwordValue} `); // Log the input values
        // Reset the input field
        nameRef.current.value = '';
        passwordRef.current.value = '';
    };

    return (
        <div>
            <h3>Form DOM Example</h3>
            <p>This component demonstrates how to use refs to access DOM elements directly.</p>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                <label>
                    Input:
                    <input type="text" defaultValue="test name" name='name' ref={nameRef} />
                    <input type="password" defaultValue={"123456"} name='password' ref={passwordRef} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );  
}
