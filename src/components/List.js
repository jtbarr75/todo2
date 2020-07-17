import React from 'react';
import MaterialIcon from 'material-icons-react';
import NewTaskInput from './NewTaskInput';

class List extends React.Component {
  render() {
    const tasks = this.props.list.tasks.map(task => {
      const className = (task.index === this.props.selected ? "list-task selected" : "list-task");
      return (
        <li 
          key= {task.index} 
          id={`task${task.index}`} 
          className={className}
          onClick={this.props.handleNavClick}
        >
          {task.name}
        </li>
      )
    });
    return (
      <div id="listCard" className="card open">
          <header>
            <h1 id="listTitle" className="card-title">{this.props.list.name}</h1>
            <div className="icons">
              <MaterialIcon icon = "more_horiz" className="material-icons" id="listActions" />
              <MaterialIcon icon = "close" className="material-icons" id="closeList" onClick={this.props.handleCloseClick}/>
            </div>
            <div id="listMenu" className="actions-menu">
              <span id="editList" className="action-button">Edit</span>
              <span id="deleteList" className="action-button">Delete</span>
            </div>
          </header>
          <ul id="list" className="list">
            {tasks}
          </ul>
          <footer>
            <div className="input-group">
              <NewTaskInput addTask={this.props.addTask}/>
              <button id="newTaskButton" className="add-button">+</button>
            </div>
          </footer>
        </div>
    )
  }
  
}

export default List