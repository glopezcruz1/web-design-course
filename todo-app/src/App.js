import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    if (task !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((t, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className="app">
      <div className="todo-box">
        <h1>To-Do List</h1>
        <p>Add tasks you need to complete.</p>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>Add Task</button>
        </div>

        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              <span>{t}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;