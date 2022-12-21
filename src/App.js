import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import {Routes, Route} from 'react-router-dom';
import Detail from './DetailPage/Detail';
import PriceCard from './DetailPage/PriceCard';
function App() {
  return (
    <div className="app">
        {/* <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<SearchPage/>} />
        </Routes>
        <Footer /> */}
        <Detail />
        {/* <PriceCard /> */}
    </div>
  );
}

export default App;
