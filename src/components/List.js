import React from 'react';
import MaterialIcon from 'material-icons-react';

class List extends React.Component {
  render() {
    return (
      <div id="listCard" className="card open">
          <header>
            <h1 id="listTitle" className="card-title">{}</h1>
            <div className="icons">
              <MaterialIcon icon = "more_horiz" className="material-icons" id="listActions" />
              <MaterialIcon icon = "close" className="material-icons" id="closeList" />
            </div>
            <div id="listMenu" className="actions-menu">
              <span id="editList" className="action-button">Edit</span>
              <span id="deleteList" className="action-button">Delete</span>
            </div>
          </header>
          <ul id="list" className="list">
          </ul>
          <footer>
            <div className="input-group">
              <input type="text" id="newTaskInput" placeholder="Add a task..." />
              <button id="newTaskButton" className="add-button">+</button>
            </div>
          </footer>
        </div>
    )
  }
  
}

export default List