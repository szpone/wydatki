import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div className="App" data-testid="APP">
      <Dashboard />
    </div>
  );
}

export default App;
