import { Link } from "react-router-dom"
import logo from '../assets/images/logo.png'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const footer =()=> {
  return (
    <footer>
       <div className="container footer_container">
            <article>
                <link to="/" className='logo'>
                    <img src={logo} alt="Footer logo"></img>
                </link>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, a?
                </p>
                <div className="footer__socials">
                       <a href="https://www.instagram.com" target="_blank" rel=""><FaInstagramSquare/></a> 
                </div>
                <div className="footer__socials">
                       <a href="https://www.Facebook.com" target="_blank" rel=""><FaFacebookSquare/></a> 
                </div>
                <div className="footer__socials">
                       <a href="https://www.linkedin.com" target="_blank" rel=""><FaLinkedin /></a> 
                </div>
            </article>
            <article>       
            </article>
            <div className="footer__copyright">
                <small>2025 &copy;</small>
            </div>
       </div>
    </footer>
  )
}

export default footer