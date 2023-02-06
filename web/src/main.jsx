import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Cgu from './composants/front/Cgu';
import MentionsLegales from './composants/front/Mentionslegales';
import Contact from './composants/front/Contact';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}> 
        <Route path='CGU' element={<Cgu />} />
        <Route path='Mentions-Legales' element={<MentionsLegales />} />
        <Route path='Contact' element={<Contact />} /> 
      </Route>    
    </Routes>
  </BrowserRouter>
    

)
