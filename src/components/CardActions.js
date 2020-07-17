import React, { useEffect } from 'react';

function CardActions(props) {
  const { type } = props

  function handleClick(event) {
    if (event.target.className !== "actions-menu") {
      props.close();
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick)
    }
  })

  return (
    <div id={`${type}Menu`} className="actions-menu">
      <span id={`${type}Edit`} className="action-button">Edit</span>
      <span id={`${type}Delete`} className="action-button">Delete</span>
    </div>
  )
}

export default CardActions