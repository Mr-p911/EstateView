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
            <div className="logo-navlinks" id='homepage'>
                <img src={logo} className='logo'/>
                <p className='JUTXT-Tablet-Only'>Join Us</p>
                <button className='GSBTN-Tablet-Only'>Get Started</button>
                <div className='menu-toggle' onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <div className={`mobile-menu-items ${isMenuOpen ? 'open' : ''}`}>
                    <nav className='navlinks'>
                        <a href="#homepage" onClick={toggleMenu} className='Home'>Home</a>
                        <a href="#property-listings" onClick={toggleMenu}>Buy</a>
                        <a href="#property-listings" onClick={toggleMenu}>Rent</a>
                        <a href="#agent-listings" onClick={toggleMenu}>Agents</a>
                        <a href="#contact" onClick={toggleMenu}>Contacts</a>
                    </nav>
                    <p className='JUTXT' onClick={toggleMenu}>Join Us</p>
                    <button className='GSBTN' onClick={toggleMenu}>Get Started</button>
                </div>
                <div className='NAVLINKSFORPC'>
                    <nav className='navlinks'>
                        <a href="#homepage">Home</a>
                        <a href="#property-listings">Buy</a>
                        <a href="#property-listings">Rent</a>
                        <a href="#agent-listings">Agents</a>
                        <a href="#contact">Contacts</a>
                    </nav>
                    <p className='JUTXT'>Join Us</p>
                    <button className='GSBTN'>Get Started</button>
                </div>
            </div>
        </>  
    )
}

export default topsec;