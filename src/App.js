import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './components/dashboardcomp';
import Index from './pages/Index';
import SignUp from './pages/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
    </div>
    <Routes>
      <Route path='/' element= {<Index />} />
      <Route path='/signup' element= {<SignUp />} />
      <Route path='/dashboard' element= {<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
