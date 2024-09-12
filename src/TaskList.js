import React from 'react';

function TaskList({ tasks, deleteTask, editTask }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          <span>{task.text} - {task.status}</span>
          <button onClick={() => editTask(task)}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
