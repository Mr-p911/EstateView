import React, {useState} from 'react';
import './header.css'
import logo from '../assets/EstateViewLogo.png'
import { FaBars, FaTimes } from 'react-icons/fa';
function topsec(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); 
    };
    return(
        <>
            <div className="logo-navlinks">
                <img src={logo} className='logo'/>
                <p className='JUTXT-Tablet-Only'>Join Us</p>
                <button className='GSBTN-Tablet-Only'>Get Started</button>
                <div className='menu-toggle' onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className={`mobile-menu-items ${isMenuOpen ? 'open' : ''}`}>
                    <nav className='navlinks'>
                        <a href="" onClick={toggleMenu} className='Home'>Home</a>
                        <a href="" onClick={toggleMenu}>Buy</a>
                        <a href="" onClick={toggleMenu}>Rent</a>
                        <a href="" onClick={toggleMenu}>Agents</a>
                        <a href="" onClick={toggleMenu}>Contacts</a>
                    </nav>
                    <p className='JUTXT' onClick={toggleMenu}>Join Us</p>
                    <button className='GSBTN' onClick={toggleMenu}>Get Started</button>
                </div>
                <div className='NAVLINKSFORPC'>
                    <nav className='navlinks'>
                        <a href="">Home</a>
                        <a href="">Buy</a>
                        <a href="">Rent</a>
                        <a href="">Agents</a>
                        <a href="">Contacts</a>
                    </nav>
                    <p className='JUTXT'>Join Us</p>
                    <button className='GSBTN'>Get Started</button>
                </div>
            </div>
        </>  
    )
}

export default topsec;