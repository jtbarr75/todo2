import React from 'react';
import MaterialIcon from 'material-icons-react';

class Task extends React.Component {
  render() {
    const { name } = this.props.task;

    return (
      <div id="taskCard" className="card open">
        <header>
          <h1 id="taskTitle" className="card-title">{name}</h1>
          <div className="icons">
            <MaterialIcon icon = "more_horiz" className="material-icons" id="taskActions" />
            <MaterialIcon icon = "close" className="material-icons" id="clostTask" />
          </div>
          <div id="taskMenu" className="actions-menu">
            <span id="editTask" className="action-button">Edit</span>
            <span id="deleteTask" className="action-button">Delete</span>
          </div>
        </header>
        <div className="task-info">
          <input type="button" id="due" className="task-input" value="Add a due date..."/>
          <div id="date"></div>
          <textarea type="textarea" id="notes" className="task-input" placeholder="Add notes..." wrap="soft"></textarea>
          <div className="task-buttons">
            <button id="saveNotes" className="task-button">Save</button>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Task