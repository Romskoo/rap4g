
import './App.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home'
import Choix from './pages/Choix'
import Jeux from './pages/Jeux'
import Fin from './pages/Fin'
import QRCodePage from './pages/QRCode'


function App() {
return (
  <Router>
      <div>
        <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/Home"  element={<Home/>}/>
            <Route path="/Choix"  element={<Choix/>}/>
            <Route path="/Jeux" element={<Jeux/>}/>
            <Route path="/Fin" element={<Fin/>}/>
            <Route path="/QRCode" element={<QRCodePage/>}/>
          </Routes>
      </div>
   </Router>
  );
}

export default App;
