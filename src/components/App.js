import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Demo from './demo';

function AppRouter() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Demo} />
      </div>
    </Router>
  );
}

export default AppRouter;
