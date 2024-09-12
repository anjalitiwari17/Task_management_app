import React from 'react';
// import './TaskList.css';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id} className="task-item">
          <span className={`task-text ${task.status.toLowerCase()}`}>
            {task.text}
          </span>
          <div>
            <button
              className="status-button"
              onClick={() => editTask({ ...task, status: 'In Progress' })}
            >
              In Progress
            </button>
            <button
              className="status-button"
              onClick={() => editTask({ ...task, status: 'Complete' })}
            >
              Complete
            </button>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
