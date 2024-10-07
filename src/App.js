import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/post/:id" component={BlogPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;