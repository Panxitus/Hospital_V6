import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import { FaBars } from "react-icons/fa";
const Navbar = ()=>{
  return (
    <nav>
        <div className="container nav__container">
            <Link to='/'><img src={logo} alt='Hospital Logo'/></Link>
            <ul className="nav__links">
                <li><NavLink to='/about'>Sobre Nosotros</NavLink></li>
                <li><NavLink to='/contact'>Contacto</NavLink></li>
                <li><NavLink to='/doctores'>Doctores</NavLink></li>
                <li><NavLink to='/Gallery'>Galeria</NavLink></li>
            </ul>
           <button className="nav_toggle-btn"> 
                <FaBars/>
           </button>
        </div>

    </nav>
  )
}

export default Navbar