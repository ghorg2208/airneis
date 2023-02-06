//import "" ;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink , useNavigate } from "react-router-dom"

const Menu = () => {
    return ( 

        <div className="bg-primary mb-4">
            <nav className="navbar navbar-expand navbar-dark container">
                <span className="navbar-brand">
                    {/** image en svg getbootstrap.com  */}
                </span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <span className="nav-link">AIRNEIS</span>
                    </li>
                </ul>

                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <img src="/public/search.svg" alt="search" width="28" height="28" /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <img src="/public/cart.svg" alt="cart" width="28" height="28" /></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link">
                            <img src="/public/list.svg" alt="list" width="28" height="28" /></NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Menu;