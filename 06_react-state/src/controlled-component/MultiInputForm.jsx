import React from 'react'

// This component will handle multiple input fields
export default function MultiInputForm() {
    // Initialize state for multiple input fields
    // This state will hold the values for firstName, lastName, and email   

    const [formData, setFormData] = React.useState({
        userName: '',
        password: '',
        email: ''
    });

    const handleChange = (event) => {

        const { name, value } = event.target;

        // Update the specific field in the formData state
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        console.log(`Input changed: ${name} = ${value}`); // Log the input change
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log('Submitted values:', formData); // Log the submitted values
        setFormData({ userName: '', password: '', email: '' }); // Reset the form after submission
    };



  return (
    <div>
        <h3>多输入表单</h3>
        <p>这个组件演示了如何处理多个输入字段的表单。</p>
        <form onSubmit={handleSubmit}>
            <label>
                用户名:
                <input type="text" name="userName" value={formData.userName} onChange={handleChange} />
            </label>
            <br />
            <label>
                密码:
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <br />
            <label>
                邮箱:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">提交</button>
        </form>
        <p>当前输入值: {JSON.stringify(formData)}</p>
    </div>
  )
}
