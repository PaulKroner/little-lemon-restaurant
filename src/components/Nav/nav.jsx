import './nav.css';
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="nav">
            <div className="navbar-logo">
                <img src="../../assets/Logo.svg" alt="logo" />
            </div>
            <ul className="nav-list">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/reservation">Reservation</Link>
                <Link to="/orderonline">Order Online</Link>
                <Link to="/about">About</Link>
            </ul>
        </nav>
    );
};

export default Nav;