import React, { useContext } from 'react';
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/authContext';

const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link to="/?cat=art" style={{ textDecoration: "none" }}>
            <h6>ART</h6>
          </Link>
          <Link to="/?cat=science" style={{ textDecoration: "none" }}>
            <h6>SCIENCE</h6>
          </Link>
          <Link to="/?cat=technology" style={{ textDecoration: "none" }}>
            <h6>TECHNOLOGY</h6>
          </Link>
          <Link to="/?cat=cinema" style={{ textDecoration: "none" }}>
            <h6>CINEMA</h6>
          </Link>
          <Link to="/?cat=design" style={{ textDecoration: "none" }}>
            <h6>DESIGN</h6>
          </Link>
          <Link to="/?cat=food" style={{ textDecoration: "none" }}>
            <h6>FOOD</h6>
          </Link>

          <span>{currentUser?.username}</span>
          
          {currentUser ? (
            <span onClick={logout}>Logout</span>
            ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          )}

          <span className='write'>
            <Link to="/write" style={{ textDecoration: "none" }}>Write</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;