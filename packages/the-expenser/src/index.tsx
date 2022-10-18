import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpenseProvider } from './contexts/expense-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <ExpenseProvider>
        <App />
    </ExpenseProvider>
  </React.StrictMode>
);
