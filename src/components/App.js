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
          id: 0,
          name: "Today",
          tasks: [
            {id: 0, name: "Water Plants", notes: "", date: ""},
            {id: 1, name: "Workout", notes: "", date: ""},
            {id: 2, name: "Go Shopping", notes: "", date: ""}
          ]
        },
        {
          id: 1,
          name: "Tomorrow",
          tasks: [
            {id: 0, name: "Water Plants Again", notes: "", date: ""}
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
        if (task.id === prevState.selectedTask) {
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
          id: updatedLists[updatedLists.length - 1].id + 1,
          name: name,
          tasks: []
        });
      // Else is a new Task
      } else {
        const prevTasks = prevState.lists[prevState.selectedList].tasks;
        const updatedTasks = prevTasks.map(task => task);
        const id = updatedTasks.length ? updatedTasks[updatedTasks.length - 1].id + 1 : 0;
        updatedTasks.push({
          id: id,
          name: name,
          notes: "",
          date: ""
        });
        updatedLists[prevState.selectedList].tasks = updatedTasks;
        
      }

      return {
        lists: updatedLists,
      }
    })
  }

  deleteItem = (id) => {
    this.setState(prevState => {
      if (id === "listDelete") {
        const updatedLists = prevState.lists.filter(list => list.id !== prevState.selectedList);
        return {
          lists: updatedLists,
          selectedList: -1,
          selectedTask: -1
        }
      } else {
        const updatedLists = prevState.lists.map(list => list);
        const prevTasks = prevState.lists[prevState.selectedList].tasks;
        const updatedTasks = prevTasks.filter(list => list.id !== prevState.selectedTask);
        updatedLists[prevState.selectedList].tasks = updatedTasks;
        return {
          lists: updatedLists,
          selectedTask: -1
        }
      }
      
    });
  }
  

  render() {
    const list = this.state.lists.find(list => list.id === this.state.selectedList);
    const task = list && list.tasks.find(list => list.id === this.state.selectedTask);
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
          deleteItem={this.deleteItem}
          addTask={this.addItem}
        />}
        {task && <Task 
          task={task} 
          handleCloseClick={this.handleCloseClick}
          handleChange={this.handleNotes}
          deleteItem={this.deleteItem}
        />}
      </div>
    )
  }
  
}

export default App