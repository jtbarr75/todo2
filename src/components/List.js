import React from 'react';
import CardMenu from './CardMenu';
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
            <CardMenu handleCloseClick={this.props.handleCloseClick} type="list"/>
          </header>
          <ul id="list" className="list">
            {tasks}
          </ul>
          <footer>
              <NewTaskInput addTask={this.props.addTask}/>
          </footer>
        </div>
    )
  }
  
}

export default List