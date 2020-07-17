import React from 'react';
import CardMenu from './CardMenu';

class Task extends React.Component {
  render() {
    const { name, notes } = this.props.task;

    return (
      <div id="taskCard" className="card open">
        <header>
          <h1 id="taskTitle" className="card-title">{name}</h1>
          <CardMenu handleCloseClick={this.props.handleCloseClick} type="task"/>
        </header>
        <div className="task-info">
          <input type="button" id="due" className="task-input" value="Add a due date..."/>
          <div id="date"></div>
          <textarea 
            type="textarea" 
            id="notes" 
            className="task-input" 
            placeholder="Add notes..." 
            wrap="soft"
            value={notes}
            onChange={this.props.handleChange}
          ></textarea>
          <div className="task-buttons">
            <button id="saveNotes" className="task-button">Save</button>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Task