import React from 'react';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link } from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import Choix from './pages/Choix'


function App() {
return (
  <Router>
      <div>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/Home"  element={<Home/>}/>
            <Route path="/Choix"  element={<Choix/>}/>
          </Routes>
      </div>
   </Router>
  );
}

export default App;