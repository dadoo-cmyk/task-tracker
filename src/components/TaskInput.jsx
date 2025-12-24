import React, { useState, useContext } from 'react';
import { TaskContext } from '../store/taskContext';

const TaskInput = () => {
  const [text, setText] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    
    addTask(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-input">
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
