import React from 'react'
import './navbar.css'
import {useState} from 'react';
import Logo from './assets/others/logo.png'
import { FaTimes, FaBars } from 'react-icons/fa'
import { useEffect } from 'react';

const Navbar = () => {

  const [stickyClass, setStickyClass] = useState('');

   useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
   }, []);
  
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };


  const [isActive1, setIsActive1] = useState(true);
  const handleClick1 = event => {
    // setIsActive1(current => !current);
    setIsActive1(true);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsMobile(false);
    
  };

  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = event => {
    setIsActive2(true);
    setIsActive1(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsActive5(false);
    setIsMobile(false);
  };
  
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = event => {
    setIsActive3(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive4(false);
    setIsActive5(false);
    
    setIsMobile(false);
  };

  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = event => {
    setIsActive4(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive5(false);
    setIsMobile(false);
    };
    
  const [isActive5, setIsActive5] = useState(false);
  const handleClick5 = event => {
    setIsActive5(true);
    setIsActive1(false);
    setIsActive2(false);
    setIsActive3(false);
    setIsActive4(false);
    setIsMobile(false);
  };

  const [isMobile, setIsMobile] = useState(false);

  const handleClick=()=>{
    if(isMobile)
    setIsMobile(false);
    else
      setIsMobile(true);
  }
  return (
    <div className={`top-part-nav${stickyClass}`}>
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' className='logo-resizer'/>
      </div>
      <div className={isMobile ? "nav-items-mobile" : "nav-items"} >
        <li><a href="/" className={isActive1 ? 'active' : 'not'} onClick={handleClick1}>Home</a></li>
        <li><a href="#time" className={isActive2 ? 'active' : 'not'} onClick={handleClick2}>TimeLine</a></li>
        <li><a href="#details" className={isActive3 ? 'active' : 'not'} onClick={handleClick3}>Details</a></li>
        <li><a href="#about" className={isActive4 ? 'active' : 'not'} onClick={handleClick4}>About</a></li>
        <li><a href="#venue" className={isActive5 ? 'active' : 'not'} onClick={handleClick5}>Venue</a></li>   
      </div>
      <button className="button-reg-top"><a href="#reg" className="link-top">Register Now</a></button>         
      <button className='mobile-menu-icon' onClick={handleClick}>
      {isMobile?
                (<FaTimes size={20} style={{color:"black"}} />):
                (<FaBars size={20} style={{color:"black"}} />)
            }
      </button>  
    </div>
    </div>
  )
}

export default Navbar