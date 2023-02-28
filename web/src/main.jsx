import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import Menu from './composants/Menu';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Cgu from './composants/front/Cgu';
import MentionsLegales from './composants/front/Mentionslegales';
import Contact from './composants/front/Contact';
import Accueil from './composants/front/Accueil';
import Produit from './composants/front/Produit';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}> 
        <Route path='Accueil' element={<Accueil />} />
        <Route path='CGU' element={<Cgu />} />
        <Route path='Mentions-Legales' element={<MentionsLegales />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='recherche' element={<Menu />} />
        <Route path="panier" element={<Menu />} />
        <Route path="Menu" element={<Menu />} />
        <Route path='produit' element={<Produit />} />
      </Route>    
    </Routes>
  </BrowserRouter>
    
)
