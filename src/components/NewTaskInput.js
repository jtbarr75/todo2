import React, { useState } from 'react'

function NewTaskInput(props) {
  const [ value, setValue ] = useState("");

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    if (event.keyCode ===  13) {
      setValue("");
      props.addTask(value, event.target);
    }
  }

  const handleClick = (event) => {
    setValue("");
    props.addTask(value, event.target);
  }

  return (
    <div className="input-group">
      <input 
        id="newTaskInput" 
        value={value} 
        onChange={handleOnChange}
        onKeyUp={handleSubmit}
      />
      <button id="newTaskButton" className="add-button" onClick={handleClick}>+</button>
    </div>
  )
}

export default NewTaskInput