import { NavLink, useNavigate } from "react-router-dom";
import Linkedin from '/icons8-linkedin.svg';
import Instagram from '/icons8-instagram.svg';
import Facebook from '/icons8-facebook.svg';

const Footer = () => {
    const navigate = useNavigate();

    return (
    <div className="mt-5">
    <footer  className="navbar navbar-expand-lg py-2 bg-brown w-100 m-0 bottom-0 ">
        <ul className="navbar-nav list-group list-group-horizontal justify-content-start fs-5">
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
  </div>
   );
}
 
export default Footer;