import React, { useContext } from 'react';
import { TaskContext } from '../store/taskContext';

const Stats = () => {
  const { tasks } = useContext(TaskContext);

  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="page-container stats-page">
      <h2>Statistics</h2>
      <div className="stats-card">
        <div className="stat-item">
          <h3>Total</h3>
          <p>{total}</p>
        </div>
        <div className="stat-item">
          <h3>Completed</h3>
          <p className="success">{completed}</p>
        </div>
        <div className="stat-item">
          <h3>Remaining</h3>
          <p className="warning">{remaining}</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
