import React from 'react';
import MaterialIcon from 'material-icons-react';

class Sidebar extends React.Component {
  render() {
    const lists = this.props.lists.map(list => {
      const className = (list.index === this.props.selected ? "sidebar-list selected" : "sidebar-list");
      return (
        <li 
          key={list.index} 
          id={`list${list.index}`} 
          className={className}
          onClick={this.props.handleNavClick}
        >
          {list.name}
        </li>
      )
    });

    return (
      <div className="sidebar-wrapper">
        <header className="main-header">
          <h1 className="sidebar-title selected">Lists</h1>
          <MaterialIcon icon = "chevron_right" className="material-icons" id="toggleSidebar" />
        </header>
        <nav className="sidebar open">
          <div className="lists-title"><button id="newListButton" className="add-button">+</button>Add List</div>
          <ul id="lists">
            {lists}
          </ul>
        </nav> 
      </div>
    )
  }
  
}

export default Sidebar