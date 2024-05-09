import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {  MenuIcon, Menu, Nav, Hed2, MenuItem, Navbutton, Button2 } from "./navbarStyles";
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../features/auth/logoutSlice';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const isLoggedIn = useSelector((state) => state.user.token !== null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    // Additional logic for redirecting or displaying a message after logout
  };

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token');
    if (token) {
      // If token exists, user is logged in
      setIsLoggedIn(true);
    } else {
      // If no token found, user is not logged in
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <Nav>
      <Hed2><Link to="/">THIS JESUS</Link></Hed2>
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
      <Navbutton>
        {!isLoggedIn ? (
          <>
            <Link to="login">
              <Button2>Login</Button2>
            </Link>
          </>
        ) : (
          <Link to="logout">
            <Button2 onClick={handleLogout}>Logout</Button2>
          </Link>
        )}
      </Navbutton>
    </Nav>
  );
};

export default Navbar;

