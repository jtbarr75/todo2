import React from 'react';
import MaterialIcon from 'material-icons-react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar-wrapper">
        <header className="main-header">
          <h1 className="sidebar-title selected">Lists</h1>
          <MaterialIcon icon = "chevron_right" className="material-icons" id="toggleSidebar" />
        </header>
        <nav className="sidebar open">
          <div className="lists-title"><button id="newListButton" className="add-button">+</button>Add List</div>
          <ul id="lists">
          </ul>
        </nav>
      </div>
    )
  }
  
}

export default Sidebar