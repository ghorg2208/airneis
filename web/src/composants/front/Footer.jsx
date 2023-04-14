import { NavLink, useNavigate } from "react-router-dom";
import Linkedin from '/icons8-linkedin.svg';
import Instagram from '/icons8-instagram.svg';
import Facebook from '/icons8-facebook.svg';
import './Style.css';


const Footer = () => {
    const navigate = useNavigate();

    return (
        /*<div className="mt-5">
        <footer  className="navbar navbar-expand-lg py-2 bg-primary w-100 m-0 bottom-0 ">
        <ul className="navbar-nav list-group list-group-horizontal justify-content-start">
                    <li className="nav-item ">
                        <NavLink to="/CGU" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-white"
                        }}>CGU</NavLink>
                    </li>
                    <li className="nav-item text-white">
                        <NavLink to="/Mentions-Legales" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-white"
                        }}>Mentions Légales</NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink to="/Contact" className={({isActive}) => {
                            return isActive ? "nav-link active text-light" : "nav-link text-white"
                        }}>Contact</NavLink>
                    </li>
        </ul>
        <ul className="navbar-nav list-group list-group-horizontal ms-auto"> 
                <li className="nav-item">
                    <a href="https://www.linkedin.com/search/results/all/?keywords=airneis&origin=GLOBAL_SEARCH_HEADER&sid=buo" target="_blank"><img src={Linkedin} alt="Linkedin Logo" /></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.instagram.com/airneis" target="_blank"><img src={Instagram} alt="Instagram Logo" /></a>
                </li>
                <li className="nav-item">
                    <a href="https://www.facebook.com/search/top?q=airneis" target="_blank"><img src={Facebook} alt="Facebook Logo" /></a>
                </li>
        </ul>
        </footer>
        </div>*/

        <div class="container">
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                    <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                </a>
                <span class="mb-3 mb-md-0 text-body-secondary">&copy; 2023 Company, Inc</span>
                </div>

                <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"/></svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"/></svg></a></li>
                <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"/></svg></a></li>
                </ul>
            </footer>
        </div>
   );


}
 
export default Footer;