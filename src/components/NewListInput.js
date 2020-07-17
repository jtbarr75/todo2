import React, { useEffect, useState } from 'react'

function NewListInput(props) {
  const [ value, setValue ] = useState("");

  const handleCloseClick = (event) => {
    if (event.target.id !== "newListInput") {
      props.handleCloseClick();
    }
  }

  const handleOnChange = (event) => {
    setValue(event.target.value)
  }

  const handleSubmit = (event) => {
    if (event.keyCode ===  13) {
      props.addList(value, event.target);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleCloseClick);
    return () => {
      document.removeEventListener("click", handleCloseClick);
    }
  })

  return (
    <input 
      id="newListInput" 
      value={value} 
      onChange={handleOnChange}
      onKeyUp={handleSubmit}
    />
  )
}

export default NewListInput