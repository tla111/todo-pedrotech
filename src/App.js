import React, { useState } from 'react';
import './App.css';
import Task from './Components/Task';

function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }])
    setTaskName("")
    setTime("")
  }

  return (
    <div className="App">
      <h1>Todo List</h1>

      <div className="form-container">
        <label>Task Name:</label>
        <input type="text" id="task" onChange={(e) => setTaskName(e.target.value)} />
        <label>Time:</label>
        <input type="text" id="time" onChange={(e) => setTime(e.target.value)} />
      </div>

      <button onClick={addTask}>Add+</button>

      <Task taskName="do homework" time="20 minutes" />
    </div>
  );
}

export default App;
