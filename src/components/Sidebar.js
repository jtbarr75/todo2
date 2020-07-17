import React from 'react';
import MaterialIcon from 'material-icons-react';
import NewListInput from './NewListInput'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      addingNewlist: false
    }
  }

  getListElements() {
    return this.props.lists.map(list => {
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
  }

  handleNewListClick = () => {
    this.setState({ addingNewlist: true });
  }

  handleCloseInputClick = () => {
    this.setState({ addingNewlist: false });
  }

  addList = (name, origin) => {
    this.props.addList(name, origin);
    this.setState({ addingNewlist: false });
  }

  render() {
    const lists = this.getListElements();

    return (
      <div className="sidebar-wrapper">
        <header className="main-header">
          <h1 className="sidebar-title selected">Lists</h1>
          <MaterialIcon icon = "chevron_right" className="material-icons" id="toggleSidebar" />
        </header>
        <nav className="sidebar open">
          <div className="lists-title"><button id="newListButton" className="add-button" onClick={this.handleNewListClick}>+</button>Add List</div>
          <ul id="lists">
            {lists}
            {this.state.addingNewlist && (<NewListInput 
              handleCloseClick={this.handleCloseInputClick}
              addList={this.addList}
            />)}
          </ul>
        </nav> 
      </div>
    )
  }
  
}

export default Sidebar