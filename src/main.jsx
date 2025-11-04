import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import Bootstrap CSS globally
import 'bootstrap/dist/css/bootstrap.min.css';

// ✅ ADD THIS LINE to import Bootstrap's JavaScript
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Import your global CSS file
import './index.css';

// src/main.jsx

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);