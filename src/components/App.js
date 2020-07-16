import React from 'react';
// import MaterialIcon from 'material-icons-react';
import Sidebar from './Sidebar';
import List from './List';
import Task from './Task';

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Sidebar />
        <List />
        <Task />
      </div>
    )
  }
  
}

export default App