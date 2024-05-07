import { useState } from "react";
import { Link } from "react-router-dom";
import {  MenuIcon, Menu, Nav, Hed2, MenuItem } from "./navbarStyles";

// const Navbar = ({ isScrolled }) => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   const toggleMenu = () => {
     setIsOpen(!isOpen);
   };

  return (
   //  <NavWrapper className={isScrolled && "scrolling"}>
   //    <h2>THIS JESUS</h2>
   //    <div>
   //      {/* Conditionally render mobile menu icon */}
   //      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
   //        <div className="bar"></div>
   //        <div className="bar"></div>
   //        <div className="bar"></div>
   //      </div>
   //      {/* Render mobile menu if open or on larger screens */}
   //      {(isMobileMenuOpen || window.innerWidth > 768) && (
   //        <MobileMenuWrapper>
   //          <Link to="/">
   //            <span>Home</span>
   //          </Link>
   //          <Link to="about">
   //            <span>About Us</span>
   //          </Link>
   //          <Link to="blog">
   //            <span>Blog</span>
   //          </Link>
   //          <Link to="contact">
   //            <span>Contact</span>
   //          </Link>
   //          <Link to="courses">
   //            <span>Books</span>
   //          </Link>
   //          <Link to="register">
   //            <button>Register</button>
   //          </Link>
   //        </MobileMenuWrapper>
   //      )}
   //    </div>
     //  </NavWrapper>
     <Nav>
        <Hed2>THIS JESUS</Hed2>
      {/* <Logo>Logo</Logo> */}
      <MenuIcon onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </MenuIcon>
      <Menu isOpen={isOpen}>
        <MenuItem><Link to="/">Home</Link></MenuItem>
        <MenuItem><Link to="/about">About</Link></MenuItem>
        <MenuItem><Link to="/book">The Book</Link></MenuItem>
        <MenuItem><Link to="/Imports">Imports</Link></MenuItem>
        <MenuItem><Link to="/be ready">Be Ye Ready</Link></MenuItem>
        </Menu>
        <Link to="register">
            <button>Register</button>
         </Link>
    </Nav>
  );
};

export default Navbar;
