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

  return (
    <input 
      id="newTaskInput" 
      value={value} 
      onChange={handleOnChange}
      onKeyUp={handleSubmit}
    />
  )
}

export default NewTaskInput