import { Link, NavLink } from 'react-router-dom';
import logo from '../../src/assets/images/logo.png';
import { FaBars } from "react-icons/fa";
const Navbar = () =>{
  return (
    <nav className="nav">
        <div className="nav__container">
            <Link to='/' className='nav__logo'><img src={logo} 
              alt='nav Logo'/></Link>
            <ul className="nav__menu">
                <li><NavLink to='/about'>Sobre Nosotros</NavLink></li>
                <li><NavLink to='/contact'>Contacto</NavLink></li>
                <li><NavLink to='/doctores'>Doctores</NavLink></li>
                <li><NavLink to='/Gallery'>Galeria</NavLink></li>
            </ul>
           <button className="nav__toggle-btn"> 
                <FaBars/>
           </button>
        </div>
    </nav>
  )
}

export default Navbar