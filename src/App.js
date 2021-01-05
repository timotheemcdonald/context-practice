import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BlogProvider from './context/BlogProvider';


import './App.css';

function App() {
  return (
    <BlogProvider>
    <div className="App">
     <Navbar />
     <Hero />
    </div>
    </BlogProvider>
  );
}

export default App;
