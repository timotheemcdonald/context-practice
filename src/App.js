import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './components/Navbar';
import BlogProvider from './context/BlogProvider';
import Home from './Pages/Home';
import Post from './Pages/Post'

import './App.css';

function App() {
  return (
    <BlogProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:postId' exact component={Post}/>
          </Switch>
        </Router>
      </div>
    </BlogProvider>
  );
}

export default App;
