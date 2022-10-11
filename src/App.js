import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
