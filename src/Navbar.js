import { useState } from 'react'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isShow, setisShow] = useState(false);  

    const toggleMenu =() => {
        setisShow(!isShow);
    } 

    const navLinkStyles = ({ isActive }) => {
        return{
             fontWeight: isActive ? 'bold' : 'normal', 
            color: isActive ? 'rgb(45, 1, 111)' : 'rgb(168, 160, 197)',
        }   
    }

    return(
        <nav className="navbar" id="navbar">
            <NavLink to={'/'}><img src= 'images/bakersinncategory.png' alt=""/></NavLink>
                   <ul className={`menu ${isShow ? "show" : ""}`}>
                        <NavLink style={navLinkStyles} to='/'></NavLink>
                        <NavLink style={navLinkStyles} to='/About'>About Us</NavLink>
                        <NavLink style={navLinkStyles} to='/Products'>Products</NavLink>
                        <NavLink style={navLinkStyles} to='/Recipes'>Recipes</NavLink>
                        <NavLink style={navLinkStyles} to='/Kids'>Kid's Corner</NavLink>
                        <NavLink to='/contact'><button>CONTACT US</button> </NavLink>
                    </ul>  
               
                 <div className={`hamburger ${isShow ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span> 
                </div>  
        </nav>
    );
}

export default Navbar; 







/* 
import React from 'react';
import { useState } from 'react';

function HamburgerMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="nav-container">
      <div className={`hamburger ${showMenu ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={`menu ${showMenu ? "show" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default HamburgerMenu; */



/* import { useState } from 'react'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isShow, setisShow] = useState(false);  

    const toggleMenu =() => {
        setisShow(!isShow);
    } 

    const navLinkStyles = ({ isActive }) => {
        return{
             fontWeight: isActive ? 'bold' : 'normal', 
            color: isActive ? 'rgb(45, 1, 111)' : 'rgb(168, 160, 197)',
        }   
    }

    return(
        <nav className="navbar">
            <NavLink to={'/'}><img src= 'images/bakersinncategory.png' alt=""/></NavLink>
                <div className=''>
                    <ul>
                        <NavLink style={navLinkStyles} to='/'></NavLink>
                        <NavLink style={navLinkStyles} to='/About'>About Us</NavLink>
                        <NavLink style={navLinkStyles} to='/Products'>Products</NavLink>
                        <NavLink style={navLinkStyles} to='/Recipes'>Recipes</NavLink>
                        <NavLink style={navLinkStyles} to='/Kids'>Kid's Corner</NavLink>
                        <NavLink to='/contact'><button>Contact Us</button> </NavLink>
                    </ul>  
                </div>
                 <div className={`hamburger ${isShow ? "open" : ""}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span> 
                </div>  
        </nav>
    );
}

export default Navbar;  */