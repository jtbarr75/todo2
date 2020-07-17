import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';
import CardActions from './CardActions'

function CardMenu(props) {
  const [ open, setOpen ] = useState(false);
  const { type } = props;

  if (open) {
    return (
      <CardActions 
        type={type} 
        close={() => {setOpen(false)}}
        deleteItem={props.deleteItem}
      />
    )
  } else {
    return (
      <div className="icons">
        <MaterialIcon icon = "more_horiz" className="material-icons" id={`${type}Actions`} onClick={() => {setOpen(true)}}/>
        <MaterialIcon icon = "close" className="material-icons" id={`${type}Close`} onClick={props.handleCloseClick}/>
      </div>
    )
  }
}

export default CardMenu