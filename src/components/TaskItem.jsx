import React, { useContext } from 'react';
import { TaskContext } from '../store/taskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleTask } = useContext(TaskContext);

  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span>{task.text}</span>
      </div>
      <button 
        onClick={() => deleteTask(task.id)} 
        className="delete-btn"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
