import React from 'react';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div className="page-container">
      <h2>My Tasks</h2>
      <TaskInput />
      <TaskList />
    </div>
  );
};

export default Home;
