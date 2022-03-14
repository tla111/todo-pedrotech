import React, { useState } from 'react';
import './App.css';

function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);


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
    </div>
  );
}

export default App;
