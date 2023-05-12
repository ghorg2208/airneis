//import "" ;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink , useNavigate } from "react-router-dom"

const Menu = () => {
    return ( 
        /*
        <div className="bg-primary mb-0">
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand">
                    
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link">AIRNEIS</span>
                    </li>
                </ul>
                <ul className='navbar-nav'>
                <li className="nav-item">
                        <NavLink to="/produit" className="nav-link text-light">
                            Produit
                        </NavLink>
                    </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link"
                        }}>Accueil</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <img src="/public/search.svg" alt="search" width="28" height="28" /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/panier" className="nav-link">
                            <img src="/public/cart.svg" alt="cart" width="28" height="28" /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <img src="/public/list.svg" alt="list" width="28" height="28" /></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
        */

        <header>
            <h2 className="logo">Logo</h2>
            <nav className="navigation">
            <NavLink to="/"> Acceuil</NavLink>
                <a href='#'>coucou</a>
                <a href='#'>Rechercher</a>
                <NavLink to="/panier"> <img src="/public/cart.svg" alt="cart" width="28" height="28" /> </NavLink>
                <button className="login-menu">LogIn</button>
            </nav>

            <script>
                let profile = document.querySelector('.profile');
                let menu = document.querySelector('.menu');
            </script>
        </header>


     );
}
 
export default Menu;