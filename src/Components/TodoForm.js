import React, {useState} from 'react';

function TodoForm(props) {
    const [text, setText] = useState("");

    function handleChange(event) {
        let textInput = event.target.value;
        setText(textInput);
    }

    function addItem(event) {
        event.preventDefault();
        if (text) {
            props.onAddItem(text);
            setText("");
        }
    }
    
    return (
        <form>
            <input onChange={handleChange} type="text" value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default TodoForm;