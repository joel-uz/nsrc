import React from 'react'
import './navbar.css'
import {useState} from 'react';
import Logo from './assets/others/logo.png'
import {FaTimes,FaBars} from 'react-icons/fa'

const Navbar = () => {
  const [isActive1, setIsActive1] = useState(true);
  const handleClick1 = event => {
    // setIsActive1(current => !current);
    setIsActive1(true);
  };

  const [isActive2, setIsActive2] = useState(false);
  const handleClick2 = event => {
    setIsActive2(true);
  };
  
  const [isActive3, setIsActive3] = useState(false);
  const handleClick3 = event => {
    setIsActive3(true);
  };

  const [isActive4, setIsActive4] = useState(false);
  const handleClick4 = event => {
    setIsActive4(true);
    };
    
  const [isActive5, setIsActive5] = useState(false);
  const handleClick5 = event => {
    setIsActive5(true);
  };

  const [isMobile, setIsMobile] = useState(false)
  const handleClick=()=>{
    if(isMobile)
    setIsMobile(false);
    else
    setIsMobile(true);
  }
  return (
    <>
    <div className='navbar'>
      <div className='logo'>
        <img src={Logo} alt='logo' className='logo-resizer'/>
      </div>
      <div className={isMobile ? "nav-items-mobile" : "nav-items"} >
        <li><a href="/#" className={isActive1 ? 'active' : ''} onClick={handleClick1}>Home</a></li>
        <li><a href="#time" className={isActive2 ? 'active' : ''} onClick={handleClick2}>TimeLine</a></li>
        <li><a href="#details" className={isActive3 ? 'active' : ''} onClick={handleClick3}>Details</a></li>
        <li><a href="#gallery" className={isActive4 ? 'active' : ''} onClick={handleClick4}>Gallery</a></li>
        <li><a href="#venue" className={isActive5 ? 'active' : ''} onClick={handleClick5}>Venue</a></li>   
      </div>
      <button className='mobile-menu-icon' onClick={handleClick}>
      {isMobile?
                (<FaTimes size={20} style={{color:"white"}}/>):
                (<FaBars size={20} style={{color:"white"}}/>)
            }
      </button>  
    </div>
    </>
  )
}

export default Navbar