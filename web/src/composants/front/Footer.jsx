import { NavLink, useNavigate } from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();

    return (
    <footer  className="navbar navbar-expand-lg py-2 bg-primary justify-content-start position-absolute w-100 m-0 fixed-bottom">
        <ul className="navbar-nav list-group list-group-horizontal">
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
  </footer>
   );
}
 
export default Footer;