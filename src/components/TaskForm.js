import React, { useState, useEffect } from 'react';
import './TaskForm.css';

function TaskForm({ addTask, currentTask, setCurrentTask, updateTask }) {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    if (currentTask) {
      setText(currentTask.text);
      setStatus(currentTask.status);
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask({ ...currentTask, text, status });
    } else {
      addTask({ id: Date.now(), text, status });
    }
    setText('');
    setStatus('Pending');
    setCurrentTask(null);
  };

  const getStatusButtonClass = (statusType) => {
    return status === statusType ? `${statusType.toLowerCase()}-button` : 'status-button';
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task"
        required
      />
      <div className="form-buttons">
        <button type="submit">
          {currentTask ? 'Update Task' : 'Add Task'}
        </button>
        <button
          type="button"
          onClick={() => setStatus('Pending')}
          className={getStatusButtonClass('Pending')}
        >
          Pending
        </button>
        <button
          type="button"
          onClick={() => setStatus('In Progress')}
          className={getStatusButtonClass('In Progress')}
        >
          In Progress
        </button>
        <button
          type="button"
          onClick={() => setStatus('Complete')}
          className={getStatusButtonClass('Complete')}
        >
          Complete
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
