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
          tasks: [
            {index: 0, name: "Water Plants", notes: "", date: ""},
            {index: 1, name: "Workout", notes: "", date: ""},
            {index: 2, name: "Go Shopping", notes: "", date: ""}
          ]
        },
        {
          index: 1,
          name: "Tomorrow",
          tasks: [
            {index: 0, name: "Water Plants Again", notes: "", date: ""}
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
    const { id } = event.target
    const type = id.substr(5)
    if (type === "List") {
      this.setState({
        selectedList: -1,
        selectedTask: -1
      })
    } else if (type === "Task") {
      this.setState({
        selectedTask: -1
      })
    }
  }

  handleNotes = (event) => {
    const { value } = event.target
    this.setState(prevState => {
      const updatedLists = prevState.lists.map(list => list);
      const prevTasks = prevState.lists[prevState.selectedList].tasks;
      const updatedTasks = prevTasks.map(task => {
        if (task.index === prevState.selectedTask) {
          task.notes = value
        }
        return task;
      });
      updatedLists[prevState.selectedList].tasks = updatedTasks;
      return {
        lists: updatedLists
      }
    })
  }

  // Adds a new Task or List with name from origin element
  addItem = (name, origin) => {
    this.setState(prevState => {
      const updatedLists = prevState.lists.map(list => list);
      // Check if it should create a new List
      if (origin.id === "newListInput") {
        updatedLists.push({
          index: prevState.lists.length,
          name: name,
          tasks: []
        });
      // Else is a new Task
      } else {
        const prevTasks = prevState.lists[prevState.selectedList].tasks;
        const updatedTasks = prevTasks.map(task => task);
        updatedTasks.push({
          index: prevTasks.length,
          name: name,
          notes: "",
          date: ""
        });
        updatedLists[prevState.selectedList].tasks = updatedTasks;
      }

      return {
        lists: updatedLists
      }
    })
  }
  

  render() {
    const list = this.state.lists[this.state.selectedList];
    const task = list && list.tasks[this.state.selectedTask];
    return (
      <div className="content">
        <Sidebar 
          lists={this.state.lists} 
          selected={this.state.selectedList} 
          handleNavClick={this.handleNavClick} 
          addList={this.addItem}
        />
        {list && <List 
          list={list}
          selected={this.state.selectedTask} 
          handleNavClick={this.handleNavClick} 
          handleCloseClick={this.handleCloseClick}
          addTask={this.addItem}
        />}
        {task && <Task 
          task={task} 
          handleCloseClick={this.handleCloseClick}
          handleChange={this.handleNotes}
        />}
      </div>
    )
  }
  
}

export default App