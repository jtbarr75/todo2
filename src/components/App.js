import React from 'react';
import Sidebar from './Sidebar';
import List from './List';
import Task from './Task';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          index: 0,
          name: "Today",
          selected: true,
          tasks: [
            {index: 0, selected: true, name: "Water Plants", notes: "", date: ""},
            {index: 1, selected: false, name: "Workout", notes: "", date: ""},
            {index: 2, selected: false, name: "Go Shopping", notes: "", date: ""}
          ]
        },
        {
          index: 1,
          name: "Tomorrow",
          selected: false,
          tasks: [
            {index: 0, selected: false, name: "Water Plants Again", notes: "", date: ""}
          ]
        }
      ],
      selectedList: 0,
      selectedTask: 0
    }
  }

  handleNavClick = (event) => {
    const { id } = event.target
    const index = parseInt(id.substr(4));
    const type = id.substr(0,4);
    if (type === "list" && index !== this.state.selectedList) {
      this.setState({
        selectedList: index,
        selectedTask: -1
      })
    } else if (type === "task" && index !== this.state.selectedTask) {
      this.setState({selectedTask: index})
    }
  }

  handleCloseClick = (event) => {
    
  }

  render() {
    const list = this.state.lists[this.state.selectedList];
    const task = list && list.tasks[this.state.selectedTask];
    return (
      <div className="content">
        <Sidebar lists={this.state.lists} selected={this.state.selectedList} handleNavClick={this.handleNavClick} />
        {list && <List list={list} selected={this.state.selectedTask} handleNavClick={this.handleNavClick} />}
        {task && <Task task={task} />}
      </div>
    )
  }
  
}

export default App