import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"

import {  BrowserRouter , Routes , Route } from "react-router-dom"
//import Home from './composant/front/Home';
//import Contact from './composant/front/Contact';
//import Login from './composant/front/Login';

//import { AuthContextProvider } from "./context/authContext";
import Menu2 from './composants/Menu2';


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Menu2 />}>
          <Route path='recherche' element={<Menu2 />} />
          <Route path="panier" element={<Menu2 />} />
          <Route path="Menu" element={<Menu2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
)
