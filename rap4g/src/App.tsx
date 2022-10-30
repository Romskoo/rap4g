import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './pages/Home'


function AppRouter() {
return (
  <Router>
      <div>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/Home"  element={<Home/>}/>
          </Routes>
      </div>
   </Router>
  );
}

export default AppRouter;
