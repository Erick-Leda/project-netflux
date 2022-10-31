import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Netflux from './pages/Netflux';
import AddMovie from './pages/AddMovie';
import ViewMovie from './pages/ViewMovie';

export default function App() {

  return (
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Netflux />} />
            <Route path='/addmovie' element={<AddMovie />} />
            <Route path='/viewmovie' element={<ViewMovie />} />
          </Routes>
        </BrowserRouter>
  );
}