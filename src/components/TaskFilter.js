import React from 'react';
// import './TaskFilter.css';

function TaskFilter({ setFilter }) {
  return (
    <div className="task-filter">
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Pending')}>Pending</button>
      <button onClick={() => setFilter('In Progress')}>In Progress</button>
      <button onClick={() => setFilter('Complete')}>Complete</button>
    </div>
  );
}

export default TaskFilter;
