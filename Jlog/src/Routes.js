import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import List from './pages/List';
import './styles/css/main.css';

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
