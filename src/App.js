import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const pendingTasksCount = tasks.filter((task) => !task.completed).length;
  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <div className="App">
      <h2>To-Do List</h2>
      <div className="input-area">
        <input
          className="input"
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button className="btn" onClick={addTask}>
          Add Task
        </button>
      </div>
      <div>
        <div className="tasks">
          <p>
            <b>Pending tasks:</b> {pendingTasksCount}
          </p>
          <p>
            <b>Completed tasks:</b> {completedTasksCount}
          </p>
        </div>
        <ul className="list">
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
              onClick={() => toggleCompletion(index)}
            >
              {task.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
