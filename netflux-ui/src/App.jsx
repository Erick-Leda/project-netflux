import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflux from './pages/Netflux';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route index element={<Netflux/>}/>
        </Routes>
    </BrowserRouter>
  );
}