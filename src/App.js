import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="form-container">
        <label>Task Name:</label>
        <input type="text" id="task" />
        <label>Time:</label>
        <input type="text" id="time" />
      </div>
    </div>
  );
}

export default App;
