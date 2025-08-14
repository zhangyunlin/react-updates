import React, { useState } from 'react'

/**
 * 使 React 的 state 成为表单显示的“唯一数据源”，并且使用React控制用户输入过程中表单发生的操作。
 * 这种由state驱动的表单元素就叫做“受控组件"
 * @returns A controlled form component that manages its input state
 */
export default function ControlledForm() {
    // set the initial state for the input field
    const [name, setName] = useState("John Doe");

    const handleChange = (event) => {
        setName(event.target.value);  
        // console.log(`Input changed: ${event.target.value}`); // Log the input change
    }   

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(`Submitted value: ${name}`);
        setName(''); // Reset input after submission
    }   


  return (
    <div>
        <h3>受控组件</h3>
        <p>受控组件是指表单元素的值由 React 的 state 管理，用户输入时会触发 state 更新。</p>
        <p>这种方式确保了表单的值始终与 React 的 state 保持同步。</p>
        <p>受控组件的好处包括：更好的可控性、易于调试和测试、以及与其他 React 组件的集成。</p>
        <p>在受控组件中，表单元素的值通过 state 进行管理，用户输入会触发 state 更新。</p>
        <p>这种方式确保了表单的值始终与 React 的 state 保持同步。</p>
        <form onSubmit={handleSubmit}>
            <label>
                输入内容:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">提交</button>     
        </form>
      
    </div>
  )
}
