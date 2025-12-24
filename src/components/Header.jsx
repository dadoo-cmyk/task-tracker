import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../store/taskContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(TaskContext);

  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <div className="header-controls">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/stats">Stats</Link>
        </nav>
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
    </header>
  );
};

export default Header;
