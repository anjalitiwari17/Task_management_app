import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    setTasks(updatedTasks);
    setCurrentTask(null);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => filter === 'All' || task.status === filter);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Management Application</h1>
      </header>
      <main className="App-main">
        <div className="task-box">
          <TaskFilter setFilter={setFilter} />
          <TaskForm
            addTask={addTask}
            currentTask={currentTask}
            setCurrentTask={setCurrentTask}
            updateTask={updateTask}
          />
          <TaskList tasks={filteredTasks} deleteTask={deleteTask} editTask={setCurrentTask} />
        </div>
      </main>
    </div>
  );
}

export default App;
