import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage';
import Loginpage from './pages/Loginpage';
import RegisterPage from './pages/RegisterPage';
import CreateListing from './pages/CreateListing';
function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
<Route path="/" element={<Homepage/>}/>
<Route path="/login" element={<Loginpage/>}/>
<Route path="/register" element={<RegisterPage/>}/>
<Route path="/Create-listing" element={<CreateListing/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
